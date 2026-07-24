# Security checklist — Go / FastAPI production hardening

Complements `hardening-go.md`/`hardening-python.md` (lifecycle/perf traps),
`ai-bug-patterns-be.md` (SQL injection, hardcoded secrets, missing auth
middleware, upload-by-extension), and `konseputo-security` (JWT/cookie-flag/
CORS/edge already own that ground — not repeated here). This file is the
layer none of those cover: HTTP-server misconfiguration, framework-idiom
footguns, and the specific detection pattern to grep for each.

## Go (net/http)

| Rule | Insecure pattern | Detect | Fix |
|---|---|---|---|
| Server timeouts/`MaxHeaderBytes` set explicitly | `http.ListenAndServe(":8080", h)`, bare `&http.Server{}` | `ListenAndServe(`, `Server{` with no timeout fields | `ReadHeaderTimeout`/`ReadTimeout`/`WriteTimeout`/`IdleTimeout`/`MaxHeaderBytes` all set — zero-value means "no timeout" |
| Request body size bounded | `io.ReadAll(r.Body)` uncapped, `ParseMultipartForm` with no limit | `io.ReadAll(r.Body)`, `ParseMultipartForm(` | wrap with `http.MaxBytesReader(w, r.Body, max)` before parsing |
| `pprof`/`expvar` not public | blank `import _ "net/http/pprof"` on the public mux | `net/http/pprof`, `/debug/pprof`, `/debug/vars` | bind diagnostics to an internal-only listener, auth-gated |
| Forwarded-header trust explicit | `X-Forwarded-For`/`-Proto` read as client truth with no proxy-boundary check | `X-Forwarded-For`, `X-Forwarded-Proto`, `Real-IP` | accept forwarded headers only from a known proxy IP range; never derive "is HTTPS" or password-reset host from an unvalidated header |
| CSRF on cookie-auth state-changing routes | JSON endpoint mutates state, cookie-authenticated, no CSRF check | enumerate non-GET routes by auth mechanism | CSRF middleware, or bearer-token auth instead of ambient cookies. Cookie flag rules (Secure/HttpOnly/SameSite) are documented in `konseputo-security/references/auth.md` for the refresh-token cookie — apply the same flags to any other session/auth cookie this endpoint sets, that file doesn't enumerate every cookie use case |
| `html/template` not `text/template` for HTML output | `text/template` building HTML, `template.HTML(userInput)` | `text/template`, `template.HTML(` | `html/template` only; never wrap untrusted data in a "trusted" template type |
| No SSTI | `template.New(...).Parse(r.FormValue(...))` | `.Parse(` traced to request-controlled input | never parse a template built from untrusted input; sandbox aggressively if genuinely required |
| Path traversal blocked | `http.ServeFile(w, r, r.URL.Query().Get("path"))`, `http.FileServer(http.Dir("."))` on project root | `ServeFile(`, `FileServer(`, `os.Open(filepath.Join(` | allowlist file IDs mapped server-side; enforce base-dir containment after `filepath.Clean` |
| SSRF blocked on outbound fetch | `http.Get(r.URL.Query().Get("url"))` | `http.Get(`, `client.Do(` with request-derived URL | allowlist hosts, block private/link-local/metadata IP ranges, restrict scheme to http/https, cap redirects |
| Outbound client has timeout + closes body | `http.DefaultClient`/`http.Get` with no timeout, missing `defer resp.Body.Close()` | `http.Get(`, `client := &http.Client{}` no `Timeout` | configured client timeout, `defer resp.Body.Close()` immediately after error check, `io.LimitReader` on untrusted response bodies |
| Open redirect blocked | `http.Redirect(w, r, r.URL.Query().Get("next"), ...)` unvalidated | `http.Redirect(` with request-derived location | allowlist internal paths, reject absolute URLs unless explicitly allowlisted |
| Crypto-grade randomness | `math/rand` for session/token/nonce generation | `math/rand`, `rand.Seed` near auth/session code | `crypto/rand` for anything security-sensitive, never `math/rand` |
| Constant-time secret comparison | `==` comparing tokens/MACs/API keys | `==` near token/MAC compare | `crypto/subtle.ConstantTimeCompare` or `hmac.Equal` |
| Race detector in CI | shared map/slice mutated from handlers, no `-race` in CI | missing `go test -race` | run `-race` in CI for any service with concurrent shared state; data races on auth/authorization state are security bugs, not just correctness bugs |

## FastAPI (Python)

| Rule | Insecure pattern | Detect | Fix |
|---|---|---|---|
| No mass assignment | `payload = await request.json(); Model(**payload)` or `db.update(**payload)` unfiltered | `await request.json()`, `Model(**payload)` on a write endpoint | explicit Pydantic model with allowlisted fields, reject unknown fields on write endpoints |
| No excessive data exposure | `return user` where `user` is the ORM instance (leaks `password_hash`, `is_admin`, internal columns) | endpoint returns an ORM object directly, no `response_model` | separate "create input" / "db" / "public output" schemas — never reuse the DB model as the response model |
| OpenAPI/docs not exposed in prod | `/docs`, `/redoc`, `/openapi.json` reachable in production with no auth | default FastAPI docs routes still mounted | disable or auth-gate interactive docs outside dev |
| Debug/reload off in prod | `uvicorn ... --reload`, `debug=True` in a production entrypoint | `--reload`, `reload=True`, `DEBUG=True` in Docker CMD/Procfile | stable prod server config, reload only for local dev |
| Auth enforced via dependencies consistently | a new route added with no `Depends(get_current_user)`-equivalent while siblings all have one | pattern-consistency check across a router group | same auth dependency chain as sibling routes in the same router |
| JWT strict + no secrets inside | JWT decoded with algorithm/issuer/audience unchecked, or JWT payload carries sensitive data | `jwt.decode(` with missing `algorithms=`/`audience=` | validate signature, issuer, audience, expiration explicitly every time; JWT is not encrypted storage |
| Host header validated | no `TrustedHostMiddleware`, app trusts `Host` header for URL generation | absence of trusted-host middleware | `TrustedHostMiddleware` or equivalent allowlist in production |
| WebSocket endpoints authenticated | `@app.websocket(...)` accepts and processes messages with no auth check | `@app.websocket`/`websocket_endpoint` with no auth before sensitive operations | require auth during handshake, validate `Origin` for browser clients, rate-limit connections/messages |
| Request/multipart size bounded | no request or multipart size limit at app or edge | absent size-limit config | enforce at both edge (proxy) and app layer — DoS via memory/CPU exhaustion is a documented Starlette/python-multipart advisory class |

## Sources

Re-expressed from openai/skills `security-best-practices` (Apache-2.0) —
the upstream Go and FastAPI security-spec reference files, normative rule
IDs and detection patterns condensed into table form; full rule IDs and
OWASP cheat-sheet citations live in the upstream source if deeper
justification is needed.

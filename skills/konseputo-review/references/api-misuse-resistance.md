# API/config misuse-resistance — the `bug:` design axis

Not a slow-burn catalog — the "easy path" through a new API/config is
exploitable *today*, by the first caller who reaches for the obvious
option, not just by some future copy-paste. Flag as `bug:` when a new
public API, config schema, or interface exposes a choice like these.

**The pit of success**: the secure/correct usage should be the path of
least resistance — the one a rushed developer reaches for by default, not
the one they get to only by reading docs carefully.

## Six shapes

1. **Algorithm/mode selection footgun.** A parameter lets the caller pick
   a security-relevant algorithm/mode (`algorithm`, `mode`, `cipher`,
   `hash_type`). Letting untrusted input or a careless default reach a weak
   choice (JWT `alg: none`, a hash function that accepts `md5`) is the
   canonical shape. Fix: no choice — one blessed algorithm, hardcoded.
2. **Dangerous default.** A `0`/empty/`null` value has ambiguous or unsafe
   meaning (`timeout=0` → infinite or immediate? `max_attempts=0` → no
   limit or reject-all?). Ask explicitly what every degenerate input value
   means before shipping the signature.
3. **Primitive vs. semantic API.** Raw bytes/strings used for distinct
   security concepts (key, nonce, ciphertext all typed as `[]byte`) invite
   silent swaps a type system would have caught. A constant-time compare
   (`hmac.Equal`) and a naive `==` look identical in a diff but have
   different security properties — same shape, prefer the type/function
   that makes misuse a compile error, not a code-review miss.
4. **Configuration cliff.** One wrong setting is catastrophic with no
   warning: `verify_ssl: fasle` (typo silently truthy in some configs),
   `auth_required: true` + `bypass_auth_for_health_checks: true` +
   `health_check_path: "/"` (dangerous combination accepted silently).
   Validate combinations, don't just validate fields independently.
5. **Silent failure.** A security-relevant function returns `false`/empty
   instead of throwing, or a missing key short-circuits verification to
   "pass" (`if not key: return True`). Verification code must fail loud,
   never fail open.
6. **Stringly-typed security.** Permissions/roles/scopes as raw strings
   (`permissions = "read,write"` then `+= ",admin"`) invite string-building
   privilege escalation. Prefer an enum/set.

## Rationalizations to reject

| Rationalization | Why it's wrong |
|---|---|
| "It's documented" | Nobody reads docs under deadline pressure — the default must be safe |
| "Advanced users need flexibility" | Most "advanced" usage is copy-paste from the first example found |
| "It's the caller's responsibility" | The API author designed the footgun; blaming the caller doesn't remove it |
| "Nobody would actually pass that" | Assume maximum caller confusion, not maximum caller diligence |

## Severity

Critical = default or obvious usage is insecure (`verify: false` default).
High = one easy misconfiguration breaks security. Medium = unusual but
reachable misconfiguration. Low = requires deliberate misuse.

Sources: mechanisms re-expressed (no text copied) from the "pit of success"
doctrine and rationalization framing published by Trail of Bits' `sharp-edges`
skill (trailofbits/skills, CC BY-SA 4.0).

# Caching strategy

NOT day-one baseline — `baseline.md` deliberately excludes caching layers.
This is ceiling-marker / add-when-a-real-hot-read-appears territory; mark it
with a `konseputo:` trigger, don't build it speculatively. The `arch:`
cache-stampede finding (`ai-bug-patterns-be.md`, Shopify Black Friday 2019)
is the failure this prevents — extend it, don't duplicate.

1. **Default cache-aside:** miss → load from DB → populate; write → DELETE
   the key (not SET). Write-through only for low-write, staleness-intolerant
   data — it doubles write latency and still needs invalidation.
2. **Stampede:** a fixed TTL on a hot key → synchronized mass expiry → every
   request misses at once and hammers the DB. Fix: TTL + 10-20% jitter, or a
   singleflight/mutex around the miss-fetch so one request repopulates.
   A third option that beats both when the key is truly hot: probabilistic
   early recompute — the miss-probability climbs as expiry nears, so the
   refresh happens in the background while the still-valid value keeps
   serving, never as a synchronized cliff (the XFetch technique, VLDB 2015).
   Combine with negative caching (short TTL on empty/404 results) so a
   missing-row lookup doesn't repeat the same wasted query every request.
3. **Stale-cache-after-write:** DB write succeeds, the cache DELETE fails or
   races, and an in-flight reader repopulates with the pre-write value. Fix:
   double-delete (invalidate before AND after the write), or verify the DEL
   with bounded-backoff retry — never fire-and-forget an invalidation.
4. **Event-driven invalidation (outbox/CDC) over TTL-only** for anything
   correctness-sensitive; TTL is a backstop, not a strategy.
5. **Cache expensive/hot reads only** — caching a cheap or low-reuse query
   adds a failure mode for zero win.
6. **Key includes a version segment** (`user:v2:123`) — same rule as
   `konseputo-ai/references/rag.md`'s embedding cache-key; an unversioned key silently
   serves old-shape data after a logic change.

Sources: [Redis: taming the thundering herd](https://redis.io/blog/how-to-tame-the-thundering-herd-problem/) ·
[Habr: cache invalidation as a consistency problem](https://habr.com/ru/companies/otus/articles/1033194/) ·
[OneUptime: handling cache stampede in Redis, XFetch/probabilistic early expiration](https://oneuptime.com/blog/post/2026-01-21-redis-cache-stampede/view)

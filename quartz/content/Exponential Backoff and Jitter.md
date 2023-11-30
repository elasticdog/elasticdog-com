"Full Jitter"

```
sleep = random_between(0, min(cap, base * 2 ** attempt))
```

...and "Decorrelated Jitter" which is a slight optimization that also increases the maximum jitter based on the last random value:

```
sleep = min(cap, random_between(base, sleep * 3))
```

[https://github.com/aws-samples/aws-arch-backoff-simulator/blob/master/src/backoff_simulator.py](https://github.com/aws-samples/aws-arch-backoff-simulator/blob/master/src/backoff_simulator.py)

```
class ExpoBackoffFullJitter(Backoff):
    def backoff(self, n):
        v = self.expo(n)
        return random.uniform(0, v)
```

```
class ExpoBackoffDecorr(Backoff):
    def __init__(self, base, cap):
        Backoff.__init__(self, base, cap)
        self.sleep = self.base

    def backoff(self, n):
        self.sleep = min(self.cap, random.uniform(self.base, self.sleep * 3))
        return self.sleep
```

---

To follow a common client library from Google, they chose 0.5 seconds for the initial delay and the multiplier of 1.5 for each next interval backoff. Jitter is set at 50%, so 50% higher or lower than the actual retry interval. (0.5 seconds, + or - 0.25 seconds).

Adding jitter to the first request can be beneficial to prevent thundering herd problems.

Also look at circuit breakers, [token buckets](https://en.m.wikipedia.org/wiki/Token_bucket), and  [TCP slow start](https://en.wikipedia.org/wiki/TCP_congestion_control#Slow_start) related to congestion control (via https://www.schneems.com/2020/07/08/a-fast-car-needs-good-brakes-how-we-added-client-rate-throttling-to-the-platform-api-gem/). With these though, what level of failure do you set things to? Is there an optimal percentage where you'd trigger a circuit breaker, or would it depend on the whole environment?

Some people advocate that anything more than the single retry might be wasteful, but that seems extreme to me.

The client should also account for explicit server/load balancer push-back like HTTP 429 errors (too many requests).
## Further Reading

- [https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/)
- The Synchronization of Periodic Routing Messages by Sally Floyd and Van Jacobson [https://ee.lbl.gov/papers/sync_94.pdf](https://ee.lbl.gov/papers/sync_94.pdf)
- [https://cloud.google.com/storage/docs/retry-strategy#exponential-backoff](https://cloud.google.com/storage/docs/retry-strategy#exponential-backoff)
- [Fixing retries with token buckets and circuit breakers](https://brooker.co.za/blog/2022/02/28/retries.html)
- Google SRE book discusses this as well.
- [Backpressure](https://www.tedinski.com/2019/03/05/backpressure.html) by [[Ted Kaminski]]
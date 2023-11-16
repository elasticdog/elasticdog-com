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
## Further Reading

- [https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/](https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/)
- The Synchronization of Periodic Routing Messages by Sally Floyd and Van Jacobson [https://ee.lbl.gov/papers/sync_94.pdf](https://ee.lbl.gov/papers/sync_94.pdf)
- [https://cloud.google.com/storage/docs/retry-strategy#exponential-backoff](https://cloud.google.com/storage/docs/retry-strategy#exponential-backoff)
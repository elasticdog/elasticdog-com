---
tags: sapling
---

My philosophy for licensing personal software projects is to **allow for the widest adoption with the least amount of friction** for downstream users.

- Permissive > Copyleft
- Sharing knowledge takes priority over personal profit
- Attribution is appreciated, but shouldn't be required
- In practice, legal enforcement of licensing terms is unlikely and often impractical

Based on the above, I default to using the [Zero Clause BSD License](https://opensource.org/license/0bsd) (0BSD) as the most simple approximation of _public domain_ that's legally viable. Directly releasing software into the public domain is problematic, as it's a [labyrinthine mess](https://guides.library.cornell.edu/copyright/publicdomain) in the United States and an inconsistent concept globally.

Actual compliance with license obligations is far more complex than most developers anticipate, particularly in modern ecosystems where projects can incorporate hundreds or even thousands of transitive dependencies. This complexity has spawned entire industries specializing in license compliance tools, policy enforcement, and generating comprehensive audit reports. The non-trivial effort required for proper license management just diverts time and resources away from improving your actual project. Using 0BSD can help bypass all of that.

## Comparisons to Other Licenses

- MIT/BSD/ISC: Good, but require attribution
- GPL: Compatibility issues
- CC0: [Patent concerns](https://news.ycombinator.com/item?id=39807310)
- MIT-0: Less universal acceptance (not on [Google's "unencumbered" list](https://opensource.google/documentation/reference/thirdparty/licenses))
- WTFPL: Legally imprecise, informal language
- Unlicense: Copyright can't be waived in all jurisdictions

## Commercial Software

I don't have as clear of a stance on what's the best approach in the world of commercial software. If you want to make money from the software you write, what are good options?

There's so much disagreement and arguing over license terms and rights, most of which have never actually been challenged in court. For a taste of the mess, just read through [these](https://news.ycombinator.com/item?id=41227172) [two](https://news.ycombinator.com/item?id=23966778) Hacker News threads regarding the GNU Affero General Public License (AGPL). And yet another [HN thread](https://news.ycombinator.com/item?id=41256222) about CockroachDB changing licenses after previously trying one of the middle ground options.

I need to think through ["Fair Source"](https://fair.io/) and it's implications more deeply. Delayed Open Source Publication (DOSP) is a similar term. I'm not 100% convinced that it would be the direction I'd choose starting a software business now. I do think some of the pushback comes from projects that start as Open Source and later switch to being less open. Would there be as much of a feeling of betrayal if a company started as Fair Source from the beginning?

Note, I was directly involved in the internal discussions surrounding the [Elastic License](https://www.elastic.co/licensing/elastic-license) and am very familiar with the motivations and eventual impact. This GitHub blog post has a decent summary on why many [single source projects](https://github.blog/open-source/whats-up-with-these-new-not-open-source-licenses/) have decided to tighten up their licensing.

Related to

- [[Intellectual Property]]
- [Contributor License Agreement (CLA)](https://en.wikipedia.org/wiki/Contributor_License_Agreement)
- [Developer Certificate of Origin (DCO)](https://developercertificate.org/)
- Trademark protections
- Government Funded Research
- [All the Music](http://allthemusic.info/faqs/)
- DRM
- Patent trolls
- Sharing Knowledge
- Open Source
- [[Overton Window]]
- Legal vs Ethical ([[Heinz Dilemma]])
- AI model training
- <https://copyfree.org/policy/why>

Inspired by a BurntSushi's take and further discussion on HN <https://news.ycombinator.com/item?id=24939162>

Explicitly allow AI training on my data is also an advocacy thing.

---

## See Also

- [[Intellectual Property]]

## Further Reading

- [Why Public Domain](https://github.com/nothings/stb/blob/master/docs/why_public_domain.md) by [Sean Barrett a.k.a. @nothings](https://nothings.org/)
- [Software licensing and my opposition to copyleft](https://github.com/BurntSushi/notes/blob/master/2020-10-29_licensing-and-copyleft.md) (and [HN discussion](https://news.ycombinator.com/item?id=24939162)) by [Andrew Gallant a.k.a @burntsushi](https://blog.burntsushi.net/about/)

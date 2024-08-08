---
tags:
  - sapling
---
My philosophy for licensing personal software projects is to **allow for the widest adoption with the least amount of hassle** for downstream users.

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

Need to think through ["Fair Source"](https://fair.io/) and it's implications. I'm not 100% convinced that it would be the direction I'd choose starting a software business now. I do think some of the pushback comes from projects that start as Open Source and later switch to being less open. Would there be as much of a feeling of betrayal if a company started as Fair Source from the beginning?

Note, I was directly involved in the internal discussions surrounding the [Elastic License](https://www.elastic.co/licensing/elastic-license) and am very familiar with the motivations and eventual impact.

Related to
- [[Intellectual Property]]
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

Inspired by a burntsushi's take and further discussion on HN https://news.ycombinator.com/item?id=24939162

Explicitly allow AI training on my data is also an advocacy thing.
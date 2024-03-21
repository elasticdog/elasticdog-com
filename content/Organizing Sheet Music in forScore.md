---
tags:
  - sapling
---
[forScore](https://forscore.co/), a widely used application for cataloging and viewing sheet music, offers a sophisticated yet flexible way to manage your personal library. However, the app's extensive metadata fields can be overwhelming without a clear strategy; it can take some experimentation to sort out how to navigate effectively. After exploring various approaches, I've established a set of organizational guidelines that have streamlined the way I categorize and access my sheet music.
## Libraries

A library is the highest level of organization in forScore. You're either viewing "All Libraries" or a subset of scores. Segmentation at this level is purely for convenience, and an individual piece can be included in multiple libraries.

To help reduce noise and facilitate quick access during focused practice sessions, I separate out reference material like scales, arpeggios, and method exercises from musical pieces. My two libraries are currently:

- **Music Theory** 
- **Solo Piano**

If I played multiple instruments or was a member of a band/choir/orchestra, I would have a dedicated library for each context.

## Bookmarks

Bookmarks in forScore, applied _after_ importing a PDF file for a score, are pivotal in my organizational strategy. They allow me to cluster related pieces together, reflecting their compilation in the physical world. Thinking ahead about grouping scores, whether they stand alone or belong to a series, shapes the structure of my digital documents.

> [!tip]
> You can use forScore's [rearrange](https://forscore.co/documentation/rearrange/) feature to make structural changes to your documents by merging several PDF files together or by splitting one into individual parts, even after they've been imported.

The dual advantage of using bookmarks lies in preserving the natural groupings of pieces, as they are often found in physical collections, while also enhancing digital navigation. This approach not only preserves the contextual relationships among related scores but also facilitates the discovery of individual pieces by generating "virtual items" through bookmarks, in turn making the library more intuitive.

For example, to catalog Bach's ["Cello Suite No. 1 in G major"](https://en.wikipedia.org/wiki/Cello_Suites_(Bach)), I would ensure that all six movements are contained within a single document for holistic access. Then, each movement—Prelude, Allemande, and so forth—would be individually bookmarked, making it trivial to jump to a specific section as needed.
## Score Properties

Score properties within forScore serve as metadata fields tailored to each document or bookmark, encompassing a variety of free-form text entries. These fields support multiple values, separated by commas, offering a flexible space for detailed information. However, the open-ended nature of these entries can sometimes make it challenging to decide how best to categorize less obvious data. Below, I outline my strategy for effectively organizing this information.

- **Title**
  - Use just the piece's title, without any subtitle, for clarity and ease of search.
  - When housing multiple versions of the same piece, I distinguish between them by appending a descriptive label in square brackets at the end of the title, such as "\[Easy]". The version without any additional label is considered the default or primary version that I would typically refer to first.

- **Composers**
  - For classical pieces, input just the composer(s) as traditionally expected.
  - For modern popular music, consider listing the primary performing artist or band instead of the actual songwriter, if that's whom you'd typically search for. For instance, for "What a Wonderful World", use "Louis Armstrong" instead of the songwriters "George Douglas" and "George David Weiss".
  - If the document is a compilation book containing pieces from multiple composers, use "Compilation" to reflect the diverse authorship.

- **Genres**
  - I rely on the upstream genre classifications provided by default through forScore's [content provider](https://forscore.co/content-providers/) integrations. For pieces outside of the supported content providers, I ensure the field is filled but do not adhere to a strict classification system. This casual method suits my search habits, as I typically do not rely heavily on genre for locating music in my library.

- **Tags**
  - This field serves as the catch-all for additional information that lacks a designated place elsewhere in the metadata. Notable entries include the arranger's name (particularly for arrangers I follow), the publication source (such as Faber,  Henle, IMSLP, Musicnotes, etc.), and the title of any larger series the piece is part of, like "Adult Piano Adventures". I also tag the origin of pieces from specific video games or movie series, ensuring all relevant and miscellaneous details are captured.

- **Labels**
  - I'm not currently using this field.

- **Reference**
  - In this field, I employ the [classical catalog numbering systems ](https://en.wikipedia.org/wiki/Catalogues_of_classical_compositions) to reference specific pieces, aligning with established conventions for classical compositions. For example, I use "BWV 1007" to denote Bach's _Cello Suite No. 1 in G major_.

- **Rating**
  - I use this field to indicate a piece's "performance readiness", a subjective measure of how prepared I feel to perform the piece confidently. A new piece starts at _1 star_, signifying the initial learning phase. As I practice and polish the piece, the rating increases:
   - _2 stars_ might indicate basic familiarity, where I can play through the piece with some hesitations.
   - _3 stars_ could represent a moderate level of comfort, with fewer mistakes and more consistent tempo.
   - _4 stars_ would imply a high level of proficiency, where I can play expressively and with only minor errors.
   - _5 stars_ denotes full polish and performance readiness, meaning I can perform the piece confidently and with musicality.

- **Difficulty**
  - This field isn't free-form but rather offers three distinct ratings represented by 1, 2, or 3 circles. Given the subjective nature of difficulty levels, which can vary widely depending on systems like RCM, ABRSM, or Henle, I categorize pieces into broad skill levels: beginner (1 circle), intermediate (2 circles), and advanced (3 circles). This simplification helps me quickly gauge a piece's relative complexity at a glance, even within the subjective landscape of musical difficulty.

- **Time**
  - The duration of a piece in minutes and seconds. I try to find reference performances of each piece and attach the audio to them and then just copy the measured length of a playthrough.

- **Key**
  - The [key signature](https://en.wikipedia.org/wiki/Key_signature) that the piece is written in.
## Setlists

event in time, order matters
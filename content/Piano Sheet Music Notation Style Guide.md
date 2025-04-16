---
tags: seed
---

Focusing _solely on piano music_, not choral or orchestral scores, which have differing concerns.

## Staff Sizes

Default to 7 mm.

Minimum of 6.5mm, but try 6.7 mm first, if you need to squeeze things in.

It's less frequent to see sizes outside of that 6.5mm to 7.0mm range, but you may run across 6 mm to 7.4 mm sizes in the wild.

Note that LilyPond sets the staff sizes in points (defaulting to 20), and one point is equal to 2540/7227 mm.

```lilypond
#(set-global-staff-size 20)
```

| Points   | mm        | Staff Space (mm) |
| -------- | --------- | ---------------- |
| 21.06    | 7.4       | 1.850            |
| _**20**_ | _**7.0**_ | 1.750            |
| 19.06    | 6.7       | 1.675            |
| 18.5     | 6.5       | 1.625            |
| 18.41    | 6.4       | 1.600            |
| 17.07    | 6.0       | 1.500            |

In MuseScore, this is set by the staff space configuration under the Page Settings, which would be multiplied by four to reach the total size.

For my purposes of viewing letter-sized pages on a 13" iPad, the ideal range is 7.0 mm to 6.4 mm, which effectively looks like 6.7 mm to 6.0 mm.

## Bars per System

This...is...tricky! Try a minimum of 4, as a starting point.

Too loose and it can create page turn problems, inhibits smooth reading by forcing larger eye movements, makes it difficult to understand phrasing and overall structure.

Too dense and rhythm becomes harder to read, accidentals severely impact note spacing, etc..

Needs to have balance, but keep in mind that it can also be genre-specific. Musical theater and lead sheets tend to use 4 bars/system even if that means very wide spacing.

## Staves per Page

Minimum of 6, maximum of 12.

That means from 3 to 6 systems when using a grand staff. Spread them out evenly to take up the available vertical space.

```lilypond
ragged-last-bottom = ##f
```

In LilyPond, you can also force a specific page count if you want to still rely on its optimal breaking algorithm and not need manual system/page breaks.

```lilypond
\paper {
  page-count = #2
}
```

## Paper Margins

Start with 15 mm all around.

If you need to fit more onto a page, try 13 mm top/bottom margins, or down to 10 mm at the most. Adjusting top/bottom margins is much less sensitive than left/right margins, which should probably not be below 15 mm. Unless...

I like using even smaller margins for display on an iPad. LilyPond's default margins from before v2.25.15 were well suited for tablet display:

```lilypond
\paper {
  top-margin = 5\mm
  bottom-margin = 6\mm
  top-system-spacing.basic-distance = 1
  top-markup-spacing.basic-distance = 0
  left-margin = 10\mm
  right-margin = 10\mm
  inner-margin = 10\mm
  outer-margin = 20\mm
  binding-offset = 0\mm
}
```

## Text Alignment

- Tempo markings should be flush left to the time signature.
- Lyrics should be on a horizontal line for the entire system.
- Dynamics applying to both staves should be vertically centered in the grand staff unless nudged, but still on a horizontal line for the entire system.
- Dynamics and expression text should be aligned to the same baseline.
- Composer and lyricist credits should be exactly aligned vertically and spaced evenly from horizontal margins respectively (composer on right, lyricist on left).

## Further Reading

- [Music Notation Style Guide](https://blogs.iu.edu/jsomcomposition/music-notation-style-guide/) from the Indiana University Composition Department
- [Standard Music Notation Practice](https://mpa.org/wp-content/uploads/2018/06/standard-practice-engraving.pdf) from the MPA
- [Essay on Automated Music Engraving](https://lilypond.org/doc/v2.24/Documentation/essay.pdf) from the LilyPond developers

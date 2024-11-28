---
tags: seed
---

Download an mp3 with an embedded thumbnail image:

```
yt-dlp -x --audio-format mp3 --embed-thumbnail 'https://www.youtube.com/watch?v=-n4BR0vUB80'
```

Trim the beginning:

```
ffmpeg -i original.mp3 -ss 6s -c copy -map_metadata 0 trimmed.mp3
```

Trim the end:

```
ffmpeg -i original.mp3 -to 1:27 -c copy trimmed.mp3
```

Copy the thumbnail back if ffmpeg doesn't preserve it:

```
ffmpeg -i original.mp3 -an -vcodec copy cover.jpg
ffmpeg -i trimmed.mp3 -i cover.jpg -map 0:0 -map 1:0 -c copy -id3v2_version 3 -metadata:s:v title="Album cover" -metadata:s:v comment="Cover (Front)" updated_target.mp3
```

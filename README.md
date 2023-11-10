# ElasticDog.com

The source of my personal website.

## File Structure

### `quartz/`

A copy of the static-site generator
[Quartz](https://github.com/jackyzha0/quartz), vendored and managed using
[git-subrepo](https://github.com/ingydotnet/git-subrepo).

### `quartz/content/`

An [Obsidian](https://obsidian.md/) vault, where the source
[Markdown](https://en.wikipedia.org/wiki/Markdown) files live.

### `quartz/public/`

The build output directory for Quartz, _untracked_ by Git. The website files are
automatically generated and deployed by
[Cloudflare Pages](https://pages.cloudflare.com/).

To generate and serve the website locally, run the following commands:

```sh
cd quartz/
npm install
npx quartz build --serve
```

Then open a web browser and visit <http://localhost:8080/>

ElasticDog has been written and produced by [[ABS|Aaron Bull Schaefer]] since [2003](https://web.archive.org/web/20031213093626/http://elasticdog.com/about/). 

## Tools and Workflow

Notes are written locally as [Markdown](https://en.wikipedia.org/wiki/Markdown) files using [Obsidian](https://obsidian.md/), and are automatically backed up into version control using the [obsdian-git plugin](https://github.com/denolehov/obsidian-git).  When any changes are pushed to [GitHub](https://github.com/elasticdog/elasticdog-com), an automated process is triggered to convert the Markdown files into HTML using the static-site generator [Quartz](https://quartz.jzhao.xyz/). That generated output is then deployed into production and hosted by [Cloudflare Pages](https://pages.cloudflare.com/).

## Typography

* _Header_ text is set in the [Fira Sans Condensed](https://fonts.google.com/specimen/Fira+Sans+Condensed) font.
* _Body_ text is set in the [Literata](https://fonts.google.com/specimen/Literata) font.
* _Source code_ is set in the [Inconsolata](https://fonts.google.com/specimen/Inconsolata) font. 
* _Mathematical notation_ is typeset and rendered via [KaTeX](https://katex.org/).

## Color Scheme

The light and dark mode themes are currently using the upstream default colors from [Quartz](https://quartz.jzhao.xyz/). Source code syntax highlighting is handled via [Rehype Pretty Code](https://rehype-pretty-code.netlify.app/), and uses the _GitHub Light_ and _GitHub Dark_ themes converted from the [Shiki](https://github.com/shikijs/shiki) project.
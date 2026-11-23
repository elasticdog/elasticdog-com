# Quartz v5

> “[One] who works with the door open gets all kinds of interruptions, but [they] also occasionally gets clues as to what the world is and what might be important.” — Richard Hamming

Quartz is a set of tools that helps you publish your [digital garden](https://jzhao.xyz/posts/networked-thought) and notes as a website for free.

🔗 Read the documentation and get started: https://quartz.jzhao.xyz/

[Join the Discord Community](https://discord.gg/cRFFHYye7t)

## Updating ElasticDog from upstream Quartz

The local `v5` bookmark tracks this site's production branch on `origin`.
Fetch both remotes and list the upstream commits the site hasn't incorporated yet.

```sh
jj git fetch --remote origin --branch v5
jj git fetch --remote upstream --branch v5
jj log -r 'v5..v5@upstream'
```

If the log is empty, the site is up to date. Otherwise, merge upstream into the
local site history and check for conflicts.

```sh
jj new v5 v5@upstream -m "Merge upstream Quartz v5"
jj status
```

Resolve any conflicts in the merge change, then use the Node version in
[`.node-version`](.node-version) to install the locked npm dependencies, check
the plugin configuration, and run the same build as Cloudflare Pages.

```sh
npm ci && npx quartz plugin doctor && CI=true sh scripts/build-pages.sh
```

Once the build passes and you're ready to deploy, advance the production
bookmark to the tested merge and push it. Start a fresh change for the next edit.

```sh
jj bookmark advance v5 --to @
jj git push --remote origin --bookmark v5
jj new v5
```

## Sponsors

<p align="center">
  <a href="https://github.com/sponsors/jackyzha0">
    <img src="https://cdn.jsdelivr.net/gh/jackyzha0/jackyzha0/sponsorkit/sponsors.svg" />
  </a>
</p>

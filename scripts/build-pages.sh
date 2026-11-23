#!/bin/sh
set -eu

# Quartz uses the content's Git history to determine modification dates.
if [ "$(git rev-parse --is-shallow-repository)" = true ]; then
  git fetch --unshallow
fi

npx quartz plugin install
npx quartz build
cp scripts/_redirects public/_redirects

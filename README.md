# Fuse issue demonstration

## Replicate

- Get a copy of this repo
- `yarn install` or `npm i`
- `node fuse.js`

## About

Babel transpilation is not working in this React project with fuse-box. This repo demonstrates a couple of issues:

1. I'm importing sass files from `./` inside the React component, but it doesn't get it. It's resolving `./` to the root of the project, but I want the current directory. `Error: unknown: ENOENT: no such file or directory, open '/my/path/fuse-issue/HomePage.scss'`

2. It's not transpiling the React components into ES5, in either client or server bundles, thus the build fails.

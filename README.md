# memori-api-client

[![npm version](https://img.shields.io/github/package-json/v/nzambello/memori-api-client)](https://www.npmjs.com/package/@memoriai/memori-api-client)
![Tests](https://github.com/nzambello/memori-api-client/workflows/CI/badge.svg?branch=main)
![TypeScript Support](https://img.shields.io/badge/TypeScript-Support-blue)

TypeScript client to integrate with [Memori](https://memori.ai) API.

## Installation

```bash
yarn add @memoriai/memori-api-client
```

```bash
npm install @memoriai/memori-api-client
```

## Usage

```ts
import memoriApiClient from '@memoriai/memori-api-client';

const memoriAPI = memoriApiClient('https://backend.memori.ai');

(async () => {
  const { memori, ...response } = await client.backend.getMemoriById(
    '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
    'be2e4a44-890b-483b-a26a-f6e122f36e2b'
  );
})();
```

For the specification of the APIs, see the typings or the documentation from the dashboard if you are allowed to see it.

## Development

To run TSDX, use:

```bash
npm start # or yarn start
```

This builds to `/dist` and runs the project in watch mode so any edits you save inside `src` causes a rebuild to `/dist`.

To do a one-off build, use `npm run build` or `yarn build`.

To run tests, use `npm test` or `yarn test`.

### Formatting and linting

Code quality is set up with `prettier`, `husky`, and `lint-staged`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`. Adjust according to your needs.

### Continuous Integration

#### GitHub Actions

Two actions are added by default:

- `main` which installs deps w/ cache, lints, tests, and builds on all pushes against a Node and OS matrix
- `size` which comments cost comparison of your library on every pull request using [`size-limit`](https://github.com/ai/size-limit)

### Optimizations

Please see the main `tsdx` [optimizations docs](https://github.com/palmerhq/tsdx#optimizations). In particular, know that you can take advantage of development-only optimizations:

```js
// ./types/index.d.ts
declare var __DEV__: boolean;

// inside your code...
if (__DEV__) {
  console.log('foo');
}
```

You can also choose to install and use [invariant](https://github.com/palmerhq/tsdx#invariant) and [warning](https://github.com/palmerhq/tsdx#warning) functions.

### Module Formats

CJS, ESModules, and UMD module formats are supported.

The appropriate paths are configured in `package.json` and `dist/index.js` accordingly. Please report if any issues are found.

### Commitlint

We use [commmitlint](https://commitlint.js.org/) for commit message validation based on [Conventional Commits](https://www.conventionalcommits.org/en/).

### Release

Changelog and release management with [release-it](https://github.com/release-it/release-it), using [convential changelog](https://github.com/release-it/conventional-changelog).

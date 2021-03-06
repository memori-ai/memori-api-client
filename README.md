# memori-api-client

[![npm version](https://img.shields.io/github/package-json/v/memori-ai/memori-api-client)](https://www.npmjs.com/package/@memori.ai/memori-api-client)
![Tests](https://github.com/memori-ai/memori-api-client/workflows/CI/badge.svg?branch=main)
![TypeScript Support](https://img.shields.io/badge/TypeScript-Support-blue)

TypeScript client to integrate with [Memori](https://memori.ai) API.

## Installation

```bash
yarn add @memori.ai/memori-api-client
```

```bash
npm install @memori.ai/memori-api-client
```

## Usage

Every method has JSDoc annotations with usage and description and typings information.

See examples for [Node (TypeScript)](https://github.com/memori-ai/examples/blob/main/ts-sdk/index.ts) and [React](https://github.com/memori-ai/examples/blob/main/react-ts-with-api-client/src/App.tsx).

```ts
import memoriApiClient from '@memori.ai/memori-api-client';

const memori = memoriApiClient('https://backend.memori.ai');

(async () => {
  const { sessionID, currentState, ...response } = await memori.initSession(
    '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
  );

  const {
    currentState: dialogState,
    ...resp
  } = await memori.postTextEnteredEvent(sessionID, 'Ciao, Memori!');
})();
```

For the specification of the APIs, see the typings or the documentation from the dashboard if you are allowed to see it.

### Constants

```ts
import memoriApiClient from '@memori.ai/memori-api-client';

const memori = memoriApiClient('https://backend.memori.ai');

memori.constants.allowedMediaTypes; // list of allowed media types in asset upload
memori.constants.anonTag; // tag for anonymous users
```

### Asset

There is a helper method parsing media urls from the DB, handling different cases

```ts
const memori = memoriApiClient('https://backend.memori.ai');

memori.asset.getResourceUrl({
  type: 'avatar',
  resourceURI: '768b9654-e781-4c3c-81fa-ae1529d1bfbe.png',
  mediaType: 'image/png',
  sessionId: 'be2e4a44-890b-483b-a26a-f6e122f36e2b',
});
```

### TTS

> Experimental

Bundled with this client there is a TTS utility that can be used to synthesize text to speech.

```ts
const memori = memoriApiClient('https://backend.memori.ai');

// Needs Azure Speech API key
// See https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/quickstarts/setup-platform?pivots=programming-language-javascript
// Second parameter is for debug mode
const speechSdk = memori.speech(AZURE_COGNITIVE_SERVICES_TTS_KEY, true);

// Requires the language code of the text to be spoken
// And the voice type (female or male)
const speech = speechSdk('it', 'FEMALE');

speech.speak('Ciao, Memori!', () => {
  console.log('spoken');
});

speech.isSpeaking();

speech.stopSpeaking();
```

### STT

> Experimental

There is also a speech recognition utility.

```ts
// Same as for the TTS
const speech = speechSdk('it', 'FEMALE');

speech.recognize(transcript => {
  console.log('Recognized ', transcript);
});

speech.isRecognizing();

speech.stopRecognizing();
```

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

You can run prettier with `npm format` or `yarn format`.
You can run linter with `npm lint` or `yarn lint`.
You can run type checking with `npm typecheck` or `yarn typecheck`.

### Jest

Jest tests are set up to run with `npm test` or `yarn test`.

### Bundle Analysis

[`size-limit`](https://github.com/ai/size-limit) is set up to calculate the real cost of your library with `npm run size` and visualize the bundle with `npm run analyze`.

### Rollup

TSDX uses [Rollup](https://rollupjs.org) as a bundler and generates multiple rollup configs for various module formats and build settings. See [Optimizations](#optimizations) for details.

### TypeScript

`tsconfig.json` is set up to interpret `dom` and `esnext` types, as well as `react` for `jsx`.
You can run type checking with `npm typecheck` or `yarn typecheck`.

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

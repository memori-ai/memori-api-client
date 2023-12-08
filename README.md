# memori-api-client

[![npm version](https://img.shields.io/github/package-json/v/memori-ai/memori-api-client)](https://www.npmjs.com/package/@memori.ai/memori-api-client)
![Tests](https://github.com/memori-ai/memori-api-client/workflows/CI/badge.svg?branch=main)
![TypeScript Support](https://img.shields.io/badge/TypeScript-Support-blue)

TypeScript client to integrate with [Memori](https://memori.ai) API.

Platforms:

- [MemoryTwin](https://app.memorytwin.com/en): consumer / creator platform
- [TwinCreator](https://app.twincreator.com/en): developer-oriented platform

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
  const { sessionID, currentState, ...response } = await memori.initSession({
    memoriID: '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
  });

  const {
    currentState: dialogState,
    ...resp
  } = await memori.postTextEnteredEvent({
    sessionId: sessionID,
    text: 'Ciao, Memori!',
  });
})();
```

For the specification of the APIs, see the typings or the documentation from the dashboard if you are allowed to see it.

### Constants

```ts
memori.constants.allowedMediaTypes; // list of allowed media types in asset upload
memori.constants.anonTag; // tag for anonymous users
```

Endpoint passed during initialization:

```ts
memori.constants.HOSTNAME; // host name of the API, parameter of the constructor
memori.constants.BACKEND_URL;
memori.constants.ENGINE_URL;
```

### Asset

There is a helper method parsing media urls from the DB, handling different cases

```ts
memori.asset.getResourceUrl({
  type: 'avatar',
  resourceURI: '768b9654-e781-4c3c-81fa-ae1529d1bfbe.png',
  sessionID: 'be2e4a44-890b-483b-a26a-f6e122f36e2b',
  baseURL: 'https://app.twincreator.com',
});
```

## See also

- [memori-react](https://github.com/memori-ai/memori-react) - React library for Memori, uses this library
- [memori-webcomponent](https://github.com/memori-ai/memori-webcomponent) - Web component for Memori, uses this library



## [6.8.0](https://github.com/memori-ai/memori-api-client/compare/v6.7.9...v6.8.0) (2025-07-22)


### Features

* enhance pwlUserLogin to support optional redirect URL ([ec31e18](https://github.com/memori-ai/memori-api-client/commit/ec31e189df218fbe96ffdd4ba8206a4f92b1d4a7))

## [6.7.9](https://github.com/memori-ai/memori-api-client/compare/v6.7.8...v6.7.9) (2025-07-18)


### Bug Fixes

* jwt login method ([bb71e01](https://github.com/memori-ai/memori-api-client/commit/bb71e01e1c05e99642cfb8b539e5cb09e2cefda7))

## [6.7.8](https://github.com/memori-ai/memori-api-client/compare/v6.7.7...v6.7.8) (2025-07-17)


### Bug Fixes

* make dateFrom and dateTo parameters optional in getUserChatLogsByToken function ([b38635b](https://github.com/memori-ai/memori-api-client/commit/b38635b63e1c2ce12ab0631a95020f48618a5260))

## [6.7.7](https://github.com/memori-ai/memori-api-client/compare/v6.7.6...v6.7.7) (2025-07-17)


### Bug Fixes

* update API endpoint for retrieving user chat logs to remove versioning ([78ffe3f](https://github.com/memori-ai/memori-api-client/commit/78ffe3fb6e2963b82d5480ececb0e32caad66566))

## [6.7.6](https://github.com/memori-ai/memori-api-client/compare/v6.7.5...v6.7.6) (2025-07-17)


### Features

* add getUserChatLogsByToken function to retrieve user chat logs based on login token ([648efca](https://github.com/memori-ai/memori-api-client/commit/648efca67911c6b12cbb02e751a99b6703e0b197))

## [6.7.5](https://github.com/memori-ai/memori-api-client/compare/v6.7.4...v6.7.5) (2025-07-16)


### Changes

* rename date filters in ChatLogFilters and add new filter property ([a283540](https://github.com/memori-ai/memori-api-client/commit/a283540c303caf503293d01cfd7229439aee85b5))

## [6.7.4](https://github.com/memori-ai/memori-api-client/compare/v6.7.3...v6.7.4) (2025-07-15)


### Maintenance

* remove engine endpoint replace fallback ([16bf2b7](https://github.com/memori-ai/memori-api-client/commit/16bf2b7f5e443d20a29a3620854e972db723f07b))

## [6.7.3](https://github.com/memori-ai/memori-api-client/compare/v6.7.2...v6.7.3) (2025-07-14)


### Features

* add MemoriFilters type and related API functions for filtered Memori retrieval ([f5061da](https://github.com/memori-ai/memori-api-client/commit/f5061daad4ae2f3a1162f869124a00fffd6c05e4))

## [6.7.2](https://github.com/memori-ai/memori-api-client/compare/v6.7.1...v6.7.2) (2025-07-08)


### Features

* add MemoriFilters type and related API functions for filtered Memori retrieval ([ad3468c](https://github.com/memori-ai/memori-api-client/commit/ad3468c9edb6358a57eb795587c9d50c7b88141e))

## [6.7.1](https://github.com/memori-ai/memori-api-client/compare/v6.7.0...v6.7.1) (2025-07-04)


### Maintenance

* get tenant api ([7fecf8e](https://github.com/memori-ai/memori-api-client/commit/7fecf8ef87248d1d9b1752228d514eedbe95cb94))

## [6.7.0](https://github.com/memori-ai/memori-api-client/compare/v6.6.2...v6.7.0) (2025-07-04)


### Features

* new chatlog paged filters ([d3e2891](https://github.com/memori-ai/memori-api-client/commit/d3e2891d708b9bfb17cf9b8fdabe5e9f9d7d6358))

## [6.6.2](https://github.com/memori-ai/memori-api-client/compare/v6.6.1...v6.6.2) (2025-07-03)


### Changes

* update getTenant and getTenantConfig APIs to include authToken parameter ([dffaebb](https://github.com/memori-ai/memori-api-client/commit/dffaebbb4d8f31d9fad0bebd55c3fc81c9b621d8))

## [6.6.1](https://github.com/memori-ai/memori-api-client/compare/v6.5.9...v6.6.1) (2025-07-03)


### Features

* add perplexityAPIKey to Tenant type for enhanced configuration options ([1241bd2](https://github.com/memori-ai/memori-api-client/commit/1241bd20ec065791ceee47fe874bd001bfe02296))

## [6.5.9](https://github.com/memori-ai/memori-api-client/compare/v6.5.8...v6.5.9) (2025-06-26)


### Features

* add getChatLogsPaged API function for retrieving paginated chat logs within a date range ([ec60c57](https://github.com/memori-ai/memori-api-client/commit/ec60c575c71fa065fb8247a833d94b8b38aa9fd0))

## [6.5.8](https://github.com/memori-ai/memori-api-client/compare/v6.5.7...v6.5.8) (2025-06-25)


### Features

* implement trustedApplication API for managing trusted applications ([7115f9f](https://github.com/memori-ai/memori-api-client/commit/7115f9ff576153144ee5ed4ef17900f4844dbce7))

## [6.5.7](https://github.com/memori-ai/memori-api-client/compare/v6.5.6...v6.5.7) (2025-06-23)


### Features

* add userPwl API integration to backend for enhanced user management ([c55af83](https://github.com/memori-ai/memori-api-client/commit/c55af83f626ff4c6e41c2056333ce03b6a8b423b))

## [6.5.6](https://github.com/memori-ai/memori-api-client/compare/v6.5.5...v6.5.6) (2025-06-23)


### Features

* implement user management API functions including login, logout and user details retrieval ([58a6b44](https://github.com/memori-ai/memori-api-client/commit/58a6b44f039fac65e0a45d80399519bce3566ea6))


### Changes

* rename user management API functions to include 'pwl' prefix for clarity ([1b49f3f](https://github.com/memori-ai/memori-api-client/commit/1b49f3f8e413731f362f7cac751dca270df5a7a5))

## [6.5.5](https://github.com/memori-ai/memori-api-client/compare/v6.5.4...v6.5.5) (2025-06-11)


### Features

* add uploadAssetUnlogged function to handle file uploads for unlogged users ([37f75f3](https://github.com/memori-ai/memori-api-client/commit/37f75f34deb4c47378dd087a2c19e721622cc4c8))

## [6.5.4](https://github.com/memori-ai/memori-api-client/compare/v6.5.3...v6.5.4) (2025-06-10)


### Features

* add continueFromChatLogID field to OpenSession type ([e1e3ab8](https://github.com/memori-ai/memori-api-client/commit/e1e3ab83a2b0b7773230c6fe4f4c71a4ff4e70fc))

## [6.5.3](https://github.com/memori-ai/memori-api-client/compare/v6.5.2...v6.5.3) (2025-06-09)


### Features

* add userName field to Notification type ([689c68b](https://github.com/memori-ai/memori-api-client/commit/689c68b649c954744c14283032016b95be7705fb))


### Bug Fixes

* update severity option in Notification type from 'CHATLOG' to 'CHANGELOG' ([0d3c4fd](https://github.com/memori-ai/memori-api-client/commit/0d3c4fd9862375c120f2d20b26ebf1e9ffdf4f1b))

## [6.5.2](https://github.com/memori-ai/memori-api-client/compare/v6.5.1...v6.5.2) (2025-06-09)


### Features

* add 'CHATLOG' severity option to Notification type ([85ba375](https://github.com/memori-ai/memori-api-client/commit/85ba375fcc19dd9680c2f4ef2c4564a3c2f13844))
* add validFrom and validTo fields to Notification type ([57f2ad9](https://github.com/memori-ai/memori-api-client/commit/57f2ad932ffca15e5b24fbd51da8fb0c3066d62c))

## [6.5.1](https://github.com/memori-ai/memori-api-client/compare/v6.5.0...v6.5.1) (2025-05-27)


### Features

* extend Notification type with new fields for type, tenantID, and userID ([c16bf78](https://github.com/memori-ai/memori-api-client/commit/c16bf784565f8947b2aa7d341e3d5864698aef23))

## [6.5.0](https://github.com/memori-ai/memori-api-client/compare/v6.4.0...v6.5.0) (2025-05-27)


### Features

* add notification management functions including create, get, delete, list, and update ([6e8dfad](https://github.com/memori-ai/memori-api-client/commit/6e8dfad276be195d96aece3758fcdb73789ccda4))

## [6.4.0](https://github.com/memori-ai/memori-api-client/compare/v6.3.0...v6.4.0) (2025-05-22)


### Features

* update CompletionConfig to Vertex_Anthropic provider options ([e2e23ad](https://github.com/memori-ai/memori-api-client/commit/e2e23ad86de1457440b45104bbbb64a2c3d69f69))

## [6.3.0](https://github.com/memori-ai/memori-api-client/compare/v6.2.0...v6.3.0) (2025-05-22)


### Features

* add Vertex Anthropic model configuration fields to CompletionConfig ([80901bf](https://github.com/memori-ai/memori-api-client/commit/80901bf95ea196dc232993525b3f7d0003e4bedd))

## [6.2.0](https://github.com/memori-ai/memori-api-client/compare/v6.1.1...v6.2.0) (2025-05-14)


### Features

* add blockMemori and unblockMemori functions ([d762c6a](https://github.com/memori-ai/memori-api-client/commit/d762c6acc8a3a8550b2c33affd82c05f73944d47))

## [6.1.1](https://github.com/memori-ai/memori-api-client/compare/v6.1.0...v6.1.1) (2025-05-07)


### Features

* add requireLoginToken field to Memori type ([c4296cc](https://github.com/memori-ai/memori-api-client/commit/c4296cc186fa8ea4da188c7f8d8b5d2008e11981))

## [6.1.0](https://github.com/memori-ai/memori-api-client/compare/v6.0.8...v6.1.0) (2025-04-28)


### Features

* new fields on Tenant and Memori ([75f8ccf](https://github.com/memori-ai/memori-api-client/commit/75f8ccfb3cc4e0962c8584cea6c07dffd98a3877))


### Maintenance

* add new media events and attributes ([a5c535a](https://github.com/memori-ai/memori-api-client/commit/a5c535adea7e9a5e436a45dcc6f868a402286f8c))

## [6.0.8](https://github.com/memori-ai/memori-api-client/compare/v6.0.7...v6.0.8) (2025-04-16)


### Features

* add postTextEnteredEventExtended function ([11c0387](https://github.com/memori-ai/memori-api-client/commit/11c0387bae17e3fd2f09165a0c04cfbf9931029f))

## [6.0.7](https://github.com/memori-ai/memori-api-client/compare/v6.0.6...v6.0.7) (2025-04-15)


### Maintenance

* add userAgent param to init session ([8662707](https://github.com/memori-ai/memori-api-client/commit/8662707cbb9f74872115938a939b3ff0d3ce087e))

## [6.0.6](https://github.com/memori-ai/memori-api-client/compare/v6.0.5...v6.0.6) (2025-03-25)


### Features

* introduce apiBinaryFetcher for handling binary responses in API calls ([3f9b037](https://github.com/memori-ai/memori-api-client/commit/3f9b03721b2548568846228db20eb094e2818a38))


### Bug Fixes

* update apiBinaryFetcher to be an async function ([4d4a674](https://github.com/memori-ai/memori-api-client/commit/4d4a6740e26e8b5312c030027dc9413ec710153f))

## [6.0.5](https://github.com/memori-ai/memori-api-client/compare/v6.0.4...v6.0.5) (2025-03-25)


### Changes

* streamline apiFetcher usage for binary data handling in import/export functions ([6adc72a](https://github.com/memori-ai/memori-api-client/commit/6adc72a8293ef4ecc0cccc00c74fe3ee9e69164e))

## [6.0.4](https://github.com/memori-ai/memori-api-client/compare/v6.0.3...v6.0.4) (2025-03-25)


### Changes

* update import/export functions to improve API handling and documentation ([4446f7a](https://github.com/memori-ai/memori-api-client/commit/4446f7a00312b413f53090586314d7ffec6f13e8))

## [6.0.3](https://github.com/memori-ai/memori-api-client/compare/v6.0.2...v6.0.3) (2025-03-13)


### Features

* add ImportMemoriParams interface and import/export functions for Memori objects ([e3d641b](https://github.com/memori-ai/memori-api-client/commit/e3d641b288947cf8ee413b756f84e44cccc7ee36))

## [6.0.2](https://github.com/memori-ai/memori-api-client/compare/v6.0.1...v6.0.2) (2025-03-13)


### Features

* add getChatLogsByUser function to retrieve chat logs for the current user session ([5015257](https://github.com/memori-ai/memori-api-client/commit/5015257c2e7db97cb3b317ce9693577f89941104))

## [6.0.1](https://github.com/memori-ai/memori-api-client/compare/v6.0.0...v6.0.1) (2025-03-07)


### Changes

* tenant non optional attributes ([791dd66](https://github.com/memori-ai/memori-api-client/commit/791dd669e90a9d08743f365a4a7f574e0014260d))

## [6.0.0](https://github.com/memori-ai/memori-api-client/compare/v5.6.0...v6.0.0) (2025-03-07)


### ⚠ BREAKING CHANGES

* tenant types from backend, remove customizations from dashboard + add alias

### Changes

* tenant types from backend, remove customizations from dashboard + add alias ([a2d50d9](https://github.com/memori-ai/memori-api-client/commit/a2d50d9bbcafcda5d60fbe9fb7754dc4d07c1b57))

## [5.6.0](https://github.com/memori-ai/memori-api-client/compare/v5.5.1...v5.6.0) (2025-02-28)


### Features

* add optional obfuscation flag to macro function type ([bfc0c0e](https://github.com/memori-ai/memori-api-client/commit/bfc0c0e623f70ddde7b6981a51d7bcca10a9fc2e))
* support multilingual descriptions for macro functions ([ac063a8](https://github.com/memori-ai/memori-api-client/commit/ac063a872c0433f3c3c6a7cac93520e04203803c))

## [5.5.1](https://github.com/memori-ai/memori-api-client/compare/v5.5.0...v5.5.1) (2025-02-25)


### Bug Fixes

* typo in analysis query pathname ([be4a71f](https://github.com/memori-ai/memori-api-client/commit/be4a71f87248171ac2775ed0b4251a4ff8488470))

## [5.5.0](https://github.com/memori-ai/memori-api-client/compare/v5.4.2...v5.5.0) (2025-01-30)


### Features

* add import methods for dictionaries and functions/intents ([c65f477](https://github.com/memori-ai/memori-api-client/commit/c65f477d1d9ae466d6b5ef5a8086d560a10831c0))


### Maintenance

* add missing types ([ede48bd](https://github.com/memori-ai/memori-api-client/commit/ede48bd4e6936e94b6552e6bf22bd16f588b8157))

## [5.4.2](https://github.com/memori-ai/memori-api-client/compare/v5.4.1...v5.4.2) (2025-01-09)


### Maintenance

* add missing types ([4dbabef](https://github.com/memori-ai/memori-api-client/commit/4dbabefcbec0450666abc41962411647433e8d8f))

## [5.4.1](https://github.com/memori-ai/memori-api-client/compare/v5.4.0...v5.4.1) (2025-01-08)


### Bug Fixes

* typo in context vars result type ([2f6290b](https://github.com/memori-ai/memori-api-client/commit/2f6290bca70fb0c7cb21495aa66c13c7c39195d6))


### Changes

* add optional param to text quality indexes ([6b99914](https://github.com/memori-ai/memori-api-client/commit/6b999148d1f50f79d6e8f283e5a39c3cff83b642))

## [5.4.0](https://github.com/memori-ai/memori-api-client/compare/v5.3.1...v5.4.0) (2025-01-08)


### Features

* add missing apis ([f2ea77f](https://github.com/memori-ai/memori-api-client/commit/f2ea77f5195865d8bde00ae992cb195e5ea644b6))

## [5.3.1](https://github.com/memori-ai/memori-api-client/compare/v5.3.0...v5.3.1) (2025-01-07)


### Changes

* add badge apis ([3802ba3](https://github.com/memori-ai/memori-api-client/commit/3802ba3bc0846497d691354aac65bd7bacd50eee))

## [5.3.0](https://github.com/memori-ai/memori-api-client/compare/v5.2.1...v5.3.0) (2025-01-07)


### Features

* sync typings and apis ([f3926ff](https://github.com/memori-ai/memori-api-client/commit/f3926ff3ccc3416d16452c5a471bf9a145ae08b6))

## [5.2.1](https://github.com/memori-ai/memori-api-client/compare/v5.2.0...v5.2.1) (2024-11-19)


### Maintenance

* add timeZoneOffset in open session additionalInfo ([164e5bb](https://github.com/memori-ai/memori-api-client/commit/164e5bbf157c74c73099c3e04b2232af6d4ea500))

## [5.2.0](https://github.com/memori-ai/memori-api-client/compare/v5.1.1...v5.2.0) (2024-09-25)


### Features

* added pagination search and filter apis ([419397e](https://github.com/memori-ai/memori-api-client/commit/419397e3bf4a096c6a3fcfc9e70d26e15ab9563f))


### Maintenance

* fix typo + format code ([95bcf01](https://github.com/memori-ai/memori-api-client/commit/95bcf011079c0f9cb97dda5595c5086f43f2e27a))

## [5.1.1](https://github.com/memori-ai/memori-api-client/compare/v5.1.0...v5.1.1) (2024-09-10)


### Maintenance

* remove stats and content quality apis ([aafe761](https://github.com/memori-ai/memori-api-client/commit/aafe76140afb4f0ede10411ed8b8f7dae3a1da9e))

## [5.1.0](https://github.com/memori-ai/memori-api-client/compare/v5.0.1...v5.1.0) (2024-09-09)


### Features

* add completions config apis, update typings ([493a69a](https://github.com/memori-ai/memori-api-client/commit/493a69abaef7432b1463f6b034f708eaecf35956))

## [5.0.1](https://github.com/memori-ai/memori-api-client/compare/v5.0.0...v5.0.1) (2024-08-02)


### Maintenance

* add translatedEmission in DialogState ([6a77d1d](https://github.com/memori-ai/memori-api-client/commit/6a77d1df713abdf7e25a3e28877cb2e04eb6abdb))

## [5.0.0](https://github.com/memori-ai/memori-api-client/compare/v4.2.2...v5.0.0) (2024-06-26)


### ⚠ BREAKING CHANGES

* split engine and backend endpoints, fallbacks with defaults and replace

### Changes

* split engine and backend endpoints, fallbacks with defaults and replace ([aa0c03d](https://github.com/memori-ai/memori-api-client/commit/aa0c03d857f3a936120fee42154c81d1e1aee1d3))

## [4.2.2](https://github.com/memori-ai/memori-api-client/compare/v4.2.1...v4.2.2) (2024-06-12)


### Maintenance

* add billingDelegation to tenant ([280fd19](https://github.com/memori-ai/memori-api-client/commit/280fd190ceb99976ec5d5a75e06ae77b3da863c2))

## [4.2.1](https://github.com/memori-ai/memori-api-client/compare/v4.2.0...v4.2.1) (2024-05-06)


### Maintenance

* add memoryTags in DialogState ([081628d](https://github.com/memori-ai/memori-api-client/commit/081628dd4b8e7c37ba7f0fdde493defe11e4ddd9))
* add new Memory attributes ([b5081a6](https://github.com/memori-ai/memori-api-client/commit/b5081a6fd6a3e8d8a81b8046fc7d594553e42761))


### Changes

* update search apis ([becc45f](https://github.com/memori-ai/memori-api-client/commit/becc45fa54cd52238e6aa44714bf2541476969f5))

## [4.2.0](https://github.com/memori-ai/memori-api-client/compare/v4.1.3...v4.2.0) (2024-05-03)


### Features

* add functions apis ([9a9a8ba](https://github.com/memori-ai/memori-api-client/commit/9a9a8bafbf8d75c2421e27ff539482204f43f265))

## [4.1.3](https://github.com/memori-ai/memori-api-client/compare/v4.1.2...v4.1.3) (2024-04-30)


### Maintenance

* add new attributes to history message ([c03919a](https://github.com/memori-ai/memori-api-client/commit/c03919a3cc98fd9916847defe6eedcf23bd75d8e))

## [4.1.2](https://github.com/memori-ai/memori-api-client/compare/v4.1.1...v4.1.2) (2024-04-29)


### Maintenance

* add new attributes to history message ([badfd60](https://github.com/memori-ai/memori-api-client/commit/badfd6000a06db2b1484a7f342fa0b6ddb719b9b))

## [4.1.1](https://github.com/memori-ai/memori-api-client/compare/v4.1.0...v4.1.1) (2024-04-29)


### Maintenance

* add new attributes to history message ([477420d](https://github.com/memori-ai/memori-api-client/commit/477420dd6fceba55189ff18b44ad4ee8c03c71e0))

## [4.1.0](https://github.com/memori-ai/memori-api-client/compare/v4.0.3...v4.1.0) (2024-04-16)


### Features

* add new typings, implement date changed api call ([51ee854](https://github.com/memori-ai/memori-api-client/commit/51ee8546ee9b971cadb53a3d5caed71a9792a9d0))

## [4.0.3](https://github.com/memori-ai/memori-api-client/compare/v4.0.2...v4.0.3) (2024-03-29)


### Changes

* add threshold in followers search apis ([4cf6140](https://github.com/memori-ai/memori-api-client/commit/4cf6140a80b7748b73d50a79aa8251bcc0661b6b))

## [4.0.2](https://github.com/memori-ai/memori-api-client/compare/v4.0.1...v4.0.2) (2024-03-25)


### Maintenance

* add attributes to ProcessStatus ([c72da0a](https://github.com/memori-ai/memori-api-client/commit/c72da0adca92f7a799cbdba640b010ef3f9040ee))

## [4.0.1](https://github.com/memori-ai/memori-api-client/compare/v4.0.0...v4.0.1) (2024-03-22)


### Maintenance

* adapt completion provider adding Anthropic ([4935dc2](https://github.com/memori-ai/memori-api-client/commit/4935dc22778266ae177078c286567c040e5ab584))

## [4.0.0](https://github.com/memori-ai/memori-api-client/compare/v3.0.1...v4.0.0) (2024-03-19)


### ⚠ BREAKING CHANGES

* add new processes and analysis api, moving import status, refactor api code

### Features

* add new processes and analysis api, moving import status, refactor api code ([2cc81c0](https://github.com/memori-ai/memori-api-client/commit/2cc81c0512bbf7445d8e71cfacc41961fbbf0251))


### Maintenance

* add new tenant attribute ([5829c53](https://github.com/memori-ai/memori-api-client/commit/5829c5337dd3aeb1fc3de462065b3f1dc6e2b8f9))

## [3.0.1](https://github.com/memori-ai/memori-api-client/compare/v3.0.0...v3.0.1) (2024-02-16)


### Maintenance

* update user typings ([6a357ee](https://github.com/memori-ai/memori-api-client/commit/6a357eea7d0013dfba3b629fb8101a404782bfec))

## [3.0.0](https://github.com/memori-ai/memori-api-client/compare/v2.7.0...v3.0.0) (2024-02-15)


### Features

* add get current backend user api ([0bbcebd](https://github.com/memori-ai/memori-api-client/commit/0bbcebda387975264d3bc49d3881dfa4e1e5ceae))
* add new apis and typings, remove obsolete ones ([c5a028a](https://github.com/memori-ai/memori-api-client/commit/c5a028a7ed2218d3d6ca6bbd22f73f7d3a9cd3c4))


### Maintenance

* rename refs and defaults to aisuru.com ([25a3222](https://github.com/memori-ai/memori-api-client/commit/25a32225d5046d0ef6a000ebcda99730a899fa44))

## [2.7.0](https://github.com/memori-ai/memori-api-client/compare/v2.6.2...v2.7.0) (2023-12-22)


### Features

* add known facts api and typings ([3c16827](https://github.com/memori-ai/memori-api-client/commit/3c16827dd2d9dfc114edfe094f984e4492d1cdaf))

## [2.6.2](https://github.com/memori-ai/memori-api-client/compare/v2.6.1...v2.6.2) (2023-12-11)


### Changes

* add chatlogs attributes for board of experts ([3d746a7](https://github.com/memori-ai/memori-api-client/commit/3d746a7ec97cfe05bc584b2f8b1fc5b6ca450d80))

## [2.6.1](https://github.com/memori-ai/memori-api-client/compare/v2.6.0...v2.6.1) (2023-12-08)


### Maintenance

* add endpoints as constants ([de513a2](https://github.com/memori-ai/memori-api-client/commit/de513a2662c163f3ad0181c1406d7f9da0dd72b7))

## [2.6.0](https://github.com/memori-ai/memori-api-client/compare/v2.5.0...v2.6.0) (2023-12-08)


### Features

* add boe flag on memori type ([71fc3fc](https://github.com/memori-ai/memori-api-client/commit/71fc3fc9a891beae66a7518ac91bad633166bf27))

## [2.5.0](https://github.com/memori-ai/memori-api-client/compare/v2.4.0...v2.5.0) (2023-12-08)


### Features

* add expert references api + new attributes for boards of experts ([c09c317](https://github.com/memori-ai/memori-api-client/commit/c09c31796dd8107075786b60a337da1b0c59cec7))

## [2.4.0](https://github.com/memori-ai/memori-api-client/compare/v2.3.0...v2.4.0) (2023-11-13)


### Features

* update api and typings ([535d118](https://github.com/memori-ai/memori-api-client/commit/535d118730bbc80435385a8df093e65fae41fe02))

## [2.3.0](https://github.com/memori-ai/memori-api-client/compare/v2.2.2...v2.3.0) (2023-09-11)


### Features

* update import typings ([4bb0cdd](https://github.com/memori-ai/memori-api-client/commit/4bb0cddd0126fce7e210d4cca800c4f4cee3d7e3))

## [2.2.2](https://github.com/memori-ai/memori-api-client/compare/v2.2.1...v2.2.2) (2023-08-25)


### Changes

* replace additionalInfo email + userID with loginToken ([10b2a03](https://github.com/memori-ai/memori-api-client/commit/10b2a03fd14104ca42c44f044327a8668b84eeb5))

## [2.2.1](https://github.com/memori-ai/memori-api-client/compare/v2.2.0...v2.2.1) (2023-08-22)


### Bug Fixes

* backend fields typos ([56261d6](https://github.com/memori-ai/memori-api-client/commit/56261d663565122ff392866a3f72910fc3372003))

## [2.2.0](https://github.com/memori-ai/memori-api-client/compare/v2.1.5...v2.2.0) (2023-07-17)


### Features

* update importexport apis and typings ([d86f38e](https://github.com/memori-ai/memori-api-client/commit/d86f38ebd411c7ea5d6382556e37704060a59e2a))

## [2.1.5](https://github.com/memori-ai/memori-api-client/compare/v2.1.4...v2.1.5) (2023-04-17)


### Maintenance

* cleanup lockfile ([dd4cf88](https://github.com/memori-ai/memori-api-client/commit/dd4cf8851f07cfb97d0f77f0f4f214e63a4daf40))

## [2.1.4](https://github.com/memori-ai/memori-api-client/compare/v2.1.3...v2.1.4) (2023-04-17)


### Maintenance

* add ts as peer dep ([415efbe](https://github.com/memori-ai/memori-api-client/commit/415efbe2ffa5612c56146301062d508b70072a9a))

## [2.1.3](https://github.com/memori-ai/memori-api-client/compare/v2.1.2...v2.1.3) (2023-04-17)


### Bug Fixes

* typo in backend memori specs ([2d12a38](https://github.com/memori-ai/memori-api-client/commit/2d12a38c16e0f18a0a0dd3e764fc0b4c76e96227))

## [2.1.2](https://github.com/memori-ai/memori-api-client/compare/v2.1.1...v2.1.2) (2023-04-14)


### Maintenance

* setup types for build ([4985516](https://github.com/memori-ai/memori-api-client/commit/49855166ebd4112dd5851397afd5964166c81036))

## [2.1.1](https://github.com/memori-ai/memori-api-client/compare/v2.1.0...v2.1.1) (2023-04-14)


### Maintenance

* setup types for build ([d7e7203](https://github.com/memori-ai/memori-api-client/commit/d7e7203f5d2cd3b93e5ca1889147703c218231eb))
* setup types for build ([2527080](https://github.com/memori-ai/memori-api-client/commit/25270801e8d777ee03d8a3577213609fc8d841ef))

## [2.1.0](https://github.com/memori-ai/memori-api-client/compare/v2.0.0...v2.1.0) (2023-04-14)


### Features

* add new memori and user attributes ([40e6d16](https://github.com/memori-ai/memori-api-client/commit/40e6d16a56912a5add579ed5ad5245fce8ff0eea))

## [2.0.0](https://github.com/memori-ai/memori-api-client/compare/v1.2.0...v2.0.0) (2023-03-25)


### ⚠ BREAKING CHANGES

* migrate to yarn 3, remove tsdx and go vanilla tslib, move tests, remove dist from git

### Features

* update import apis and typings ([630a8cf](https://github.com/memori-ai/memori-api-client/commit/630a8cfd1790d7222883df29a8ff92753b58ccdf))


### Changes

* migrate to yarn 3, remove tsdx and go vanilla tslib, move tests, remove dist from git ([9fd19fd](https://github.com/memori-ai/memori-api-client/commit/9fd19fdb612fe4e4cb0748d7659e5c513690abac))


### Maintenance

* remove coverage from git ([b7e2348](https://github.com/memori-ai/memori-api-client/commit/b7e2348055219e37f7aa7bdeec92f16ba8c03d00))

## [1.2.0](https://github.com/memori-ai/memori-api-client/compare/v1.1.0...v1.2.0) (2023-03-09)


### Features

* update import apis ([1e924ef](https://github.com/memori-ai/memori-api-client/commit/1e924ef54c3ce38312a0e7d169fd60702c43f3f8))

## [1.1.0](https://github.com/memori-ai/memori-api-client/compare/v1.0.0...v1.1.0) (2023-02-16)


### ⚠ BREAKING CHANGES

* rename signin in signup, typo
* update memori lists api, rename user memori list

### Features

* add new user attributes ([5b10720](https://github.com/memori-ai/memori-api-client/commit/5b107206331a0ac6a579f983c5eb0fe04b4d9fc4))
* update memori lists api, rename user memori list ([6349149](https://github.com/memori-ai/memori-api-client/commit/63491496731ae65978c4ad81404881811ab6b13b))


### Bug Fixes

* api url parsing allowing http for localhost ([6b6d881](https://github.com/memori-ai/memori-api-client/commit/6b6d8812385002e40cbbfc7fe87cd72daed3f5aa))


### Changes

* rename signin in signup, typo ([6fc8dc4](https://github.com/memori-ai/memori-api-client/commit/6fc8dc4ecced9b379d7ace49f2c25e83985755c1))

## [1.0.0](https://github.com/memori-ai/memori-api-client/compare/v0.11.0...v1.0.0) (2023-02-01)


### Maintenance

* remove legacy experimental code ([69fc7c6](https://github.com/memori-ai/memori-api-client/commit/69fc7c6c56e1e55d77e95821a40d39d522b20abd))

## [0.11.0](https://github.com/memori-ai/memori-api-client/compare/v0.10.3...v0.11.0) (2023-02-01)


### Features

* update apis + types ([7c412d5](https://github.com/memori-ai/memori-api-client/commit/7c412d515af76a386642a50f3a9d73d148e37b56))

## [0.10.3](https://github.com/memori-ai/memori-api-client/compare/v0.10.2...v0.10.3) (2023-01-23)


### Features

* add completion flag in dialog state ([9d7b417](https://github.com/memori-ai/memori-api-client/commit/9d7b4170fe1bbfe575cd9dff1165ad01525e898c))

## [0.10.2](https://github.com/memori-ai/memori-api-client/compare/v0.10.1...v0.10.2) (2023-01-20)


### Maintenance

* add flag in Message for AI-generated msgs ([6ea6ae3](https://github.com/memori-ai/memori-api-client/commit/6ea6ae33897c92b6bc032f4d74b8137d4a360f8b))

## [0.10.1](https://github.com/memori-ai/memori-api-client/compare/v0.10.0...v0.10.1) (2023-01-20)


### Changes

* remove internal api not usable from public ([d3d3656](https://github.com/memori-ai/memori-api-client/commit/d3d3656619c45f192ffd0ea2bfb2391cb9c483c5))

## [0.10.0](https://github.com/memori-ai/memori-api-client/compare/v0.9.0...v0.10.0) (2023-01-19)


### Features

* add new nlp apis ([9befc96](https://github.com/memori-ai/memori-api-client/commit/9befc9629e8f5d99b89e910b365f9c2306cffe1d))


### Changes

* add memory type DRAFT ([fa64870](https://github.com/memori-ai/memori-api-client/commit/fa648709749a3220f038edeaacbdf78749f3f7e7))
* add memoryID in chat log lines ([52fa29d](https://github.com/memori-ai/memori-api-client/commit/52fa29db601037e4d11f5874a3a01a161b46bc1e))

## [0.9.0](https://github.com/memori-ai/memori-api-client/compare/v0.8.3...v0.9.0) (2023-01-19)


### Features

* add new flags in dialog state ([24abc93](https://github.com/memori-ai/memori-api-client/commit/24abc9352134e1b0a922700740f60a57870681a2))
* add new flags in memori ([6fd0fb0](https://github.com/memori-ai/memori-api-client/commit/6fd0fb0a593b44451e068975edb05f1678ad820e))

## [0.8.3](https://github.com/memori-ai/memori-api-client/compare/v0.8.2...v0.8.3) (2023-01-14)


### Maintenance

* pin azure sdk to 1.20.0 ([24ee3b6](https://github.com/memori-ai/memori-api-client/commit/24ee3b6ed50d67578b4c916d088c7062df103618))

## [0.8.2](https://github.com/memori-ai/memori-api-client/compare/v0.8.1...v0.8.2) (2023-01-05)


### Features

* add getMemoriInvitations api ([22d33a1](https://github.com/memori-ai/memori-api-client/commit/22d33a1c8c3be29e1ee896eaf725cbd3fa7fc37b))

## [0.8.1](https://github.com/memori-ai/memori-api-client/compare/v0.8.0...v0.8.1) (2023-01-05)


### Changes

* add new MemoriSpec attrs ([c96a42e](https://github.com/memori-ai/memori-api-client/commit/c96a42e7a17fd3714c07f7deb70a300fb3770fad))


### Maintenance

* update dist ([88e7522](https://github.com/memori-ai/memori-api-client/commit/88e752202baac2af89aca4bccfb7d2dd90518a49))

## [0.8.0](https://github.com/memori-ai/memori-api-client/compare/v0.7.0...v0.8.0) (2023-01-04)


### Features

* add tenant metaverse api ([cd24228](https://github.com/memori-ai/memori-api-client/commit/cd242283679cf05fc8d254a0960116e4136df7de))


### Changes

* add new dialogState attrs ([eccf321](https://github.com/memori-ai/memori-api-client/commit/eccf321654a084873159697e592f14561542a07d))
* add new dialogState attrs ([87877f0](https://github.com/memori-ai/memori-api-client/commit/87877f0faa82061aab0635b8529aabfe90137db2))


### Maintenance

* update dist ([3b8640a](https://github.com/memori-ai/memori-api-client/commit/3b8640a093b6248160d24f6d0e490b7bc8ac52a5))

## [0.7.0](https://github.com/memori-ai/memori-api-client/compare/v0.6.0...v0.7.0) (2022-12-21)


### Features

* add hints as memory properties ([49ed038](https://github.com/memori-ai/memori-api-client/commit/49ed0385d52e7bc5f25520e26007bd60c37c6f2d))

## [0.6.0](https://github.com/memori-ai/memori-api-client/compare/v0.5.0...v0.6.0) (2022-12-20)


### Features

* update Memori and Memory typings ([c796d2e](https://github.com/memori-ai/memori-api-client/commit/c796d2ed31161f9f3f20d0d62df0c174bbb4b872))


### Maintenance

* update package.json files ([8deca06](https://github.com/memori-ai/memori-api-client/commit/8deca06d42c1110a13e2572b794ff0bcfd65076f))

## [0.5.0](https://github.com/memori-ai/memori-api-client/compare/v0.4.6...v0.5.0) (2022-12-13)


### Features

* add MemoriContentUpdated ([c252a68](https://github.com/memori-ai/memori-api-client/commit/c252a68cefc239fd7413556f397ccf785f57e04c))

## [0.4.6](https://github.com/memori-ai/memori-api-client/compare/v0.4.5...v0.4.6) (2022-12-07)


### Maintenance

* add description in package.json ([4526d38](https://github.com/memori-ai/memori-api-client/commit/4526d3816b1ad36f2f1b281ab6b46f64f0cfd4fd))

## [0.4.5](https://github.com/memori-ai/memori-api-client/compare/v0.4.4...v0.4.5) (2022-12-06)


### Maintenance

* add prebump build with release-it ([1e892e3](https://github.com/memori-ai/memori-api-client/commit/1e892e33452c0c2ebed56e59c538f5bdce5e31de))
* **deps:** bump terser from 4.8.0 to 4.8.1 ([8fe97ad](https://github.com/memori-ai/memori-api-client/commit/8fe97ad0a0779fe48266d6f9472158f393a94b49))

## [0.4.4](https://github.com/memori-ai/memori-api-client/compare/v0.4.3...v0.4.4) (2022-11-28)


### Maintenance

* run dist ([5853078](https://github.com/memori-ai/memori-api-client/commit/58530783784df5d11643516269eaf258edaca699))

## [0.4.3](https://github.com/memori-ai/memori-api-client/compare/v0.4.2...v0.4.3) (2022-11-28)


### Features

* add type on paginated contents query ([b823f73](https://github.com/memori-ai/memori-api-client/commit/b823f733d3ece8ce6dfddb0c8d48bfb72fbcbdec))

## [0.4.2](https://github.com/memori-ai/memori-api-client/compare/v0.4.1...v0.4.2) (2022-11-25)


### Bug Fixes

* unans questions pagination params type ([2ccf150](https://github.com/memori-ai/memori-api-client/commit/2ccf150eae4c970f7aee49c985241ef0af12b00b))

## [0.4.1](https://github.com/memori-ai/memori-api-client/compare/v0.4.0...v0.4.1) (2022-11-25)


### Changes

* unanswered question response with suggestions from engine ([1b3819c](https://github.com/memori-ai/memori-api-client/commit/1b3819cc058143bc671868f065e10e3441957f30))

## [0.4.0](https://github.com/memori-ai/memori-api-client/compare/v0.3.3...v0.4.0) (2022-11-25)


### Features

* add paginated queries ([2aea177](https://github.com/memori-ai/memori-api-client/commit/2aea1772f4ec9c19c8b11df27bf11b9c35b9c6ae))

## [0.3.3](https://github.com/memori-ai/memori-api-client/compare/v0.3.2...v0.3.3) (2022-11-24)


### Maintenance

* add open session with initial question in typings ([75f2f88](https://github.com/memori-ai/memori-api-client/commit/75f2f8893e0d24294addab6db823290445e48064))

## [0.3.2](https://github.com/memori-ai/memori-api-client/compare/v0.3.1...v0.3.2) (2022-11-24)


### Bug Fixes

* properties typings ([976ce37](https://github.com/memori-ai/memori-api-client/commit/976ce37830e09b3786a5da3bd78f3ca60fa705d7))

## [0.3.1](https://github.com/memori-ai/memori-api-client/compare/v0.3.0...v0.3.1) (2022-11-21)


### Maintenance

* build add new api, update ([e69f833](https://github.com/memori-ai/memori-api-client/commit/e69f83311466d63da7fe4e783393895ebac1232b))

## [0.3.0](https://github.com/memori-ai/memori-api-client/compare/v0.2.1...v0.3.0) (2022-11-21)


### Features

* add new api, update ([0952a37](https://github.com/memori-ai/memori-api-client/commit/0952a376d9e4662b702e3b02d99eb577dcb9aa5d))

## [0.2.1](https://github.com/memori-ai/memori-api-client/compare/v0.2.0...v0.2.1) (2022-07-25)


### Maintenance

* update dist ([01032df](https://github.com/memori-ai/memori-api-client/commit/01032df21c57d02e37c8653fedb8f339f8a56b6a))

## [0.2.0](https://github.com/memori-ai/memori-api-client/compare/v0.1.2...v0.2.0) (2022-07-25)


### Features

* add contextVars apis ([864a6fc](https://github.com/memori-ai/memori-api-client/commit/864a6fc12fd5d44fdb403bc083cc0f17205d18eb))


### Changes

* patch memori accepts partial memori object ([8b52bc9](https://github.com/memori-ai/memori-api-client/commit/8b52bc93e245c80b643addd956e1ef86d007008e))

## [0.1.2](https://github.com/memori-ai/memori-api-client/compare/v0.1.1...v0.1.2) (2022-07-14)


### Bug Fixes

* remove disabling of microsoft speech sdk telemetry, will re-enabling it (ref: microsoft/cognitive-services-speech-sdk-js[#552](https://github.com/memori-ai/memori-api-client/issues/552)) ([763c294](https://github.com/memori-ai/memori-api-client/commit/763c29485c3a616be3c52826abdad7cefc0a65f7))

## [0.1.1](https://github.com/memori-ai/memori-api-client/compare/v0.1.0...v0.1.1) (2022-07-13)


### Changes

* remove test env, run test with actual method, remove useless private api calls ([d432fe7](https://github.com/memori-ai/memori-api-client/commit/d432fe70ea0ab55176bac44195be6c7dc6c27674))

## 0.1.0 (2022-07-13)


### Features

* add backend apis and tests ([aa4216b](https://github.com/memori-ai/memori-api-client/commit/aa4216be6beec0a129959ca62f43b4f24d6c664b))
* add backend apis and tests ([1405d37](https://github.com/memori-ai/memori-api-client/commit/1405d37a1bd66eb05b82dc561229f297713efa9b))
* add engine apis and tests ([63efa57](https://github.com/memori-ai/memori-api-client/commit/63efa57ef8931d79dbea635e727a024a6878d8ad))
* add helpers + constants ([f485643](https://github.com/memori-ai/memori-api-client/commit/f485643911bec9775f9ee61c5124a8265116e557))
* add media helper ([9f7c8e1](https://github.com/memori-ai/memori-api-client/commit/9f7c8e1564e6c4ccaf82c8515ec5d973a746cc89))
* add speech client sdk ([ab63d0b](https://github.com/memori-ai/memori-api-client/commit/ab63d0bd1efe532a4481dda2ec887b38dcc102c2))


### Bug Fixes

* fixes for windows for end of line ([27c0309](https://github.com/memori-ai/memori-api-client/commit/27c030981395fe7159235fa06c4a467e9d7fbc75))
* typo in jsdoc ([16496e5](https://github.com/memori-ai/memori-api-client/commit/16496e5d49f667a47e1309ea46732fbd32815c3a))


### Changes

* typings import, engine apis directly in client ([56efcca](https://github.com/memori-ai/memori-api-client/commit/56efccac5a717218b958579200e5b39dec23eba3))
* use cross-fetch ([9a9e073](https://github.com/memori-ai/memori-api-client/commit/9a9e0739494a4a887eb22c71142c682f121820fb))


### Maintenance

* add dist dir to git ([073b52a](https://github.com/memori-ai/memori-api-client/commit/073b52a158463a86008996c3c83d1991eddb6b18))
* first import ([6b2f327](https://github.com/memori-ai/memori-api-client/commit/6b2f327940719aff0aee0f2dc4e6005c60624635))
* prepare for release ([d542d65](https://github.com/memori-ai/memori-api-client/commit/d542d65560fa83d19af9e4872fdebc9203cb4963))
* run build on pre-release ([2f93f10](https://github.com/memori-ai/memori-api-client/commit/2f93f101403c9dcedc2b8777c376227bd4f9a75c))
* update lockfile ([96240fd](https://github.com/memori-ai/memori-api-client/commit/96240fd02996e8bfc3c98d3b8b999932fb47af11))
* update typings ([08fc01b](https://github.com/memori-ai/memori-api-client/commit/08fc01b8c4dbb790acb06c6ba676b593c969e47d))
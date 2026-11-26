const fetchMock = require('jest-fetch-mock');

fetchMock.enableMocks();

// apiFetcher importa cross-fetch, che enableMocks non intercetta: senza questo i test chiamano il backend reale
jest.mock('cross-fetch', () => require('jest-fetch-mock'));
fetchMock.mockResponse(JSON.stringify({}));

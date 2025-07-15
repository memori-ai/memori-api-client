import { getBackendApiUrl, getEngineApiUrl } from './getApiUrl';

describe('Backend API URL', () => {
  it('parses the correct API URL with no arg', () => {
    expect(getBackendApiUrl()).toBe('https://backend.memori.ai');
  });
  it('parses the correct API URL passing host', () => {
    expect(getBackendApiUrl('backend.memori.ai')).toBe(
      'https://backend.memori.ai'
    );
  });
  it('parses the correct API URL passing more url parts', () => {
    expect(
      getBackendApiUrl('https://backend.memori.ai/memoriai/awanagana')
    ).toBe('https://backend.memori.ai');
  });
});

describe('Engine API URL', () => {
  it('parses the correct API URL with no arg', () => {
    expect(getEngineApiUrl()).toBe('https://engine.memori.ai');
  });
  it('parses the correct API URL passing host', () => {
    expect(getEngineApiUrl('engine.memori.ai')).toBe(
      'https://engine.memori.ai'
    );
  });
  it('parses the correct API URL passing more url parts', () => {
    expect(getEngineApiUrl('https://engine.memori.ai/memoriai/awanagana')).toBe(
      'https://engine.memori.ai'
    );
  });
});

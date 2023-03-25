import { getApiUrl } from './getApiUrl';

describe('API URL', () => {
  it('parses the correct API URL with no arg', () => {
    expect(getApiUrl()).toBe('https://backend.memori.ai');
  });
  it('parses the correct API URL passing host', () => {
    expect(getApiUrl('backend.memori.ai')).toBe('https://backend.memori.ai');
  });
  it('parses the correct API URL passing more url parts', () => {
    expect(getApiUrl('https://backend.memori.ai/memoriai/awanagana')).toBe(
      'https://backend.memori.ai'
    );
  });
});

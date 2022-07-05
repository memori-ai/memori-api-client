import memori from '../src/index';
import { getApiUrl } from '../src/helpers';

const client = memori();

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

describe('client', () => {
  it('works', async () => {
    expect(
      await client.backend.memori.getMemoriById(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works with shorthand version', async () => {
    expect(
      await client.backend.getMemoriById(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('has backend queries', () => {
    expect(Object.keys(client.backend).length).toBeGreaterThan(0);
  });

  it('has engine queries', () => {
    expect(Object.keys(client.engine).length).toBeGreaterThan(0);
  });

  it('has constants', () => {
    expect(Object.keys(client.constants).length).toBeGreaterThan(0);
  });
});

describe('constants', () => {
  it('has allowed mimetypes constant', () => {
    expect(client.constants.allowedMediaTypes).toHaveLength(17);
  });
  it('has anon tag', () => {
    expect(client.constants.anonTag).toBe('👤');
  });
});

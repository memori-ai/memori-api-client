import memori from './index';

const client = memori();

describe('constants', () => {
  it('has backend url', () => {
    expect(client.constants.BACKEND_URL).toBe(
      'https://backend.memori.ai/api/v2'
    );
  });
  it('has engine url', () => {
    expect(client.constants.ENGINE_URL).toBe(
      'https://engine.memori.ai/memori/v2'
    );
  });
  it('has allowed mimetypes constant', () => {
    expect(client.constants.allowedMediaTypes).toHaveLength(17);
  });
  it('has anon tag', () => {
    expect(client.constants.anonTag).toBe('👤');
  });
});

import memori from './index';

const client = memori();

describe('constants', () => {
  it('has allowed mimetypes constant', () => {
    expect(client.constants.allowedMediaTypes).toHaveLength(17);
  });
  it('has anon tag', () => {
    expect(client.constants.anonTag).toBe('👤');
  });
});

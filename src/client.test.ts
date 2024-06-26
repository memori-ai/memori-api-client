import memori from './index';

const client = memori();

describe('client', () => {
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
  it('works with custom backend url', () => {
    const customClient = memori('https://custom.backend.com/api/v2');
    expect(customClient.constants.BACKEND_URL).toBe(
      'https://custom.backend.com/api/v2'
    );
  });
  it('works with custom engine url', () => {
    const customClient = memori(
      undefined,
      'https://custom.engine.com/memori/v2'
    );
    expect(customClient.constants.ENGINE_URL).toBe(
      'https://custom.engine.com/memori/v2'
    );
  });

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
    expect(Object.keys(client.session).length).toBeGreaterThan(0);
  });

  it('has constants', () => {
    expect(Object.keys(client.constants).length).toBeGreaterThan(0);
  });

  it('has asset helper', () => {
    expect(client.asset.getResourceUrl).toBeDefined();
    expect(client.asset.getResourceUrl).toBeInstanceOf(Function);
  });

  it('asset helper works', () => {
    expect(
      client.asset.getResourceUrl({
        type: 'avatar',
      })
    ).toBe('https://aisuru.com/images/memoriAvatar.png');
  });
});

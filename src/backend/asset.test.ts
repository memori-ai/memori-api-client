import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/asset api', () => {
  it('works on asset apis', async () => {
    expect(
      await client.backend.asset.getAsset(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe.png',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on asset apis with shorthand version', async () => {
    expect(
      await client.backend.getAsset(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe.png',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

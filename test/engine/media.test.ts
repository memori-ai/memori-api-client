import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/media api', () => {
  it('works on media apis', async () => {
    expect(
      await client.media.getMedia(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on media apis with shorthand version', async () => {
    expect(
      await client.getMedia(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

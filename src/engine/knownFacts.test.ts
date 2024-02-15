import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/knownFacts api', () => {
  it('works on knownFacts apis', async () => {
    expect(
      await client.knownFacts.getKnownFacts(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on knownFacts apis with shorthand version', async () => {
    expect(
      await client.getKnownFacts('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

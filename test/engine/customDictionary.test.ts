import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/customDictionary api', () => {
  it('works on customDictionary apis', async () => {
    expect(
      await client.customDictionary.getCustomWords(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on customDictionary apis with shorthand version', async () => {
    expect(
      await client.getCustomWords('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

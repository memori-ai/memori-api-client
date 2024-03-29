import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/search api', () => {
  it('works on search apis', async () => {
    expect(
      await client.search.searchMemory('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });

  it('works on search apis with shorthand version', async () => {
    expect(
      await client.searchMemory('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/memories api', () => {
  it('works on memory apis', async () => {
    expect(
      await client.memories.getMemories('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });

  it('works on memory apis with shorthand version', async () => {
    expect(
      await client.getMemories('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

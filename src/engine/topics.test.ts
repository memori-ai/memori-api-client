import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/topics api', () => {
  it('works on topics apis', async () => {
    expect(
      await client.topics.getTopics('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });

  it('works on topics apis with shorthand version', async () => {
    expect(
      await client.getTopics('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

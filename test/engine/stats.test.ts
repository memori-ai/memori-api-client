import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/stats api', () => {
  it('works on statistics apis', async () => {
    expect(
      await client.engine.stats.getStatistics(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on statistics apis with shorthand version', async () => {
    expect(
      await client.engine.getStatistics('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/stats api', () => {
  it('works on statistics apis', async () => {
    expect(
      await client.stats.getEventLogs(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        '2021-01-01T00:00:00.000Z',
        '2021-01-02T00:00:00.000Z'
      )
    ).not.toBeNull();
  });

  it('works on statistics apis with shorthand version', async () => {
    expect(
      await client.getEventLogs(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        '2021-01-01T00:00:00.000Z',
        '2021-01-02T00:00:00.000Z'
      )
    ).not.toBeNull();
  });
});

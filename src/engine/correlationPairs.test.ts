import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/correlationPairs api', () => {
  it('works on correlationPairs apis', async () => {
    expect(
      await client.correlationPairs.getCorrelationPairs(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on correlationPairs apis with shorthand version', async () => {
    expect(
      await client.getCorrelationPairs('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

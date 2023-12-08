import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/expertReferences api', () => {
  it('works on expertReferences apis', async () => {
    expect(
      await client.expertReferences.getExpertReferences(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on chatLogs apis with shorthand version', async () => {
    expect(
      await client.getExpertReferences('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

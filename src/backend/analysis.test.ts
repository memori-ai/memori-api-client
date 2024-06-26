import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/analysis api', () => {
  it('works on analysis apis', async () => {
    expect(
      await client.backend.analysis.analyzeUserQuery(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b',
        { query: 'test' }
      )
    ).not.toBeNull();
  });

  it('works on analysis apis with shorthand version', async () => {
    expect(
      await client.backend.analyzeUserQuery(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b',
        { query: 'test' }
      )
    ).not.toBeNull();
  });
});

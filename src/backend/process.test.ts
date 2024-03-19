import memori from '../index';

const client = memori('https://backend-staging.memori.ai');

describe('backend/process api', () => {
  it('works on process apis', async () => {
    expect(
      await client.backend.process.getProcessStatus(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on process apis with shorthand version', async () => {
    expect(
      await client.backend.getProcessStatus(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

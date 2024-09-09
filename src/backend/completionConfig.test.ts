import memori from '../index';

const client = memori('https://backend-staging.memori.ai');

describe('backend/completionConfig api', () => {
  it('works on users apis', async () => {
    expect(
      await client.backend.completionConfig.getCompletionConfig(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on completionConfig apis with shorthand version', async () => {
    expect(
      await client.backend.getCompletionConfig(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

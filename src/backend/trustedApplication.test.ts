import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/trustedApplication api', () => {
  it('works on trustedApplication apis', async () => {
    expect(
      await client.backend.trustedApplication.getTrustedApplicationsList(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on trustedApplication apis with shorthand version', async () => {
    expect(
      await client.backend.getTrustedApplicationsList(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });
}); 
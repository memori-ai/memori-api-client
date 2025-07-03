import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/tenant api', () => {
  it('works on tenant apis', async () => {
    expect(
      await client.backend.tenant.getTenant('www.aisuru.com', 'www.aisuru.com')
    ).not.toBeNull();
  });

  it('works on tenant apis with shorthand version', async () => {
    expect(
      await client.backend.getTenant('www.aisuru.com', 'www.aisuru.com')
    ).not.toBeNull();
  });
});

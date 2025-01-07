import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/badge api', () => {
  it('works on badge apis', async () => {
    expect(
      await client.backend.badge.getUserBadges(
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on badge apis with shorthand version', async () => {
    expect(
      await client.backend.getUserBadges('be2e4a44-890b-483b-a26a-f6e122f36e2b')
    ).not.toBeNull();
  });
});

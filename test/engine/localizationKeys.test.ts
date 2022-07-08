import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/localizationKeys api', () => {
  it('works on localizationKeys apis', async () => {
    expect(
      await client.localizationKeys.getLocalizationKey(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'GIVER_PRESENTATION'
      )
    ).not.toBeNull();
  });

  it('works on localizationKeys apis with shorthand version', async () => {
    expect(
      await client.getLocalizationKey(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'GIVER_PRESENTATION'
      )
    ).not.toBeNull();
  });
});

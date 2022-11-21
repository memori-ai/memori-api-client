import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('backend/consumptionLogs api', () => {
  it('works on consumption logs apis', async () => {
    expect(
      await client.backend.consumptionLogs.getMemoriConsumptionLogs(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b',
        'Daily'
      )
    ).not.toBeNull();
  });

  it('works on consumption logs apis with shorthand version', async () => {
    expect(
      await client.backend.getMemoriConsumptionLogs(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b',
        'Daily'
      )
    ).not.toBeNull();
  });
});

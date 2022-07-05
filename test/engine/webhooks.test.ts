import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/webhooks api', () => {
  it('works on webhooks apis', async () => {
    expect(await client.engine.webhooks.postTestSlot()).not.toBeNull();
  });

  it('works on webhooks apis with shorthand version', async () => {
    expect(await client.engine.postTestSlot()).not.toBeNull();
  });
});

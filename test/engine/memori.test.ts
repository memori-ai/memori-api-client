import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/memori api', () => {
  it('works on memori apis', async () => {
    expect(
      await client.engine.memori.deleteMemori(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on memori apis with shorthand version', async () => {
    expect(
      await client.engine.deleteMemori('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

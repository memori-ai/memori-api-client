import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/contextVars api', () => {
  it('works on contextVars apis', async () => {
    expect(
      await client.contextVars.getContextVars(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on contextVars apis with shorthand version', async () => {
    expect(
      await client.getContextVars('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/functions api', () => {
  it('works on functions apis', async () => {
    expect(
      await client.functions.getFunction(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on functions apis with shorthand version', async () => {
    expect(
      await client.getFunction(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });
});

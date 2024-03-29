import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/session api', () => {
  it('works on session apis', async () => {
    expect(
      await client.session.getSession('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });

  it('works on session apis with shorthand version', async () => {
    expect(
      await client.getSession('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

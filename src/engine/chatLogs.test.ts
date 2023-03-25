import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/chatLogs api', () => {
  it('works on chatLogs apis', async () => {
    expect(
      await client.chatLogs.getChatLogs('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });

  it('works on chatLogs apis with shorthand version', async () => {
    expect(
      await client.getChatLogs('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

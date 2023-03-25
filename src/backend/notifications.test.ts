import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/notifications api', () => {
  it('works on notifications apis', async () => {
    expect(
      await client.backend.notifications.getUserNotifications(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on notifications apis with shorthand version', async () => {
    expect(
      await client.backend.getUserNotifications(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });
});

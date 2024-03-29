import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/invitations api', () => {
  it('works on invitations apis', async () => {
    expect(
      await client.backend.invitation.getInvitation(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on invitations apis with shorthand version', async () => {
    expect(
      await client.backend.getInvitation(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

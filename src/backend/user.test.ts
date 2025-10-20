import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/users api (pwl)', () => {
  it('works on users apis', async () => {
    expect(
      await client.backend.userPwl.pwlGetUser(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on users alias apis', async () => {
    expect(
      await client.backend.user.pwlGetUser(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on users apis with shorthand version', async () => {
    expect(
      await client.backend.pwlGetUser(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

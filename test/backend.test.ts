import memori from '../src';

const client = memori('https://backend.memori.ai');

describe('backend/memori api', () => {
  it('works on memori apis', async () => {
    expect(
      await client.backend.memori.getMemoriById(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on memori apis with shorthand version', async () => {
    expect(
      await client.backend.getMemoriById(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

describe('backend/users api', () => {
  it('works on users apis', async () => {
    expect(
      await client.backend.user.getUser(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on users apis with shorthand version', async () => {
    expect(
      await client.backend.getUser(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

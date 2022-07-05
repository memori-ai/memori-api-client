import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/dialog api', () => {
  it('works on dialog apis', async () => {
    expect(
      await client.engine.dialog.postTextEnteredEvent({
        sessionId: '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        text: 'Ciaone',
      })
    ).not.toBeNull();
  });

  it('works on dialog apis with shorthand version', async () => {
    expect(
      await client.engine.postTextEnteredEvent({
        sessionId: '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        text: 'Ciaone',
      })
    ).not.toBeNull();
  });
});

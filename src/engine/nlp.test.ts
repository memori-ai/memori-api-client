import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/nlp api', () => {
  it('works on nlp apis', async () => {
    expect(
      await client.nlp.guessLanguage(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'Hola, quien eres?'
      )
    ).not.toBeNull();
  });

  it('works on nlp apis with shorthand version', async () => {
    expect(
      await client.guessLanguage(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'Hola, quien eres?'
      )
    ).not.toBeNull();
  });
});

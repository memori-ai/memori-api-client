import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/promptedQuestions api', () => {
  it('works on promptedQuestions apis', async () => {
    expect(
      await client.engine.promptedQuestions.getPromptedQuestion(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on promptedQuestions apis with shorthand version', async () => {
    expect(
      await client.engine.getPromptedQuestion(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

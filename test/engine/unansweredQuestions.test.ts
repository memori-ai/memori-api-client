import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/unansweredQuestions api', () => {
  it('works on unansweredQuestions apis', async () => {
    expect(
      await client.engine.unansweredQuestions.getUnansweredQuestions(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on unansweredQuestions apis with shorthand version', async () => {
    expect(
      await client.engine.getUnansweredQuestions(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });
});

import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('backend/importexport api', () => {
  it('works on importexport apis', async () => {
    expect(
      await client.backend.importExport.exportCSV(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b',
        {
          newLine: '\n',
          questionColumnName: 'Question',
          answerColumnName: 'Answer',
        }
      )
    ).not.toBeNull();
  });

  it('works on importexport apis with shorthand version', async () => {
    expect(
      await client.backend.exportCSV(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b',
        {
          newLine: '\n',
          questionColumnName: 'Question',
          answerColumnName: 'Answer',
        }
      )
    ).not.toBeNull();
  });
});

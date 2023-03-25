import { ImportParams } from '../../src/types';
import memori from '../index';

const client = memori('https://backend.memori.ai');

describe('engine/importExport api', () => {
  const importCsvParams: ImportParams = {
    includedRows: [0, 1],
    forceImport: false,
    csvSpecs: {
      hasHeaders: false,
      questionColumnName: 'Title',
      answerColumnName: 'Answers',
      csvSeparator: ',',
      questionTitleVariantsSeparator: '|',
    },
  };

  it('works on import apis', async () => {
    expect(
      await client.importExport.importCSV(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        ['Title,Answers', 'Chi sei?,Sono un Memori'],
        importCsvParams
      )
    ).not.toBeNull();
  });

  it('works on import apis with shorthand version', async () => {
    expect(
      await client.importCSV(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        ['Title,Answers', 'Chi sei?,Sono un Memori'],
        importCsvParams
      )
    ).not.toBeNull();
  });
});

import memori from '../../src';

const client = memori('https://backend.memori.ai');

describe('engine/importExport api', () => {
  const importExportBody = {
    csvRows: ['Title,Answers', 'Chi sei?,Sono un Memori'],
    questionColumnName: 'Title',
    answerColumnName: 'Answers',
    propertyColumnNames: [],
    includedRows: [0, 1],
    csvSeparator: ',',
    questionTitleVariantsSeparator: '|',
    hasHeaders: true,
    forceImport: false,
    headerNames: ['Title', 'Answers'],
  };

  it('works on import apis', async () => {
    expect(
      await client.engine.importExport.postImportExport(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        importExportBody
      )
    ).not.toBeNull();
  });

  it('works on import apis with shorthand version', async () => {
    expect(
      await client.engine.postImportExport(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        importExportBody
      )
    ).not.toBeNull();
  });
});

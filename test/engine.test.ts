import memori from '../src';

const client = memori('https://backend.memori.ai');

describe('engine/correlationParis api', () => {
  it('works on correlationPairs apis', async () => {
    expect(
      await client.engine.correlationPairs.getCorrelationPairs(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on correlationPairs apis with shorthand version', async () => {
    expect(
      await client.engine.getCorrelationPairs(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });
});

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

describe('engine/intents api', () => {
  it('works on intents apis', async () => {
    expect(
      await client.engine.intents.getIntent(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on intents apis with shorthand version', async () => {
    expect(
      await client.engine.getIntent(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

describe('engine/localizationKeys api', () => {
  it('works on localizationKeys apis', async () => {
    expect(
      await client.engine.localizationKeys.getLocalizationKey(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'GIVER_PRESENTATION'
      )
    ).not.toBeNull();
  });

  it('works on localizationKeys apis with shorthand version', async () => {
    expect(
      await client.engine.getLocalizationKey(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'GIVER_PRESENTATION'
      )
    ).not.toBeNull();
  });
});

describe('engine/media api', () => {
  it('works on media apis', async () => {
    expect(
      await client.engine.media.getMedia(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on media apis with shorthand version', async () => {
    expect(
      await client.engine.getMedia(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

describe('engine/memori api', () => {
  it('works on memori apis', async () => {
    expect(
      await client.engine.memori.deleteMemori(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on memori apis with shorthand version', async () => {
    expect(
      await client.engine.deleteMemori('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

describe('engine/memories api', () => {
  it('works on memory apis', async () => {
    expect(
      await client.engine.memories.getMemories(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on memory apis with shorthand version', async () => {
    expect(
      await client.engine.getMemories('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

describe('engine/nlp api', () => {
  it('works on nlp apis', async () => {
    expect(
      await client.engine.nlp.guessLanguage(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'Hola, quien eres?'
      )
    ).not.toBeNull();
  });

  it('works on nlp apis with shorthand version', async () => {
    expect(
      await client.engine.guessLanguage(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'Hola, quien eres?'
      )
    ).not.toBeNull();
  });
});

describe('engine/people api', () => {
  it('works on people apis', async () => {
    expect(
      await client.engine.people.getPerson(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });

  it('works on people apis with shorthand version', async () => {
    expect(
      await client.engine.getPerson(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe',
        'be2e4a44-890b-483b-a26a-f6e122f36e2b'
      )
    ).not.toBeNull();
  });
});

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

describe('engine/search api', () => {
  it('works on search apis', async () => {
    expect(
      await client.engine.search.postRandom(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on search apis with shorthand version', async () => {
    expect(
      await client.engine.postRandom('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

describe('engine/session api', () => {
  it('works on session apis', async () => {
    expect(
      await client.engine.session.getSession(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on session apis with shorthand version', async () => {
    expect(
      await client.engine.getSession('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

describe('engine/stats api', () => {
  it('works on statistics apis', async () => {
    expect(
      await client.engine.stats.getStatistics(
        '768b9654-e781-4c3c-81fa-ae1529d1bfbe'
      )
    ).not.toBeNull();
  });

  it('works on statistics apis with shorthand version', async () => {
    expect(
      await client.engine.getStatistics('768b9654-e781-4c3c-81fa-ae1529d1bfbe')
    ).not.toBeNull();
  });
});

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

describe('engine/webhooks api', () => {
  it('works on webhooks apis', async () => {
    expect(await client.engine.webhooks.postTestSlot()).not.toBeNull();
  });

  it('works on webhooks apis with shorthand version', async () => {
    expect(await client.engine.postTestSlot()).not.toBeNull();
  });
});

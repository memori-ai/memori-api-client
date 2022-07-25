declare const _default: (apiUrl: string) => {
    getContextVars: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        [variable: string]: string[];
    }>;
    getContextVarNames: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        contextVarNames: string[];
    }>;
    getContextVarValues: (sessionId: string, contextVarName: string) => Promise<import("./types").ResponseSpec & {
        contextVarName: string;
        contextVarValues: string[];
    }>;
    contextVars: {
        getContextVars: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            [variable: string]: string[];
        }>;
        getContextVarNames: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            contextVarNames: string[];
        }>;
        getContextVarValues: (sessionId: string, contextVarName: string) => Promise<import("./types").ResponseSpec & {
            contextVarName: string;
            contextVarValues: string[];
        }>;
    };
    getUnansweredQuestions: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        unansweredQuestions: import("./types").UnansweredQuestion[];
    }>;
    deleteUnansweredQuestion: (sessionId: string, unansweredQuestionId: string) => Promise<import("./types").ResponseSpec>;
    unansweredQuestions: {
        getUnansweredQuestions: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            unansweredQuestions: import("./types").UnansweredQuestion[];
        }>;
        deleteUnansweredQuestion: (sessionId: string, unansweredQuestionId: string) => Promise<import("./types").ResponseSpec>;
    };
    getStatistics: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        statistics: import("./types").Stats;
    }>;
    getEventLogs: (sessionId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
        eventLogs: import("./types").EventLog[];
    }>;
    stats: {
        getStatistics: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            statistics: import("./types").Stats;
        }>;
        getEventLogs: (sessionId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
            eventLogs: import("./types").EventLog[];
        }>;
    };
    initSession: (params: import("./types").OpenSession) => Promise<import("./types").ResponseSpec & {
        sessionID: string;
        currentState: import("./types").DialogState;
    }>;
    getSession: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        currentState: import("./types").DialogState;
    }>;
    deleteSession: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    session: {
        initSession: (params: import("./types").OpenSession) => Promise<import("./types").ResponseSpec & {
            sessionID: string;
            currentState: import("./types").DialogState;
        }>;
        getSession: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            currentState: import("./types").DialogState;
        }>;
        deleteSession: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    };
    searchMemory: (sessionId: string, query?: import("./types").SearchQuery | undefined) => Promise<import("./types").ResponseSpec & {
        matches: import("./types").SearchMatches[];
    }>;
    postRandom: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    postHints: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    search: {
        searchMemory: (sessionId: string, query?: import("./types").SearchQuery | undefined) => Promise<import("./types").ResponseSpec & {
            matches: import("./types").SearchMatches[];
        }>;
        postRandom: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        postHints: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    };
    getPromptedQuestions: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    getPromptedQuestion: (sessionId: string, promptId: string) => Promise<import("./types").ResponseSpec>;
    patchPromptedQuestion: (sessionId: string, promptId: string) => Promise<import("./types").ResponseSpec>;
    deletePromptedQuestion: (sessionId: string, promptId: string) => Promise<import("./types").ResponseSpec>;
    postPromptedQuestion: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    promptedQuestions: {
        getPromptedQuestions: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        getPromptedQuestion: (sessionId: string, promptId: string) => Promise<import("./types").ResponseSpec>;
        patchPromptedQuestion: (sessionId: string, promptId: string) => Promise<import("./types").ResponseSpec>;
        deletePromptedQuestion: (sessionId: string, promptId: string) => Promise<import("./types").ResponseSpec>;
        postPromptedQuestion: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    };
    getPeople: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        people: import("./types").Person[];
    }>;
    getPerson: (sessionId: string, personId: string) => Promise<import("./types").ResponseSpec & {
        person: import("./types").Person;
    }>;
    patchPerson: (sessionId: string, person: import("./types").Person) => Promise<import("./types").ResponseSpec & {
        person: import("./types").Person;
    }>;
    deletePerson: (sessionId: string, personId: string) => Promise<import("./types").ResponseSpec>;
    postPerson: (sessionId: string, person: import("./types").Person) => Promise<import("./types").ResponseSpec & {
        person: import("./types").Person;
    }>;
    people: {
        getPeople: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            people: import("./types").Person[];
        }>;
        getPerson: (sessionId: string, personId: string) => Promise<import("./types").ResponseSpec & {
            person: import("./types").Person;
        }>;
        patchPerson: (sessionId: string, person: import("./types").Person) => Promise<import("./types").ResponseSpec & {
            person: import("./types").Person;
        }>;
        deletePerson: (sessionId: string, personId: string) => Promise<import("./types").ResponseSpec>;
        postPerson: (sessionId: string, person: import("./types").Person) => Promise<import("./types").ResponseSpec & {
            person: import("./types").Person;
        }>;
    };
    getWordVector: (sessionId: string, word: string) => Promise<import("./types").ResponseSpec>;
    guessLanguage: (sessionId: string, text: string) => Promise<import("./types").ResponseSpec & {
        languageGuesses: {
            [lang: string]: number;
        };
    }>;
    nlp: {
        getWordVector: (sessionId: string, word: string) => Promise<import("./types").ResponseSpec>;
        guessLanguage: (sessionId: string, text: string) => Promise<import("./types").ResponseSpec & {
            languageGuesses: {
                [lang: string]: number;
            };
        }>;
    };
    getMemories: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        memories: import("./types").Memory[];
    }>;
    getMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec & {
        memory: import("./types").Memory;
    }>;
    patchMemory: (sessionId: string, memory: import("./types").Memory) => Promise<import("./types").ResponseSpec>;
    deleteMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    postMemory: (sessionId: string, memory: import("./types").Memory) => Promise<import("./types").ResponseSpec & {
        memoryID: string;
    }>;
    getMemoryAccess: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    memories: {
        getMemories: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            memories: import("./types").Memory[];
        }>;
        getMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec & {
            memory: import("./types").Memory;
        }>;
        patchMemory: (sessionId: string, memory: import("./types").Memory) => Promise<import("./types").ResponseSpec>;
        deleteMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
        postMemory: (sessionId: string, memory: import("./types").Memory) => Promise<import("./types").ResponseSpec & {
            memoryID: string;
        }>;
        getMemoryAccess: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    };
    getMedia: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    deleteMedia: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    getMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<import("./types").ResponseSpec>;
    patchMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<import("./types").ResponseSpec>;
    deleteMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<import("./types").ResponseSpec>;
    postMedium: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    media: {
        getMedia: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
        deleteMedia: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
        getMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<import("./types").ResponseSpec>;
        patchMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<import("./types").ResponseSpec>;
        deleteMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<import("./types").ResponseSpec>;
        postMedium: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    };
    getLocalizationKeys: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        localizationKeys: import("./types").LocalizationKey[];
    }>;
    getLocalizationKey: (sessionId: string, key: string) => Promise<import("./types").ResponseSpec & {
        localizationKey: import("./types").LocalizationKey;
    }>;
    deleteLocalizationKey: (sessionId: string, key: string) => Promise<import("./types").ResponseSpec>;
    postLocalizationKey: (sessionId: string, localizationKey: import("./types").LocalizationKeyContent) => Promise<import("./types").ResponseSpec & {
        localizationKey: import("./types").LocalizationKey;
    }>;
    patchLocalizationKey: (sessionId: string, localizationKey: import("./types").LocalizationKey) => Promise<import("./types").ResponseSpec>;
    localizationKeys: {
        getLocalizationKeys: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            localizationKeys: import("./types").LocalizationKey[];
        }>;
        getLocalizationKey: (sessionId: string, key: string) => Promise<import("./types").ResponseSpec & {
            localizationKey: import("./types").LocalizationKey;
        }>;
        deleteLocalizationKey: (sessionId: string, key: string) => Promise<import("./types").ResponseSpec>;
        postLocalizationKey: (sessionId: string, localizationKey: import("./types").LocalizationKeyContent) => Promise<import("./types").ResponseSpec & {
            localizationKey: import("./types").LocalizationKey;
        }>;
        patchLocalizationKey: (sessionId: string, localizationKey: import("./types").LocalizationKey) => Promise<import("./types").ResponseSpec>;
    };
    getIntents: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    getIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
    patchIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
    deleteIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
    postIntent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    getIntentSlots: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    getIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
    patchIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
    deleteIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
    postIntentSlot: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    intents: {
        getIntents: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        getIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
        patchIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
        deleteIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
        postIntent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        getIntentSlots: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        getIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
        patchIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
        deleteIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
        postIntentSlot: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    };
    postImportExport: (sessionId: string, csvData: import("./engine/importExport").ImportExportBody) => Promise<import("./types").ResponseSpec & import("./engine/importExport").ImportExportReponse>;
    importExport: {
        postImportExport: (sessionId: string, csvData: import("./engine/importExport").ImportExportBody) => Promise<import("./types").ResponseSpec & import("./engine/importExport").ImportExportReponse>;
    };
    postTextEnteredEvent: ({ sessionId, text, }: {
        sessionId: string;
        text: string;
    }) => Promise<import("./types").ResponseSpec & {
        currentState: import("./types").DialogState;
    }>;
    postPlaceChangedEvent: ({ sessionId, placeName, latitude, longitude, uncertaintyKm, }: {
        sessionId: string;
        placeName: string;
        latitude: number;
        longitude: number;
        uncertaintyKm?: number | undefined;
    }) => Promise<import("./types").ResponseSpec & {
        currentState: import("./types").DialogState;
    }>;
    postDateChangedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    postTagChangedEvent: (sessionId: string, tag: string) => Promise<import("./types").ResponseSpec & {
        currentState: import("./types").DialogState;
    }>;
    postTimeoutEvent: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        currentState: import("./types").DialogState;
    }>;
    postMediumSelectedEvent: (sessionId: string, medium: import("./types").Medium) => Promise<import("./types").ResponseSpec & {
        currentState: import("./types").DialogState;
    }>;
    postDateSelectedEvent: ({ sessionId }: {
        sessionId: string;
    }) => Promise<import("./types").ResponseSpec>;
    postPlaceSelectedEvent: ({ sessionId }: {
        sessionId: string;
    }) => Promise<import("./types").ResponseSpec>;
    postTagSelectedEvent: ({ sessionId }: {
        sessionId: string;
    }) => Promise<import("./types").ResponseSpec>;
    dialog: {
        postTextEnteredEvent: ({ sessionId, text, }: {
            sessionId: string;
            text: string;
        }) => Promise<import("./types").ResponseSpec & {
            currentState: import("./types").DialogState;
        }>;
        postPlaceChangedEvent: ({ sessionId, placeName, latitude, longitude, uncertaintyKm, }: {
            sessionId: string;
            placeName: string;
            latitude: number;
            longitude: number;
            uncertaintyKm?: number | undefined;
        }) => Promise<import("./types").ResponseSpec & {
            currentState: import("./types").DialogState;
        }>;
        postDateChangedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        postTagChangedEvent: (sessionId: string, tag: string) => Promise<import("./types").ResponseSpec & {
            currentState: import("./types").DialogState;
        }>;
        postTimeoutEvent: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            currentState: import("./types").DialogState;
        }>;
        postMediumSelectedEvent: (sessionId: string, medium: import("./types").Medium) => Promise<import("./types").ResponseSpec & {
            currentState: import("./types").DialogState;
        }>;
        postDateSelectedEvent: ({ sessionId }: {
            sessionId: string;
        }) => Promise<import("./types").ResponseSpec>;
        postPlaceSelectedEvent: ({ sessionId }: {
            sessionId: string;
        }) => Promise<import("./types").ResponseSpec>;
        postTagSelectedEvent: ({ sessionId }: {
            sessionId: string;
        }) => Promise<import("./types").ResponseSpec>;
    };
    getCorrelationPairs: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    deleteCorrelationPair: (sessionId: string, pairId: string) => Promise<import("./types").ResponseSpec>;
    correlationPairs: {
        getCorrelationPairs: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        deleteCorrelationPair: (sessionId: string, pairId: string) => Promise<import("./types").ResponseSpec>;
    };
};
export default _default;

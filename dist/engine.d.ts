declare const _default: (apiUrl: string) => {
    getChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
        chatLogs: import("./types").ChatLog[];
    }>;
    deleteChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec>;
    deleteChatLog: (sessionId: string, chatLogId: string) => Promise<import("./types").ResponseSpec>;
    chatLogs: {
        getChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            chatLogs: import("./types").ChatLog[];
        }>;
        deleteChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec>;
        deleteChatLog: (sessionId: string, chatLogId: string) => Promise<import("./types").ResponseSpec>;
    };
    getCustomWords: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        customWords: import("./types").CustomWord[];
    }>;
    getCustomWord: (sessionId: string, customWordID: string) => Promise<import("./types").ResponseSpec & {
        customWord: import("./types").CustomWord;
    }>;
    deleteCustomWord: (sessionId: string, key: string) => Promise<import("./types").ResponseSpec>;
    postCustomWord: (sessionId: string, customWord: Pick<import("./types").CustomWord, "word"> & Pick<import("./types").CustomWord, "definition">) => Promise<import("./types").ResponseSpec & {
        customWord: import("./types").CustomWord;
    }>;
    patchCustomWord: (sessionId: string, customWord: Partial<import("./types").CustomWord> & {
        customWordID: string;
    }) => Promise<import("./types").ResponseSpec>;
    customDictionary: {
        getCustomWords: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            customWords: import("./types").CustomWord[];
        }>;
        getCustomWord: (sessionId: string, customWordID: string) => Promise<import("./types").ResponseSpec & {
            customWord: import("./types").CustomWord;
        }>;
        deleteCustomWord: (sessionId: string, key: string) => Promise<import("./types").ResponseSpec>;
        postCustomWord: (sessionId: string, customWord: Pick<import("./types").CustomWord, "word"> & Pick<import("./types").CustomWord, "definition">) => Promise<import("./types").ResponseSpec & {
            customWord: import("./types").CustomWord;
        }>;
        patchCustomWord: (sessionId: string, customWord: Partial<import("./types").CustomWord> & {
            customWordID: string;
        }) => Promise<import("./types").ResponseSpec>;
    };
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
    getContentQualityIndexes: (memoriID: string) => Promise<import("./types").ResponseSpec & {
        contentQualityIndex: number;
        answerQualityIndex: number;
        unansweredQuestions: number;
    }>;
    getTextQualityIndexes: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        textQualityIndex: number;
        undefinedWords: string[];
        contentTextQualityIndex: number;
        faultyMemories?: import("./types").Memory[] | undefined;
    }>;
    getEventLogs: (sessionId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
        eventLogs: import("./types").EventLog[];
    }>;
    getMemoryEventLogs: (sessionId: string, memoryId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
        eventLogs: import("./types").EventLog[];
    }>;
    getIntentEventLogs: (sessionId: string, intentId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
        eventLogs: import("./types").EventLog[];
    }>;
    stats: {
        getStatistics: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            statistics: import("./types").Stats;
        }>;
        getContentQualityIndexes: (memoriID: string) => Promise<import("./types").ResponseSpec & {
            contentQualityIndex: number;
            answerQualityIndex: number;
            unansweredQuestions: number;
        }>;
        getTextQualityIndexes: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            textQualityIndex: number;
            undefinedWords: string[];
            contentTextQualityIndex: number;
            faultyMemories?: import("./types").Memory[] | undefined;
        }>;
        getEventLogs: (sessionId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
            eventLogs: import("./types").EventLog[];
        }>;
        getMemoryEventLogs: (sessionId: string, memoryId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
            eventLogs: import("./types").EventLog[];
        }>;
        getIntentEventLogs: (sessionId: string, intentId: string, strDateFrom: string, strDateTo: string) => Promise<import("./types").ResponseSpec & {
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
    getWordVector: (sessionId: string, word: string) => Promise<import("./types").ResponseSpec & {
        vector: number[];
    }>;
    getSimilarWords: (sessionId: string, word: string) => Promise<import("./types").ResponseSpec & {
        similarWords: string[];
    }>;
    guessLanguage: (sessionId: string, text: string) => Promise<import("./types").ResponseSpec & {
        languageGuesses: {
            [lang: string]: number;
        };
    }>;
    computeSimilarity: (sessionId: string, referenceText: string, referenceTextType: "QUESTION" | "ANSWER", comparisonText: string, comparisonTextType: "QUESTION" | "ANSWER") => Promise<import("./types").ResponseSpec & {
        similarity: number;
        similarityLevel: "NONE" | "LOW" | "MEDIUM" | "HIGH";
    }>;
    checkWords: (sessionId: string, text: string) => Promise<import("./types").ResponseSpec & {
        undefinedWords: string[];
    }>;
    nlp: {
        getWordVector: (sessionId: string, word: string) => Promise<import("./types").ResponseSpec & {
            vector: number[];
        }>;
        getSimilarWords: (sessionId: string, word: string) => Promise<import("./types").ResponseSpec & {
            similarWords: string[];
        }>;
        guessLanguage: (sessionId: string, text: string) => Promise<import("./types").ResponseSpec & {
            languageGuesses: {
                [lang: string]: number;
            };
        }>;
        computeSimilarity: (sessionId: string, referenceText: string, referenceTextType: "QUESTION" | "ANSWER", comparisonText: string, comparisonTextType: "QUESTION" | "ANSWER") => Promise<import("./types").ResponseSpec & {
            similarity: number;
            similarityLevel: "NONE" | "LOW" | "MEDIUM" | "HIGH";
        }>;
        checkWords: (sessionId: string, text: string) => Promise<import("./types").ResponseSpec & {
            undefinedWords: string[];
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
    getIntents: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        intents: (import("./types").Intent & {
            intentID: string;
        })[];
    }>;
    getIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec & {
        intent: import("./types").Intent & {
            intentID: string;
        };
    }>;
    patchIntent: (sessionId: string, intent: Partial<import("./types").Intent> & {
        intentID: string;
    }) => Promise<import("./types").ResponseSpec>;
    deleteIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
    createIntent: (sessionId: string, intent: import("./types").Intent) => Promise<import("./types").ResponseSpec & {
        intentID: string;
    }>;
    getIntentSlots: (sessionId: string) => Promise<import("./types").ResponseSpec & {
        intentSlots: (import("./types").IntentSlot & {
            intentSlotID: string;
        })[];
    }>;
    getIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec & {
        intentSlot: import("./types").IntentSlot & {
            intentSlotID: string;
        };
    }>;
    patchIntentSlot: (sessionId: string, intentSlot: Partial<import("./types").IntentSlot> & {
        intentSlotID: string;
    }) => Promise<import("./types").ResponseSpec>;
    deleteIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
    createIntentSlot: (sessionId: string, intentSlot: import("./types").IntentSlot) => Promise<import("./types").ResponseSpec & {
        intentSlotID: string;
    }>;
    intents: {
        getIntents: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            intents: (import("./types").Intent & {
                intentID: string;
            })[];
        }>;
        getIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec & {
            intent: import("./types").Intent & {
                intentID: string;
            };
        }>;
        patchIntent: (sessionId: string, intent: Partial<import("./types").Intent> & {
            intentID: string;
        }) => Promise<import("./types").ResponseSpec>;
        deleteIntent: (sessionId: string, intentId: string) => Promise<import("./types").ResponseSpec>;
        createIntent: (sessionId: string, intent: import("./types").Intent) => Promise<import("./types").ResponseSpec & {
            intentID: string;
        }>;
        getIntentSlots: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            intentSlots: (import("./types").IntentSlot & {
                intentSlotID: string;
            })[];
        }>;
        getIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec & {
            intentSlot: import("./types").IntentSlot & {
                intentSlotID: string;
            };
        }>;
        patchIntentSlot: (sessionId: string, intentSlot: Partial<import("./types").IntentSlot> & {
            intentSlotID: string;
        }) => Promise<import("./types").ResponseSpec>;
        deleteIntentSlot: (sessionId: string, slotId: string) => Promise<import("./types").ResponseSpec>;
        createIntentSlot: (sessionId: string, intentSlot: import("./types").IntentSlot) => Promise<import("./types").ResponseSpec & {
            intentSlotID: string;
        }>;
    };
    importCSV: (sessionId: string, csvRows: string[], params: import("./engine/importExport").ImportCSVParams) => Promise<import("./types").ResponseSpec & import("./engine/importExport").ImportReponse>;
    exportCSV: (sessionID: string, params: import("./engine/importExport").ExportCSVParams) => Promise<string>;
    importExport: {
        importCSV: (sessionId: string, csvRows: string[], params: import("./engine/importExport").ImportCSVParams) => Promise<import("./types").ResponseSpec & import("./engine/importExport").ImportReponse>;
        exportCSV: (sessionID: string, params: import("./engine/importExport").ExportCSVParams) => Promise<string>;
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
    postDateSelectedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    postPlaceSelectedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    postTagSelectedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
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
        postDateSelectedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        postPlaceSelectedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        postTagSelectedEvent: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    };
    getCorrelationPairs: (sessionId: string) => Promise<import("./types").ResponseSpec>;
    deleteCorrelationPair: (sessionId: string, pairId: string) => Promise<import("./types").ResponseSpec>;
    correlationPairs: {
        getCorrelationPairs: (sessionId: string) => Promise<import("./types").ResponseSpec>;
        deleteCorrelationPair: (sessionId: string, pairId: string) => Promise<import("./types").ResponseSpec>;
    };
};
export default _default;

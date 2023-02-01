import * as constants from './constants';
declare const api: (hostname?: string | undefined) => {
    constants: typeof constants;
    asset: {
        getResourceUrl: ({ type, resourceURI, sessionID, baseURL, }: import("./helpers/asset").ResourceURLParams) => string;
    };
    getChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
        chatLogs: import("./types").ChatLog[];
    }>;
    getSessionChatLogs: (sessionId: string, chatLogSessionID: string) => Promise<import("./types").ResponseSpec & {
        chatLogs: import("./types").ChatLog[];
    }>;
    deleteChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec>;
    deleteChatLog: (sessionId: string, chatLogId: string) => Promise<import("./types").ResponseSpec>;
    chatLogs: {
        getChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            chatLogs: import("./types").ChatLog[];
        }>;
        getSessionChatLogs: (sessionId: string, chatLogSessionID: string) => Promise<import("./types").ResponseSpec & {
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
    getUnansweredQuestionsPaginated: (sessionId: string, from: number, howMany: number) => Promise<import("./types").ResponseSpec & {
        count: number;
        unansweredQuestions: import("./types").UnansweredQuestion[];
    }>;
    postUnansweredQuestion: (sessionId: string, unansweredQuestion: import("./types").UnansweredQuestion) => Promise<import("./types").ResponseSpec & {
        unansweredQuestion: import("./types").UnansweredQuestion;
    }>;
    deleteUnansweredQuestion: (sessionId: string, unansweredQuestionId: string) => Promise<import("./types").ResponseSpec>;
    unansweredQuestions: {
        getUnansweredQuestions: (sessionId: string) => Promise<import("./types").ResponseSpec & {
            unansweredQuestions: import("./types").UnansweredQuestion[];
        }>;
        getUnansweredQuestionsPaginated: (sessionId: string, from: number, howMany: number) => Promise<import("./types").ResponseSpec & {
            count: number;
            unansweredQuestions: import("./types").UnansweredQuestion[];
        }>;
        postUnansweredQuestion: (sessionId: string, unansweredQuestion: import("./types").UnansweredQuestion) => Promise<import("./types").ResponseSpec & {
            unansweredQuestion: import("./types").UnansweredQuestion;
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
    getMemories: (sessionId: string, type?: "ALL" | "CONTENTS" | "DEFAULTS" | "DRAFTS" | undefined) => Promise<import("./types").ResponseSpec & {
        memories: import("./types").Memory[];
    }>;
    getMemoriesPaginated: (sessionId: string, from: number, howMany: number, type?: "ALL" | "CONTENTS" | "DEFAULTS" | "DRAFTS" | undefined) => Promise<import("./types").ResponseSpec & {
        count: number;
        memories: import("./types").Memory[];
    }>;
    getMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec & {
        memory: import("./types").Memory;
    }>;
    patchMemory: (sessionId: string, memory: import("./types").Memory) => Promise<import("./types").ResponseSpec>;
    deleteMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    postMemory: (sessionId: string, memory: Pick<import("./types").Memory, "text" | "creationTimestamp" | "lastChangeTimestamp" | "placeName" | "memoryType" | "lastRead" | "readOccurrencies" | "receiverID" | "receiverTag" | "receiverName" | "media" | "textVariants" | "answers" | "title" | "titleVariants" | "date" | "dateUncertaintyDays" | "placeLatitude" | "placeLongitude" | "placeUncertaintyKm" | "preformatted" | "conclusive" | "help" | "notPickable" | "hints" | "minTimeout" | "maxTimeout" | "contextVarsToSet" | "contextVarsToMatch" | "contextVars" | "creationName" | "creationSessionID" | "lastChangeName" | "lastChangeSessionID">) => Promise<import("./types").ResponseSpec & {
        memoryID: string;
    }>;
    getMemoryAccess: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
    memories: {
        getMemories: (sessionId: string, type?: "ALL" | "CONTENTS" | "DEFAULTS" | "DRAFTS" | undefined) => Promise<import("./types").ResponseSpec & {
            memories: import("./types").Memory[];
        }>;
        getMemoriesPaginated: (sessionId: string, from: number, howMany: number, type?: "ALL" | "CONTENTS" | "DEFAULTS" | "DRAFTS" | undefined) => Promise<import("./types").ResponseSpec & {
            count: number;
            memories: import("./types").Memory[];
        }>;
        getMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec & {
            memory: import("./types").Memory;
        }>;
        patchMemory: (sessionId: string, memory: import("./types").Memory) => Promise<import("./types").ResponseSpec>;
        deleteMemory: (sessionId: string, memoryId: string) => Promise<import("./types").ResponseSpec>;
        postMemory: (sessionId: string, memory: Pick<import("./types").Memory, "text" | "creationTimestamp" | "lastChangeTimestamp" | "placeName" | "memoryType" | "lastRead" | "readOccurrencies" | "receiverID" | "receiverTag" | "receiverName" | "media" | "textVariants" | "answers" | "title" | "titleVariants" | "date" | "dateUncertaintyDays" | "placeLatitude" | "placeLongitude" | "placeUncertaintyKm" | "preformatted" | "conclusive" | "help" | "notPickable" | "hints" | "minTimeout" | "maxTimeout" | "contextVarsToSet" | "contextVarsToMatch" | "contextVars" | "creationName" | "creationSessionID" | "lastChangeName" | "lastChangeSessionID">) => Promise<import("./types").ResponseSpec & {
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
    importCSV: (sessionId: string, csvRows: string[], params: import("./types").ImportCSVParams) => Promise<import("./types").ResponseSpec & import("./types").ImportReponse>;
    exportCSV: (sessionID: string, params: import("./types").ExportCSVParams) => Promise<string>;
    importExport: {
        importCSV: (sessionId: string, csvRows: string[], params: import("./types").ImportCSVParams) => Promise<import("./types").ResponseSpec & import("./types").ImportReponse>;
        exportCSV: (sessionID: string, params: import("./types").ExportCSVParams) => Promise<string>;
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
    getCorrelationPairs: (sessionId: string, from?: number | undefined, howMany?: number | undefined) => Promise<import("./types").ResponseSpec & {
        correlationPairs: import("./types").CorrelationPair[];
    }>;
    postCorrelationPair: (sessionId: string, correlationPair: import("./types").CorrelationPair) => Promise<import("./types").ResponseSpec & {
        correlationPair: import("./types").CorrelationPair;
    }>;
    deleteCorrelationPair: (sessionId: string, pairId: string) => Promise<import("./types").ResponseSpec>;
    correlationPairs: {
        getCorrelationPairs: (sessionId: string, from?: number | undefined, howMany?: number | undefined) => Promise<import("./types").ResponseSpec & {
            correlationPairs: import("./types").CorrelationPair[];
        }>;
        postCorrelationPair: (sessionId: string, correlationPair: import("./types").CorrelationPair) => Promise<import("./types").ResponseSpec & {
            correlationPair: import("./types").CorrelationPair;
        }>;
        deleteCorrelationPair: (sessionId: string, pairId: string) => Promise<import("./types").ResponseSpec>;
    };
    backend: {
        getTenantNotifications: (tenantID: string) => Promise<import("./types").ResponseSpec & {
            notifications: import("./types").Notification[];
        }>;
        getUserNotifications: (authToken: string) => Promise<import("./types").ResponseSpec & {
            notifications: import("./types").Notification[];
        }>;
        getTenantConsumptionLogs: (authToken: string, tenantID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            consumptionLogs: import("./types").ConsumptionLog[];
        }>;
        getUserConsumptionLogs: (authToken: string, userID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            consumptionLogs: import("./types").ConsumptionLog[];
        }>;
        getMemoriConsumptionLogs: (authToken: string, memoriID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            consumptionLogs: import("./types").ConsumptionLog[];
        }>;
        getSentInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
            invitations: import("./types").Invitation[];
        }>;
        getMemoriInvitations: (authToken: string, memoriId: string) => Promise<import("./types").ResponseSpec & {
            invitations: import("./types").Invitation[];
        }>;
        getReceivedInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
            invitations: import("./types").Invitation[];
        }>;
        getAllInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
            invitations: import("./types").Invitation[];
        }>;
        getInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        updateInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">> & {
            invitationID: string;
        }) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        deleteInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec>;
        acceptInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        rejectInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        sendInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">>) => Promise<import("./types").ResponseSpec & {
            invitation: import("./types").Invitation;
        }>;
        getMemoriIntegrationsList: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
            integrations: import("./types").Integration[];
        }>;
        getAllIntegrationsList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            integrations: import("./types").Integration[];
        }>;
        getIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec & {
            integration: import("./types").Integration;
        }>;
        deleteIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec>;
        createIntegration: (authToken: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
            integration: import("./types").Integration;
        }>;
        updateIntegration: (authToken: string, integrationID: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
            integration: import("./types").Integration;
        }>;
        userSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
        userConfirmSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
            token?: string | undefined;
        }>;
        userLogin: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
            token?: string | undefined;
            flowID?: string | undefined;
        }>;
        userLogout: (authToken: string) => Promise<import("./types").ResponseSpec>;
        getUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
        getUsersList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            users: import("./types").User[];
        }>;
        deleteUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec>;
        updateUser: (authToken: string, userID: string, user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
        resetPassword: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
        resetConfirm: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
            token?: string | undefined;
            flowID?: string | undefined;
        }>;
        recoverUsername: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
        getTenantConfig: (tenantName: string) => Promise<import("./types").ResponseSpec & {
            tenant: import("./types").Tenant;
        }>;
        resendVerificationCode: (user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec>;
        createUser: (authToken: string, user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec & {
            user: import("./types").User;
        }>;
        getTenantPublicMemoriList: (tenant: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getTenantMetaverseMemoriList: (tenant: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getPublicMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getAllMemori: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getUserMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getSharedMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori[];
        }>;
        getTenantCategories: (tenant: string) => Promise<import("./types").ResponseSpec & {
            memoriCategories: string[];
        }>;
        getMemoriConfigs: (authToken: string) => Promise<import("./types").ResponseSpec & {
            memoriConfigs: import("./types").MemoriConfig[];
        }>;
        createMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        updateMemori: (authToken: string, memori: Partial<import("./types").Memori> & {
            memoriID: string;
        }) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        deleteMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec>;
        getMemoriById: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        getMemoriByUserAndId: (tenantName: string, userID: string, memoriID: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        getMemori: (tenant: string, userName: string, memoriName: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
            memori: import("./types").Memori;
        }>;
        getMemoriSessions: (authToken: string, memoriID: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
            totalSessions: number;
            validSessions: number;
        }>;
        transferMemori: (authToken: string, memori: import("./types").Memori & {
            ownerTenantName: string;
            ownerUserName: string;
        }) => Promise<import("./types").ResponseSpec>;
        memoriContentUpdated: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec>;
        getUploadAssetURL: (authToken: string, memoriID: string, memoryID?: string | undefined) => string;
        uploadAsset: (fileName: string, fileUrl: string, authToken: string, memoriID: string, memoryID?: string | undefined) => Promise<import("./types").ResponseSpec & {
            asset: import("./types").Asset;
        }>;
        getAsset: (fileName: string, sessionID: string) => Promise<any>;
        updateAsset: (authToken: string, assetURL: string, asset: import("./types").Asset) => Promise<import("./types").ResponseSpec & {
            asset: import("./types").Asset;
        }>;
        deleteAsset: (authToken: string, assetURL: string) => Promise<import("./types").ResponseSpec>;
        asset: {
            getUploadAssetURL: (authToken: string, memoriID: string, memoryID?: string | undefined) => string;
            uploadAsset: (fileName: string, fileUrl: string, authToken: string, memoriID: string, memoryID?: string | undefined) => Promise<import("./types").ResponseSpec & {
                asset: import("./types").Asset;
            }>;
            getAsset: (fileName: string, sessionID: string) => Promise<any>;
            updateAsset: (authToken: string, assetURL: string, asset: import("./types").Asset) => Promise<import("./types").ResponseSpec & {
                asset: import("./types").Asset;
            }>;
            deleteAsset: (authToken: string, assetURL: string) => Promise<import("./types").ResponseSpec>;
        };
        memori: {
            getTenantPublicMemoriList: (tenant: string) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori[];
            }>;
            getTenantMetaverseMemoriList: (tenant: string) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori[];
            }>;
            getPublicMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori[];
            }>;
            getAllMemori: (authToken: string) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori[];
            }>;
            getUserMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori[];
            }>;
            getSharedMemoriList: (authToken: string) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori[];
            }>;
            getTenantCategories: (tenant: string) => Promise<import("./types").ResponseSpec & {
                memoriCategories: string[];
            }>;
            getMemoriConfigs: (authToken: string) => Promise<import("./types").ResponseSpec & {
                memoriConfigs: import("./types").MemoriConfig[];
            }>;
            createMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori;
            }>;
            updateMemori: (authToken: string, memori: Partial<import("./types").Memori> & {
                memoriID: string;
            }) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori;
            }>;
            deleteMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec>;
            getMemoriById: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori;
            }>;
            getMemoriByUserAndId: (tenantName: string, userID: string, memoriID: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori;
            }>;
            getMemori: (tenant: string, userName: string, memoriName: string, authToken?: string | undefined) => Promise<import("./types").ResponseSpec & {
                memori: import("./types").Memori;
            }>;
            getMemoriSessions: (authToken: string, memoriID: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
                totalSessions: number;
                validSessions: number;
            }>;
            transferMemori: (authToken: string, memori: import("./types").Memori & {
                ownerTenantName: string;
                ownerUserName: string;
            }) => Promise<import("./types").ResponseSpec>;
            memoriContentUpdated: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec>;
        };
        user: {
            userSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
                user: import("./types").User;
            }>;
            userConfirmSignIn: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
                user: import("./types").User;
                token?: string | undefined;
            }>;
            userLogin: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
                user: import("./types").User;
                token?: string | undefined;
                flowID?: string | undefined;
            }>;
            userLogout: (authToken: string) => Promise<import("./types").ResponseSpec>;
            getUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec & {
                user: import("./types").User;
            }>;
            getUsersList: (authToken: string) => Promise<import("./types").ResponseSpec & {
                users: import("./types").User[];
            }>;
            deleteUser: (authToken: string, userID: string) => Promise<import("./types").ResponseSpec>;
            updateUser: (authToken: string, userID: string, user: import("./types").User) => Promise<import("./types").ResponseSpec & {
                user: import("./types").User;
            }>;
            resetPassword: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
            resetConfirm: (user: import("./types").User) => Promise<import("./types").ResponseSpec & {
                user: import("./types").User;
                token?: string | undefined;
                flowID?: string | undefined;
            }>;
            recoverUsername: (user: import("./types").User) => Promise<import("./types").ResponseSpec>;
            getTenantConfig: (tenantName: string) => Promise<import("./types").ResponseSpec & {
                tenant: import("./types").Tenant;
            }>;
            resendVerificationCode: (user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec>;
            createUser: (authToken: string, user: Partial<import("./types").User>) => Promise<import("./types").ResponseSpec & {
                user: import("./types").User;
            }>;
        };
        integration: {
            getMemoriIntegrationsList: (authToken: string, memoriID: string) => Promise<import("./types").ResponseSpec & {
                integrations: import("./types").Integration[];
            }>;
            getAllIntegrationsList: (authToken: string) => Promise<import("./types").ResponseSpec & {
                integrations: import("./types").Integration[];
            }>;
            getIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec & {
                integration: import("./types").Integration;
            }>;
            deleteIntegration: (authToken: string, integrationID: string) => Promise<import("./types").ResponseSpec>;
            createIntegration: (authToken: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
                integration: import("./types").Integration;
            }>;
            updateIntegration: (authToken: string, integrationID: string, integration: import("./types").Integration) => Promise<import("./types").ResponseSpec & {
                integration: import("./types").Integration;
            }>;
        };
        invitation: {
            getSentInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
                invitations: import("./types").Invitation[];
            }>;
            getMemoriInvitations: (authToken: string, memoriId: string) => Promise<import("./types").ResponseSpec & {
                invitations: import("./types").Invitation[];
            }>;
            getReceivedInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
                invitations: import("./types").Invitation[];
            }>;
            getAllInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
                invitations: import("./types").Invitation[];
            }>;
            getInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
                invitation: import("./types").Invitation;
            }>;
            updateInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">> & {
                invitationID: string;
            }) => Promise<import("./types").ResponseSpec & {
                invitation: import("./types").Invitation;
            }>;
            deleteInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec>;
            acceptInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
                invitation: import("./types").Invitation;
            }>;
            rejectInvitation: (authToken: string, invitationId: string) => Promise<import("./types").ResponseSpec & {
                invitation: import("./types").Invitation;
            }>;
            sendInvitation: (authToken: string, invitation: Partial<Pick<import("./types").Invitation, "memoriID" | "isInviter" | "isInvitee" | "text" | "destinationEMail" | "destinationName" | "tag" | "pin" | "type" | "state" | "creationTimestamp" | "lastChangeTimestamp">>) => Promise<import("./types").ResponseSpec & {
                invitation: import("./types").Invitation;
            }>;
        };
        consumptionLogs: {
            getTenantConsumptionLogs: (authToken: string, tenantID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
                consumptionLogs: import("./types").ConsumptionLog[];
            }>;
            getUserConsumptionLogs: (authToken: string, userID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
                consumptionLogs: import("./types").ConsumptionLog[];
            }>;
            getMemoriConsumptionLogs: (authToken: string, memoriID: string, type: "Daily" | "Monthly", dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<import("./types").ResponseSpec & {
                consumptionLogs: import("./types").ConsumptionLog[];
            }>;
        };
        notifications: {
            getTenantNotifications: (tenantID: string) => Promise<import("./types").ResponseSpec & {
                notifications: import("./types").Notification[];
            }>;
            getUserNotifications: (authToken: string) => Promise<import("./types").ResponseSpec & {
                notifications: import("./types").Notification[];
            }>;
        };
    };
};
export default api;

import * as constants from './constants';
declare const api: (hostname?: string | undefined) => {
    speech: (AZURE_COGNITIVE_SERVICES_TTS_KEY: string, DEBUG?: boolean) => (lang: string, voiceType: "FEMALE" | "MALE") => {
        speak: (text: string, onAudioEnd?: ((sender: import("microsoft-cognitiveservices-speech-sdk").IPlayer) => void) | undefined) => void;
        isSpeaking: () => boolean;
        stopSpeaking: () => void;
        recognize: (onRecognized: (transcript: string) => void) => void;
        isRecognizing: () => boolean;
        stopRecognizing: (onStop?: (() => void) | undefined) => void;
    };
    constants: typeof constants;
    asset: {
        getResourceUrl: ({ type, resourceURI, sessionID, baseURL, }: import("./helpers/asset").ResourceURLParams) => string;
    };
    postTestSlot: () => Promise<import("./types").ResponseSpec>;
    postTestIntent: () => Promise<import("./types").ResponseSpec>;
    webhooks: {
        postTestSlot: () => Promise<import("./types").ResponseSpec>;
        postTestIntent: () => Promise<import("./types").ResponseSpec>;
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
    postMemori: (memori: Partial<Pick<import("./types").Memori, "creationTimestamp" | "lastChangeTimestamp" | "name" | "password" | "recoveryTokens" | "newPassword" | "ownerUserID" | "ownerTenantName" | "memoriConfigurationID" | "description" | "engineMemoriID" | "isGiver" | "isReceiver" | "giverTag" | "giverPIN" | "privacyType" | "secretToken" | "minimumNumberOfRecoveryTokens" | "totalNumberOfRecoveryTokens" | "avatarURL" | "coverURL" | "needsPosition" | "voiceType" | "culture" | "publishedInTheMetaverse" | "metaverseEnvironment" | "properties" | "integrations" | "sentInvitations" | "receivedInvitations" | "categories" | "ownerUserName">>) => Promise<import("./types").ResponseSpec>;
    patchMemori: (memori: Partial<import("./types").Memori> & {
        memoriID: string;
    }) => Promise<import("./types").ResponseSpec>;
    deleteMemori: (memoriId: string) => Promise<import("./types").ResponseSpec>;
    postSearchMemori: () => Promise<import("./types").ResponseSpec>;
    memori: {
        postMemori: (memori: Partial<Pick<import("./types").Memori, "creationTimestamp" | "lastChangeTimestamp" | "name" | "password" | "recoveryTokens" | "newPassword" | "ownerUserID" | "ownerTenantName" | "memoriConfigurationID" | "description" | "engineMemoriID" | "isGiver" | "isReceiver" | "giverTag" | "giverPIN" | "privacyType" | "secretToken" | "minimumNumberOfRecoveryTokens" | "totalNumberOfRecoveryTokens" | "avatarURL" | "coverURL" | "needsPosition" | "voiceType" | "culture" | "publishedInTheMetaverse" | "metaverseEnvironment" | "properties" | "integrations" | "sentInvitations" | "receivedInvitations" | "categories" | "ownerUserName">>) => Promise<import("./types").ResponseSpec>;
        patchMemori: (memori: Partial<import("./types").Memori> & {
            memoriID: string;
        }) => Promise<import("./types").ResponseSpec>;
        deleteMemori: (memoriId: string) => Promise<import("./types").ResponseSpec>;
        postSearchMemori: () => Promise<import("./types").ResponseSpec>;
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
    backend: {
        getSentInvitations: (authToken: string) => Promise<import("./types").ResponseSpec & {
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
        updateMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec & {
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
            updateMemori: (authToken: string, memori: import("./types").Memori) => Promise<import("./types").ResponseSpec & {
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
    };
};
export default api;

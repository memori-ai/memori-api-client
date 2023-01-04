export declare type Error = {
    code: number;
    message: string;
};
export declare type ResponseSpec = {
    requestID: string;
    requestDateTime: string;
    resultCode: number;
    resultMessage: string;
};
export declare type MemoriConfig = {
    memoriConfigID: string;
    useCase: string;
    culture: string;
    descriptions?: {
        [lang: string]: string;
    };
    dialogExamples?: {
        [lang: string]: string;
    };
    logoURL?: string;
};
export declare type Memori = {
    memoriID: string;
    name: string;
    password?: string;
    recoveryTokens?: string[];
    newPassword?: string;
    ownerUserID?: string;
    ownerTenantName?: string;
    memoriConfigurationID: string;
    description: string;
    engineMemoriID?: string;
    isGiver?: boolean;
    isReceiver?: boolean;
    giverTag?: string;
    giverPIN?: string;
    privacyType: 'PUBLIC' | 'PRIVATE' | 'SECRET';
    secretToken?: string;
    minimumNumberOfRecoveryTokens?: number;
    totalNumberOfRecoveryTokens?: number;
    avatarURL?: string;
    coverURL?: string;
    needsPosition?: boolean;
    voiceType: string;
    culture?: string;
    publishedInTheMetaverse?: boolean;
    metaverseEnvironment?: string;
    exposed?: boolean;
    disableR2R3Loop?: boolean;
    disableR4Loop?: boolean;
    properties?: {
        [key: string]: any;
    };
    creationTimestamp?: string;
    lastChangeTimestamp?: string;
    blockedUntil?: string;
    integrations?: Integration[];
    sentInvitations?: Invitation[];
    receivedInvitations?: Invitation[];
    categories?: string[];
    ownerUserName?: string;
    gamificationLevel?: GamificationLevel;
    contentQualityIndex?: number;
    contentQualityIndexTimestamp?: string;
};
export declare type Venue = {
    placeName: string;
    latitude: number;
    longitude: number;
    uncertainty?: number;
};
export declare type NotificationPrefs = {
    /**
     * @type {string='None'}
     * minLength: 1
     * Periodicity of chat log extraction (hourly, daily, weekly or none).
     * When chat log extraction is enabled (i.e. not None) chats performed on Memori owned or managed by the User
     * will be periodically collected and sent via e-mail.
     */
    chatLogExtractionPeriod?: 'None' | 'Hourly' | 'Daily' | 'Weekly';
    /**
     * @type {number=5}
     * Minimum lines for an extracted chat to be sent via e-mail to the User.
     * If 0 no filter is applied.
     * Default is 5.
     */
    chatLogExtractionMinLines?: number;
    /**
     * @type {string=}
     * Memori ID to which these preferences apply to.
     * If Null these preferences have default value and apply to all Memori objects not specified with other preferences.
     */
    memoriID?: string;
};
export declare type User = {
    tenant?: string;
    userID?: string;
    userName?: string;
    password?: string;
    newPassword?: string;
    eMail?: string;
    admin?: boolean;
    superAdmin?: boolean;
    verificationCode?: string;
    flowID?: string;
    newsletterSubscribed?: boolean;
    maxMemori?: number;
    canCreateMemori?: boolean;
    canAccessAPI?: boolean;
    canRunSnippets?: boolean;
    canEditIntegrations?: boolean;
    canEditDynamicIntents?: boolean;
    canEditMemoriChaining?: boolean;
    maxFreeSessions?: number;
    nonFreeSessionCost?: number;
    creationTimestamp?: string;
    lastChangeTimestamp?: string;
    referral?: string;
    couponCode?: string;
    paying?: boolean;
    notificationPrefs?: NotificationPrefs[];
};
export declare type IntegrationResource = {
    name: string;
    url: string;
};
export declare type IntegrationType = 'GOOGLE' | 'ALEXA' | 'LANDING_EXPERIENCE';
export declare type Integration = {
    integrationID?: string;
    memoriID?: string;
    type: IntegrationType;
    state?: 'NEW' | 'PROCESSING' | 'DONE' | 'REMOVED' | 'ERROR' | 'WAITING_MANUAL_ACTION' | 'DRAFT' | 'NOT_VALIDATED' | 'PUBLISHED';
    publish?: boolean;
    deviceEmails?: string[];
    invocationText?: string;
    jobID?: string;
    customData?: string;
    resources?: IntegrationResource[];
    creationTimestamp?: string | Date;
    lastChangeTimestamp?: string | Date;
    dataResult?: {
        [key: string]: any;
    };
};
export declare type PublicIntegrationListItem = {
    integration: Integration;
    memori: Memori;
    memoriUser: User;
    remoteMemoriId?: string;
};
export interface RcFile extends File {
    readonly lastModifiedDate: string | Date;
    uid: string;
}
export declare type UploadFileStatus = 'error' | 'success' | 'done' | 'uploading' | 'removed';
export interface UploadFile<T = any> {
    uid: string;
    size?: number;
    name: string;
    fileName?: string;
    lastModified?: number;
    lastModifiedDate?: string | Date;
    url?: string;
    status?: UploadFileStatus;
    percent?: number;
    thumbUrl?: string;
    originFileObj?: RcFile;
    response?: T;
    error?: any;
    linkProps?: any;
    type?: string;
    xhr?: T;
    preview?: string;
}
export declare type TenantConfig = {
    name: string;
    showNewUser: boolean;
    requirePosition: boolean;
    feedbackURL?: string;
};
export declare type Tenant = {
    id: string;
    theme: string;
    config: TenantConfig;
    disableRegistration?: boolean;
    maxMemoriPerAdmin?: number;
    maxMemoriPerUser?: number;
    maxTotalMemori?: number;
    maxAdmins?: number;
    maxUsers?: number;
    usersCanCreateMemori?: boolean;
    usersCanAccessAPI?: boolean;
    usersCanEditIntegrations?: boolean;
    usersCanEditDynamicIntents?: boolean;
    usersCanEditMemoriChaining?: boolean;
    maxFreeSessions?: number;
    maxFreeSessionsPerUser?: number;
    nonFreeSessionCost?: number;
};
export declare type OpenSession = {
    memoriID: string;
    password?: string;
    recoveryTokens?: string[];
    tag?: string;
    pin?: string;
    initialContextVars?: {
        [key: string]: string;
    };
    initialQuestion?: string;
};
export declare type MemoriSession = {
    sessionID: string;
    currentState: DialogState;
    stats?: Stats;
};
export declare type Medium = {
    mediumID: string;
    url?: string;
    content?: string;
    mimeType: string;
    title?: string;
    properties?: {
        [key: string]: any;
    };
    creationTimestamp?: string;
    creationName?: string;
    lastChangeTimestamp?: string;
    lastChangeName?: string;
};
export declare type Stats = {
    totalReceivers: number;
    receiversWithMemories: number;
    totalMemories: number;
    publicMemories: number;
    memoriesWithMedia: number;
    totalQuestions: number;
    publicQuestions: number;
    questionsWithMoreThanOneAnswer: number;
    totalStories: number;
    publicStories: number;
    storiesWithDate: number;
    storiesWithPlace: number;
    storiesWithDateAndPlace: number;
    unansweredQuestions: number;
    successfulCorrelations: number;
    failedCorrelations: number;
};
export declare type GamificationLevel = {
    points: number;
    badge: string;
    pointsForCurrentBadge: number;
    nextBadge?: {
        points: number;
        badge: string;
    };
};
export declare type EventLog = {
    eventLogID: string;
    timestamp: string;
    eventType: string;
    memoriID: string;
    userAgent?: string;
    ipAddress?: string;
    memoryID?: string;
    intentID?: string;
    enteredText?: string;
    receiverTag?: string;
};
export declare type UserLog = {
    timestamp: string;
    count: number;
};
export declare type UsersLog = {
    timestamp: string;
    countUsers: number;
    countRecurrentUsers: number;
};
export declare type TranslatedHint = {
    text: string;
    originalText: string;
};
export declare type DialogState = {
    state: string;
    stateName: string;
    previousState: string;
    confidence?: number;
    confidenceLevel?: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
    emission?: string;
    continuationEmitted?: boolean;
    lastMatchedMemoryID?: string;
    acceptsTimeout?: boolean;
    acceptsAbort?: boolean;
    acceptsMedia?: boolean;
    acceptsDate?: boolean;
    acceptsPlace?: boolean;
    acceptsTag?: boolean;
    hints?: string[];
    timeout?: number;
    translatedHints?: TranslatedHint[];
    currentTag?: string;
    currentDate?: string;
    currentPlaceName?: string;
    currentLatitude?: number;
    currentLongitude?: number;
    currentUncertaintyKm?: number;
    giverID?: string;
    currentReceiverID?: string;
    currentMemoryID?: string;
    media?: Medium[];
    knownTags?: {
        [key: string]: string;
    };
    contextVars?: {
        [key: string]: string;
    };
};
export declare type Person = {
    personID?: string;
    personType: 'Giver' | 'Receiver';
    name?: string;
    information?: string;
    pin: string;
    tag: string;
    creationTimestamp?: string;
    creationName?: string;
    lastChangeTimestamp?: string;
    lastChangeName?: string;
};
export declare type PersonificationProfile = {
    tag?: string;
    pin?: string;
    name?: string;
    sessionID: string;
};
export declare type Invitation = {
    invitationID?: string;
    memoriID: string;
    isInviter?: boolean;
    isInvitee?: boolean;
    text?: string;
    destinationEMail: string;
    destinationName: string;
    tag: string;
    pin: string;
    type: string;
    state?: 'PENDING' | 'ACCEPTED' | 'REJECTED';
    creationTimestamp?: string;
    lastChangeTimestamp?: string;
};
export declare type LocalizationKeyContent = {
    key: string;
    value: string;
};
export declare type LocalizationKey = LocalizationKeyContent & {
    creationTimestamp?: string;
    creationName?: string;
    lastChangeTimestamp?: string;
    lastChangeName?: string;
};
export declare type Asset = {
    assetID: string;
    assetURL: string;
    mimeType: string;
    memoriID: string;
    originalFileName?: string;
    title?: string;
    engineMemoryID?: string;
    creationTimestamp: string;
    lastChangeTimestamp: string;
};
export declare type SearchQuery = {
    text: string;
    searchType?: 'Literal' | 'Semantic';
    date?: string;
    dateUncertaintyDays?: number;
    placeName?: string;
    placeLatitude?: number;
    placeLongitude?: number;
    placeUncertaintyKm?: number;
    tag?: string;
    ignoreLastRead?: boolean;
    excludedMemoryIDs?: string[];
    numberOfResults?: number;
};
export declare type SearchMatches = {
    confidence: number;
    confidenceLevel?: 'LOW' | 'MEDIUM' | 'HIGH';
    memory: Memory;
};
export declare type Answer = {
    text: string;
    preformatted?: boolean;
    creationTimestamp?: string;
    creationName?: string;
    lastChangeTimestamp?: string;
    lastChangeName?: string;
};
export declare type Memory = {
    memoryID: string;
    memoryType: string;
    lastRead?: string;
    readOccurrencies?: number;
    receiverID?: string;
    receiverTag?: string;
    receiverName?: string;
    media?: Medium[];
    text?: string;
    textVariants?: string[];
    answers?: Answer[];
    title?: string;
    titleVariants?: string[];
    date?: string;
    dateUncertaintyDays?: number;
    placeName?: string;
    placeLatitude?: number;
    placeLongitude?: number;
    placeUncertaintyKm?: number;
    preformatted?: boolean;
    conclusive?: boolean;
    help?: boolean;
    notPickable?: boolean;
    hints?: string[];
    minTimeout?: number;
    maxTimeout?: number;
    contextVarsToSet?: {
        [variable: string]: string;
    };
    contextVarsToMatch?: {
        [variable: string]: string;
    };
    creationTimestamp?: string;
    creationName?: string;
    lastChangeTimestamp?: string;
    lastChangeName?: string;
};
export declare type UnansweredQuestion = {
    unansweredQuestionID?: string;
    text: string;
    occurrencies: number;
    receiverID?: string;
    receiverTag?: string;
    receiverName?: string;
    creationTimestamp?: string;
    creationName?: string;
    lastChangeTimestamp?: string;
    lastChangeName?: string;
    suggestions?: SearchMatches[];
};
export declare type Message = {
    text: string;
    translatedText?: string;
    fromUser?: boolean;
    media?: Medium[];
    initial?: boolean;
    timestamp?: string;
    contextVars?: {
        [key: string]: string;
    };
};
export declare type ConsumptionLog = {
    consumptionLogID: string;
    from: string;
    to: string;
    type: 'Daily' | 'Monthly';
    userID?: string;
    memoriID?: string;
    totalSessions: number;
    validSessions: number;
};
export declare type Notification = {
    notificationID: string;
    timestamp: string;
    severity: 'INFO' | 'WARN' | 'ALERT';
    texts: {
        'it-IT': string;
        'en-US': string;
        [lang: string]: string;
    };
};
export declare type ChatMedium = {
    /**
     * URL of the Medium. If specified, the Content property is Null.
     */
    url?: string;
    /**
     * Content of the Medium. If specified, the URL property is Null.
     */
    content?: string;
    /**
     * MIME type of the Medium.
     */
    mimeType: string;
    /**
     * Title of the Medium.
     */
    title?: string;
    /**
     * Key-value pairs for additional structured content storage.
     */
    properties?: {
        [key: string]: any;
    };
};
export declare type ChatLogLine = {
    /**
     * @type {string}
     * Timestamp UTC of the line.
     */
    timestamp: string;
    /**
     * @type {boolean}
     * If True the line is the text from a Text Entered Event. If False the line is Dialog State Machine emission.
     */
    inbound: boolean;
    /**
     * @type {string}
     * Text of the line.
     */
    text: string;
    /**
     * Media attached with the Dialog State Machine emission, if present. Empty if the line is inbound.
     */
    media?: ChatMedium[];
    /**
     * Dialog State Machine context variables after the emission, if present. Empty if the line is inbound.
     */
    contextVars?: {
        [key: string]: string;
    };
};
export declare type ChatLog = {
    /**
     * @param {string}
     * Chat Log object ID.
     */
    chatLogID: string;
    /**
     * @type {string}
     * Timestamp UTC of the chat log creation.
     */
    timestamp: string;
    /**
     * @type {string}
     * ID of the related Memori object in the Engine.
     * Relates to Memori.engineMemoriID
     */
    memoriID: string;
    /**
     * @type {string}
     * ID of the related session.
     */
    sessionID: string;
    /**
     * @type {?string}
     * Tag of the Person object authenticated in the session. Null if the chat was performed by anonymous.
     */
    receiverTag?: string;
    /**
     * List of Chat Line objects of this chat.
     */
    lines: ChatLogLine[];
};
export declare type Utterance = {
    /**
     * Utterance object ID.
     */
    utteranceID?: string;
    /**
     * Accepted Utterance object for its corresponding intent,
     * i.e. the text sentece that can be used to express the intent.
     * An Utterance may include variable parts in the sentence by the use of one or more slots.
     * Slots are specified using the syntax {slot}, where "slot" is the slot name.
     * If present, their value is part of the IntentWebHookRequest passed to the web hook.
     * Each slot can be present only once in the sentence, and must have been previously defined with a Intent Slot object.
     * A special slot is the {date} slot, which represents a period of time such as "today", "yesterday", "last week", "next month" etc.
     * Its values is passed in the IntentWebHookRequest as the BeginUTC and EndUTC properties.
     */
    text: string;
    /**
     * Timestamp of creation.
     * Always present when reading/receiving an object,
     * ignored when writing/sending an object.
     */
    creationTimestamp?: string;
    /**
     * ID of the session that created this object.
     */
    creationSessionID?: string;
    /**
     * Timestamp of latest change.
     * Always present when reading/receiving an object,
     * ignored when writing/sending an object.
     */
    lastChangeTimestamp?: string;
    /**
     * ID of the latest session that changed this object.
     */
    lastChangeSessionID?: string;
};
export declare type Intent = {
    /**
     * Intent object ID.
     */
    intentID?: string;
    /**
     * Memory type, e.g. Internal or WebHook.
     * Internal intents are a limited subset implemented internally,
     * while WebHook intents perform an external HTTP POST call to the specified web hook,
     * passing an IntentWebHookRequest and expecting an IntentWebHookRespose in response.
     * When updating an existing intent, this property is ignored.
     */
    intentType?: 'Internal' | 'WebHook';
    /**
     * Name of the Intent object.
     * It is part of the IntentWebHookRequest request passed to the web hook.
     */
    name: string;
    /**
     * List of accepted Utterance objects for this Intent,
     * i.e. the list of text senteces that can be used to express the intent.
     * Utterances may include variable parts in the sentence by the use of one or more slots.
     * Slots are specified using the syntax {slot}, where "slot" is the slot name.
     * If present, their value is part of the IntentWebHookRequest passed to the web hook.
     * Each slot can be present only once in the sentence, and must have been previously defined with a Intent Slot object.
     * A special slot is the {date} slot, which represents a period of time such as "today", "yesterday", "last week", "next month" etc.
     * Its values is passed in the IntentWebHookRequest as the BeginUTC and EndUTC properties.
     */
    utterances: Utterance[];
    /**
     * If True this Intent may be executed to serve a Timeout event in R1 state.
     * In this case the utterance is null.
     * In case more than one Intent have this flag set, a random one is picked.
     */
    timeoutIntent?: boolean;
    /**
     * HTTP URL of the web hook to be called when the intent is recognized.
     * If the intent is of Internal type, it is ignored.
     */
    webHook?: string;
    /**
     * Time to cache the intent response, expressed in minutes.
     * May be fractional. A minimum of 0.1 minutes (i.e. 6 seconds) is always applied.
     * A cached intent response is used only when the a subsequent intent request matches exactly the original request.
     * See also RequestValidityMinutes in WebHookRequest.
     */
    validityMinutes?: number;
    /**
     * Timestamp of creation.
     * Always present when reading/receiving an object,
     * ignored when writing/sending an object.
     */
    creationTimestamp?: string;
    /**
     * ID of the session that created this object.
     */
    creationSessionID?: string;
    /**
     * Timestamp of latest change.
     * Always present when reading/receiving an object,
     * ignored when writing/sending an object.
     */
    lastChangeTimestamp?: string;
    /**
     * ID of the latest session that changed this object.
     */
    lastChangeSessionID?: string;
};
export declare type IntentSlot = {
    /**
     * Intent Slot object ID.
     */
    intentSlotID?: string;
    /**
     * Name of the Intent Slot object.
     * It is part of the SlotWebHookRequest request passed to the web hook.
     */
    name: string;
    /**
     * List of possible values of the slot.
     * A slot may be composed of fixed values in this property,
     * dynamic values fetched from the web hook, or a combination of both.
     * Each value is considered only onces (duplicate values are ignored).
     */
    values?: string[];
    /**
     * HTTP URL of the web hook to be called when the slot values must be fetched.
     * May be null if the slot is composed only of fixed values in the Values property.
     * If specified, the web hook is called periodically with an HTTP POST call,
     * passing a SlotWebHookRequest and expecting a SlotWebHookRespose in response.
     * Periodicity is determined by the ValidityMinutes property.
     */
    webHook?: string;
    /**
     * Time to cache the slot values, expressed in minutes.
     * May be fractional. A minimum of 0.5 minutes (i.e. 30 seconds) is always applied.
     * See also RequestValidityMinutes in WebHookRequest.
     */
    validityMinutes?: number;
    /**
     * Timestamp of creation.
     * Always present when reading/receiving an object,
     * ignored when writing/sending an object.
     */
    creationTimestamp?: string;
    /**
     * ID of the session that created this object.
     */
    creationSessionID?: string;
    /**
     * Timestamp of latest change.
     * Always present when reading/receiving an object,
     * ignored when writing/sending an object.
     */
    lastChangeTimestamp?: string;
    /**
     * ID of the latest session that changed this object.
     */
    lastChangeSessionID?: string;
};
export declare type CustomWord = {
    customWordID: string;
    word: string;
    /**
     * Definition of the Custom Word, in terms of sums and subtractions of existing words or custom words.
     * The syntax for a Custom Word definition is as follows: word1 [+-] word2 [+-] word3...
     * If the operator is omitted it is assumed to be the last specified from the left, and if no operator has been specified it is assumed to be the sum.
     * E.g.:
     *  - alpha beta gamma is equivalent to alpha + beta + gamma
     *  - alpha beta - gamma deta is equivalent to alpha + beta - gamma - delta
     */
    definition: string;
    creationTimestamp: string;
    creationSessionID: string;
    lastChangeTimestamp: string;
    lastChangeSessionID: string;
};

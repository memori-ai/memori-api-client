export declare type Error = {
  code: number;
  message: string;
};

export declare type ResponseSpec = {
  count?: number;
  requestID: string;
  requestDateTime: string;
  resultCode: number;
  resultMessage: string;
};

export declare type MemoriConfig = {
  memoriConfigID: string;
  useCase: string;
  culture: string;
  descriptions?: { [lang: string]: string };
  dialogExamples?: { [lang: string]: string };
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
  /**
   * @readonly
   * URL of the avatar 3D model represting this Memori object.
   * It is obtained from the CustomData property of the public home page Integration object for this Memori, if present.
   * To be changed, the Integration object must be changed. Returned during Get operations. Ignored in other cases.
   */
  avatar3DURL?: string;
  /**
   * @readonly
   * Original URL of the avatar 3D model represting this Memori object.
   * It is obtained from the CustomData property of the public home page Integration object for this Memori, if present.
   * To be changed, the Integration object must be changed. Returned during Get operations. Ignored in other cases.
   */
  avatarOriginal3DURL?: string;
  needsPosition?: boolean;
  needsDateTime?: boolean;
  voiceType: string;
  culture?: string;
  publishedInTheMetaverse?: boolean;
  metaverseEnvironment?: string;
  exposed?: boolean;
  disableR2R3Loop?: boolean;
  disableR4Loop?: boolean;
  disableR5Loop?: boolean;
  ageRestriction?: number;
  confidenceOffset?: number;
  nsfw?: boolean;
  enableCompletions?: boolean;
  completionDescription?: string;
  enableDeepThought?: boolean;
  enableBoardOfExperts?: boolean;
  disableCompletionMediaExtraction?: boolean;
  completionConfigNameForQuestionAnswering?: string;
  completionConfigForQuestionAnswering?: CompletionConfig;
  completionConfigNameForImportExport?: string;
  completionConfigForImportExport?: CompletionConfig;
  completionConfigNameForDeepThought?: string;
  completionConfigForDeepThought?: CompletionConfig;
  completionTemperature?: number;
  completionMaxTokens?: number;
  chainingMemoriID?: string;
  chainingBaseURL?: string;
  chainingPassword?: string;
  /**
   * @type {string=}
   * User name of the optional integration with the DCM platform.
   * If set, this Memori will be able send outcomes to the DCM platform when specific contents are emitted during the conversation.
   * When updating, set it to a single dash character (-) to remove a previously set integration.
   */
  dcmUser?: string;
  /**
   * @type {string=}
   * Shared secret of the optional integration with the DCM platform.
   * Required if DCMUser is set.
   */
  dcmSecret?: string;
  /**
   * @type {string=}
   * Application context of the optional integration with the DCM platform.
   * Required if DCMUser is set.
   */
  dcmAppContext?: string;
  properties?: [{ [key: string]: string }];
  creationTimestamp?: string;
  lastChangeTimestamp?: string;
  blockedUntil?: string;
  integrations?: Integration[];
  sentInvitations?: Invitation[];
  receivedInvitations?: Invitation[];
  categories?: string[];
  enableMacroFunctions?: string[];
  macroParameters?: { [key: string]: any };
  ownerUserName?: string;
  gamificationLevel?: GamificationLevel;
  contentQualityIndex?: number;
  contentQualityIndexTimestamp?: string;
  alwaysAnswerWithCompletion?: boolean;
};

export declare type CompletionConfig = {
  /**
   * @type {string}
   * Completion Config object ID.
   */
  completionConfigID: string;
  /**
   * @type {string}
   * Completion Config unique name.
   */
  configName: string;
  /**
   * @type {string=}
   * Optional Completion Config description.
   */
  description?: string;
  /**
   * @type {string}
   * Name of the Completion Provider. Currently possible values are:
   * - OpenAI
   * - Anthropic
   * - Mistral
   * - Azure_OpenAI
   */
  provider:
    | 'OpenAI'
    | 'Anthropic'
    | 'Mistral'
    | 'Azure_OpenAI'
    | 'AWS_Anthropic';
  /**
   * @type {string=}
   * URL of the Completion Provider API end-point. If not specified, the default end-point for the provider is used.
   */
  endPoint?: string;
  /**
   * @type {string=}
   * API key of the Completion Provider API end-point.
   */
  apiKey?: string;
  /**
   * @type {string}
   * Name of the Completion Model. This is provider-specific, and for some providers (e.g. Azure) it is also part of the end-point URL.
   */
  model: string;
  /**
   * @type {boolean=}
   * If True this configuration can be used for Question & Answer operations.
   * If not specified False is assumed. At least one use must be enabled.
   */
  questionAnsweringEnabled?: boolean;
  /**
   * @type {boolean=}
   * If True this configuration can be used for Import/Export operations.
   * If not specified False is assumed. At least one use must be enabled.
   */
  importExportEnabled?: boolean;
  /**
   * @type {boolean=}
   * If True this configuration can be used for Deep Thought operations.
   * If not specified False is assumed. At least one use must be enabled.
   */
  deepThoughtEnabled?: boolean;
  /**
   * @type {string=}
   * ID of the User this Config belongs to. Returned during Get operations if the user is the owner or an administrator.
   */
  ownerUserID?: string;
  /**
   * @type {string=}
   * Name of the User this Config belongs to.
   */
  ownerUserName?: string;
  /**
   * @type {string=}
   * Name of the Tenant this Config belongs to.
   */
  ownerTenantName?: string;
  /**
   * @type {boolean=}
   * If True this configuration can be used by other users of the owner's Tenant.
   * If not specified False is assumed.
   */
  visibleToTenantUsers?: boolean;
  /**
   * @type {boolean=}
   * If True this configuration can be used by users of other Tenants.
   * If not specified False is assumed.
   */
  visibleToOtherUsers?: boolean;
  /**
   * @type {boolean=}
   * If True this configuration is used as the default (for the operations it is enabled for) when a new Memori is created.
   * The use as default requires that the configuration is visible at least to the owner's Tenant users.
   */
  useAsDefault?: boolean;
  /**
   * @type {boolean=}
   * If True the use of this configuration is chargeable to the customer.
   */
  chargeable?: boolean;
  /**
   * @type {string=}
   * Region of the AWS Anthropic model.
   */
  region?: string;
  /**
   * @type {string=}
   * Model ID of the AWS Anthropic model.
   */
  modelId?: string;
  /**
   * @type {string=}
   * Access Key ID of the AWS Anthropic model.
   */
  accessKeyId?: string;
  /**
   * @type {string=}
   * Secret Access Key of the AWS Anthropic model.
   */
  secretAccessKey?: string;

  /**
   * @type {string=}
   * If True this configuration is applied to all Memori of the Tenant.
   */
  applyTo?: ApplyToOption;
};

export declare type ApplyToOption =
  | 'ALL_TENANT_MEMORI_ONLY_QA_PURPOSE'
  | 'ALL_TENANT_MEMORI_ONLY_IE_PURPOSE'
  | 'ALL_TENANT_MEMORI_ONLY_DT_PURPOSE'
  | 'ALL_TENANT_MEMORI_ALL_ENABLED_PURPOSES';

export declare type Venue = {
  placeName: string;
  latitude: number;
  longitude: number;
  uncertainty?: number;
};

export declare type NominatimItem = {
  place_id: number;
  lat: number;
  lon: number;
  display_name: string;
  type: string;
  category: string;
  importance: number;
  place_rank: number;
  address?: {
    house_number?: string;
    road?: string;
    hamlet?: string;
    village?: string;
    suburb?: string;
    town?: string;
    city?: string;
    municipality?: string;
    county?: string;
    state?: string;
    country: string;
  };
  boundingbox: [number, number, number, number];
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
  dontSendInvitationEmail?: boolean;
  flowID?: string;
  newsletterSubscribed?: boolean;
  maxMemori?: number;
  numMemori?: number;
  enableMemoriCreation?: boolean;
  enableBoardOfExperts?: boolean;
  enableDCMIntegration?: boolean;
  enableBadges?: boolean;
  enableVirtualSpaces?: boolean;
  enableDeepThought?: boolean;
  monthSessions?: number;
  monthValidSessions?: number;
  maxFreeSessions?: number;
  nonFreeSessionCost?: number;
  monthCompletions?: number;
  maxCompletions?: number;
  monthImportedSize?: number;
  maxImportSize?: number;
  creationTimestamp?: string;
  lastChangeTimestamp?: string;
  referral?: string;
  couponCode?: string;
  paying?: boolean;
  notificationPrefs?: NotificationPrefs[];
  birthDate?: string;
  age?: number;
  tnCAndPPAccepted?: boolean;
  tnCAndPPAcceptanceDate?: string;
  pAndCUAccepted?: boolean;
  pAndCUAcceptanceDate?: string;
  avatarURL?: string;
  avatar3DURL?: string;
  avatar3DURLType?: string;
};

export declare type UserFilters = {
  periodFrom?: string | undefined; //
  periodTo?: string | undefined; //
  tenantName?: string | undefined; //
  text?: string | undefined; //
  numberOfResults: number; //
  startFrom: number; //
  orderBy?: OrderBy | undefined; //
};

export declare type OrderBy =
  | 'CreationDateAscending'
  | 'CreationDateDescending'
  | 'MemoriCountAscending'
  | 'MemoriCountDescending'
  | 'MonthCompletionsAscending'
  | 'MonthCompletionsDescending'
  | 'MonthImportSizeAscending'
  | 'MonthImportSizeDescending';

export declare type MemoriUser = {
  userID: string;
  email: string;
  userName: string;
  tenantName: string;
  disableDeepThought: boolean;

  creationTimestamp: string;
  creationSessionID: string;
  lastChangeTimestamp: string;
  lastChangeSessionID: string;
};

export declare type Topic = {
  topicID: string;
  /**
   * Topic name.
   */
  name: string;
  /**
   * Topic weight, i.e. the ratio between the number of times this topic has been referenced versus to total number of references.
   */
  weight: number;

  creationTimestamp: string;
  creationSessionID: string;
  lastChangeTimestamp: string;
  lastChangeSessionID: string;
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
  state?:
    | 'NEW'
    | 'PROCESSING'
    | 'DONE'
    | 'REMOVED'
    | 'ERROR'
    | 'WAITING_MANUAL_ACTION'
    | 'DRAFT'
    | 'NOT_VALIDATED'
    | 'PUBLISHED';
  publish?: boolean;
  deviceEmails?: string[];
  invocationText?: string;
  jobID?: string;
  customData?: string;
  resources?: IntegrationResource[];
  creationTimestamp?: string | Date;
  lastChangeTimestamp?: string | Date;
  dataResult?: { [key: string]: any };
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

export declare type UploadFileStatus =
  | 'error'
  | 'success'
  | 'done'
  | 'uploading'
  | 'removed';

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

export declare type Tenant = {
  tenantID?: string;
  name?: string;
  aliases?: string[];
  description?: string;
  logoURL?: string;
  adminEmail?: string;
  theme?: string;
  feedbackURL?: string;
  adminCount?: number;
  userCount?: number;
  memoriCount?: number;
  disableRegistration?: boolean;
  maxMemoriPerAdmin?: number;
  maxMemoriPerUser?: number;
  maxTotalMemori?: number;
  maxAdmins?: number;
  maxUsers?: number;
  maxFreeSessions?: number;
  maxFreeSessionsPerUser?: number;
  nonFreeSessionCost?: number;
  maxCompletions?: number;
  maxCompletionsPerUser?: number;
  maxImportSize?: number;
  maxImportSizePerUser?: number;
  paying?: boolean;
  enableUserMemoriCreation?: boolean;
  enableBoardOfExperts?: boolean;
  enableDCMIntegration?: boolean;
  enableBadges?: boolean;
  enableDeepThought?: boolean;
  enableVirtualSpaces?: boolean;
  billingDelegation?: boolean;
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

export declare type ConsumptionLog = {
  consumptionLogID: string;
  from: string;
  to: string;
  type: 'Daily' | 'Monthly';
  userID?: string;
  userName?: string;
  tenantName?: string;
  memoriID?: string;
  memoriName?: string;
  totalSessions: number;
  validSessions: number;
  completions: number;
  deepThoughtValidSessions: number;
  deepThoughtCompletions: number;
  importedSize: number;
  nonChargeableCompletions?: number;
  nonChargeableDeepThoughtCompletions?: number;
  nonChargeableImportedSize?: number;
  promptTokens: { [key: string]: number };
  completionTokens: { [key: string]: number };
};

export declare type Notification = {
  notificationID: string;
  timestamp: string;
  severity: 'INFO' | 'WARN' | 'ALERT' | 'AWARD';
  texts: {
    'it-IT': string;
    'en-US': string;
    [lang: string]: string;
  };
  additionalInfo?: {
    [key: string]: string;
  };
};

/**
 * Specifications for a Memory search.
 */
export declare type SearchQuery = {
  /**
   * @type {string}
   * Search query. If omitted, either a Date or a Place must be set. Used only for Search, ignored for Random picking and Memory Hints.
   */
  text?: string;

  /**
   * @type {?string=Literal}
   * How to interpret the search query in the Text property:
   * - If "Semantic", the query is interpreted as a full question in natural language, and the search is performed in the same way a question would be posed to the Dialog State Machine.
   * - If "Literal", the query is intented as keyword, or part of keyword, and the search is perfomed by looking for it as a substring in the text and titles of Memories.
   * - If omitted the search is Semantic by default. Used only for Search, ignored for Random picking and Memory Hints.
   */
  searchType?: 'Literal' | 'Semantic';

  /**
   * @type {?string}
   * Approximate date of Memories to limit the search to. Applies only to Stories. Used for Search and Random picking, ignored for Memory Hints.
   */
  date?: string;

  /**
   * @type {?number}
   * Uncertainty of the date, in days. Required if Date is specified. Used for Search and Random picking, ignored for Memory Hints.
   */
  dateUncertaintyDays?: number;

  /**
   * @type {?string}
   * Name of the approximate place of Memories to limit the search to. Applies only to Stories. Used for Search and Random picking, ignored for Memory Hints.
   */
  placeName?: string;

  /**
   * @type {?number}
   * Latitude of the approximate place of Memories to limit the search to. Applies only to Stories. Used for Search and Random picking, ignored for Memory Hints.
   */
  placeLatitude?: number;

  /**
   * @type {?number}
   * Longitude of the approximate place of Memories to limit the search to. Applies only to Stories. Used for Search and Random picking, ignored for Memory Hints.
   */
  placeLongitude?: number;

  /**
   * @type {?number}
   * Uncertainty of place, in kilometers. Required if PlaceName or PlaceLatitude and PlaceLongitude are specified. Used for Search and Random picking, ignored for Memory Hints.
   */
  placeUncertaintyKm?: number;

  /**
   * @type {?string}
   * If specified, the search is extended to Memories associated with a Receiver with this tag. If omitted the search is limited to public Memories. As a special case, if the Giver tag is specified then the search is extended to all Memories, whoever they are associated to.
   */
  tag?: string;

  /**
   * @type {?boolean}
   * If set to True, recently picked Memories will not be deprioritized. This means that a Memory never picked and a Memory picked just a moment ago will have the same probability to be picked again. If omitted or set to False, recently picked Memories will be much less probable to be picked again. Used only for Random picking, ignored for Search and Memory Hints.
   */
  ignoreLastRead?: boolean;

  /**
   * @type {?string[]}
   * Optional list of Memory IDs that must be excluded from the search result.
   */
  excludedMemoryIDs?: string[];

  /**
   * @type {?number=5}
   * Optional number of results. If omitted defaults to 5.
   */
  numberOfResults?: number;

  /**
   * Optional context to be matched with ContextVarsToMatch of Memories. Used for Search, Random picking and Memory Hints.
   */
  contextVars?: { [variable: string]: string };

  /**
   * Optional context to be matched with ContextVarsToSet of Memories. Used only for Search, ignored for Random picking and Memory Hints.
   */
  contextVarsToSet?: { [variable: string]: string };

  /**
   * @type {?string[]}
   * Optional list of memory tags. If specified, the search is limited to Memories including ALL the specified tags.
   */
  memoryTags?: string[];

  /**
   * @type {?boolean}
   * If set to True, the search is limited to Memories with media.
   */
  withMediaOnly?: boolean;

  /**
   * @type {?string}
   * If specified, the search is limited to Memories of this type.
   */
  memoryType?:
    | 'Question'
    | 'Story'
    | 'Default'
    | 'CompletionDraft'
    | 'CompletionPlaceholder'
    | 'ExpertReference';
};

/**
 * 	Specifications of a Match object.
 */
export declare type SearchMatches = {
  /**
   * @type {number}
   * Match confidence, between 0.0 (no confidence) and 1.0 (full confidence).
   */
  confidence: number;

  /**
   * @type {?string}
   * Confidence level, e.g. LOW, MEDIUM or HIGH.
   */
  confidenceLevel?: 'LOW' | 'MEDIUM' | 'HIGH';

  /**
   * @type {Memory}
   */
  memory: Memory;
};

/**
 * Specifications of an Answer object.
 */
export declare type Answer = {
  text: string;
  preformatted?: boolean;
  creationTimestamp?: string;
  creationName?: string;
  lastChangeTimestamp?: string;
  lastChangeName?: string;
};

/**
 * Specifications of a Memory object.
 */
export declare type Memory = {
  memoryID: string;
  memoryType:
    | 'Question'
    | 'Story'
    | 'Default'
    | 'CompletionDraft'
    | 'ExpertReference';
  lastRead?: string;
  readOccurrences?: number;
  receiverID?: string;
  receiverTag?: string;
  receiverName?: string;
  media?: Medium[];
  /**
   * @deprecated
   */
  text?: string;
  /**
   * @deprecated
   */
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
  tags?: string[];
  minTimeout?: number;
  maxTimeout?: number;
  /**
   * Used for Unanswered Questions
   */
  contextVars?: { [variable: string]: string };
  contextVarsToSet?: { [variable: string]: string };
  contextVarsToMatch?: { [variable: string]: string };
  /**
   * Optional type of the outcome to be sent to the DCM platform when this Memory is emitted.
   * @default "COMMON"
   */
  dcmOutcomeType?: string;
  /**
   * Optional code of the outcome to be sent to the DCM platform when this Memory is emitted.
   */
  dcmOutcomeCode?: string;
  creationTimestamp?: string;
  creationName?: string;
  creationSessionID?: string;
  lastChangeTimestamp?: string;
  lastChangeName?: string;
  lastChangeSessionID?: string;
};

export declare type UnansweredQuestion = {
  unansweredQuestionID?: string;
  text: string;
  occurrences: number;
  receiverID?: string;
  receiverTag?: string;
  receiverName?: string;
  creationTimestamp?: string;
  creationName?: string;
  creationSessionID?: string;
  lastChangeTimestamp?: string;
  lastChangeName?: string;
  lastChangeSessionID?: string;
  suggestions?: SearchMatches[];
  contextVars?: { [variable: string]: string };
};

export declare type OpenSession = {
  memoriID: string;
  password?: string;
  recoveryTokens?: string[];
  tag?: string;
  pin?: string;
  initialContextVars?: { [key: string]: string };
  initialQuestion?: string;
  forceCloseSessions?: boolean;
  birthDate?: string;
  additionalInfo?: {
    /**
     * a valid Memori.AI login token for the user, from which information like
     * the user's unique ID, their birth date and e-mail are retrieved
     * (for age verification and DCM integration purposes)
     */
    loginToken?: string;
    /**
     * the language ISO code used to open the session
     * (may be different from the Memori language if a translation layer is in place)
     */
    language?: string;
    /**
     * the referral URL, as reported by the hosting web application
     */
    referral?: string;
    /**
     * the offset in minutes of the UTC time zone from the user's local time zone.
     * Note: the offset is subtracted from UTC to obtain the user's local time, not added.
     * E.g.: it should be -120 for CEST, not +120.
     */
    timeZoneOffset?: string;
    [key: string]: string | undefined;
  };
};
export declare type MemoriSession = {
  sessionID: string;
  currentState: DialogState;
  gamificationPoints?: number;
  undefinedWords?: string[];
  lastUpdateTimestamp?: string;
};

export declare type Medium = {
  mediumID: string;
  url?: string;
  content?: string;
  mimeType: string;
  title?: string;
  properties?: { [key: string]: any };
  creationTimestamp?: string;
  creationName?: string;
  lastChangeTimestamp?: string;
  lastChangeName?: string;
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
  translatedEmission?: string;
  continuationEmitted?: boolean;
  emitter?: string;
  completion?: boolean;
  lastMatchedMemoryID?: string;
  acceptsTimeout?: boolean;
  acceptsAbort?: boolean;
  acceptsMedia?: boolean;
  acceptsDate?: boolean;
  acceptsPlace?: boolean;
  acceptsTag?: boolean;
  acceptsFeedback?: boolean;
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
  knownTags?: { [key: string]: string };
  contextVars?: { [key: string]: string };
  memoryTags?: string[];
};

export declare type Message = {
  memoryID?: string;
  text: string;
  translatedText?: string;
  questionAnswered?: string;
  acceptsFeedback?: boolean;
  generatedByAI?: boolean;
  fromUser?: boolean;
  media?: Medium[];
  initial?: boolean;
  emitter?: string;
  timestamp?: string;
  contextVars?: { [key: string]: string };
  date?: string;
  dateUncertaintyDays?: number;
  placeName?: string;
  placeLatitude?: number;
  placeLongitude?: number;
  placeUncertaintyKm?: number;
  tag?: string;
  memoryTags?: string[];
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
  properties?: { [key: string]: any };
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
   * @type {string=}
   * Name of the Memori that provided the text. Used with Board of Experts model.
   * Null for inbound lines, if no Board of Experts is configured, or if the Memori providing the text is the chairman of the Board.
   */
  emitter?: string;
  /**
   * Media attached with the Dialog State Machine emission, if present. Empty if the line is inbound.
   */
  media?: ChatMedium[];
  /**
   * ID of the Memory object referenced in this line.
   * @type {string}
   */
  memoryID?: string;
  /**
   * Dialog State Machine context variables after the emission, if present. Empty if the line is inbound.
   */
  contextVars?: { [key: string]: string };
  /**
   * @type {boolean}
   * If True the text is a complation obtained via a generative AI. Can only be True for outbound lines.
   */
  completion?: boolean;
  /**
   * @type {boolean}
   * If True the line is the result of a high confidence Memory object match, and as such can be subject to feedback.
   * Can only be True for outbound lines.
   */
  acceptsFeedback?: boolean;
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
   * @type {?boolean}
   * True if this chat log was performed with the Memori configured as a Board of Experts.
   */
  boardOfExperts?: boolean;

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

export declare type FunctionParameter = {
  /**
   * Function Parameter object ID.
   */
  parameterID?: string;
  /**
   * Name of the Function Parameter object.
   */
  name: string;
  /**
   * Description of the Function Parameter object. The description is provided to the generative AI to help it understand the purpose of the parameter.
   */
  description: string;
  /**
   * Parameter type, e.g. "string", "number", "integer", "boolean".
   * Currently supported types are:
   * - string: string value
   * - number: floating point value
   * - integer: integer value
   * - boolean: boolean value
   */
  parameterType: 'string' | 'number' | 'integer' | 'boolean';
  /**
   * Optional list of possible values of the parameter. If empty or null, the parameter accepts any value of the specified type.
   */
  possibleValues?: string[];
  /**
   * Whether the parameter is required or not. Default is not required.
   */
  required?: boolean;
};

export declare type Function = {
  /**
   * Function object ID.
   */
  functionID?: string;
  /**
   * Function type, e.g. Internal or WebHook.
   * Internal functions are a limited subset implemented internally,
   * while WebHook intents perform an external HTTP call to the specified web hook, using the specified templates.
   */
  functionType: 'Internal' | 'WebHook';
  /**
   * Name of the Function object.
   */
  name: string;
  /**
   * Description of the Function object. The description is provided to the generative AI to help it understand the purpose of the function.
   */
  description: string;
  /**
   * List of its Function Parameter objects. May be empty.
   */
  parameters?: FunctionParameter[];
  /**
   * HTTP URL of the web hook to be called when the function is invoked, up to the path part.
   * The query string part is specified separately.
   * It may include the value of function parameters using the syntax {parameter}, where "parameter" is the parameter name.
   * E.g.: http://example.com/{param}/something.
   */
  webHook: string;
  /**
   * HTTP method to be used when calling the web hook, e.g. "GET", "POST" etc.
   */
  httpMethod?: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  /**
   * Optional set of HTTP headers to be passed to the web hook.
   */
  httpHeaders?: { [key: string]: string };
  /**
   * Template of the HTTP query string to be passed to the web hook.
   * It may include the value of function parameters using the syntax {parameter}, where "parameter" is the parameter name.
   * E.g.: param1={param1}&param2={param2}.
   */
  httpQueryStringTemplate?: string;
  /**
   * Template of the HTTP request body to be passed to the web hook.
   * It may be in any format (JSON, XML etc.), and may include the value of function parameters using the syntax {parameter},
   * where "parameter" is the parameter name.
   * E.g.: { "param1": "{param1}", "param2": "{param2}" },
   * or: <request><param1>{param1}</param1><param2>{param2}</param2></request>.
   */
  httpBodyTemplate?: string;
  /**
   * MIME type of the HTTP request body to be passed to the web hook.
   * If not specified "text/plain" is assumed.
   */
  httpBodyContentType?: string;
  /**
   * List of extension headers to be sent to the web hook.
   * Extension headers let the web hook receive internal information on the current state of the conversation,
   * such as the session ID, current date and place, context variables etc.
   * If the function is of Internal type, it is ignored.
   * Currently supported extension headers are:
   *   - SESSION-ID: the current session ID, sent with header X-Memori-Session-ID
   *   - CURRENT-TAG: the current tag, sent with headers X-Memori-Current-Tag and X-Memori-Current-Tag-Authenticated
   *   - CURRENT-DATE: the current date in UTC, sent with header X-Memori-Current-Date
   *   - CURRENT-PLACE: the current place, sent with headers X-Memori-Current-Place-Name, X-Memori-Current-Place-Latitude, X-Memori-Current-Place-Longitude and X-Memori-Current-Place-UncertaintyKm
   *   - CONTEXT-VARS: the current context variables, sent with header X-Memori-Context-Vars, with the format NAME1:VALUE1,NAME2:VALUE2,...,NAMEn:VALUEn
   *   - USER-EMAIL: the current user email, sent with header X-Memori-User-Email
   */
  sendExtensionHeaders?: string[];
};

export declare type CorrelationPair = {
  pairID?: string;
  text1: string;
  text2: string;
  correlated: boolean;
  occurrences?: number;
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
  sessionID?: string;
};

export interface Invitation {
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
}

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
  eventType:
    | 'MemoriOpened'
    | 'MemoriClosed'
    | 'QuestionAnsweredCorrectly'
    | 'QuestionAnsweredIncorrectly'
    | 'QuestionNotAnswered'
    | 'IntentMatched';
  memoriID: string;
  sessionID: string;
  maintenanceType?:
    | 'None'
    | 'ConsumptionJob'
    | 'ChatLogExtractionJob'
    | 'ContentQualityJob';
  userAgent?: string;
  ipAddress?: string;
  additionalInfo?: OpenSession['additionalInfo'];
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

export interface CsvSpecs {
  newLine: '\n' | '\r\n';
  hasHeaders?: boolean;
  headerNames?: string[];
  questionColumnName: string;
  answerColumnName: string;
  contextVarsToMatchColumnName?: string;
  contextVarsToSetColumnName?: string;
  csvSeparator?: string;
  questionTitleVariantsSeparator?: string;
  memoryTagsColumnName?: string;
}

export interface JSONLSpecs {
  /**
   * @type {string=}
   * Name of the platform for which the JSONL is intended.
   * Currently supported values are:
   * - OpenAI: the OpenAI platform
   */
  platform?: string;
  /**
   * @type {boolean=}
   * If True the JSONL includes the instructions for the generative AI, i.e. the "System" role of each message. Used only in Export operations.
   */
  includeInstructions?: boolean;
  /**
   * @type {string=}
   * If specified, only contents created or changed after this date will be included in the export.
   */
  createdOrChangedAfter?: string;
}

export interface TxtSpecs {
  /**
   * @type {string=}
   * Proportion between the text size and the number of question-answers generated. If not specified it is assumed as MEDIUM.
   * Must be one of:
   * -  LOW: generates ~10 questions every 10K characters
   * -  MEDIUM: generates ~20 questions every 10K characters
   * -  HIGH: generates ~30 questions every 10K characters
   */
  granularity?: 'LOW' | 'MEDIUM' | 'HIGH';
  /**
   * @type {boolean=}
   * If True, for every question-answer the excerpt of the original text from which they have been generated is included as an attachment.
   * If not specified it is assumed as False.
   */
  attachSource?: boolean;
  /**
   * @type {string=}
   * Title of the source attachment, when enabled with AttachSource. If not specified it will have no title.
   */
  sourceAttachmentTitle?: string;
  /**
   * @type {string=}
   * If specified, these instructions are provided as part of the completion prompt to the generative AI when generating questions from the document.
   */
  questionsGenerationInstructions?: string;
}

export interface ImportParams {
  forceImport?: boolean;
  csvSpecs?: CsvSpecs;
  txtSpecs?: TxtSpecs;
  conclusive?: boolean;
  notPickable?: boolean;
  importName?: string;
  notes?: string;
  contextVarsToSet?: {
    [variable: string]: string;
  };
  contextVarsToMatch?: {
    [variable: string]: string;
  };
  receiverID?: string;
  addMediaLink?: string;
  linkTitleHandling?: 'FixedTitle' | 'HostName' | 'FetchFromUrl';
  linkTitle?: string;
  memoryTags?: string[];
}

export interface AnalysisParams {
  /**
   * @type {string}
   * Query to be matched with User objects in the analysis.
   */
  query: string;
  /**
   * @type {number=}
   * Threshold between 0.0 and 1.0. User objects whose match level is below this threshold will be discarded.
   * If null, all User objects will be returned.
   */
  threshold?: number;
}

export interface ImportWarning {
  warningType: 'Existing Similar Memory' | 'Internal Error';
  rowNumber?: number;
  text?: string;
  similarTexts?: {
    text: string;
    similarityLevel: 'HIGH' | 'MEDIUM' | 'LOW';
  }[];
}

export interface AnalysisWarning {
  /**
   * @type {string}
   * Type of warning.
   * Currently supported types are:
   * - Error: an error occurred while performing analysis
   */
  warningType: 'Error' | string;
  /**
   * @type {string=}
   * When WarningType is Error reports the text of the error.
   */
  text?: string;
}

export interface ProcessStatus {
  /**
   * @type {string}
   * Process ID.
   */
  processID: string;
  /**
   * @type {string}
   * ID of the Memori object this process refers to.
   */
  memoriID: string;
  /**
   * @type {string}
   * Name of the user that started the process.
   */
  processUserName: string;
  /**
   * @type {string}
   * Process type.
   * Can be one of the following:
   *
   * - Import: for file import processes
   * - Analysis: for Deep Thought user/query analysis processes
   */
  processType: 'Import' | 'Analysis';
  /**
   * @type {string}
   * minLength: 1
   * Current status of the Import process (starting, running etc.).
   * May be one of the following:
   * - Starting: the Import process is preparing to start, but has not started yet. Will advance to Running automatically.
   * - Running: the Import process has been started and is actively processing Memory objects.
   * - Stopped: the Import process has been stopped manually, not all Memory objects may have been processed.
   * - Completed: the Import process finished successfully, all the Memory objects have been processed.
   * - Failed: the Import process terminated due to an unexpected error, not all Memory objects may have been processed.
   */
  status:
    | 'Pending'
    | 'Starting'
    | 'Running'
    | 'Stopped'
    | 'Completed'
    | 'Failed';
  /**
   * @type {string=}
   * If the Status is Failed, reports the error that caused the Import process to fail. Null otherwise.
   */
  error?: string;
  /**
   * @type {number}
   * Progress of the Import process as a fraction of 1.
   */
  progress: number;
  /**
   * @type {string?}
   * Original parameters of the Import process request, as a JSON structure, excluding the document rows.
   */
  processSpecsJSON?: string;
  /**
   * @type {string=}
   * Timestamp of start of the Import process. Null until the Import process is in Starting status.
   */
  begin?: string;
  /**
   * @type {string=}
   * Timestamp of end of the Import process. Null until the Import process is in Starting or Running status.
   */
  end?: string;
  /**
   * @type {number=}
   * Estimated time required to complete the Import process, in seconds.
   */
  eta?: number;
  /**
   * @type {number=}
   * Number of elements this Process has processed so far.
   */
  processedElements?: number;
  /**
   * @type {number=}
   * Total elements this Process is processing.
   */
  totalElements?: number;
  creationTimestamp?: string;
  lastChangeTimestamp?: string;
}

export interface ImportStatus extends ProcessStatus {
  /**
   * @type {string}
   * Import type.  Can be one of the following:
   * -  CSV: for tabular documents
   * -  TXT: for text documents
   */
  importType: 'CSV' | 'TXT';
  /**
   * @type {number}
   * Size of the imported document in characters.
   */
  importSize: number;
  /**
   * @type {string?}
   * Name of this import, if set when the Import process was requested.
   */
  importName?: string;
  /**
   * @type {number=}
   * Number of Imported Memory objects so far.
   */
  importedMemories?: number;
  /**
   * Number of Import Warning objects
   */
  importWarningsCount?: number;
  /**
   * List of Import Warning objects. May be empty.
   */
  importWarnings?: ImportWarning[];
}

export interface AnalysisStatus extends ProcessStatus {
  /**
   * @type {string}
   * Analysis type.  Can be one of the following:
   * - UserQuery: for Deep Thought User/query Match analysis
   */
  analysisType: 'UserQuery';
  /**
   * @type {string}
   * Query to be used in the analysis. Used when AnalysisType is UserQuery.
   */
  query?: string;
  /**
   * @type {number=}
   * Number of Import Warning objects
   */
  analysisWarningsCount?: number;
  /**
   * @type {AnalysisWarning[]=}
   * List of Import Warning objects. May be empty.
   */
  analysisWarnings?: AnalysisWarning[];
}

export interface UserQueryMatch {
  /**
   * @type {string}
   * Match ID. Unique and assigned by the system.
   */
  userQueryMatchID: string;
  /**
   * @type {string}
   * ID of the Analysis object this match refers to.
   */
  analysisID: string;
  /**
   * @type {string}
   * ID of the Memori object this match refers to.
   */
  memoriID: string;
  /**
   * @type {string}
   * ID of the corresponding User object on the Engine.
   */
  engineUserID: string;
  /**
   * @type {string}
   * User name.
   */
  userName: string;
  /**
   * @type {string}
   * User's Tenant name.
   */
  userTenantName: string;
  /**
   * @type {string}
   * User's e-mail.
   */
  userEmail: string;
  /**
   * @type {number}
   * Match level between the Analysis query and this User. Value is between 0 and 1, with 0.0 meaning no match and 1.0 meaning perfect match.
   */
  match: number;
}

export interface Badge {
  badgeID?: string;
  date?: string;
  name?: string;
  description?: string;
  imageURL?: string;
  tags?: string[];
  issuerName?: string;
  issuerDescription?: string;
  issuerEmail?: string;
  issuerURL?: string;
}

export interface ConsumptionItem {
  key: string;
  id: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  validSessions: number;
  completions: number;
  deepThoughtValidSessions: number;
  deepThoughtCompletions: number;
  importedSize: number;
  nonChargeableCompletions?: number;
  nonChargeableDeepThoughtCompletions?: number;
  nonChargeableImportedSize?: number;
  cost?: number;
  children?: ConsumptionItem[];
}

export interface ExpertReference {
  /**
   * @type {string}
   * Expert Reference object ID. Returned during Get operations. Ignored in other cases.
   */
  expertID: string;
  /**
   * @type {string}
   * Name of the expert. Returned during Get operations. Required during Add operations. Optional during Update operations.
   */
  name: string;
  /**
   * @type {string}
   * Description of the expert, i.e. a list of the expert's skills and knowledge. Returned during Get operations. Required during Add operations. Optional during Update operations.
   */
  description: string;
  /**
   * @type {boolean}
   * If True, this expert is used when no other expert is competent for the current question. Returned during Get operations. Optional during Add operations. Optional during Update operations.
   */
  default?: boolean;
  /**
   * @type {string}
   * ID of the expert Memori. Returned during Get operations. Required during Add operations. Optional during Update operations.
   * NOTE: engine memroi ID
   */
  expertMemoriID: string;
  /**
   * @type {string=}
   * Password of the expert Memori. Required if the chained Memori is private or secret. Optional during Add operations and Update operations. Ignore in other cases.
   */
  expertPassword?: string;
  /**
   * @type {string}
   * Base URL of a chained Memori, typically https://engine.memori.ai/. Returned during Get operations. Required during Add operations. Optional during Update operations.
   */
  expertBaseURL: string;
  creationTimestamp?: string;
  creationSessionID?: string;
  lastChangeTimestamp?: string;
  lastChangeSessionID?: string;
}

export interface KnownFact {
  /**
   * Known Fact object ID.
   * @type {string}
   */
  knownFactID: string;
  /**
   * Known Fact type, e.g. ShortTerm or LongTerm.
   * Currently possible values are:
   * - ShortTerm: this Known Fact is always used during conversations
   * - LongTerm: this Known Fact is used during conversations only if relevant to the current question
   */
  knownFactType: 'ShortTerm' | 'LongTerm';
  /**
   * Text of the Known Fact.
   */
  text: string;
  creationTimestamp?: string;
  creationSessionID?: string;
  lastChangeTimestamp?: string;
  lastChangeSessionID?: string;
}

export declare type ConsumptionData = {
  id: string;
  key: string;
  promptTokens: number;
  completionTokens: number;
  totalTokens: number;
  validSessions: number;
  completions: number;
  deepThoughtValidSessions: number;
  deepThoughtCompletions: number;
  importedSize: number;
  nonChargeableCompletions: number;
  nonChargeableDeepThoughtCompletions: number;
  nonChargeableImportedSize: number;
  children?: ConsumptionData[];
};

export declare type MacroFunction = {
  name: string;
  descriptions: {
    [key: string]: string;
  };
  macroParameters?: {
    name: string;
    descriptions: {
      [key: string]: string;
    };
    obfuscated?: boolean;
  }[];
};

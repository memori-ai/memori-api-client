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
  needsPosition?: boolean;
  voiceType: string;
  culture?: string;
  publishedInTheMetaverse?: boolean;
  metaverseEnvironment?: string;
  properties?: { [key: string]: string };
  creationTimestamp?: string;
  lastChangeTimestamp?: string;
  integrations?: Integration[];
  sentInvitations?: Invitation[];
  receivedInvitations?: Invitation[];
  categories?: string[];
  ownerUserName?: string;
};

export declare type Venue = {
  placeName: string;
  latitude: number;
  longitude: number;
  uncertainty?: number;
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
  canEditIntegrations?: boolean;
  canEditDynamicIntents?: boolean;
  canEditMemoriChaining?: boolean;
  maxFreeSessions?: number;
  creationTimestamp?: string;
  lastChangeTimestamp?: string;
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
};

export declare type OpenSession = {
  memoriID: string;
  password?: string;
  recoveryTokens?: string[];
  tag?: string;
  pin?: string;
  initialContextVars?: { [key: string]: string };
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
  properties?: { [key: string]: string };
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
  nextBadge: {
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
  emission?: string;
  acceptsTimeout?: boolean;
  acceptsAbort?: boolean;
  acceptsMedia?: boolean;
  acceptsDate?: boolean;
  acceptsPlace?: boolean;
  acceptsTag?: boolean;
  hints?: string[];
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
  contextVarsToSet?: { [variable: string]: string };
  contextVarsToMatch?: { [variable: string]: string };
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
  candidateAnswers?: SearchMatches[];
};

export declare type Message = {
  text: string;
  fromUser?: boolean;
  media?: Medium[];
  initial?: boolean;
};

import type {
  Memori,
  MemoriConfig,
  User,
  Integration,
  DialogState,
  Message,
  MemoriSession,
  Tenant,
  Memory,
  UnansweredQuestion,
  Stats,
  Person,
  EventLog,
  Invitation,
  Medium,
} from '../types';

export const user: User = {
  tenant: 'localhost:3000',
  userID: '97c42d18-ffe4-47e1-a3c7-e42729f1e6a3',
  userName: 'nzambello',
  eMail: 'nicola@rawmaterial.it',
  admin: false,
  maxMemori: 0,
  canCreateMemori: true,
  canAccessAPI: true,
  canEditIntegrations: true,
  canEditDynamicIntents: true,
  canEditMemoriChaining: true,
  maxFreeSessions: 0,
};

export const authToken: string = '768b9654-e781-4c3c-81fa-ae1529d1bfbe';

export const memori: Memori = {
  memoriID: 'be2e4a44-890b-483b-a26a-f6e122f36e2b',
  engineMemoriID: 'be2e4a44-890b-483b-a26a-f6e122f36e2c',
  name: 'Nunzio',
  memoriConfigurationID: 'MemoriCloud-it_IT',
  description:
    'Questo sono io, Nunzio Fiore, con i miei sogni, le mie parole, i miei progetti.',
  voiceType: 'male',
  isGiver: true,
  isReceiver: false,
  privacyType: 'PUBLIC',
  needsPosition: false,
  categories: [],
  ownerUserName: 'nunziofiore',
  publishedInTheMetaverse: true,
  metaverseEnvironment: 'synthwave',
  secretToken: 'awanagana',
  giverPIN: '1234',
  giverTag: '🧑‍💻',
  avatarURL: 'https://api.lorem.space/image/face?hash=0p9vyl1e',
  coverURL: 'https://api.lorem.space/image/pizza?hash=ecz70guu',
};

export const privateMemori: Memori = {
  memoriID: 'be2e4a44-890b-483b-a26a-f6e122f36e2b',
  engineMemoriID: 'be2e4a44-890b-483b-a26a-f6e122f36e2c',
  name: 'Nunzio',
  memoriConfigurationID: 'MemoriCloud-it_IT',
  description:
    'Questo sono io, Nunzio Fiore, con i miei sogni, le mie parole, i miei progetti.',
  voiceType: 'male',
  isGiver: true,
  isReceiver: false,
  privacyType: 'PRIVATE',
  needsPosition: false,
  categories: [],
  ownerUserName: 'nunziofiore',
  publishedInTheMetaverse: true,
  metaverseEnvironment: 'synthwave',
  secretToken: 'awanagana',
  giverPIN: '1234',
  giverTag: '🧑‍💻',
  avatarURL: 'https://api.lorem.space/image/face?hash=0p9vyl1e',
  coverURL: 'https://api.lorem.space/image/pizza?hash=ecz70guu',
};

export const memoriConfigsLangOnly: MemoriConfig[] = [
  {
    memoriConfigID: 'MemoriCloud-it_IT',
    useCase: 'MemoriCloud',
    culture: 'it_IT',
    descriptions: {
      it_IT: 'Memori Cloud',
    },
    dialogExamples: {
      it_IT: 'Memori Cloud',
    },
    logoURL: 'https://api.lorem.space/image/movie?hash=ecz70guu',
  },
  {
    memoriConfigID: 'MemoriCloud-en_US',
    useCase: 'MemoriCloud',
    culture: 'en_US',
    descriptions: {
      en_US: 'Memori Cloud',
    },
    dialogExamples: {
      en_US: 'Memori Cloud',
    },
    logoURL: 'https://api.lorem.space/image/game?hash=2937fnmu',
  },
];

export const memoriConfigs: MemoriConfig[] = [
  {
    memoriConfigID: 'MemoriCloud-Personal-it_IT',
    useCase: 'PERSONAL',
    culture: 'it_IT',
    descriptions: {
      it_IT: 'Memori Cloud Personal',
      en_US: 'Memori Cloud Personal',
    },
    dialogExamples: {
      it_IT: 'Memori Cloud Personal',
      en_US: 'Memori Cloud Personal',
    },
  },
  {
    memoriConfigID: 'MemoriCloud-Personal-en_US',
    useCase: 'PERSONAL',
    culture: 'en_US',
    descriptions: {
      it_IT: 'Memori Cloud Personal',
      en_US: 'Memori Cloud Personal',
    },
    dialogExamples: {
      it_IT: 'Memori Cloud Personal',
      en_US: 'Memori Cloud Personal',
    },
  },
  {
    memoriConfigID: 'MemoriCloud-Business-it_IT',
    useCase: 'BUSINESS',
    culture: 'it_IT',
    descriptions: {
      it_IT: 'Memori Cloud Business',
      en_US: 'Memori Cloud Business',
    },
    dialogExamples: {
      it_IT: 'Memori Cloud Business',
      en_US: 'Memori Cloud Business',
    },
  },
  {
    memoriConfigID: 'MemoriCloud-Business-en_US',
    useCase: 'BUSINESS',
    culture: 'en_US',
    descriptions: {
      it_IT: 'Memori Cloud Business',
      en_US: 'Memori Cloud Business',
    },
    dialogExamples: {
      it_IT: 'Memori Cloud Business',
      en_US: 'Memori Cloud Business',
    },
  },
];

export const sessionId: string = 'e995ac6f-8014-4ac0-9992-60fe87ae8b44';

export const dialogState: DialogState = {
  state: 'R1',
  previousState: 'I0',
  stateName: 'WaitingForReceiverQuestion',
  confidence: 1,
  knownTags: {
    '☠️': 'test',
    '😎': 'Ciccio',
  },
  emission: "Ciao, io sono test, c'è qualcosa che vorresti chiedermi?",
  hints: ['Va bene', 'No grazie'],
  media: [],
  acceptsTimeout: true,
  acceptsAbort: false,
  acceptsMedia: false,
  acceptsDate: false,
  acceptsPlace: false,
  acceptsTag: false,
  giverID: 'c832e2dc-403c-4baf-a3b7-2374e100dbcf',
  contextVars: {},
};

export const history: Message[] = [
  {
    text: "Ciao, io sono test, c'è qualcosa che vorresti chiedermi?",
  },
  {
    text: 'Ciccio',
    fromUser: true,
  },
  {
    text: "Mi dispiace, le mie risposte sono limitate. Devi farmi le domande giuste. C'è altro che vuoi sapere?",
  },
  {
    text: 'Come faccio a fare delle cose con questa cosa?',
    fromUser: true,
  },
  {
    text: 'Ecco qui delle cose per te.',
    media: [
      {
        mediumID: 'c6851968-5d4d-409a-ae75-f22ec077efcd',
        content: '',
        mimeType: 'text/plain',
        title: 'Properties',
      },
      {
        mediumID: 'aa139b0c-3d78-411a-a4b5-88851208ab9c',
        url: 'https://youtu.be/nFsljT1362s',
        mimeType: 'text/html',
        title: 'Arena di Verona - Nabucco - Va pensiero',
      },
      {
        mediumID: 'aa139b0c-3d78-411a-a4b5-88851208ab9d',
        url: 'https://api.lorem.space/image/game',
        mimeType: 'image/jpeg',
        title: 'Random game poster',
      },
    ],
  },
  {
    text: 'Ah, grazie! Ciao!',
    fromUser: true,
  },
  {
    text: 'Arrivederci.',
  },
];

const obj = {
  currentState: {
    name: 'Giuseppe Verdi',
    description:
      'Memori che racconta di Giuseppe Verdi, scopri opere e altre curiosità chiedendole direttamente al celebre compositore italiano.',
    sessionId: 'b092257f-26f4-4c54-8517-c4f9cf8f9c83',
    state: 'R1',
    stateName: 'WaitingForReceiverQuestion',
    currentTag: null,
    knownTags: {
      '🎵': 'Giuseppe Verdi',
      '🤣': 'mio amico',
      '😎': 'nunzio',
      '😘': 'nunzionuovo',
    },
    emission:
      "Certo, ecco qui un'esecuzione del celebre brano di Nabucco Va' Pensiero. C'è qualcos'altro che vorresti chiedermi?",
    confidence: 0.99999994,
    hints: [],
    media: [
      {
        mediumID: 'c6851968-5d4d-409a-ae75-f22ec077efcd',
        url: null,
        content: '',
        mimeType: 'text/plain',
        title: 'Properties',
        properties: {},
      },
      {
        mediumID: 'aa139b0c-3d78-411a-a4b5-88851208ab9c',
        url: 'https://youtu.be/nFsljT1362s',
        content: null,
        mimeType: 'text/html',
        title: 'Arena di Verona - Nabucco - Va pensiero',
        properties: {},
      },
    ],
    memoriId: '69757eaf-d07b-4c44-8eba-fd1653e03936',
    acceptsTimeout: true,
    acceptsAbort: false,
    acceptsMedia: false,
    acceptsDate: false,
    acceptsPlace: false,
    acceptsTag: false,
    type: 0,
    currentPlaceName: null,
    currentLatitude: null,
    currentLongitude: null,
    currentUncertaintyKm: null,
    giverID: '0d02e450-57cc-477c-9eff-a50f6e6b71a9',
    currentReceiverID: null,
    currentMemoryID: null,
    contextVars: {},
  },
  isUserMemoriOwner: false,
};

export const integration: Integration = {
  integrationID: '17826a9e-4ced-4c74-be82-da818b08b8a4',
  type: 'LANDING_EXPERIENCE',
  memoriID: '69757eaf-d07b-4c44-8eba-fd1653e03936',
  customData: `{
    "linkColor": "#f9f9f9",
    "textColor": "#ffffff",
    "buttonBgColor": "#1530e8",
    "buttonTextColor": "#fdfdfd",
    "firstTab": "talk",
    "seoTitle": "Nunzio",
    "seoDescription": "Incontra il mio gemello digitale",
    "globalBackground": "https://lh3.googleusercontent.com/proxy/guliC2f6XEOt0U8_wrsnKy9tdj6FZFS17VgDTUMzIT2l0Hr3cly84dheQDx_IQ1-01ThTLTgkX54S5rGZpoG4Q2hT-dwe4JZPlsaivK8yJm_GfDWaw3WjCRUaA",
    "innerBgColor": "light",
    "blurBackground": true,
    "name": "pagina pubblica",
    "seoImageShowAvatar": true,
    "innerBgAlpha": 0.1,
    "multilanguage": true
  }`,
  publish: true,
  creationTimestamp: '2021-11-25T09:15:40.700946',
  lastChangeTimestamp: '2021-11-25T09:15:40.700946',
  resources: [
    {
      name: 'globalBackground',
      url: 'https://backend.memori.ai/api/v1/memoriai/integration/17826a9e-4ced-4c74-be82-da818b08b8a4/resource/cloud/twin.memori.ai/3c04d4d1-1f20-44df-a690-414200aca2f5.png',
    },
  ],
};

export const stats: Stats = {
  totalReceivers: 2,
  receiversWithMemories: 1,
  totalMemories: 50,
  publicMemories: 30,
  memoriesWithMedia: 25,
  totalQuestions: 35,
  publicQuestions: 30,
  questionsWithMoreThanOneAnswer: 20,
  totalStories: 15,
  publicStories: 10,
  storiesWithDate: 5,
  storiesWithPlace: 3,
  storiesWithDateAndPlace: 2,
  unansweredQuestions: 10,
  successfulCorrelations: 5,
  failedCorrelations: 1,
};

export const currentMemori: Memori & MemoriSession = {
  ...memori,
  sessionID: sessionId,
  currentState: dialogState,
  stats,
};

export const tenant: Tenant = {
  id: 'locahost:3000',
  theme: 'studio',
  config: {
    name: 'Memori',
    showNewUser: true,
    requirePosition: false,
    feedbackURL:
      'https://form.asana.com/?k=__gG2-o7Ug8mil5xY8EZ-w&d=1199599736247413',
  },
};

export const memoryStory: Memory = {
  memoryID: 'ea3548de-b634-4a87-a278-3ed7644e6f25',
  memoryType: 'Story',
  readOccurrencies: 3,
  receiverID: undefined,
  receiverTag: undefined,
  receiverName: undefined,
  media: [
    {
      mediumID: 'aa139b0c-3d78-411a-a4b5-88851208ab9c',
      url: 'https://youtu.be/nFsljT1362s',
      content: undefined,
      mimeType: 'text/html',
      title: 'Arena di Verona - Nabucco - Va pensiero',
      properties: {},
    },
  ],
  text: 'Suspendisse a sodales nulla, sed semper nisi.',
  textVariants: ['Lorem ipsum dolor sit amet'],
  answers: undefined,
  title: 'lorem ipsum',
  titleVariants: ['Lorem ipsum'],
  date: '2020-09-08T10:00:00',
  dateUncertaintyDays: 0.5,
  placeName: 'Ferrara',
  placeLatitude: 43.49253965,
  placeLongitude: 13.6167353,
  placeUncertaintyKm: 6.699768524683855,
  preformatted: false,
  conclusive: false,
  notPickable: false,
  contextVarsToSet: {
    SUBJECT: 'TRAVEL',
  },
  contextVarsToMatch: {
    SUBJECT: 'TRANSPORTS',
  },
  creationTimestamp: '2022-03-24T11:48:28.178278',
  creationName: 'ed78a40c-f27c-4f85-b9e9-faf3bb7ea4aa',
  lastChangeTimestamp: '2022-03-24T11:48:42.544649',
  lastChangeName: 'ed78a40c-f27c-4f85-b9e9-faf3bb7ea4aa',
};

export const memoryQuestion: Memory = {
  memoryID: '08c0697d-f7f3-4a47-9970-aff75f01fb6c',
  memoryType: 'Question',
  lastRead: undefined,
  readOccurrencies: undefined,
  receiverID: undefined,
  receiverTag: undefined,
  receiverName: undefined,
  media: [
    {
      mediumID: 'c6851968-5d4d-409a-ae75-f22ec077efcd',
      mimeType: 'text/html',
      url: 'https://rawmaterial.it/it',
      title: 'RawMaterial',
    },
  ],
  text: 'sei umano',
  textVariants: ['sei reale'],
  answers: [
    {
      text: 'se ti dico si ci credi?',
      preformatted: false,
      creationTimestamp: '2022-03-23T09:37:25.410377',
      creationName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
      lastChangeTimestamp: '2022-03-23T09:37:25.410406',
      lastChangeName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
    },
    {
      text: 'probabilmente lo sono più di te',
      preformatted: false,
      creationTimestamp: '2022-03-23T09:37:36.957656',
      creationName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
      lastChangeTimestamp: '2022-03-23T09:37:36.957657',
      lastChangeName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
    },
  ],
  title: undefined,
  titleVariants: undefined,
  date: undefined,
  dateUncertaintyDays: undefined,
  placeName: undefined,
  placeLatitude: undefined,
  placeLongitude: undefined,
  placeUncertaintyKm: undefined,
  preformatted: false,
  conclusive: false,
  notPickable: false,
  contextVarsToSet: {
    SUBJECT: 'TRAVEL',
  },
  contextVarsToMatch: {
    SUBJECT: 'TRANSPORTS',
  },
  creationTimestamp: '2022-03-23T09:37:16.568149',
  creationName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
  lastChangeTimestamp: '2022-03-23T09:37:36.957695',
  lastChangeName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
};

export const unansweredQuestion: UnansweredQuestion = {
  unansweredQuestionID: '08c0697d-f7f3-4a47-9970-aff75f01fb6c',
  text: 'Lorem ipsum',
  occurrencies: 11,
  receiverID: undefined,
  receiverTag: undefined,
  receiverName: undefined,
  creationTimestamp: '2022-03-23T09:37:16.568149',
  creationName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
  lastChangeTimestamp: '2022-03-23T09:37:36.957695',
  lastChangeName: '6cfec2bd-a73f-4a21-b7ff-dd92d6db59c4',
};

export const unansweredQuestionWithAnswers: UnansweredQuestion = {
  ...unansweredQuestion,
  candidateAnswers: [
    {
      confidenceLevel: 'MEDIUM',
      confidence: 0.5,
      memory: memoryQuestion,
    },
  ],
};

export const googleIntegration: Integration = {
  type: 'GOOGLE',
  integrationID: '17826a9e-4ced-4c74-be82-da818b08b8a4',
  state: 'PUBLISHED',
  memoriID: '69757eaf-d07b-4c44-8eba-fd1653e03936',
  deviceEmails: ['nunzio.fiore@memori.ai'],
  invocationText: 'Prova Nunzio',
  jobID: '12345',
  creationTimestamp: '2021-11-25T09:15:40.700946',
  lastChangeTimestamp: '2021-11-25T09:15:40.700946',
};

export const alexaIntegration: Integration = {
  type: 'ALEXA',
  integrationID: '17826a9e-4ced-4c74-be82-da818b08b8a5',
  state: 'PUBLISHED',
  memoriID: '69757eaf-d07b-4c44-8eba-fd1653e03936',
  deviceEmails: ['nunzio.fiore@memori.ai'],
  invocationText: 'Prova Nunzio Alexa',
  jobID: '12345',
  creationTimestamp: '2021-11-25T09:15:40.700946',
  lastChangeTimestamp: '2021-11-25T09:15:40.700946',
};

export const googleDataResult = {
  gpcProjectId: 'memoriai-studio-mndmnqjkbk',
  memoriWebHook:
    'https://backend-staging.memori.ai/api/v1/google/memorihook/actions/b996dbb9-3728-44d6-96f7-9b728224698c',
  userTestLink:
    'https://assistant.google.com/services/a/uid/0000002a57935c08?hl=it',
  jsonCredentials: '12345',
  productionData: {
    shortDescription: null,
    fullDescription: 'Memori di test',
    category: null,
    privacyUrl: null,
  },
  error: null,
  actions: [
    {
      date: '2021-11-23T13:50:29.7086933Z',
      name: 'Integration started',
      description: '',
    },
    {
      date: '2021-11-23T13:52:17.7818829Z',
      name: 'GPC',
      description: "GCP project 'memoriai-studio-mndmnqjkbk' created",
    },
    {
      date: '2021-11-23T13:54:30.6868526Z',
      name: 'Google Action',
      description:
        "Google Action Release created; UserLink:'https://assistant.google.com/services/a/uid/0000002a57935c08?hl=it'",
    },
    {
      date: '2021-11-23T13:54:32.7229229Z',
      name: 'Integration ended',
      description: '',
    },
  ],
};

export const alexaDataResult = {
  actions: [
    {
      date: '2021-11-23T13:50:29.7086933Z',
      name: 'Integration started',
      description: '',
    },
    {
      date: '2021-11-23T13:54:32.7229229Z',
      name: 'Integration ended',
      description: '',
    },
  ],
  error: null,
  productionData: {
    shortDescription: null,
    fullDescription: 'Memori di test',
    category: 'EDUCATION_AND_REFERENCE',
    privacyUrl: '',
  },
};

export const appContext = {
  tenant,
  menuCollapsed: true,
  setMenuCollapsed: () => {},
  initialized: true,
  currentMemori: [currentMemori],
  openMemori: () => Promise.resolve(undefined),
  retrieveSession: () => Promise.resolve(undefined),
  reloadSession: () => Promise.resolve(undefined),
  changeTag: () => Promise.resolve(undefined),
  updateLocalMemori: () => Promise.resolve(undefined),
  updateStats: () => Promise.resolve(undefined),
  closeMemori: () => {},
  clearSession: () => {},
  personificationProfile: undefined,
  setPersonificationProfile: () => {},
  appErrors: [],
  setAppErrors: () => {},
};

export const person: Person = {
  personID: 'a196b513-d745-4121-8913-8f457b999add',
  personType: 'Receiver',
  name: 'ciccio',
  information: 'test',
  pin: '123456',
  tag: '🍺',
  creationTimestamp: '2022-05-03T08:57:30.584439',
  creationName: '7706fbc9-7f2b-4991-b6d8-334d77f98de3',
  lastChangeTimestamp: '2022-05-03T14:19:09.932865',
  lastChangeName: '3174db53-de28-4a3b-b204-d0ec93cdb34a',
};

export const people: Person[] = [
  {
    personID: '72ba4b0e-e87e-42ea-bea1-55bbc71cf085',
    personType: 'Giver',
    name: 'test',
    pin: '464269',
    tag: '🐵',
    creationTimestamp: '2022-04-04T12:35:07.434694',
    creationName: 'test',
    lastChangeTimestamp: '2022-05-03T14:37:50.086706Z',
    lastChangeName: '0f1ac334-c914-4eb8-9838-ea1a16de300b',
  },
  {
    personID: 'a196b513-d745-4121-8913-8f457b999add',
    personType: 'Receiver',
    name: 'aaa',
    information: 'aaa',
    pin: '123456',
    tag: '🍺',
    creationTimestamp: '2022-05-03T08:57:30.584439',
    creationName: '7706fbc9-7f2b-4991-b6d8-334d77f98de3',
    lastChangeTimestamp: '2022-05-03T14:19:09.932865',
    lastChangeName: '3174db53-de28-4a3b-b204-d0ec93cdb34a',
  },
  {
    personID: 'b3635a51-b823-4878-9c3d-a3f8af222eb1',
    personType: 'Receiver',
    name: 'ciccio',
    information: 'qwetds<',
    pin: '098765',
    tag: '🤩',
    creationTimestamp: '2022-04-14T15:42:16.543711',
    creationName: '9d4b07b2-9aa8-4397-9036-1a691f245d42',
    lastChangeTimestamp: '2022-05-03T14:36:30.896573',
    lastChangeName: '768e2ad3-541b-4ef2-89ef-862914f13cc8',
  },
  {
    personID: 'f469e3e9-1a45-47df-abf3-eeaa01707510',
    personType: 'Receiver',
    name: 'nardy',
    pin: '000000',
    tag: '🤢',
    creationTimestamp: '2022-04-15T15:10:48.375688',
    creationName: 'fcfda4a7-bb19-41eb-8384-db0d22f825ec',
    lastChangeTimestamp: '2022-04-15T15:10:58.335228',
    lastChangeName: 'fcfda4a7-bb19-41eb-8384-db0d22f825ec',
  },
];

export const invitation: Invitation = {
  invitationID: 'a196b513-d745-4121-8913-8f457b999add',
  memoriID: memori.memoriID,
  isInviter: false,
  isInvitee: true,
  text: 'Lorem ipsum dolor sit amet',
  destinationEMail: 'test@memori.ai',
  destinationName: 'test',
  tag: '🍺',
  pin: '123456',
  type: 'Receiver',
  state: 'PENDING',
  creationTimestamp: '2022-05-03T08:57:30.584439',
  lastChangeTimestamp: '2022-05-03T14:19:09.932865',
};

export const eventLogs: EventLog[] = [
  {
    eventLogID: '28c9f4c8-d7d5-44c4-9f79-418944b03e82',
    eventType: 'MemoriOpened',
    ipAddress: '::ffff:10.11.12.14',
    memoriID: '1afe57c6-1b69-4a61-96ea-52bf7b8d158e',
    timestamp: '2022-04-15T15:00:27.534191',
    userAgent: 'RestSharp/106.13.0.0',
  },
  {
    eventLogID: '28c9f4c8-d7d5-44c4-9f79-418944b03e83',
    eventType: 'MemoriOpened',
    ipAddress: '::ffff:10.11.12.13',
    memoriID: '1afe57c6-1b69-4a61-96ea-52bf7b8d158e',
    timestamp: '2022-04-15T15:00:27.534191',
    userAgent: 'RestSharp/106.13.0.0',
  },
  {
    eventLogID: '28c9f4c8-d7d5-44c4-9f79-418944b03e84',
    eventType: 'MemoriClosed',
    ipAddress: '::ffff:10.11.12.13',
    memoriID: '1afe57c6-1b69-4a61-96ea-52bf7b8d158e',
    timestamp: '2022-04-15T15:10:27.534191',
    userAgent: 'RestSharp/106.13.0.0',
  },
  {
    eventLogID: '28c9f4c8-d7d5-44c4-9f79-418944b03e85',
    eventType: 'MemoriOpened',
    ipAddress: '::ffff:10.11.12.13',
    memoriID: '1afe57c6-1b69-4a61-96ea-52bf7b8d158e',
    timestamp: '2022-04-15T15:15:27.534191',
    userAgent: 'RestSharp/106.13.0.0',
  },
  {
    eventLogID: '28c9f4c8-d7d5-44c4-9f79-418944b03e86',
    eventType: 'MemoriClosed',
    ipAddress: '::ffff:10.11.12.13',
    memoriID: '1afe57c6-1b69-4a61-96ea-52bf7b8d158e',
    timestamp: '2022-04-15T15:20:27.534191',
    userAgent: 'RestSharp/106.13.0.0',
  },
  {
    eventLogID: '28c9f4c8-d7d5-44c4-9f79-418944b03e88',
    eventType: 'MemoriClosed',
    ipAddress: undefined,
    memoriID: '1afe57c6-1b69-4a61-96ea-52bf7b8d158e',
    timestamp: '2022-04-15T15:28:27.534191',
    userAgent: 'RestSharp/106.13.0.0',
  },
];

export const medium: Medium = {
  mediumID: 'a196b513-d745-4121-8913-8f457b999add',
  url: 'https://api.lorem.space/image/game?w=150&h=220&hash=8B7BCDC2',
  mimeType: 'image/jpeg',
  title: 'Game Cover',
  creationTimestamp: '2022-05-03T08:57:30.584439Z',
  creationName: 'fcfda4a7-bb19-41eb-8384-db0d22f825ec',
  lastChangeTimestamp: '2022-05-03T14:19:09.932865Z',
  lastChangeName: 'fcfda4a7-bb19-41eb-8384-db0d22f825ec',
};

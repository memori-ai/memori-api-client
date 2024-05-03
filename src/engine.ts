import correlationPairs from './engine/correlationPairs';
import dialog from './engine/dialog';
import intents from './engine/intents';
import localizationKeys from './engine/localizationKeys';
import media from './engine/media';
import memories from './engine/memories';
import nlp from './engine/nlp';
import people from './engine/people';
import search from './engine/search';
import session from './engine/session';
import stats from './engine/stats';
import unansweredQuestions from './engine/unansweredQuestions';
import contextVars from './engine/contextVars';
import customDictionary from './engine/customDictionary';
import chatLogs from './engine/chatLogs';
import expertReferences from './engine/expertReferences';
import knownFacts from './engine/knownFacts';
import user from './engine/user';
import topics from './engine/topics';
import functions from './engine/functions';

export default (apiUrl: string) => ({
  correlationPairs: correlationPairs(apiUrl),
  ...correlationPairs(apiUrl),
  dialog: dialog(apiUrl),
  ...dialog(apiUrl),
  intents: intents(apiUrl),
  ...intents(apiUrl),
  localizationKeys: localizationKeys(apiUrl),
  ...localizationKeys(apiUrl),
  media: media(apiUrl),
  ...media(apiUrl),
  memories: memories(apiUrl),
  ...memories(apiUrl),
  nlp: nlp(apiUrl),
  ...nlp(apiUrl),
  people: people(apiUrl),
  ...people(apiUrl),
  search: search(apiUrl),
  ...search(apiUrl),
  session: session(apiUrl),
  ...session(apiUrl),
  stats: stats(apiUrl),
  ...stats(apiUrl),
  unansweredQuestions: unansweredQuestions(apiUrl),
  ...unansweredQuestions(apiUrl),
  contextVars: contextVars(apiUrl),
  ...contextVars(apiUrl),
  customDictionary: customDictionary(apiUrl),
  ...customDictionary(apiUrl),
  chatLogs: chatLogs(apiUrl),
  ...chatLogs(apiUrl),
  expertReferences: expertReferences(apiUrl),
  ...expertReferences(apiUrl),
  knownFacts: knownFacts(apiUrl),
  ...knownFacts(apiUrl),
  user: user(apiUrl),
  ...user(apiUrl),
  topics: topics(apiUrl),
  ...topics(apiUrl),
  functions: functions(apiUrl),
  ...functions(apiUrl),
});

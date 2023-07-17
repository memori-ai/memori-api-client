import correlationPairs from './engine/correlationPairs';
import dialog from './engine/dialog';
import intents from './engine/intents';
import localizationKeys from './engine/localizationKeys';
import media from './engine/media';
import memories from './engine/memories';
import nlp from './engine/nlp';
import people from './engine/people';
import promptedQuestions from './engine/promptedQuestions';
import search from './engine/search';
import session from './engine/session';
import stats from './engine/stats';
import unansweredQuestions from './engine/unansweredQuestions';
import contextVars from './engine/contextVars';
import customDictionary from './engine/customDictionary';
import chatLogs from './engine/chatLogs';

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
  promptedQuestions: promptedQuestions(apiUrl),
  ...promptedQuestions(apiUrl),
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
});

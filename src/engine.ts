import correlationPairs from './engine/correlationPairs';
import dialog from './engine/dialog';
import importExport from './engine/importExport';
import intents from './engine/intents';
import localizationKeys from './engine/localizationKeys';
import media from './engine/media';
import memori from './engine/memori';
import memories from './engine/memories';
import nlp from './engine/nlp';
import people from './engine/people';
import promptedQuestions from './engine/promptedQuestions';
import search from './engine/search';
import session from './engine/session';
import stats from './engine/stats';
import unansweredQuestions from './engine/unansweredQuestions';
import webhooks from './engine/webhooks';

export default (apiUrl: string) => ({
  correlationPairs: correlationPairs(apiUrl),
  ...correlationPairs(apiUrl),
  dialog: dialog(apiUrl),
  ...dialog(apiUrl),
  importExport: importExport(apiUrl),
  ...importExport(apiUrl),
  intents: intents(apiUrl),
  ...intents(apiUrl),
  localizationKeys: localizationKeys(apiUrl),
  ...localizationKeys(apiUrl),
  media: media(apiUrl),
  ...media(apiUrl),
  memori: memori(apiUrl),
  ...memori(apiUrl),
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
  webhooks: webhooks(apiUrl),
  ...webhooks(apiUrl),
});

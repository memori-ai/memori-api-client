import { ResponseSpec } from '../index.d';
import { apiFetcher } from '../apiFetcher';

/***************
 *             *
 *     NLP     *
 *             *
 ***************/

export default (apiUrl: string) => ({
  /**
   * Looks up the vector definition for a word.
   * @param {string} sessionId The session ID
   * @param {string} word Word to be looked up
   */
  getWordVector: async (sessionId: string, word: string) =>
    apiFetcher(`/WordVector/${sessionId}/${word}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Tries to guess the language of a sentence by analyzing key word occurrences.
   * @param {string} sessionId The session ID
   * @param {string} text Text to be used for guessing the language.
   */
  guessLanguage: async (sessionId: string, text: string) =>
    apiFetcher(`/GuessLanguage/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { text },
    }) as Promise<
      ResponseSpec & {
        languageGuesses: {
          [lang: string]: number;
        };
      }
    >,
});

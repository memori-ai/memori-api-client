import { ResponseSpec } from '../types';
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
    }) as Promise<
      ResponseSpec & {
        vector: number[];
      }
    >,

  /**
   * Searches for the 10 words most semantically similar words to the specified word.
   * @param {string} sessionId The session ID
   * @param {string} word Word to be looked up
   */
  getSimilarWords: async (sessionId: string, word: string) =>
    apiFetcher(`/SimilarWords/${sessionId}/${word}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        similarWords: string[];
      }
    >,

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

  /**
   * Computes the similarity between a reference and a comparison sentences.
   * @param {string} sessionId The session ID
   * @param {string} referenceText Text of the reference sentence.
   * @param {'QUESTION' | 'ANSWER'} referenceTextType Type of reference text, i.e. question or answer. Only types supported are: 'QUESTION' and 'ANSWER'.
   * @param {string} comparisonText Text of the comparison sentence.
   * @param {'QUESTION' | 'ANSWER'} comparisonTextType Type of comparison text, i.e. question or answer. Only types supported are: 'QUESTION' and 'ANSWER'.
   */
  computeSimilarity: async (
    sessionId: string,
    referenceText: string,
    referenceTextType: 'QUESTION' | 'ANSWER',
    comparisonText: string,
    comparisonTextType: 'QUESTION' | 'ANSWER'
  ) =>
    apiFetcher(`/ComputeSimilarity/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        referenceText,
        referenceTextType,
        comparisonText,
        comparisonTextType,
      },
    }) as Promise<
      ResponseSpec & {
        /**
         * Similarity index, between 0.0 (totally different) and 1.0 (identical).
         */
        similarity: number;
        /**
         * Similarity level, i.e. none, low, medium or high.
         * Currently supported similarity levels are:
         * NONE, LOW, MEDIUM, HIGH
         */
        similarityLevel: 'NONE' | 'LOW' | 'MEDIUM' | 'HIGH';
      }
    >,

  /**
   * Checks the words of a sentence for their definition in the word vector dictionary.
   * @param {string} sessionId The session ID
   * @param {string} text Text of the sentence.
   */
  checkWords: async (sessionId: string, text: string) =>
    apiFetcher(`/CheckWords/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { text },
    }) as Promise<
      ResponseSpec & {
        /**
         * List of words missing from the word vector dictionary.
         */
        undefinedWords: string[];
      }
    >,
});

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

  /**
   * Tries to suggest the answer for a question, using as much content as possible from the session's associated Memori object.
   * @param {string} sessionId The session ID
   * @param {string} text Text of the sentence.
   */
  suggestAnswer: async (sessionId: string, text: string) =>
    apiFetcher(`/SuggestAnswer/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { text },
    }) as Promise<
      ResponseSpec & {
        /**
         * Suggested answer. May be null if no answer could be suggested.
         */
        answer: string;
      }
    >,

  /**
   * Tries to suggest tags for a a question and its answer.
   * Differently from ```SuggestAnswer```, no content from the session's associated Memori object is used.
   * @param {string} sessionId The session ID
   * @param {string} question Text of question.
   * @param {string} answer Answer to the question (and its variants).
   * @param {string[]=} questionVariants Optional list of question variants.
   */
  suggestTags: async (
    sessionId: string,
    question: string,
    answer: string,
    questionVariants?: string[]
  ) =>
    apiFetcher(`/SuggestTags/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { question, answer, questionVariants },
    }) as Promise<
      ResponseSpec & {
        /**
         * Suggested tags. May be null or empty if no tags could be suggested.
         */
        tags: string[];
      }
    >,

  /**
   * Tries to suggest questions for an answer.
   * Differently from ```SuggestAnswer```, no content from the session's associated Memori object is used.
   * @param {string} sessionId The session ID
   * @param {string} text Text of the sentence.
   */
  suggestQuestions: async (sessionId: string, text: string) =>
    apiFetcher(`/SuggestQuestions/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { text },
    }) as Promise<
      ResponseSpec & {
        /**
         * Suggested questions. May be null or empty if no questions could be suggested.
         */
        questions: string[];
      }
    >,
});

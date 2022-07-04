import type { ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/***************
 *             *
 *     NLP     *
 *             *
 ***************/

/**
 * Looks up the vector definition for a word.
 * @param {string} sessionId The session ID
 * @param {string} word Word to be looked up
 */
export const getWordVector = async ({
  sessionId,
  word,
}: {
  sessionId: string;
  word: string;
}) =>
  apiFetcher(`/WordVector/${sessionId}/${word}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Tries to guess the language of a sentence by analyzing key word occurrences.
 * @param {string} sessionId The session ID
 * @param {string} text Text to be used for guessing the language.
 */
export const guessLanguage = async ({
  sessionId,
  text,
}: {
  sessionId: string;
  text: string;
}) =>
  apiFetcher(`/GuessLanguage/${sessionId}`, {
    method: 'POST',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
    body: { text },
  }) as Promise<
    ResponseSpec & {
      languageGuesses: {
        [lang: string]: number;
      };
    }
  >;

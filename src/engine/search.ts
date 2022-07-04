import type { ResponseSpec, SearchQuery, SearchMatches } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/******************
 *                *
 *     Search     *
 *                *
 ******************/

/**
 * Searches for matching Memory objects using the same algorithm employed in the Text Entered event of the R1 state of the Dialog State Machine.
 * @param {string} sessionId The session ID
 * @param {SearchQuery} query Search query params
 */
export const searchMemory = async (sessionId: string, query?: SearchQuery) =>
  apiFetcher(`/Search/${sessionId}`, {
    method: 'POST',
    body: query,
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      matches: SearchMatches[];
    }
  >;

/**
 * Picks up to 5 random Memory objects using the same algorithm employed in the
 * Timeout event of the R1 state of the Dialog State Machine.
 * @param {string} sessionId The session ID
 */
export const postRandom = async ({ sessionId }: { sessionId: string }) =>
  apiFetcher(`/Random/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Picks up to 20 Memory Hint objects, obtained by searching for Story objects with a date or place set,
 * and clustering dates and places within an uncertainty of at least 1 year or at least 100 km.
 * Each Memory Hint may either suggest a date or a place, but not both.
 * @param {string} sessionId The session ID
 */
export const postHints = async ({ sessionId }: { sessionId: string }) =>
  apiFetcher(`/Hints/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

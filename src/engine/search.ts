import { ResponseSpec, SearchQuery, SearchMatches } from '../types';
import { apiFetcher } from '../apiFetcher';

/******************
 *                *
 *     Search     *
 *                *
 ******************/

export default (apiUrl: string) => ({
  /**
   * Searches for matching Memory objects using the same algorithm employed in the Text Entered event of the R1 state of the Dialog State Machine.
   * @param {string} sessionId The session ID
   * @param {SearchQuery} query Search query params
   */
  searchMemory: async (sessionId: string, query?: SearchQuery) =>
    apiFetcher(`/Search/${sessionId}`, {
      method: 'POST',
      body: query,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        matches: SearchMatches[];
      }
    >,

  /**
   * Picks up to 5 random Memory objects using the same algorithm employed in the
   * Timeout event of the R1 state of the Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postRandom: async (sessionId: string) =>
    apiFetcher(`/Random/${sessionId}`, {
      method: 'POST',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Picks up to 20 Memory Hint objects, obtained by searching for Story objects with a date or place set,
   * and clustering dates and places within an uncertainty of at least 1 year or at least 100 km.
   * Each Memory Hint may either suggest a date or a place, but not both.
   * @param {string} sessionId The session ID
   */
  postHints: async (sessionId: string) =>
    apiFetcher(`/Hints/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

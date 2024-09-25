import { ResponseSpec, SearchQuery, SearchMatches, Memory } from '../types';
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
   * Searches for matching Memory objects using the same algorithm employed in the Text Entered event of the R1 state of the Dialog State Machine.
   * @param {string} sessionId The session ID
   * @param {number} pageIndex The page index
   * @param {number} pageSize The page size
   * @param {SearchQuery} query Search query params
   */
  searchMemoryPaginated: async (
    sessionId: string,
    pageIndex: number,
    pageSize: number,
    query?: SearchQuery
  ) =>
    apiFetcher(`/Search/${sessionId}/${pageIndex}/${pageSize}`, {
      method: 'POST',
      body: query,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        count: number;
        matches: SearchMatches[];
      }
    >,

  /**
   * Filters Memory objects
   * @param {string} sessionId The session ID
   * @param {SearchQuery} query Search query params
   */
  filterMemories: async (sessionId: string, query?: SearchQuery) =>
    apiFetcher(`/FilterMemories/${sessionId}`, {
      method: 'POST',
      body: query,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        count: number;
        matches: SearchMatches[];
      }
    >,

  /**
   * Filters Memory objects, with pagination
   * @param {string} sessionId The session ID
   * @param {number} pageIndex The page index
   * @param {number} pageSize The page size
   * @param {SearchQuery} query Search query params
   */
  filterMemoriesPaginated: async (
    sessionId: string,
    pageIndex: number,
    pageSize: number,
    query?: SearchQuery
  ) =>
    apiFetcher(`/FilterMemories/${sessionId}/${pageIndex}/${pageSize}`, {
      method: 'POST',
      body: query,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        count: number;
        matches: SearchMatches[];
      }
    >,

  /**
   * Picks up to 5 random Memory objects using the same algorithm employed in the
   * Timeout event of the R1 state of the Dialog State Machine.
   * @param {string} sessionId The session ID
   * @param {SearchQuery} query Search query params
   */
  getRandomMemory: async (sessionId: string, query?: SearchQuery) =>
    apiFetcher(`/Random/${sessionId}`, {
      method: 'POST',
      body: query,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memories: Memory[];
      }
    >,

  /**
   * Picks up to 20 Memory Hint objects, obtained by searching for Story objects with a date or place set,
   * and clustering dates and places within an uncertainty of at least 1 year or at least 100 km.
   * Each Memory Hint may either suggest a date or a place, but not both.
   * @param {string} sessionId The session ID
   * @param {SearchQuery} query Search query params
   */
  getHints: async (sessionId: string, query?: SearchQuery) =>
    apiFetcher(`/Hints/${sessionId}`, {
      method: 'POST',
      body: query,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memoryHints: string[];
      }
    >,

  /**
   * Gets a list of all available memory tags.
   * @param {string} sessionId The session ID
   */
  getMemoryTags: async (sessionId: string) =>
    apiFetcher(`/MemoryTags/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memoryTags: string[];
      }
    >,
});

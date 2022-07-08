import { ResponseSpec, SearchQuery, SearchMatches } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Searches for matching Memory objects using the same algorithm employed in the Text Entered event of the R1 state of the Dialog State Machine.
     * @param {string} sessionId The session ID
     * @param {SearchQuery} query Search query params
     */
    searchMemory: (sessionId: string, query?: SearchQuery | undefined) => Promise<ResponseSpec & {
        matches: SearchMatches[];
    }>;
    /**
     * Picks up to 5 random Memory objects using the same algorithm employed in the
     * Timeout event of the R1 state of the Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postRandom: (sessionId: string) => Promise<ResponseSpec>;
    /**
     * Picks up to 20 Memory Hint objects, obtained by searching for Story objects with a date or place set,
     * and clustering dates and places within an uncertainty of at least 1 year or at least 100 km.
     * Each Memory Hint may either suggest a date or a place, but not both.
     * @param {string} sessionId The session ID
     */
    postHints: (sessionId: string) => Promise<ResponseSpec>;
};
/******************
 *                *
 *     Search     *
 *                *
 ******************/
export default _default;

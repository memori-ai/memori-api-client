import { ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Correlation Pair objects.
     * @param {string} sessionId The session ID
     */
    getCorrelationPairs: (sessionId: string) => Promise<ResponseSpec>;
    /**
     * Removes an existing Correlation Pair object.
     * @param {string} sessionId The session ID
     * @param {string} pairId The Correlation Pair object ID
     */
    deleteCorrelationPair: (sessionId: string, pairId: string) => Promise<ResponseSpec>;
};
/****************************
 *                          *
 *     CorrelationPairs     *
 *                          *
 ****************************/
export default _default;

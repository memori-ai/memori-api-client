import { ResponseSpec, CorrelationPair } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Correlation Pair objects.
     * @param {string} sessionId The session ID
     * @param {number=} from The starting index
     * @param {number=} howMany The number of items to return
     */
    getCorrelationPairs: (sessionId: string, from?: number | undefined, howMany?: number | undefined) => Promise<ResponseSpec & {
        correlationPairs: CorrelationPair[];
    }>;
    /**
     * Adds a new Correlation Pair object.
     * @param {string} sessionId The session ID
     * @param {CorrelationPair} correlationPair The Correlation Pair object
     */
    postCorrelationPair: (sessionId: string, correlationPair: CorrelationPair) => Promise<ResponseSpec & {
        correlationPair: CorrelationPair;
    }>;
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

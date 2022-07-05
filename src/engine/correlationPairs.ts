import { ResponseSpec } from '../index.d';
import { apiFetcher } from '../apiFetcher';

/****************************
 *                          *
 *     CorrelationPairs     *
 *                          *
 ****************************/

export default (apiUrl: string) => ({
  /**
   * Lists all Correlation Pair objects.
   * @param {string} sessionId The session ID
   */
  getCorrelationPairs: async (sessionId: string) =>
    apiFetcher(`/CorrelationPairs/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Correlation Pair object.
   * @param {string} sessionId The session ID
   * @param {string} pairId The Correlation Pair object ID
   */
  deleteCorrelationPair: async (sessionId: string, pairId: string) =>
    apiFetcher(`/CorrelationPair/${sessionId}/${pairId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

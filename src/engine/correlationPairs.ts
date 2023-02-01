import { ResponseSpec, CorrelationPair } from '../types';
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
   * @param {number=} from The starting index
   * @param {number=} howMany The number of items to return
   */
  getCorrelationPairs: async (
    sessionId: string,
    from?: number,
    howMany?: number
  ) =>
    apiFetcher(
      `/CorrelationPairs/${sessionId}${
        from ? `/${from}${howMany ? `/${howMany}` : ''}` : ''
      }`,
      {
        method: 'GET',
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        correlationPairs: CorrelationPair[];
      }
    >,

  /**
   * Adds a new Correlation Pair object.
   * @param {string} sessionId The session ID
   * @param {CorrelationPair} correlationPair The Correlation Pair object
   */
  postCorrelationPair: async (
    sessionId: string,
    correlationPair: CorrelationPair
  ) =>
    apiFetcher(`/CorrelationPair/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: correlationPair,
    }) as Promise<
      ResponseSpec & {
        correlationPair: CorrelationPair;
      }
    >,

  /**
   * Removes an existing Correlation Pair object.
   * @param {string} sessionId The session ID
   * @param {string} pairId The Correlation Pair object ID
   */
  deleteCorrelationPair: async (sessionId: string, pairId: string) =>
    apiFetcher(`/CorrelationPair/${sessionId}/${pairId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

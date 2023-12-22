import { ResponseSpec, KnownFact } from '../types';
import { apiFetcher } from '../apiFetcher';

/***********************
 *                     *
 *     Known Facts     *
 *                     *
 ***********************/

export default (apiUrl: string) => ({
  /**
   * Lists all Known Facts objects associated with the current User.
   * @param {string} sessionId The session ID
   */
  getKnownFacts: async (sessionId: string) =>
    apiFetcher(`/KnownFacts/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Known Fact objects.
         */
        count: number;
        /**
         * List of Known Fact objects. May be empty.
         */
        knownFacts: KnownFact[];
      }
    >,

  /**
   * Lists all Known Facts objects associated with the current User, with pagination.
   * @param {string} sessionId The session ID
   * @param {number} from The 0-based index of the first Known Fact object to list
   * @param {number} howMany The number of the Known Fact objects to list
   */
  getKnownFactsPaginated: async (
    sessionId: string,
    from: number,
    howMany: number
  ) =>
    apiFetcher(`/KnownFacts/${sessionId}/${from}/${howMany}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Known Fact objects.
         */
        count: number;
        /**
         * List of Known Fact objects. May be empty.
         */
        knownFacts: KnownFact[];
      }
    >,

  /**
   * Gets the details of a Known Fact object.
   * @param {string} sessionId The session ID
   * @param {string} knownFactID The Known Fact object ID
   */
  getKnownFact: async (sessionId: string, knownFactID: string) =>
    apiFetcher(`/KnownFact/${sessionId}/${knownFactID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        knownFact: KnownFact;
      }
    >,

  /**
   * Deletes an existing Known Fact object.
   * @param {string} sessionId The session ID
   * @param {string} knownFactID The Known Fact object ID
   */
  deleteKnownFact: async (sessionId: string, knownFactID: string) =>
    apiFetcher(`/KnownFact/${sessionId}/${knownFactID}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

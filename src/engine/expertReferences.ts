import type { ResponseSpec, ExpertReference } from '../types';
import { apiFetcher } from '../apiFetcher';

/************************
 *                      *
 *   Expert References  *
 *                      *
 ************************/

export default (apiUrl: string) => ({
  /**
   * Lists all Expert Reference objects.
   * @param {string} sessionId The session ID
   */
  getExpertReferences: async (sessionId: string) =>
    apiFetcher(`/ExpertReferences/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Expert Reference objects.
         */
        count: number;
        /**
         * List of Expert Reference objects. May be empty.
         */
        experts: ExpertReference[];
      }
    >,

  /**
   * Lists Expert Reference objects with pagination.
   * @param {string} sessionId The session ID
   * @param {number} from The 0-based index of the first Expert Reference object to list
   * @param {number} howMany The number of the Expert Reference objects to list
   */
  getExpertReferencesPaginated: async (
    sessionId: string,
    from: number,
    howMany: number
  ) =>
    apiFetcher(`/ExpertReferences/${sessionId}/${from}/${howMany}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Expert Reference objects.
         */
        count: number;
        /**
         * List of Expert Reference objects. May be empty.
         */
        experts: ExpertReference[];
      }
    >,

  /**
   * Gets the details of an Expert Reference object.
   * @param {string} sessionId The session ID
   * @param {string} expertID The Expert Reference object ID
   */
  getExpertReference: async (sessionId: string, expertID: string) =>
    apiFetcher(`/ExpertReference/${sessionId}/${expertID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        expert: ExpertReference;
      }
    >,

  /**
   * Updates an existing Expert Reference object.
   * @param {string} sessionId The session ID
   * @param {ExpertReference} expertReference The Expert Reference object
   */
  updateExpertReference: async (
    sessionId: string,
    expertReference: Partial<ExpertReference> & {
      expertID: ExpertReference['expertID'];
    }
  ) =>
    apiFetcher(`/ExpertReference/${sessionId}/${expertReference.expertID}`, {
      method: 'PATCH',
      apiUrl,
      body: expertReference,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Expert Reference object.
   * @param {string} sessionId The session ID
   * @param {ExpertReference} expertReference The Expert Reference object
   */
  createExpertReference: async (
    sessionId: string,
    expertReference: Omit<Partial<ExpertReference>, 'expertID'>
  ) =>
    apiFetcher(`/ExpertReference/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: expertReference,
    }) as Promise<
      ResponseSpec & {
        expertID: ExpertReference['expertID'];
      }
    >,

  /**
   * Removes an existing Expert Reference object.
   * @param {string} sessionId The session ID
   * @param {string} expertID The Expert Reference object ID
   */
  deleteExpertReference: async (sessionId: string, expertID: string) =>
    apiFetcher(`/ExpertReference/${sessionId}/${expertID}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

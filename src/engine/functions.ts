import type { ResponseSpec, Function } from '../types';
import { apiFetcher } from '../apiFetcher';

/*********************
 *                   *
 *     Functions     *
 *                   *
 *********************/

export default (apiUrl: string) => ({
  /**
   * Lists all Functions objects.
   * @param {string} sessionId The session ID
   */
  getAllFunctions: async (sessionId: string) =>
    apiFetcher(`/Functions/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Function objects.
         */
        count: number;
        /**
         * List of Function objects. May be empty.
         */
        functions: Function[];
      }
    >,

  /**
   * Lists Function objects with pagination.
   * @param {string} sessionId The session ID
   * @param {number} from The 0-based index of the first Function object to list
   * @param {number} howMany The number of the Function objects to list
   */
  getFunctionsPaginated: async (
    sessionId: string,
    from: number,
    howMany: number
  ) =>
    apiFetcher(`/Functions/${sessionId}/${from}/${howMany}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Function objects.
         */
        count: number;
        /**
         * List of Function objects. May be empty.
         */
        functions: Function[];
      }
    >,

  /**
   * Gets the details of a Function object.
   * @param {string} sessionId The session ID
   * @param {string} functionID The Function object ID
   */
  getFunction: async (sessionId: string, functionID: string) =>
    apiFetcher(`/Function/${sessionId}/${functionID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        function: Function;
      }
    >,

  /**
   * Updates an existing Function object.
   * Only non-null (present) fields are considered for update. Null or absent fields are left unaltered.
   * @param {string} sessionId The session ID
   * @param {Function} func The Function object
   */
  patchFunction: async (
    sessionId: string,
    func: Partial<Function> & { functionID: string }
  ) =>
    apiFetcher(`/Function/${sessionId}/${func.functionID}`, {
      method: 'PATCH',
      apiUrl,
      body: func,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Function object.
   * @param {string} sessionId The session ID
   * @param {string} functionID The Function object ID
   */
  deleteFunction: async (sessionId: string, functionID: string) =>
    apiFetcher(`/Function/${sessionId}/${functionID}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Creates a new Function object.
   * @param {string} sessionId The session ID
   * @param {Function} func The Function object
   */
  createFunction: async (sessionId: string, func: Function) =>
    apiFetcher(`/Function/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: func,
    }) as Promise<
      ResponseSpec & {
        functionID: string;
      }
    >,

  /**
   * Lists all Macro Function objects.
   * @param {string} sessionId The session ID
   */
  getMacroFunctions: async (sessionId: string) =>
    apiFetcher(`/MacroFunctions/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Macro Function objects.
         */
        count: number;
        /**
         * List of Function objects. May be empty.
         */
        macroFunctions: Function[];
      }
    >,
});

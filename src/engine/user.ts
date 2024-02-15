import { ResponseSpec, MemoriUser, Topic } from '../types';
import { apiFetcher } from '../apiFetcher';

/****************
 *              *
 *     User     *
 *              *
 ****************/

export default (apiUrl: string) => ({
  /**
   * Lists all User objects associated with the Memori of the current session.
   * @param {string} sessionId The session ID
   */
  getMemoriUsers: async (sessionId: string) =>
    apiFetcher(`/Users/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of MemoriUser objects.
         */
        count: number;
        /**
         * List of MemoriUser objects. May be empty.
         */
        users: MemoriUser[];
      }
    >,

  /**
   * Lists all MemoriUser objects associated with the Memori of the current session, with pagination.
   * @param {string} sessionId The session ID
   * @param {number} from The 0-based index of the first MemoriUser object to list
   * @param {number} howMany The number of the MemoriUser objects to list
   */
  getMemoriUsersPaginated: async (
    sessionId: string,
    from: number,
    howMany: number
  ) =>
    apiFetcher(`/Users/${sessionId}/${from}/${howMany}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of MemoriUser objects.
         */
        count: number;
        /**
         * List of MemoriUser objects. May be empty.
         */
        users: MemoriUser[];
      }
    >,

  /**
   * Gets the details of a User object.
   * @param {string} sessionId The session ID
   * @param {string} userID The User object ID
   */
  getMemoriUser: async (sessionId: string, userID: string) =>
    apiFetcher(`/User/${sessionId}/${userID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        user: MemoriUser;
      }
    >,

  /**
   * Lists all Topic objects referenced by a specified MemoriUser object.
   * @param {string} sessionId The session ID
   * @param {string} userID The User object ID
   */
  getMemoriUserTopics: async (sessionId: string, userID: string) =>
    apiFetcher(`/UserTopics/${sessionId}/${userID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Topic objects.
         */
        count: number;
        /**
         * List of Topic objects. May be empty.
         */
        topics: Topic[];
      }
    >,

  /**
   * Lists all Topic objects referenced by a specified MemoriUser object, with pagination.
   * @param {string} sessionId The session ID
   * @param {string} userID The User object ID
   * @param {number} from The 0-based index of the first Topics object to list
   * @param {number} howMany The number of the Topics objects to list
   */
  getMemoriUserTopicsPaginated: async (
    sessionId: string,
    userID: string,
    from: number,
    howMany: number
  ) =>
    apiFetcher(`/UserTopics/${sessionId}/${userID}/${from}/${howMany}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * Total number of Topic objects.
         */
        count: number;
        /**
         * List of Topic objects. May be empty.
         */
        topics: Topic[];
      }
    >,
});

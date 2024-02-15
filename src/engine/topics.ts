import { ResponseSpec, MemoriUser, Topic } from '../types';
import { apiFetcher } from '../apiFetcher';

/****************
 *              *
 *    Topics    *
 *              *
 ****************/

export default (apiUrl: string) => ({
  /**
   * Lists all Topic objects.
   * @param {string} sessionId The session ID
   */
  getTopics: async (sessionId: string) =>
    apiFetcher(`/Topics/${sessionId}`, {
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
        topics: Topic[];
      }
    >,

  /**
   * Lists Topic objects with pagination.
   * @param {string} sessionId The session ID
   * @param {number} from The 0-based index of the first Topics object to list
   * @param {number} howMany The number of the Topics objects to list
   */
  getTopicsPaginated: async (
    sessionId: string,
    from: number,
    howMany: number
  ) =>
    apiFetcher(`/Topics/${sessionId}/${from}/${howMany}`, {
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
   * Gets the details of a Topic object.
   * @param {string} sessionId The session ID
   * @param {string} topicID The Topic object ID
   */
  getTopic: async (sessionId: string, topicID: string) =>
    apiFetcher(`/Topic/${sessionId}/${topicID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        topic: Topic;
      }
    >,

  /**
   * Lists all MemoriUser objects referencing a specified Topic object.
   * @param {string} sessionId The session ID
   * @param {string} topicId The Topic object ID
   */
  getTopicUsers: async (sessionId: string, topicId: string) =>
    apiFetcher(`/TopicUsers/${sessionId}/${topicId}`, {
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
   * Lists all MemoriUser objects referencing a specified Topic object, with pagination.
   * @param {string} sessionId The session ID
   * @param {string} topicId The Topic object ID
   * @param {number} from The 0-based index of the first MemoriUser object to list
   * @param {number} howMany The number of the MemoriUser objects to list
   */
  getTopicUsersPaginated: async (
    sessionId: string,
    topicId: string,
    from: number,
    howMany: number
  ) =>
    apiFetcher(`/TopicUsers/${sessionId}/${topicId}/${from}/${howMany}`, {
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
});

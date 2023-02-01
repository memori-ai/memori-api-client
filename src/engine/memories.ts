import { Memory, ResponseSpec } from '../types';
import { apiFetcher } from '../apiFetcher';

/********************
 *                  *
 *     Memories     *
 *                  *
 ********************/

export default (apiUrl: string) => ({
  /**
   * Lists all Memory objects.
   * @param {string} sessionId The session ID
   * @param {string=} type Optional type of the Memory objects to list: ALL, CONTENTS, DEFAULTS, DRAFTS
   */
  getMemories: async (
    sessionId: string,
    type?: 'ALL' | 'CONTENTS' | 'DEFAULTS' | 'DRAFTS'
  ) =>
    apiFetcher(`/Memories/${sessionId}${type ? `/${type}` : ''}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memories: Memory[];
      }
    >,

  /**
   * Lists paginated Memory objects.
   * @param {string} sessionId The session ID
   * @param {number} from The starting index
   * @param {number} howMany The number of items to return
   * @param {string=} type Optional type of the Memory objects to list: ALL, CONTENTS, DEFAULTS, DRAFTS
   */
  getMemoriesPaginated: async (
    sessionId: string,
    from: number,
    howMany: number,
    type?: 'ALL' | 'CONTENTS' | 'DEFAULTS' | 'DRAFTS'
  ) =>
    apiFetcher(
      `/Memories/${sessionId}/${from}/${howMany}${type ? `/${type}` : ''}`,
      {
        method: 'GET',
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        count: number;
        memories: Memory[];
      }
    >,

  /**
   * Gets the details of a Memory object.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   */
  getMemory: async (sessionId: string, memoryId: string) =>
    apiFetcher(`/Memory/${sessionId}/${memoryId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memory: Memory;
      }
    >,

  /**
   * Updates an existing Memory object.
   * @param {string} sessionId The session ID
   * @param {Memory} memory The Memory object
   */
  patchMemory: async (sessionId: string, memory: Memory) =>
    apiFetcher(`/Memory/${sessionId}/${memory.memoryID}`, {
      method: 'PATCH',
      apiUrl,
      body: memory,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Memory object.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   */
  deleteMemory: async (sessionId: string, memoryId: string) =>
    apiFetcher(`/Memory/${sessionId}/${memoryId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Memory object.
   * @param {string} sessionId The session ID
   * @param {Memory} memory The Memory object
   */
  postMemory: async (sessionId: string, memory: Omit<Memory, 'memoryID'>) =>
    apiFetcher(`/Memory/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: memory,
    }) as Promise<
      ResponseSpec & {
        memoryID: string;
      }
    >,

  /**
   * Checks if a Memory object is accessible from the specified session.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   */
  getMemoryAccess: async (sessionId: string, memoryId: string) =>
    apiFetcher(`/MemoryAccess/${sessionId}/${memoryId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

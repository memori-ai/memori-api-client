import { Memory, ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Memory objects.
     * @param {string} sessionId The session ID
     */
    getMemories: (sessionId: string) => Promise<ResponseSpec & {
        memories: Memory[];
    }>;
    /**
     * Lists paginated Memory objects.
     * @param {string} sessionId The session ID
     */
    getMemoriesPaginated: (sessionId: string, from: number, howMany: number) => Promise<ResponseSpec & {
        count: number;
        memories: Memory[];
    }>;
    /**
     * Gets the details of a Memory object.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    getMemory: (sessionId: string, memoryId: string) => Promise<ResponseSpec & {
        memory: Memory;
    }>;
    /**
     * Updates an existing Memory object.
     * @param {string} sessionId The session ID
     * @param {Memory} memory The Memory object
     */
    patchMemory: (sessionId: string, memory: Memory) => Promise<ResponseSpec>;
    /**
     * Removes an existing Memory object.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    deleteMemory: (sessionId: string, memoryId: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Memory object.
     * @param {string} sessionId The session ID
     * @param {Memory} memory The Memory object
     */
    postMemory: (sessionId: string, memory: Memory) => Promise<ResponseSpec & {
        memoryID: string;
    }>;
    /**
     * Checks if a Memory object is accessible from the specified session.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    getMemoryAccess: (sessionId: string, memoryId: string) => Promise<ResponseSpec>;
};
/********************
 *                  *
 *     Memories     *
 *                  *
 ********************/
export default _default;

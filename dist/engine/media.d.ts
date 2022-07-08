import { ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Medium objects of a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    getMedia: (sessionId: string, memoryId: string) => Promise<ResponseSpec>;
    /**
     * Removes all Medium objects from a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    deleteMedia: (sessionId: string, memoryId: string) => Promise<ResponseSpec>;
    /**
     * Gets the details of a Medium object of a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     * @param {string} mediumId The Medium object ID
     */
    getMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<ResponseSpec>;
    /**
     * Updates an existing Medium object of a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     * @param {string} mediumId The Medium object ID
     */
    patchMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<ResponseSpec>;
    /**
     * Removes an existing Medium object from a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     * @param {string} mediumId The Medium object ID
     */
    deleteMedium: (sessionId: string, memoryId: string, mediumId: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Medium object to a Memory.
     * @param {string} sessionId The session ID
     * @param {string} memoryId The Memory object ID
     */
    postMedium: (sessionId: string, memoryId: string) => Promise<ResponseSpec>;
};
/*****************
 *               *
 *     Media     *
 *               *
 *****************/
export default _default;

import { ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Prompted Question objects.
     * @param {string} sessionId The session ID
     */
    getPromptedQuestions: (sessionId: string) => Promise<ResponseSpec>;
    /**
     * Gets the details of a Prompted Question object.
     * @param {string} sessionId The session ID
     * @param {string} promptId The Prompted Question object ID
     */
    getPromptedQuestion: (sessionId: string, promptId: string) => Promise<ResponseSpec>;
    /**
     * Updates an existing Prompted Question object.
     * @param {string} sessionId The session ID
     * @param {string} promptId The Prompted Question object ID
     */
    patchPromptedQuestion: (sessionId: string, promptId: string) => Promise<ResponseSpec>;
    /**
     * Removes an existing Prompted Question object.
     * @param {string} sessionId The session ID
     * @param {string} promptId The Prompted Question object ID
     */
    deletePromptedQuestion: (sessionId: string, promptId: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Prompted Question object.
     * @param {string} sessionId The session ID
     */
    postPromptedQuestion: (sessionId: string) => Promise<ResponseSpec>;
};
/*****************************
 *                           *
 *     PromptedQuestions     *
 *                           *
 *****************************/
export default _default;

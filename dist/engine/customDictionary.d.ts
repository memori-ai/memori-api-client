import { ResponseSpec, CustomWord } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Custom Words.
     * @param {string} sessionId The session ID
     */
    getCustomWords: (sessionId: string) => Promise<ResponseSpec & {
        customWords: CustomWord[];
    }>;
    /**
     * Gets the details of a Custom Word object.
     * @param {string} sessionId The session ID
     * @param {string} customWordID The Custom Word object ID
     */
    getCustomWord: (sessionId: string, customWordID: string) => Promise<ResponseSpec & {
        customWord: CustomWord;
    }>;
    /**
     * Removes an existing Custom Word object.
     * @param {string} sessionId The session ID
     * @param {string} key The key of the Custom Word
     */
    deleteCustomWord: (sessionId: string, key: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Custom Word object.
     * @param {string} sessionId The session ID
     * @param {CustomWord} customWord Custom Word
     */
    postCustomWord: (sessionId: string, customWord: Pick<CustomWord, 'word'> & Pick<CustomWord, 'definition'>) => Promise<ResponseSpec & {
        customWord: CustomWord;
    }>;
    /**
     * Updates an existing Custom Word object.
     * Only the Definition field is considered for update. To change the Word field a new Custom Word must be added and the existing must be removed.
     * @param {string} sessionId The session ID
     * @param {CustomWord} customWord Custom Word
     */
    patchCustomWord: (sessionId: string, customWord: Partial<CustomWord> & {
        customWordID: string;
    }) => Promise<ResponseSpec>;
};
/****************************
 *                          *
 *     CustomDictionary     *
 *                          *
 ****************************/
export default _default;

import { ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Intent objects.
     * @param {string} sessionId The session ID
     */
    getIntents: (sessionId: string) => Promise<ResponseSpec>;
    /**
     * Gets the details of an Intent object.
     * @param {string} sessionId The session ID
     * @param {string} intentId The Intent object ID
     */
    getIntent: (sessionId: string, intentId: string) => Promise<ResponseSpec>;
    /**
     * Updates an existing Intent object.
     * @param {string} sessionId The session ID
     * @param {string} intentId The Intent object ID
     */
    patchIntent: (sessionId: string, intentId: string) => Promise<ResponseSpec>;
    /**
     * Removes an existing Intent object.
     * @param {string} sessionId The session ID
     * @param {string} intentId The Intent object ID
     */
    deleteIntent: (sessionId: string, intentId: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Intent object.
     * @param {string} sessionId The session ID
     */
    postIntent: (sessionId: string) => Promise<ResponseSpec>;
    /**
     * Lists all Intent Slot objects.
     * @param {string} sessionId The session ID
     */
    getIntentSlots: (sessionId: string) => Promise<ResponseSpec>;
    /**
     * Gets the details of an Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {string} slotId The Intent Slot object ID
     */
    getIntentSlot: (sessionId: string, slotId: string) => Promise<ResponseSpec>;
    /**
     * Updates an existing Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {string} slotId The Intent Slot object ID
     */
    patchIntentSlot: (sessionId: string, slotId: string) => Promise<ResponseSpec>;
    /**
     * Removes an existing Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {string} slotId The Intent Slot object ID
     */
    deleteIntentSlot: (sessionId: string, slotId: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Intent Slot object.
     * @param {string} sessionId The session ID
     */
    postIntentSlot: (sessionId: string) => Promise<ResponseSpec>;
};
/*******************
 *                 *
 *     Intents     *
 *                 *
 *******************/
export default _default;

import { ResponseSpec, Intent, IntentSlot } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Intent objects.
     * @param {string} sessionId The session ID
     */
    getIntents: (sessionId: string) => Promise<ResponseSpec & {
        intents: (Intent & {
            intentID: string;
        })[];
    }>;
    /**
     * Gets the details of an Intent object.
     * @param {string} sessionId The session ID
     * @param {string} intentId The Intent object ID
     */
    getIntent: (sessionId: string, intentId: string) => Promise<ResponseSpec & {
        intent: Intent & {
            intentID: string;
        };
    }>;
    /**
     * Updates an existing Intent object.
     * @param {string} sessionId The session ID
     * @param {Intent} intent The Intent object
     */
    patchIntent: (sessionId: string, intent: Partial<Intent> & {
        intentID: string;
    }) => Promise<ResponseSpec>;
    /**
     * Removes an existing Intent object.
     * @param {string} sessionId The session ID
     * @param {string} intentId The Intent object ID
     */
    deleteIntent: (sessionId: string, intentId: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Intent object.
     * @param {string} sessionId The session ID
     * @param {Intent} intent The Intent object
     */
    createIntent: (sessionId: string, intent: Intent) => Promise<ResponseSpec & {
        intentID: string;
    }>;
    /**
     * Lists all Intent Slot objects.
     * @param {string} sessionId The session ID
     */
    getIntentSlots: (sessionId: string) => Promise<ResponseSpec & {
        intentSlots: (IntentSlot & {
            intentSlotID: string;
        })[];
    }>;
    /**
     * Gets the details of an Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {string} slotId The Intent Slot object ID
     */
    getIntentSlot: (sessionId: string, slotId: string) => Promise<ResponseSpec & {
        intentSlot: IntentSlot & {
            intentSlotID: string;
        };
    }>;
    /**
     * Updates an existing Intent Slot object.
     * @param {string} sessionId The session ID
     * @param {IntentSlot} intentSlot The Intent Slot object
     */
    patchIntentSlot: (sessionId: string, intentSlot: Partial<IntentSlot> & {
        intentSlotID: string;
    }) => Promise<ResponseSpec>;
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
    createIntentSlot: (sessionId: string, intentSlot: IntentSlot) => Promise<ResponseSpec & {
        intentSlotID: string;
    }>;
};
/*******************
 *                 *
 *     Intents     *
 *                 *
 *******************/
export default _default;

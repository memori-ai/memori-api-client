import { ResponseSpec, Intent, IntentSlot } from '../types';
import { apiFetcher } from '../apiFetcher';

/*******************
 *                 *
 *     Intents     *
 *                 *
 *******************/

export default (apiUrl: string) => ({
  /**
   * Lists all Intent objects.
   * @param {string} sessionId The session ID
   */
  getIntents: async (sessionId: string) =>
    apiFetcher(`/Intents/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        intents: (Intent & { intentID: string })[];
      }
    >,

  /**
   * Gets the details of an Intent object.
   * @param {string} sessionId The session ID
   * @param {string} intentId The Intent object ID
   */
  getIntent: async (sessionId: string, intentId: string) =>
    apiFetcher(`/Intent/${sessionId}/${intentId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        intent: Intent & { intentID: string };
      }
    >,

  /**
   * Updates an existing Intent object.
   * @param {string} sessionId The session ID
   * @param {Intent} intent The Intent object
   */
  patchIntent: async (
    sessionId: string,
    intent: Partial<Intent> & { intentID: string }
  ) =>
    apiFetcher(`/Intent/${sessionId}/${intent.intentID}`, {
      method: 'PATCH',
      apiUrl,
      body: intent,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Intent object.
   * @param {string} sessionId The session ID
   * @param {string} intentId The Intent object ID
   */
  deleteIntent: async (sessionId: string, intentId: string) =>
    apiFetcher(`/Intent/${sessionId}/${intentId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Intent object.
   * @param {string} sessionId The session ID
   * @param {Intent} intent The Intent object
   */
  createIntent: async (sessionId: string, intent: Intent) =>
    apiFetcher(`/Intent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: intent,
    }) as Promise<
      ResponseSpec & {
        intentID: string;
      }
    >,

  /**
   * Lists all Intent Slot objects.
   * @param {string} sessionId The session ID
   */
  getIntentSlots: async (sessionId: string) =>
    apiFetcher(`/IntentSlots/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        intentSlots: (IntentSlot & {
          intentSlotID: string;
        })[];
      }
    >,

  /**
   * Gets the details of an Intent Slot object.
   * @param {string} sessionId The session ID
   * @param {string} slotId The Intent Slot object ID
   */
  getIntentSlot: async (sessionId: string, slotId: string) =>
    apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        intentSlot: IntentSlot & { intentSlotID: string };
      }
    >,

  /**
   * Updates an existing Intent Slot object.
   * @param {string} sessionId The session ID
   * @param {IntentSlot} intentSlot The Intent Slot object
   */
  patchIntentSlot: async (
    sessionId: string,
    intentSlot: Partial<IntentSlot> & { intentSlotID: string }
  ) =>
    apiFetcher(`/IntentSlot/${sessionId}/${intentSlot.intentSlotID}`, {
      method: 'PATCH',
      apiUrl,
      body: intentSlot,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Intent Slot object.
   * @param {string} sessionId The session ID
   * @param {string} slotId The Intent Slot object ID
   */
  deleteIntentSlot: async (sessionId: string, slotId: string) =>
    apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Intent Slot object.
   * @param {string} sessionId The session ID
   */
  createIntentSlot: async (sessionId: string, intentSlot: IntentSlot) =>
    apiFetcher(`/IntentSlot/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: intentSlot,
    }) as Promise<
      ResponseSpec & {
        intentSlotID: string;
      }
    >,
});

import { ResponseSpec } from '../index.d';
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
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of an Intent object.
   * @param {string} sessionId The session ID
   * @param {string} intentId The Intent object ID
   */
  getIntent: async (sessionId: string, intentId: string) =>
    apiFetcher(`/Intent/${sessionId}/${intentId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Updates an existing Intent object.
   * @param {string} sessionId The session ID
   * @param {string} intentId The Intent object ID
   */
  patchIntent: async (sessionId: string, intentId: string) =>
    apiFetcher(`/Intent/${sessionId}/${intentId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Intent object.
   * @param {string} sessionId The session ID
   * @param {string} intentId The Intent object ID
   */
  deleteIntent: async (sessionId: string, intentId: string) =>
    apiFetcher(`/Intent/${sessionId}/${intentId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Intent object.
   * @param {string} sessionId The session ID
   */
  postIntent: async (sessionId: string) =>
    apiFetcher(`/Intent/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Lists all Intent Slot objects.
   * @param {string} sessionId The session ID
   */
  getIntentSlots: async (sessionId: string) =>
    apiFetcher(`/IntentSlots/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of an Intent Slot object.
   * @param {string} sessionId The session ID
   * @param {string} slotId The Intent Slot object ID
   */
  getIntentSlot: async (sessionId: string, slotId: string) =>
    apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Updates an existing Intent Slot object.
   * @param {string} sessionId The session ID
   * @param {string} slotId The Intent Slot object ID
   */
  patchIntentSlot: async (sessionId: string, slotId: string) =>
    apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Intent Slot object.
   * @param {string} sessionId The session ID
   * @param {string} slotId The Intent Slot object ID
   */
  deleteIntentSlot: async (sessionId: string, slotId: string) =>
    apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Intent Slot object.
   * @param {string} sessionId The session ID
   */
  postIntentSlot: async (sessionId: string) =>
    apiFetcher(`/IntentSlot/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

import { ResponseSpec } from '../index.d';
import { apiFetcher } from '../apiFetcher';

/*****************************
 *                           *
 *     PromptedQuestions     *
 *                           *
 *****************************/

export default (apiUrl: string) => ({
  /**
   * Lists all Prompted Question objects.
   * @param {string} sessionId The session ID
   */
  getPromptedQuestions: async (sessionId: string) =>
    apiFetcher(`/PromptedQuestions/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of a Prompted Question object.
   * @param {string} sessionId The session ID
   * @param {string} promptId The Prompted Question object ID
   */
  getPromptedQuestion: async (sessionId: string, promptId: string) =>
    apiFetcher(`/PromptedQuestion/${sessionId}/${promptId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Updates an existing Prompted Question object.
   * @param {string} sessionId The session ID
   * @param {string} promptId The Prompted Question object ID
   */
  patchPromptedQuestion: async (sessionId: string, promptId: string) =>
    apiFetcher(`/PromptedQuestion/${sessionId}/${promptId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Prompted Question object.
   * @param {string} sessionId The session ID
   * @param {string} promptId The Prompted Question object ID
   */
  deletePromptedQuestion: async (sessionId: string, promptId: string) =>
    apiFetcher(`/PromptedQuestion/${sessionId}/${promptId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Prompted Question object.
   * @param {string} sessionId The session ID
   */
  postPromptedQuestion: async (sessionId: string) =>
    apiFetcher(`/PromptedQuestion/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

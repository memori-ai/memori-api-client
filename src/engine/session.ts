import { ResponseSpec, OpenSession, DialogState } from '../types';
import { apiFetcher } from '../apiFetcher';

/*******************
 *                 *
 *     Session     *
 *                 *
 *******************/

export default (apiUrl: string) => ({
  /**
   * Initializes a new Dialog State Machine session for an existing Memori.
   */
  initSession: async (params: OpenSession) =>
    apiFetcher(`/Session`, {
      method: 'POST',
      body: params,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        sessionID: string;
        currentState: DialogState;
      }
    >,

  /**
   * Returns the current state of a session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  getSession: async (sessionId: string) =>
    apiFetcher(`/Session/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Closes the session and disposes of its Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  deleteSession: async (sessionId: string) =>
    apiFetcher(`/Session/${sessionId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

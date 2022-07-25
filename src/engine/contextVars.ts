import { ResponseSpec } from '../types';
import { apiFetcher } from '../apiFetcher';

/****************************
 *                          *
 *       ContextVars        *
 *                          *
 ****************************/

export default (apiUrl: string) => ({
  /**
   * Gets a list of currently known context variables.
   * @param {string} sessionId The session ID
   */
  getContextVars: async (sessionId: string) =>
    apiFetcher(`/ContextVars/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        [variable: string]: string[];
      }
    >,

  /**
   * Gets a list of currently known context variable names.
   * @param {string} sessionId The session ID
   */
  getContextVarNames: async (sessionId: string) =>
    apiFetcher(`/ContextVarNames/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        contextVarNames: string[];
      }
    >,

  /**
   * /memori/v2/ContextVarValues/{strSessionID}/{contextVarName}
   * @param {string} sessionId The session ID
   * @param {string} contextVarName The name of the context variable
   */
  getContextVarValues: async (sessionId: string, contextVarName: string) =>
    apiFetcher(`/ContextVarValues/${sessionId}/${contextVarName}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        contextVarName: string;
        contextVarValues: string[];
      }
    >,
});

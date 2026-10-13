import {
  ResponseSpec,
  CompletionConfig,
  CompletionConfigChangeResult,
} from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Gets a list of Completion Config objects allowed for the user.
   * @param {string} authToken - The login token
   * @param {string=} purpose - Optional filter on Completion Config purpose ("QA" for Question Answering, "IE" for Import/Export, "DT" for Deep Thought).
   */
  getCompletionConfigs: (authToken: string, purpose?: 'QA' | 'IE' | 'DT') =>
    apiFetcher(
      `/CompletionConfigs/${authToken}${purpose ? `/${purpose}` : ''}`,
      {
        apiUrl,
        method: 'GET',
      }
    ) as Promise<
      ResponseSpec & {
        configs: CompletionConfig[];
      }
    >,

  /**
   * Gets the details of a Completion Config of a specific object
   * @param {string} authToken - The login token
   * @param {string} configID - The Completion Config object ID
   */
  getCompletionConfig: (authToken: string, configID: string) =>
    apiFetcher(`/CompletionConfig/${authToken}/${configID}`, {
      apiUrl,
      method: 'GET',
    }) as Promise<
      ResponseSpec & {
        config: CompletionConfig;
      }
    >,

  /**
   * Updates an existing Completion Config object.
   * A user can only update a Completion Config object owned by him, unless it has administrative rights.
   * Secrets (API key, custom header values) sent back obfuscated are left unchanged.
   * @param {string} authToken - The login token
   * @param {CompletionConfig} config - The updated Completion Config object
   */
  updateCompletionConfig: (
    authToken: string,
    config: Partial<CompletionConfig> & { completionConfigID: string }
  ) =>
    apiFetcher(`/CompletionConfig/${authToken}/${config.completionConfigID}`, {
      apiUrl,
      method: 'PATCH',
      body: config,
    }) as Promise<
      ResponseSpec & {
        config: CompletionConfig;
        completionConfigChangeResults?: CompletionConfigChangeResult[];
      }
    >,

  /**
   * Deletes an existing Completion Config object.
   * A user can only delete a Completion Config object owned by him, unless it has administrative rights.
   * @param {string} authToken - The login token
   * @param {string} configID - The Completion Config object ID
   */
  deleteCompletionConfig: (authToken: string, configID: string) =>
    apiFetcher(`/CompletionConfig/${authToken}/${configID}`, {
      apiUrl,
      method: 'DELETE',
    }) as Promise<
      ResponseSpec & {
        completionConfigChangeResults?: CompletionConfigChangeResult[];
      }
    >,

  /**
   * Creates a new Completion Config object.
   * The created Completion Config object is owned by the currently logged-in user.
   * @param {string} authToken - The login token
   * @param {CompletionConfig} config - The Completion Config object to create
   */
  createCompletionConfig: (
    authToken: string,
    config: Omit<CompletionConfig, 'completionConfigID'> & {
      completionConfigID?: string;
    }
  ) =>
    apiFetcher(`/CompletionConfig/${authToken}`, {
      apiUrl,
      method: 'POST',
      body: config,
    }) as Promise<
      ResponseSpec & {
        config: CompletionConfig;
        completionConfigChangeResults?: CompletionConfigChangeResult[];
      }
    >,
});

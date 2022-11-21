import { ResponseSpec, CustomWord } from '../types';
import { apiFetcher } from '../apiFetcher';

/****************************
 *                          *
 *     CustomDictionary     *
 *                          *
 ****************************/

export default (apiUrl: string) => ({
  /**
   * Lists all Custom Words.
   * @param {string} sessionId The session ID
   */
  getCustomWords: async (sessionId: string) =>
    apiFetcher(`/CustomWords/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        customWords: CustomWord[];
      }
    >,

  /**
   * Gets the details of a Custom Word object.
   * @param {string} sessionId The session ID
   * @param {string} customWordID The Custom Word object ID
   */
  getCustomWord: async (sessionId: string, customWordID: string) =>
    apiFetcher(`/CustomWord/${sessionId}/${customWordID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        customWord: CustomWord;
      }
    >,

  /**
   * Removes an existing Custom Word object.
   * @param {string} sessionId The session ID
   * @param {string} key The key of the Custom Word
   */
  deleteCustomWord: async (sessionId: string, key: string) =>
    apiFetcher(`/CustomWord/${sessionId}/${key}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Custom Word object.
   * @param {string} sessionId The session ID
   * @param {CustomWord} customWord Custom Word
   */
  postCustomWord: async (
    sessionId: string,
    customWord: Pick<CustomWord, 'word'> & Pick<CustomWord, 'definition'>
  ) =>
    apiFetcher(`/CustomWord/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: customWord,
    }) as Promise<
      ResponseSpec & {
        customWord: CustomWord;
      }
    >,

  /**
   * Updates an existing Custom Word object.
   * Only the Definition field is considered for update. To change the Word field a new Custom Word must be added and the existing must be removed.
   * @param {string} sessionId The session ID
   * @param {CustomWord} customWord Custom Word
   */
  patchCustomWord: async (
    sessionId: string,
    customWord: Partial<CustomWord> & { customWordID: string }
  ) =>
    apiFetcher(`/CustomWord/${sessionId}/${customWord.customWordID}`, {
      method: 'PATCH',
      apiUrl,
      body: customWord,
    }) as Promise<ResponseSpec>,
});

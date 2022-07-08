import { ResponseSpec } from '../types';
import { apiFetcher } from '../apiFetcher';

/*****************
 *               *
 *     Media     *
 *               *
 *****************/

export default (apiUrl: string) => ({
  /**
   * Lists all Medium objects of a Memory.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   */
  getMedia: async (sessionId: string, memoryId: string) =>
    apiFetcher(`/Media/${sessionId}/${memoryId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Removes all Medium objects from a Memory.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   */
  deleteMedia: async (sessionId: string, memoryId: string) =>
    apiFetcher(`/Media/${sessionId}/${memoryId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of a Medium object of a Memory.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   * @param {string} mediumId The Medium object ID
   */
  getMedium: async (sessionId: string, memoryId: string, mediumId: string) =>
    apiFetcher(`/Medium/${sessionId}/${memoryId}/${mediumId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Updates an existing Medium object of a Memory.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   * @param {string} mediumId The Medium object ID
   */
  patchMedium: async (sessionId: string, memoryId: string, mediumId: string) =>
    apiFetcher(`/Medium/${sessionId}/${memoryId}/${mediumId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Removes an existing Medium object from a Memory.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   * @param {string} mediumId The Medium object ID
   */
  deleteMedium: (sessionId: string, memoryId: string, mediumId: string) =>
    apiFetcher(`/Medium/${sessionId}/${memoryId}/${mediumId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Medium object to a Memory.
   * @param {string} sessionId The session ID
   * @param {string} memoryId The Memory object ID
   */
  postMedium: async (sessionId: string, memoryId: string) =>
    apiFetcher(`/Medium/${sessionId}/${memoryId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

import { ResponseSpec, Memori } from '../index.d';
import { apiFetcher } from '../apiFetcher';

/******************
 *                *
 *     Memori     *
 *                *
 ******************/

export default (apiUrl: string) => ({
  /**
   * Registration of a new Memori object.
   * @param {Memori} memori - The Memori object
   */
  postMemori: async (memori: Partial<Omit<Memori, 'memoriID'>>) =>
    apiFetcher(`/Memori`, {
      method: 'POST',
      apiUrl,
      body: memori,
    }) as Promise<ResponseSpec>,

  /**
   * Updates an existing Memori object.
   * @param {Memori} memori - The Memori object
   */
  patchMemori: async (memori: Partial<Memori> & { memoriID: string }) =>
    apiFetcher(`/Memori/${memori.memoriID}`, {
      method: 'PATCH',
      apiUrl,
      body: memori,
    }) as Promise<ResponseSpec>,

  /**
   * Deletes an existing Memori object.
   * @param {string} memoriId The Memori object ID
   */
  deleteMemori: async (memoriId: string) =>
    apiFetcher(`/Memori/${memoriId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Lists Memori objects, with optional filtering.
   */
  postSearchMemori: async () =>
    apiFetcher(`/SearchMemori`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

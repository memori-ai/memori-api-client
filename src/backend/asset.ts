import { ResponseSpec, Asset } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * URL to upload a file creating a new Asset object to access it.
   * @param {string} authToken - The login token
   * @param {string} memoriID - The memori ID
   * @param {string=} memoryID - The memory ID
   * @returns The URL to upload a file
   */
  getUploadAssetURL: (authToken: string, memoriID: string, memoryID?: string) =>
    `${apiUrl}/Asset/${authToken}/${memoriID}${memoryID ? `/${memoryID}` : ''}`,

  /**
   * Uploads a file and creates a new Asset object to access it.
   * @param {string} authToken - The login token
   * @param {string} memoriID - The memori ID
   * @param {string=} memoryID - The memory ID
   * @returns Response of an Upload Asset request.
   */
  uploadAsset: async (
    fileName: string,
    fileUrl: string,
    authToken: string,
    memoriID: string,
    memoryID?: string
  ) => {
    const data = new FormData();
    const file = await fetch(fileUrl);
    const fileBlob = await file.blob();

    data.append(fileName, fileBlob, fileName);

    const upload = await fetch(
      `${apiUrl}/Asset/${authToken}/${memoriID}${
        memoryID ? `/${memoryID}` : ''
      }`,
      {
        method: 'POST',
        body: data,
      }
    );
    return (await upload.json()) as Promise<
      ResponseSpec & {
        asset: Asset;
      }
    >;
  },

  /**
   * Downloads a file from an Asset object
   * @param {string} fileName - The file name
   * @param {string} sessionID - The session ID
   * @returns The asset file
   */
  getAsset: (fileName: string, sessionID: string) =>
    apiFetcher(`/Asset/${fileName}/${sessionID}`, {
      apiUrl,
      method: 'GET',
    }),

  /**
   * Updates an Asset object
   * @param {string} authToken - The login token
   * @param {string} assetURL - The asset URL
   * @returns The updated asset object
   */
  updateAsset: (authToken: string, assetURL: string, asset: Asset) =>
    apiFetcher(`/Asset/${authToken}/${assetURL.split('/').reverse()[0]}`, {
      apiUrl,
      method: 'PATCH',
      body: asset,
    }) as Promise<ResponseSpec & { asset: Asset }>,

  /**
   * Deletes an Asset object
   * @param {string} authToken - The login token
   * @param {string} assetURL - The asset URL
   */
  deleteAsset: (authToken: string, assetURL: string) =>
    apiFetcher(`/Asset/${authToken}/${assetURL.split('/').reverse()[0]}`, {
      apiUrl,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,
});

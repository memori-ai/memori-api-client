import type { ResponseSpec, Asset } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/**
 * URL to upload a file creating a new Asset object to access it.
 * @param {string} authToken - The login token
 * @param {string} memoriID - The memori ID
 * @param {string=} memoryID - The memory ID
 * @returns The URL to upload a file
 */
export const getUploadAssetURL = (
  authToken: string,
  memoriID: string,
  memoryID?: string,
) =>
  `${process.env.NEXT_PUBLIC_API_URL}/Asset/${authToken}/${memoriID}${
    memoryID ? `/${memoryID}` : ''
  }`;

/**
 * Uploads a file and creates a new Asset object to access it.
 * @param {string} authToken - The login token
 * @param {string} memoriID - The memori ID
 * @param {string=} memoryID - The memory ID
 * @returns Response of an Upload Asset request.
 */
export const uploadAsset = async (
  fileName: string,
  fileUrl: string,
  authToken: string,
  memoriID: string,
  memoryID?: string,
) => {
  const data = new FormData();
  const file = await fetch(fileUrl);
  const fileBlob = await file.blob();

  data.append(fileName, fileBlob, fileName);

  const upload = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/Asset/${authToken}/${memoriID}${
      memoryID ? `/${memoryID}` : ''
    }`,
    {
      method: 'POST',
      body: data,
    },
  );
  return (await upload.json()) as Promise<
    ResponseSpec & {
      asset: Asset;
    }
  >;
};

/**
 * Downloads a file from an Asset object
 * @param {string} fileName - The file name
 * @param {string} sessionID - The session ID
 * @returns The asset file
 */
export const getAsset = (fileName: string, sessionID: string) =>
  apiFetcher(`/Asset/${fileName}/${sessionID}`, {
    method: 'GET',
  });

/**
 * Updates an Asset object
 * @param {string} authToken - The login token
 * @param {string} assetURL - The asset URL
 * @returns The updated asset object
 */
export const updateAsset = (
  authToken: string,
  assetURL: string,
  asset: Asset,
) =>
  apiFetcher(`/Asset/${authToken}/${assetURL.split('/').reverse()[0]}`, {
    method: 'PATCH',
    body: asset,
  }) as Promise<ResponseSpec & { asset: Asset }>;

/**
 * Deletes an Asset object
 * @param {string} authToken - The login token
 * @param {string} assetURL - The asset URL
 */
export const deleteAsset = (authToken: string, assetURL: string) =>
  apiFetcher(`/Asset/${authToken}/${assetURL.split('/').reverse()[0]}`, {
    method: 'DELETE',
  }) as Promise<ResponseSpec>;

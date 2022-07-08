import { ResponseSpec, Asset } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * URL to upload a file creating a new Asset object to access it.
     * @param {string} authToken - The login token
     * @param {string} memoriID - The memori ID
     * @param {string=} memoryID - The memory ID
     * @returns The URL to upload a file
     */
    getUploadAssetURL: (authToken: string, memoriID: string, memoryID?: string | undefined) => string;
    /**
     * Uploads a file and creates a new Asset object to access it.
     * @param {string} authToken - The login token
     * @param {string} memoriID - The memori ID
     * @param {string=} memoryID - The memory ID
     * @returns Response of an Upload Asset request.
     */
    uploadAsset: (fileName: string, fileUrl: string, authToken: string, memoriID: string, memoryID?: string | undefined) => Promise<ResponseSpec & {
        asset: Asset;
    }>;
    /**
     * Downloads a file from an Asset object
     * @param {string} fileName - The file name
     * @param {string} sessionID - The session ID
     * @returns The asset file
     */
    getAsset: (fileName: string, sessionID: string) => Promise<any>;
    /**
     * Updates an Asset object
     * @param {string} authToken - The login token
     * @param {string} assetURL - The asset URL
     * @returns The updated asset object
     */
    updateAsset: (authToken: string, assetURL: string, asset: Asset) => Promise<ResponseSpec & {
        asset: Asset;
    }>;
    /**
     * Deletes an Asset object
     * @param {string} authToken - The login token
     * @param {string} assetURL - The asset URL
     */
    deleteAsset: (authToken: string, assetURL: string) => Promise<ResponseSpec>;
};
export default _default;

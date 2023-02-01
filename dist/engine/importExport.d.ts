import { ResponseSpec, ImportReponse, ImportCSVParams, ExportCSVParams } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Imports memories from a CSV file.
     * @param {string} sessionId The session ID
     * @param {string[]} csvRows Rows of the CSV file.
     * @param {ImportCSVParams} params The specifications and content of the CSV file
     */
    importCSV: (sessionId: string, csvRows: string[], params: ImportCSVParams) => Promise<ResponseSpec & ImportReponse>;
    /**
     * Exports memories to a CSV file.
     * @param {string} sessionID The session ID
     * @param {ExportCSVParams} params - The specifications of the CSV file
     * @returns The CSV file content
     */
    exportCSV: (sessionID: string, params: ExportCSVParams) => Promise<string>;
};
/************************
 *                      *
 *     ImportExport     *
 *                      *
 ************************/
export default _default;

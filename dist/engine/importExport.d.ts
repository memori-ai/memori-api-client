import { ResponseSpec, ImportReponse, ExportCSVParams, ImportParams } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Imports memories from a CSV file.
     * @param {string} sessionId The session ID
     * @param {string[]} rows Rows of the CSV file.
     * @param {ImportParams} params The specifications and content of the CSV file
     */
    importCSV: (sessionId: string, rows: string[], params: ImportParams) => Promise<ResponseSpec & ImportReponse>;
    /**
     * Gets the status of an ongoing Import process.
     * @param {string} importID The import process ID
     */
    importStatus: (importID: string) => Promise<ResponseSpec & ImportReponse>;
    /**
     * Interrupts an ongoing Import process.
     * @param {string} importID The import process ID
     */
    stopImport: (importID: string) => Promise<ResponseSpec & ImportReponse>;
    /**
     * Imports memories from a TXT file.
     * @param {string} sessionId The session ID
     * @param {string[]} rows Rows of the TXT file.
     * @param {ImportCSVParams} params The specifications and content of the TXT file
     */
    importTXT: (sessionId: string, rows: string[], params: Omit<ImportParams, 'csvSpecs'>) => Promise<ResponseSpec & ImportReponse>;
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

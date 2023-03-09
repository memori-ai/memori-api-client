import {
  ResponseSpec,
  ImportReponse,
  ExportCSVParams,
  ImportParams,
} from '../types';
import { apiFetcher } from '../apiFetcher';

/************************
 *                      *
 *     ImportExport     *
 *                      *
 ************************/

export default (apiUrl: string) => ({
  /**
   * Imports memories from a CSV file.
   * @param {string} sessionId The session ID
   * @param {string[]} rows Rows of the CSV file.
   * @param {ImportParams} params The specifications and content of the CSV file
   */
  importCSV: async (sessionId: string, rows: string[], params: ImportParams) =>
    apiFetcher(`/ImportExport/ImportCSV/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        rows,
        ...params,
      },
    }) as Promise<ResponseSpec & ImportReponse>,

  /**
   * Gets the status of an ongoing Import process.
   * @param {string} importID The import process ID
   */
  importStatus: async (importID: string) =>
    apiFetcher(`/ImportExport/ImportStatus/${importID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec & ImportReponse>,

  /**
   * Interrupts an ongoing Import process.
   * @param {string} importID The import process ID
   */
  stopImport: async (importID: string) =>
    apiFetcher(`/ImportExport/StopImport/${importID}`, {
      method: 'POST',
      apiUrl,
    }) as Promise<ResponseSpec & ImportReponse>,

  /**
   * Imports memories from a TXT file.
   * @param {string} sessionId The session ID
   * @param {string[]} rows Rows of the TXT file.
   * @param {ImportCSVParams} params The specifications and content of the TXT file
   */
  importTXT: async (
    sessionId: string,
    rows: string[],
    params: Omit<ImportParams, 'csvSpecs'>
  ) =>
    apiFetcher(`/ImportExport/ImportTXT/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        rows,
        ...params,
      },
    }) as Promise<ResponseSpec & ImportReponse>,

  /**
   * Exports memories to a CSV file.
   * @param {string} sessionID The session ID
   * @param {ExportCSVParams} params - The specifications of the CSV file
   * @returns The CSV file content
   */
  exportCSV: async (sessionID: string, params: ExportCSVParams) =>
    apiFetcher(`/ImportExport/ExportCSV/${sessionID}`, {
      method: 'POST',
      apiUrl,
      body: params,
      text: true,
    }) as Promise<string>,
});

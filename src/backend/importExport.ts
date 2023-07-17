import type {
  ResponseSpec,
  ImportParams,
  ImportResponse,
  CsvSpecs,
} from '../types';
import { apiFetcher } from '../apiFetcher';

/************************
 *                      *
 *     ImportExport     *
 *                      *
 ************************/

export default (apiUrl: string) => ({
  /**
   * Starts an Import process for memories from a CSV file.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {string[]} rows Rows of the CSV file.
   * @param {ImportParams} params The specifications and content of the CSV file
   */
  importCSV: async (
    authToken: string,
    memoriID: string,
    rows: string[],
    params: Omit<ImportParams, 'txtSpecs'>
  ) =>
    apiFetcher(`/ImportExport/ImportCSV/${authToken}/${memoriID}`, {
      apiUrl,
      method: 'POST',
      body: {
        rows,
        ...params,
      },
    }) as Promise<
      ResponseSpec & {
        status: ImportResponse;
      }
    >,

  /**
   * Starts an Import process for memories from a TXT file.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {string[]} rows Rows of the TXT file.
   * @param {ImportParams} params The specifications and content of the TXT file
   */
  importTXT: async (
    authToken: string,
    memoriID: string,
    rows: string[],
    params: Omit<ImportParams, 'csvSpecs'>
  ) =>
    apiFetcher(`/ImportExport/ImportTXT/${authToken}/${memoriID}`, {
      apiUrl,
      method: 'POST',
      body: {
        rows,
        ...params,
      },
    }) as Promise<
      ResponseSpec & {
        status: ImportResponse;
      }
    >,

  /**
   * Gets a list of Import processes started by the currently logged in User.
   * @param {string} authToken - The login token.
   */
  importProcesses: async (authToken: string) =>
    apiFetcher(`/ImportExport/ImportProcesses/${authToken}`, {
      apiUrl,
      method: 'GET',
    }) as Promise<
      ResponseSpec & {
        importProcesses: ImportResponse[];
      }
    >,

  /**
   * Gets the status of an Import process.
   * @param {string} authToken - The login token.
   * @param {string} importID The import process ID
   */
  importStatus: async (authToken: string, importID: string) =>
    apiFetcher(`/ImportExport/ImportStatus/${authToken}/${importID}`, {
      apiUrl,
      method: 'GET',
    }) as Promise<
      ResponseSpec & {
        status: ImportResponse;
      }
    >,

  /**
   * Interrupts an ongoing Import process.
   * @param {string} authToken - The login token.
   * @param {string} importID The import process ID
   */
  stopImport: async (authToken: string, importID: string) =>
    apiFetcher(`/ImportExport/StopImport/${authToken}/${importID}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<
      ResponseSpec & {
        status: ImportResponse;
      }
    >,

  /**
   * Exports contents of a Memori object to a CSV file.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {CsvSpecs} csvSpecs - The specifications of the CSV file
   * @param {string=} password - Memori password, if its privacy model is set to Secret.
   * @returns The CSV file content
   */
  exportCSV: async (
    authToken: string,
    memoriID: string,
    csvSpecs: CsvSpecs,
    password?: string
  ) =>
    apiFetcher(`/ImportExport/ExportCSV/${authToken}/${memoriID}`, {
      apiUrl,
      method: 'POST',
      body: {
        csvSpecs,
        password,
      },
      text: true,
    }) as Promise<string>,
});

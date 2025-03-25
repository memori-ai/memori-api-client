import type {
  ResponseSpec,
  ImportParams,
  ImportStatus,
  CsvSpecs,
  JSONLSpecs,
  ImportMemoriParams,
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
        status: ImportStatus;
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
        status: ImportStatus;
      }
    >,

  /**
   * Imports a dictionary to a Memori object.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {string[]} rows Rows of the CSV file.
   * @param {ImportParams} params The specifications and content of the CSV file
   */
  importDictionary: async (
    authToken: string,
    memoriID: string,
    rows: string[],
    params: Omit<ImportParams, 'txtSpecs'>
  ) =>
    apiFetcher(`/ImportExport/ImportDictionary/${authToken}/${memoriID}`, {
      apiUrl,
      method: 'POST',
      body: {
        rows,
        ...params,
      },
    }) as Promise<
      ResponseSpec & {
        status: ImportStatus;
      }
    >,

  /**
   * Starts an Import process for functions and intents from a jsonl file.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {string[]} rows Rows of the jsonl file.
   * @param {ImportParams} params The specifications and content of the jsonl file
   */
  importFunctionsIntents: async (
    authToken: string,
    memoriID: string,
    rows: string[],
    params: Omit<ImportParams, 'txtSpecs'>
  ) =>
    apiFetcher(
      `/ImportExport/ImportFunctionsIntents/${authToken}/${memoriID}`,
      {
        apiUrl,
        method: 'POST',
        body: {
          rows,
          ...params,
        },
      }
    ) as Promise<
      ResponseSpec & {
        status: ImportStatus;
      }
    >,

  /**
   * Starts an Import process for functions and intents from a jsonl file.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {string[]} rows Rows of the jsonl file.
   * @param {ImportParams} params The specifications and content of the jsonl file
   */
  importMemori: async (
    authToken: string,
    rows?: string[],
    params?: ImportMemoriParams
  ) =>
    apiFetcher(`/ImportExport/ImportMemori/${authToken}`, {
      apiUrl,
      method: 'POST',
      body: {
        rows,
        ...params,
      },
    }) as Promise<
      ResponseSpec & {
        status: ImportStatus;
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

  /**
   * Exports contents of a Memori object to a JSONL file, suitable for fine-tuning with generative AI platforms.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {JSONLSpecs} jsonlSpecs - Specifications for requests involving import/export of JSONL contents.
   * @param {string=} password - Memori password, if its privacy model is set to Secret.
   * @returns The JSONL file content
   */
  exportJSONL: async (
    authToken: string,
    memoriID: string,
    jsonlSpecs: JSONLSpecs,
    password?: string
  ) =>
    apiFetcher(`/ImportExport/ExportJSONL/${authToken}/${memoriID}`, {
      apiUrl,
      method: 'POST',
      body: {
        jsonlSpecs,
        password,
      },
      text: true,
    }) as Promise<string>,

  // Updated exportMemori function for the API repository
  exportMemori: async (
    authToken: string,
    memoriID: string,
    password?: string
  ) => {
    // Modify the apiFetcher call to handle binary data
    const response = await fetch(
      `${apiUrl}/ImportExport/ExportMemori/${authToken}/${memoriID}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/octet-stream, application/zip',
        },
        body: JSON.stringify({
          password,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`API responded with status: ${response.status}`);
    }

    // Return the binary data as ArrayBuffer
    return response.arrayBuffer();
  },
});

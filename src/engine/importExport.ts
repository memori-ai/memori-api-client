import { ResponseSpec } from '../types';
import { apiFetcher } from '../apiFetcher';

export interface ImportCSVParams {
  includedRows?: number[];
  hasHeaders?: boolean;
  headerNames?: string[];
  forceImport?: boolean;
  questionColumnName: string;
  answerColumnName: string;
  contextVarsToMatchColumnName?: string;
  contextVarsToSetColumnName?: string;
  csvSeparator?: string;
  questionTitleVariantsSeparator?: string;
}

export interface ExportCSVParams {
  newLine: '\n' | '\r\n';
  hasHeaders?: boolean;
  questionColumnName: string;
  answerColumnName: string;
  contextVarsToMatchColumnName?: string;
  contextVarsToSetColumnName?: string;
  csvSeparator?: string;
  questionTitleVariantsSeparator?: string;
}

export interface ImportReponse {
  importID: string;
  importedMemories?: number;
  importWarnings?: {
    warningType: 'Existing Similar Memory' | 'Internal Error';
    rowNumber?: number;
    csvRow: string;
    text?: string;
    similarTexts?: {
      text: string;
      similarityLevel: 'HIGH' | 'MEDIUM' | 'LOW';
    }[];
  }[];
}

/************************
 *                      *
 *     ImportExport     *
 *                      *
 ************************/

export default (apiUrl: string) => ({
  /**
   * Imports memories from a CSV file.
   * @param {string} sessionId The session ID
   * @param {string[]} csvRows Rows of the CSV file.
   * @param {ImportCSVParams} params The specifications and content of the CSV file
   */
  importCSV: async (
    sessionId: string,
    csvRows: string[],
    params: ImportCSVParams
  ) =>
    apiFetcher(`/ImportExport/ImportCSV/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        csvRows,
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

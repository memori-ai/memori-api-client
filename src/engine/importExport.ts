import { ResponseSpec } from '../index.d';
import { apiFetcher } from '../apiFetcher';

export interface ImportExportBody {
  csvRows: string[];
  questionColumnName: string;
  answerColumnName: string;
  propertyColumnNames: string[];
  includedRows: number[];
  csvSeparator: string;
  questionTitleVariantsSeparator: string;
  hasHeaders: boolean;
  forceImport: boolean;
  headerNames: string[];
}

export interface ImportExportReponse {
  importID: string;
  importedMemories: number;
  importWarnings?: {
    warningType: string;
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
   * @param {ImportExportBody} csvData The CSV content info to import
   */
  postImportExport: async (sessionId: string, csvData: ImportExportBody) =>
    apiFetcher(`/ImportExport/ImportCSV/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: csvData,
    }) as Promise<ResponseSpec & ImportExportReponse>,
});

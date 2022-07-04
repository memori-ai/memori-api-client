import type { ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

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

/**
 * Imports memories from a CSV file.
 * @param {string} sessionId The session ID
 * @param {ImportExportBody} csvData The CSV content info to import
 */
export const postImportExport = async (
  sessionId: string,
  csvData: ImportExportBody,
) =>
  apiFetcher(`/ImportExport/ImportCSV/${sessionId}`, {
    method: 'POST',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
    body: csvData,
  }) as Promise<ResponseSpec & ImportExportReponse>;

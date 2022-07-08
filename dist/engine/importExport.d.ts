import { ResponseSpec } from '../types';
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
declare const _default: (apiUrl: string) => {
    /**
     * Imports memories from a CSV file.
     * @param {string} sessionId The session ID
     * @param {ImportExportBody} csvData The CSV content info to import
     */
    postImportExport: (sessionId: string, csvData: ImportExportBody) => Promise<ResponseSpec & ImportExportReponse>;
};
/************************
 *                      *
 *     ImportExport     *
 *                      *
 ************************/
export default _default;

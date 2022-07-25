import { ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Gets a list of currently known context variables.
     * @param {string} sessionId The session ID
     */
    getContextVars: (sessionId: string) => Promise<ResponseSpec & {
        [variable: string]: string[];
    }>;
    /**
     * Gets a list of currently known context variable names.
     * @param {string} sessionId The session ID
     */
    getContextVarNames: (sessionId: string) => Promise<ResponseSpec & {
        contextVarNames: string[];
    }>;
    /**
     * /memori/v2/ContextVarValues/{strSessionID}/{contextVarName}
     * @param {string} sessionId The session ID
     * @param {string} contextVarName The name of the context variable
     */
    getContextVarValues: (sessionId: string, contextVarName: string) => Promise<ResponseSpec & {
        contextVarName: string;
        contextVarValues: string[];
    }>;
};
/****************************
 *                          *
 *       ContextVars        *
 *                          *
 ****************************/
export default _default;

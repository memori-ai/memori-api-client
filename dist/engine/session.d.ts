import { ResponseSpec, OpenSession, DialogState } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Initializes a new Dialog State Machine session for an existing Memori.
     */
    initSession: (params: OpenSession) => Promise<ResponseSpec & {
        sessionID: string;
        currentState: DialogState;
    }>;
    /**
     * Returns the current state of a session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    getSession: (sessionId: string) => Promise<ResponseSpec & {
        currentState: DialogState;
    }>;
    /**
     * Closes the session and disposes of its Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    deleteSession: (sessionId: string) => Promise<ResponseSpec>;
};
/*******************
 *                 *
 *     Session     *
 *                 *
 *******************/
export default _default;

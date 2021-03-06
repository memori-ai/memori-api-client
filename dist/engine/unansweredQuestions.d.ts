import { ResponseSpec, UnansweredQuestion } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Unanswered Question objects.
     * @param {string} sessionId The session ID
     */
    getUnansweredQuestions: (sessionId: string) => Promise<ResponseSpec & {
        unansweredQuestions: UnansweredQuestion[];
    }>;
    /**
     * Removes an existing Unanswered Question object.
     * @param {string} sessionId The session ID
     * @param {string} unansweredQuestionId The Unanswered Question object ID
     */
    deleteUnansweredQuestion: (sessionId: string, unansweredQuestionId: string) => Promise<ResponseSpec>;
};
/*******************************
 *                             *
 *     UnansweredQuestions     *
 *                             *
 *******************************/
export default _default;

import { ResponseSpec, UnansweredQuestion } from '../types';
import { apiFetcher } from '../apiFetcher';

/*******************************
 *                             *
 *     UnansweredQuestions     *
 *                             *
 *******************************/

export default (apiUrl: string) => ({
  /**
   * Lists all Unanswered Question objects.
   * @param {string} sessionId The session ID
   */
  getUnansweredQuestions: async (sessionId: string) =>
    apiFetcher(`/UnansweredQuestions/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        unansweredQuestions: UnansweredQuestion[];
      }
    >,

  /**
   * Removes an existing Unanswered Question object.
   * @param {string} sessionId The session ID
   * @param {string} unansweredQuestionId The Unanswered Question object ID
   */
  deleteUnansweredQuestion: async (
    sessionId: string,
    unansweredQuestionId: string
  ) =>
    apiFetcher(`/UnansweredQuestion/${sessionId}/${unansweredQuestionId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

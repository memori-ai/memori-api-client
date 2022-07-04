import type { ResponseSpec, UnansweredQuestion } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/*******************************
 *                             *
 *     UnansweredQuestions     *
 *                             *
 *******************************/

/**
 * Lists all Unanswered Question objects.
 * @param {string} sessionId The session ID
 */
export const getUnansweredQuestions = async (sessionId: string) =>
  apiFetcher(`/UnansweredQuestions/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      unansweredQuestions: UnansweredQuestion[];
    }
  >;

/**
 * Removes an existing Unanswered Question object.
 * @param {string} sessionId The session ID
 * @param {string} unansweredQuestionId The Unanswered Question object ID
 */
export const deleteUnansweredQuestion = async (
  sessionId: string,
  unansweredQuestionId: string,
) =>
  apiFetcher(`/UnansweredQuestion/${sessionId}/${unansweredQuestionId}`, {
    method: 'DELETE',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

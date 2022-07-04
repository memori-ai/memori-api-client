import type { ResponseSpec, OpenSession, DialogState } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/*******************
 *                 *
 *     Session     *
 *                 *
 *******************/

/**
 * Initializes a new Dialog State Machine session for an existing Memori.
 */
export const initSession = async (params: OpenSession) =>
  apiFetcher(`/Session`, {
    method: 'POST',
    body: params,
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      sessionID: string;
      currentState: DialogState;
    }
  >;

/**
 * Returns the current state of a session's Dialog State Machine.
 * @param {string} sessionId The session ID
 */
export const getSession = async (sessionId: string) =>
  apiFetcher(`/Session/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      currentState: DialogState;
    }
  >;

/**
 * Closes the session and disposes of its Dialog State Machine.
 * @param {string} sessionId The session ID
 */
export const deleteSession = async (sessionId: string) =>
  apiFetcher(`/Session/${sessionId}`, {
    method: 'DELETE',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

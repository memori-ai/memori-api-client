import type { ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/*****************************
 *                           *
 *     PromptedQuestions     *
 *                           *
 *****************************/

/**
 * Lists all Prompted Question objects.
 * @param {string} sessionId The session ID
 */
export const getPromptedQuestions = async ({
  sessionId,
}: {
  sessionId: string;
}) =>
  apiFetcher(`/PromptedQuestions/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Gets the details of a Prompted Question object.
 * @param {string} sessionId The session ID
 * @param {string} promptId The Prompted Question object ID
 */
export const getPromptedQuestion = async ({
  sessionId,
  promptId,
}: {
  sessionId: string;
  promptId: string;
}) =>
  apiFetcher(`/PromptedQuestion/${sessionId}/${promptId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Updates an existing Prompted Question object.
 * @param {string} sessionId The session ID
 * @param {string} promptId The Prompted Question object ID
 */
export const patchPromptedQuestion = async ({
  sessionId,
  promptId,
}: {
  sessionId: string;
  promptId: string;
}) =>
  apiFetcher(`/PromptedQuestion/${sessionId}/${promptId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Removes an existing Prompted Question object.
 * @param {string} sessionId The session ID
 * @param {string} promptId The Prompted Question object ID
 */
export const deletePromptedQuestion = async ({
  sessionId,
  promptId,
}: {
  sessionId: string;
  promptId: string;
}) =>
  apiFetcher(`/PromptedQuestion/${sessionId}/${promptId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Adds a new Prompted Question object.
 * @param {string} sessionId The session ID
 */
export const postPromptedQuestion = async ({
  sessionId,
}: {
  sessionId: string;
}) =>
  apiFetcher(`/PromptedQuestion/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

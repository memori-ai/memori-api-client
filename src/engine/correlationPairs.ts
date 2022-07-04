import type { ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/****************************
 *                          *
 *     CorrelationPairs     *
 *                          *
 ****************************/

/**
 * Lists all Correlation Pair objects.
 * @param {string} sessionId The session ID
 */
export const getCorrelationPairs = async ({
  sessionId,
}: {
  sessionId: string;
}) =>
  apiFetcher(`/CorrelationPairs/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Removes an existing Correlation Pair object.
 * @param {string} sessionId The session ID
 * @param {string} pairId The Correlation Pair object ID
 */
export const deleteCorrelationPair = async ({
  sessionId,
  pairId,
}: {
  sessionId: string;
  pairId: string;
}) =>
  apiFetcher(`/CorrelationPair/${sessionId}/${pairId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

import type { ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/*****************
 *               *
 *     Media     *
 *               *
 *****************/

/**
 * Lists all Medium objects of a Memory.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 */
export const getMedia = async ({
  sessionId,
  memoryId,
}: {
  sessionId: string;
  memoryId: string;
}) =>
  apiFetcher(`/Media/${sessionId}/${memoryId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Removes all Medium objects from a Memory.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 */
export const deleteMedia = async ({
  sessionId,
  memoryId,
}: {
  sessionId: string;
  memoryId: string;
}) =>
  apiFetcher(`/Media/${sessionId}/${memoryId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Gets the details of a Medium object of a Memory.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 * @param {string} mediumId The Medium object ID
 */
export const getMedium = async ({
  sessionId,
  memoryId,
  mediumId,
}: {
  sessionId: string;
  memoryId: string;
  mediumId: string;
}) =>
  apiFetcher(`/Medium/${sessionId}/${memoryId}/${mediumId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Updates an existing Medium object of a Memory.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 * @param {string} mediumId The Medium object ID
 */
export const patchMedium = async ({
  sessionId,
  memoryId,
  mediumId,
}: {
  sessionId: string;
  memoryId: string;
  mediumId: string;
}) =>
  apiFetcher(`/Medium/${sessionId}/${memoryId}/${mediumId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Removes an existing Medium object from a Memory.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 * @param {string} mediumId The Medium object ID
 */
export const deleteMedium = ({
  sessionId,
  memoryId,
  mediumId,
}: {
  sessionId: string;
  memoryId: string;
  mediumId: string;
}) =>
  apiFetcher(`/Medium/${sessionId}/${memoryId}/${mediumId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Adds a new Medium object to a Memory.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 */
export const postMedium = async ({
  sessionId,
  memoryId,
}: {
  sessionId: string;
  memoryId: string;
}) =>
  apiFetcher(`/Medium/${sessionId}/${memoryId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

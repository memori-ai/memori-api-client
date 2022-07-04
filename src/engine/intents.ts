import type { ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/*******************
 *                 *
 *     Intents     *
 *                 *
 *******************/

/**
 * Lists all Intent objects.
 * @param {string} sessionId The session ID
 */
export const getIntents = async ({ sessionId }: { sessionId: string }) =>
  apiFetcher(`/Intents/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Gets the details of an Intent object.
 * @param {string} sessionId The session ID
 * @param {string} intentId The Intent object ID
 */
export const getIntent = async ({
  sessionId,
  intentId,
}: {
  sessionId: string;
  intentId: string;
}) =>
  apiFetcher(`/Intent/${sessionId}/${intentId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Updates an existing Intent object.
 * @param {string} sessionId The session ID
 * @param {string} intentId The Intent object ID
 */
export const patchIntent = async ({
  sessionId,
  intentId,
}: {
  sessionId: string;
  intentId: string;
}) =>
  apiFetcher(`/Intent/${sessionId}/${intentId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Removes an existing Intent object.
 * @param {string} sessionId The session ID
 * @param {string} intentId The Intent object ID
 */
export const deleteIntent = async ({
  sessionId,
  intentId,
}: {
  sessionId: string;
  intentId: string;
}) =>
  apiFetcher(`/Intent/${sessionId}/${intentId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Adds a new Intent object.
 * @param {string} sessionId The session ID
 */
export const postIntent = async ({ sessionId }: { sessionId: string }) =>
  apiFetcher(`/Intent/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Lists all Intent Slot objects.
 * @param {string} sessionId The session ID
 */
export const getIntentSlots = async ({ sessionId }: { sessionId: string }) =>
  apiFetcher(`/IntentSlots/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Gets the details of an Intent Slot object.
 * @param {string} sessionId The session ID
 * @param {string} slotId The Intent Slot object ID
 */
export const getIntentSlot = async ({
  sessionId,
  slotId,
}: {
  sessionId: string;
  slotId: string;
}) =>
  apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Updates an existing Intent Slot object.
 * @param {string} sessionId The session ID
 * @param {string} slotId The Intent Slot object ID
 */
export const patchIntentSlot = async ({
  sessionId,
  slotId,
}: {
  sessionId: string;
  slotId: string;
}) =>
  apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Removes an existing Intent Slot object.
 * @param {string} sessionId The session ID
 * @param {string} slotId The Intent Slot object ID
 */
export const deleteIntentSlot = async ({
  sessionId,
  slotId,
}: {
  sessionId: string;
  slotId: string;
}) =>
  apiFetcher(`/IntentSlot/${sessionId}/${slotId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Adds a new Intent Slot object.
 * @param {string} sessionId The session ID
 */
export const postIntentSlot = async ({ sessionId }: { sessionId: string }) =>
  apiFetcher(`/IntentSlot/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

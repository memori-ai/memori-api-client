import type { ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/******************
 *                *
 *     Memori     *
 *                *
 ******************/

/**
 * Registration of a new Memori object.
 */
export const postMemori = async ({ memoriId }: { memoriId: string }) =>
  apiFetcher(`/Memori`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Updates an existing Memori object.
 * @param {string} memoriId The Memori object ID
 */
export const patchMemori = async ({ memoriId }: { memoriId: string }) =>
  apiFetcher(`/Memori/${memoriId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Deletes an existing Memori object.
 * @param {string} memoriId The Memori object ID
 */
export const deleteMemori = async ({ memoriId }: { memoriId: string }) =>
  apiFetcher(`/Memori/${memoriId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Lists Memori objects, with optional filtering.
 */
export const postSearchMemori = async () =>
  apiFetcher(`/SearchMemori`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

import type { Memory, ResponseSpec } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/********************
 *                  *
 *     Memories     *
 *                  *
 ********************/

/**
 * Lists all Memory objects.
 * @param {string} sessionId The session ID
 */
export const getMemories = async (sessionId: string) =>
  apiFetcher(`/Memories/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      memories: Memory[];
    }
  >;

/**
 * Gets the details of a Memory object.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 */
export const getMemory = async (sessionId: string, memoryId: string) =>
  apiFetcher(`/Memory/${sessionId}/${memoryId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      memory: Memory;
    }
  >;

/**
 * Updates an existing Memory object.
 * @param {string} sessionId The session ID
 * @param {Memory} memory The Memory object
 */
export const patchMemory = async (sessionId: string, memory: Memory) =>
  apiFetcher(`/Memory/${sessionId}/${memory.memoryID}`, {
    method: 'PATCH',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
    body: memory,
  }) as Promise<ResponseSpec>;

/**
 * Removes an existing Memory object.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 */
export const deleteMemory = async (sessionId: string, memoryId: string) =>
  apiFetcher(`/Memory/${sessionId}/${memoryId}`, {
    method: 'DELETE',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Adds a new Memory object.
 * @param {string} sessionId The session ID
 * @param {Memory} memory The Memory object
 */
export const postMemory = async (sessionId: string, memory: Memory) =>
  apiFetcher(`/Memory/${sessionId}`, {
    method: 'POST',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
    body: memory,
  }) as Promise<
    ResponseSpec & {
      memoryID: string;
    }
  >;

/**
 * Checks if a Memory object is accessible from the specified session.
 * @param {string} sessionId The session ID
 * @param {string} memoryId The Memory object ID
 */
export const getMemoryAccess = async (sessionId: string, memoryId: string) =>
  apiFetcher(`/MemoryAccess/${sessionId}/${memoryId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

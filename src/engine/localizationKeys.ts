import type {
  ResponseSpec,
  LocalizationKey,
  LocalizationKeyContent,
} from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/****************************
 *                          *
 *     LocalizationKeys     *
 *                          *
 ****************************/

/**
 * Lists all Localizaiton Keys.
 * @param {string} sessionId The session ID
 */
export const getLocalizationKeys = async (sessionId: string) =>
  apiFetcher(`/LocalizationKeys/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      localizationKeys: LocalizationKey[];
    }
  >;

/**
 * Get an existing Localizaiton Key.
 * @param {string} sessionId The session ID
 * @param {string} key The key of the Localization Key
 */
export const getLocalizationKey = async (sessionId: string, key: string) =>
  apiFetcher(`/LocalizationKey/${sessionId}/${key}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      localizationKey: LocalizationKey;
    }
  >;

/**
 * Removes an existing Localizaiton Key. This is only possible if the key is part of
 *  a key set, where a key set is a set of keys of a common prefix and an index,
 *  e.g.: <code>INPUT_QUIT_1</code>, <code>INPUT_QUIT_2</code> etc.
 *  Any index can be specified, the key set will be reordered appropriately.
 * @param {string} sessionId The session ID
 * @param {string} key The key of the Localization Key
 */
export const deleteLocalizationKey = async (sessionId: string, key: string) =>
  apiFetcher(`/LocalizationKey/${sessionId}/${key}`, {
    method: 'DELETE',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Add an new Localization Key. This is only possible if the key is part of
 *  a key set, where a key set is a set of keys of a common prefix and an index,
 *  e.g.: <code>INPUT_QUIT_1</code>, <code>INPUT_QUIT_2</code> etc.
 *  Any index can be specified, the key set will be reordered appropriately.
 * @param {string} sessionId The session ID
 * @param {LocalizaitonKeyContent} localizationKey Localization Key
 */
export const postLocalizationKey = async (
  sessionId: string,
  localizationKey: LocalizationKeyContent,
) =>
  apiFetcher(`/LocalizationKey/${sessionId}`, {
    method: 'POST',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
    body: localizationKey,
  }) as Promise<
    ResponseSpec & {
      localizationKey: LocalizationKey;
    }
  >;

/**
 * Updates an existing Localization Key.
 * @param {string} sessionId The session ID
 * @param {LocalizationKey} localizationKey Localization Key
 */
export const patchLocalizationKey = async (
  sessionId: string,
  localizationKey: LocalizationKey,
) =>
  apiFetcher(`/LocalizationKey/${sessionId}`, {
    method: 'PATCH',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
    body: localizationKey,
  }) as Promise<ResponseSpec>;

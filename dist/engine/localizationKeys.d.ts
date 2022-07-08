import { ResponseSpec, LocalizationKey, LocalizationKeyContent } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Localizaiton Keys.
     * @param {string} sessionId The session ID
     */
    getLocalizationKeys: (sessionId: string) => Promise<ResponseSpec & {
        localizationKeys: LocalizationKey[];
    }>;
    /**
     * Get an existing Localizaiton Key.
     * @param {string} sessionId The session ID
     * @param {string} key The key of the Localization Key
     */
    getLocalizationKey: (sessionId: string, key: string) => Promise<ResponseSpec & {
        localizationKey: LocalizationKey;
    }>;
    /**
     * Removes an existing Localizaiton Key. This is only possible if the key is part of
     *  a key set, where a key set is a set of keys of a common prefix and an index,
     *  e.g.: <code>INPUT_QUIT_1</code>, <code>INPUT_QUIT_2</code> etc.
     *  Any index can be specified, the key set will be reordered appropriately.
     * @param {string} sessionId The session ID
     * @param {string} key The key of the Localization Key
     */
    deleteLocalizationKey: (sessionId: string, key: string) => Promise<ResponseSpec>;
    /**
     * Add an new Localization Key. This is only possible if the key is part of
     *  a key set, where a key set is a set of keys of a common prefix and an index,
     *  e.g.: <code>INPUT_QUIT_1</code>, <code>INPUT_QUIT_2</code> etc.
     *  Any index can be specified, the key set will be reordered appropriately.
     * @param {string} sessionId The session ID
     * @param {LocalizaitonKeyContent} localizationKey Localization Key
     */
    postLocalizationKey: (sessionId: string, localizationKey: LocalizationKeyContent) => Promise<ResponseSpec & {
        localizationKey: LocalizationKey;
    }>;
    /**
     * Updates an existing Localization Key.
     * @param {string} sessionId The session ID
     * @param {LocalizationKey} localizationKey Localization Key
     */
    patchLocalizationKey: (sessionId: string, localizationKey: LocalizationKey) => Promise<ResponseSpec>;
};
/****************************
 *                          *
 *     LocalizationKeys     *
 *                          *
 ****************************/
export default _default;

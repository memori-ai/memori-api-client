export interface ResourceURLParams {
    type?: 'avatar' | 'cover' | 'default';
    resourceURI?: string;
    sessionID?: string;
    baseURL?: string;
}
declare const _default: (apiUrl: string) => {
    /**
     * getResourceUrl
     * @description Returns the correct URL of a resource from the DB.
     * @param {obj} params
     * @param {string=} params.type - wheather is the avatar or the cover
     * @param {string=} params.resourceURI - the resource URI
     * @param {string=} params.sessionID - the session ID, required for memory media attachments
     * @param {string=} params.baseURL - the base URL for default static assets (defaults to https://app.twincreator.com)
     * @returns {string}
     */
    getResourceUrl: ({ type, resourceURI, sessionID, baseURL, }: ResourceURLParams) => string;
};
export default _default;

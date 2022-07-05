export interface ResourceURLParams {
  type?: 'avatar' | 'cover' | 'default';
  resourceURI?: string;
  sessionID?: string;
  baseURL?: string;
}

export default (apiUrl: string) => ({
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
  getResourceUrl: ({
    type,
    resourceURI,
    sessionID,
    baseURL = 'https://app.twincreator.com',
  }: ResourceURLParams): string => {
    let defaultUri =
      type === 'cover'
        ? `${baseURL}/images/memoriCover.png`
        : `${baseURL}/images/memoriAvatar.png`;
    if (!resourceURI || resourceURI.length === 0) {
      return defaultUri;
    } else if (resourceURI.includes('memoriai/memory')) {
      return `${resourceURI}?memori-ai-session-id=${sessionID}`;
    } else if (
      resourceURI.startsWith('https://') ||
      resourceURI.startsWith('http://')
    ) {
      return `${resourceURI}${sessionID ? `/${sessionID}` : ''}`;
    } else if (resourceURI.startsWith('cloud://')) {
      return `${apiUrl.replace(/v2/, 'v1')}/CloudAsset/${resourceURI.replace(
        'cloud://',
        ''
      )}`;
    } else if (resourceURI.startsWith('guid://')) {
      return `${apiUrl.replace(/v2/, 'v1')}/GuidAsset/${resourceURI.replace(
        'guid://',
        ''
      )}`;
    } else {
      return defaultUri;
    }
  },
});

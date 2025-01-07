import { ResponseSpec, Badge } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Processes the specified outcome.
   * @param {string} authToken - The login token
   * @param {string} outcomeCode - The outcome code
   */
  postOutcome: (authToken: string, outcomeCode: string) =>
    apiFetcher(`/Outcome/${authToken}/${outcomeCode}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Gets a list of Badge objects assigned to the currently logged in User.
   * @param {string} authToken - The login token
   * @returns The list of Badge objects.
   */
  getUserBadges: (authToken: string) =>
    apiFetcher(`/Badges/${authToken}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { badges: Badge[] }>,

  /**
   * Get the detail of a Badge object of the currently logged in User.
   * @param {string} authToken - The login token
   * @param {string} badgeID - The ID of the Badge object
   * @returns The Badge object
   */
  getBadge: (authToken: string, badgeID: string) =>
    apiFetcher(`/Badge/${authToken}/${badgeID}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { badge: Badge }>,
});

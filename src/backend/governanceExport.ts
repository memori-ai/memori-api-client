import { ResponseSpec, GovernanceExportStatus } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Starts generation of the tenant governance/policy ZIP.
   * Admin / SuperAdmin only. No request body.
   * @param {string} authToken - The login token.
   */
  startGovernanceExport: async (authToken: string) =>
    apiFetcher(`/GovernanceExport/${authToken}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<
      ResponseSpec & {
        status: GovernanceExportStatus;
      }
    >,
});

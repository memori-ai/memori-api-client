import { ResponseSpec, TrustedApplication } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Creates a new TrustedApplication.
   * Only administrators can create TrustedApplications.
   * @param authToken - The login token
   * @param trustedApplication - The TrustedApplication specifications
   * @returns The created TrustedApplication object
   */
  createTrustedApplication: (
    authToken: string,
    trustedApplication: TrustedApplication
  ) =>
    apiFetcher(`/TrustedApplication/${authToken}`, {
      apiUrl,
      body: trustedApplication,
      method: 'POST',
    }) as Promise<ResponseSpec & { trustedApplication: TrustedApplication }>,

  /**
   * Gets a TrustedApplication by ID.
   * @param authToken - The login token
   * @param trustedApplicationID - The TrustedApplication ID
   * @returns The TrustedApplication object
   */
  getTrustedApplication: (authToken: string, trustedApplicationID: string) =>
    apiFetcher(`/TrustedApplication/${authToken}/${trustedApplicationID}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { trustedApplication: TrustedApplication }>,

  /**
   * Updates an existing TrustedApplication.
   * @param authToken - The login token
   * @param trustedApplicationID - The TrustedApplication ID
   * @param trustedApplication - The TrustedApplication specifications
   * @returns The updated TrustedApplication object
   */
  updateTrustedApplication: (
    authToken: string,
    trustedApplicationID: string,
    trustedApplication: TrustedApplication
  ) =>
    apiFetcher(`/TrustedApplication/${authToken}/${trustedApplicationID}`, {
      apiUrl,
      method: 'PATCH',
      body: trustedApplication,
    }) as Promise<ResponseSpec & { trustedApplication: TrustedApplication }>,

  /**
   * Deletes a TrustedApplication.
   * @param authToken - The login token
   * @param trustedApplicationID - The TrustedApplication ID
   */
  deleteTrustedApplication: (authToken: string, trustedApplicationID: string) =>
    apiFetcher(`/TrustedApplication/${authToken}/${trustedApplicationID}`, {
      apiUrl,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,

  /**
   * Lists all TrustedApplications for the current tenant.
   * @param authToken - The login token
   * @returns A list of TrustedApplication objects
   */
  getTrustedApplicationsList: (authToken: string) =>
    apiFetcher(`/TrustedApplications/${authToken}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { trustedApplications: TrustedApplication[] }>,
});

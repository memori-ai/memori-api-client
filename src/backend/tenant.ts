import { ResponseSpec, Tenant } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Health check for the backend
   */
  healthCheck: () =>
    apiFetcher(`/HealthCheck`, {
      apiUrl,
      method: 'GET',
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of a Tenant object.
   * @param tenantName - The name of the tenant
   * @alias getTenant
   * @deprecated
   */
  getTenantConfig: (authToken: string, tenantName: string) =>
    apiFetcher(`/Tenant/${authToken}/${tenantName}`, { apiUrl }) as Promise<
      ResponseSpec & {
        tenant: Tenant;
      }
    >,

  /**
   * Gets the details of a Tenant object.
   * @param tenantName - The name of the tenant
   */
  getTenant: (authToken: string, tenantName: string) =>
    apiFetcher(`/Tenant/${authToken}/${tenantName}`, { apiUrl }) as Promise<
      ResponseSpec & {
        tenant: Tenant;
      }
    >,

  /**
   * Gets the list of of all Tenant objects.
   * @param authToken - The login token
   */
  getTenantList: (authToken: string) =>
    apiFetcher(`/Tenants/${authToken}`, {
      apiUrl,
      method: 'GET',
    }) as Promise<ResponseSpec & { tenants: Tenant[] }>,

  /**
   * Duplicates a Tenant object.
   * @param {string} authToken - The login token
   * @param {string} name - The name of the Tenant to duplicate
   * @param {TenantBase} tenant
   * @returns The specifications of the new Tenant object
   */
  createTenant: (authToken: string, name: string, tenant: Partial<Tenant>) =>
    apiFetcher(`/Tenant/${authToken}/${name}`, {
      apiUrl,
      method: 'POST',
      body: tenant,
    }) as Promise<
      ResponseSpec & {
        tenant: Tenant;
      }
    >,

  /**
   * Updates the details of a Tenant object.
   * @param {string} authToken  - The login token
   * @param {string} name - The name of the Tenant to update
   * @param {Tenant} tenant
   * @returns The new specifications of the Tenant object
   */
  patchTenant: (authToken: string, name: string, tenant: Partial<Tenant>) =>
    apiFetcher(`/Tenant/${authToken}/${name}`, {
      apiUrl,
      method: 'PATCH',
      body: tenant,
    }) as Promise<
      ResponseSpec & {
        tenant: Tenant;
      }
    >,
});

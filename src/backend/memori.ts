import { ResponseSpec, Memori, MemoriConfig } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Gets a list of all the public Memori objects for a specific Tenant.
   * @param tenant - The name of the tenant
   * @returns A list of Memori objects
   */
  getTenantPublicMemoriList: (tenant: string) =>
    apiFetcher(`/TenantPublicMemori/${encodeURIComponent(tenant)}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of all the public Memori objects published on the Metaverse for a specific Tenant.
   * @param tenant - The name of the tenant
   * @returns A list of Memori objects
   */
  getTenantMetaverseMemoriList: (tenant: string) =>
    apiFetcher(`/TenantMetaverseMemori/${encodeURIComponent(tenant)}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of all the public Memori objects for a specific Tenant accessible from user session.
   * @param authToken - The login token
   * @returns A list of Memori objects
   */
  getPublicMemoriList: (authToken: string) =>
    apiFetcher(`/PublicMemori/${authToken}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of all Memori objects.
   * @param authToken - The login token
   * @returns A list of Memori objects
   */
  getAllMemori: (authToken: string) =>
    apiFetcher(`/AllMemori/${authToken}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of Memori objects owned by the specified user.
   * @param {string} tenantName - The name of the tenant
   * @param {string} userID - The user name
   * @param {string=} authToken - The login token
   * @returns A list of Memori objects
   */
  getUserByIDMemoriList: (
    tenantName: string,
    userID: string,
    authToken?: string
  ) =>
    apiFetcher(
      `/UserMemoriByID/${tenantName}/${userID}${
        authToken ? `/${authToken}` : ''
      }`,
      {
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of Memori objects owned by the specified user.
   * @param {string} tenantName - The name of the tenant
   * @param {string} userName - The user name
   * @param {string=} authToken - The login token
   * @returns A list of Memori objects
   */
  getUserMemoriList: (
    tenantName: string,
    userName: string,
    authToken?: string
  ) =>
    apiFetcher(
      `/UserMemori/${tenantName}/${userName}${
        authToken ? `/${authToken}` : ''
      }`,
      {
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of Memori objects for the currently logged in User.
   * @param authToken - The login token
   * @returns A list of Memori objects
   */
  getMemoriList: (authToken: string) =>
    apiFetcher(`/Memori/${authToken}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of Memori objects for the currently logged in User.
   * @param authToken - The login token
   * @returns A list of Memori objects
   */
  getSharedMemoriList: (authToken: string) =>
    apiFetcher(`/SharedMemori/${authToken}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memori: Memori[];
      }
    >,

  /**
   * Gets a list of all the known Memori categories (or tags).
   * @param {string} tenant - The name of the tenant
   * @returns A list of Memori categories
   */
  getTenantCategories: (tenant: string) =>
    apiFetcher(`/TenantMemoriCategories/${encodeURIComponent(tenant)}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memoriCategories: string[];
      }
    >,

  /**
   * Gets a list of all the Memori Configuration objects.
   * @param authToken - The login token
   * @returns A list of Memori Configuration objects
   */
  getMemoriConfigs: (authToken: string) =>
    apiFetcher(`/MemoriConfigs/${authToken}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        memoriConfigs: MemoriConfig[];
      }
    >,

  /**
   * Register a new Memori object.
   * @param authToken - The login token
   * @param memori - The Memori object
   * @returns The created Memori object
   */
  createMemori: (authToken: string, memori: Memori) =>
    apiFetcher(`/Memori/${authToken}`, {
      apiUrl,
      body: memori,
      method: 'POST',
    }) as Promise<ResponseSpec & { memori: Memori }>,

  /**
   * Update an existing Memori object.
   * @param authToken - The login token
   * @param memori - The Memori object
   * @returns The created Memori object
   */
  updateMemori: (
    authToken: string,
    memori: Partial<Memori> & { memoriID: string }
  ) =>
    apiFetcher(`/Memori/${authToken}/${memori.memoriID}`, {
      apiUrl,
      body: memori,
      method: 'PATCH',
    }) as Promise<ResponseSpec & { memori: Memori }>,

  /**
   * Deletes an existing Memori object.
   * @param authToken - The login token
   * @param memori - The Memori object
   */
  deleteMemori: (authToken: string, memori: Memori) =>
    apiFetcher(`/Memori/${authToken}`, {
      apiUrl,
      body: memori,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of a Memori object of the currently logged in User.
   * @param authToken - The login token
   * @param memoriID - The ID of the Memori object
   * @returns A Memori object
   */
  getMemoriById: (authToken: string, memoriID: string) =>
    apiFetcher(`/Memori/${authToken}/${memoriID}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { memori: Memori }>,

  /**
   * Gets the details of a Memori object of the currently logged in User.
   * @param {string} tenantName - The Name of the Tenant
   * @param {string} userID - The ID of the User object
   * @param {string} memoriID - The ID of the Memori object
   * @param {string?} authToken - The login token
   * @returns A Memori object
   */
  getMemoriByUserAndId: (
    tenantName: string,
    userID: string,
    memoriID: string,
    authToken?: string
  ) =>
    apiFetcher(
      `/MemoriById/${tenantName}/${userID}/${memoriID}${
        authToken ? `/${authToken}` : ''
      }`,
      {
        apiUrl,
      }
    ) as Promise<ResponseSpec & { memori: Memori }>,

  /**
   * Gets the details of a Memori object by name, owner and tenant
   * @param {string} tenant - The name of the tenant
   * @param {string} userName - The name of the user
   * @param {string} memoriName - The name of the Memori object
   * @param {string=} [authToken=''] - The token of the Memori object
   */
  getMemori: (
    tenant: string,
    userName: string,
    memoriName: string,
    authToken?: string
  ) =>
    apiFetcher(
      `/Memori/${encodeURIComponent(tenant)}/${encodeURIComponent(
        userName
      )}/${encodeURIComponent(memoriName)}/${authToken ?? ''}`,
      {
        apiUrl,
      }
    ) as Promise<ResponseSpec & { memori: Memori }>,

  /**
   * Gets the statistics for sessions opened in a specified interval for the specified Memori object.
   * @param {string} authToken - The login token
   * @param {string} memoriID - The ID of the Memori object
   * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  getMemoriSessions: (
    authToken: string,
    memoriID: string,
    dateFrom?: string,
    dateTo?: string
  ) =>
    apiFetcher(
      `/MemoriSessions/${authToken}/${memoriID}${
        dateFrom ? `/${dateFrom}` : ''
      }${dateFrom && dateTo ? `/${dateTo}` : ''}`,
      {
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        totalSessions: number;
        validSessions: number;
      }
    >,

  /**
   * Transfers an existing Memori object to another User.
   * The new owner must be specified by either a OwnerUserID or a OwnerUserName-OwnerTenantName pair.
   * The OwnerUserName may also specify a user e-mail.
   * @param {string} authToken - The login token
   * @param {Memori} memori - The Memori object
   */
  transferMemori: (
    authToken: string,
    memori: Memori & {
      ownerTenantName: string;
      ownerUserName: string;
    }
  ) =>
    apiFetcher(`/TransferMemori/${authToken}`, {
      apiUrl,
      body: memori,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Blocks a Memori object. Only super admins can perform this operation.
   * @param {string} authToken - The login token
   * @param {Memori} memori - The Memori object specifications
   * @returns Response indicating success or failure
   */
  blockMemori: (authToken: string, memori: Memori) =>
    apiFetcher(`/MemoriBlock/${authToken}`, {
      apiUrl,
      body: memori,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Unblocks a Memori object. Only super admins can perform this operation.
   * @param {string} authToken - The login token
   * @param {Memori} memori - The Memori object specifications
   * @returns Response indicating success or failure
   */
  unblockMemori: (authToken: string, memori: Memori) =>
    apiFetcher(`/MemoriBlock/${authToken}`, {
      apiUrl,
      body: memori,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,
    
});

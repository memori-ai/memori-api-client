import { ResponseSpec, User, UserFilters } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Tries a login with the specified credentials and returns a login token if successful.
   * @param user - The user object
   * @returns The logged in user object
   */
  pwlUserLogin: (user: User, redirectTo?: string) =>
    apiFetcher('/PwlLogin', {
      apiUrl,
      body: { ...user, redirectTo: redirectTo ?? '' },
      method: 'POST',
    }) as Promise<
      ResponseSpec & { user: User; token?: string; flowID?: string }
    >,

  /**
   * Logs out the user.
   * @param authToken - The login token
   */
  pwlUserLogout: (authToken: string) =>
    apiFetcher(`/PwlLogout/${authToken}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of the currently logged in User object.
   * @param authToken - The login token
   * @returns The user object
   */
  pwlGetCurrentUser: (authToken: string) =>
    apiFetcher(`/PwlUser/${authToken}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        user: User;
      }
    >,

  /**
   * Gets the details of a User object.
   * @param authToken - The login token
   * @param userID - The user ID
   * @returns The user object
   */
  pwlGetUser: (authToken: string, userID: string) =>
    apiFetcher(`/PwlUser/${authToken}/${userID}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        user: User;
      }
    >,

  /**
   * Gets a list of all the existing User objects.
   * @param authToken - The login token
   * @returns A list of User objects
   */
  pwlGetUsersList: (authToken: string) =>
    apiFetcher(`/PwlUsers/${authToken}`, {
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        users: User[];
      }
    >,

  /**
   * Gets a list of all the existing User objects paginated.
   * @param authToken - The login token
   * @param from - The 0-based index of the first User object to list
   * @param howMany - The number of User objects to list
   * @returns A list of User objects
   */
  pwlGetUsersListPaginated: (authToken: string, filters: UserFilters) =>
    apiFetcher(`/FilterPwlUsers/${authToken}`, {
      apiUrl,
      body: filters,
      method: 'POST',
    }) as Promise<
      ResponseSpec & {
        users: User[];
        count: number;
      }
    >,

  /**
   * Deletes the currently logged in User.
   * @param {string} authToken - The login token
   * @param {string} userID: The User ID
   */
  pwlDeleteUser: (authToken: string, userID: string) =>
    apiFetcher(`/PwlUser/${authToken}/${userID}`, {
      apiUrl,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,

  /**
   * Updates the details of a User object.
   * @param authToken - The login token
   * @param userID - The user ID
   * @returns The user object
   */
  pwlUpdateUser: (authToken: string, userID: string, user: User) =>
    apiFetcher(`/PwlUser/${authToken}/${userID}`, {
      apiUrl,
      method: 'PATCH',
      body: user,
    }) as Promise<
      ResponseSpec & {
        user: User;
      }
    >,

  /**
   * Recovers a User's name and sends it to their configured e-mail.
   * @param {User} user - The user object
   */
  pwlRecoverUsername: (user: User) =>
    apiFetcher(`/RecoverPwlUserName`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Registers a new user.
   * @param {User} user - The user object
   */
  pwlCreateUser: (authToken: string, user: Partial<User>) =>
    apiFetcher(`/PwlUser/${authToken}`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec & { user: User }>,

  /**
   * Tries a login with the specified JWT and returns a login token if successful.
   * @param {string} jwtToken - The JWT
   * @param {string} tenant - The tenant ID
   * @param {string} secretKey - The trusted app secret key
   * @returns The logged in user object
   */
  pwlLoginWithJWT: (jwtToken: string, tenant: string, secretKey: string) =>
    apiFetcher('/LoginWithJWT', {
      apiUrl,
      body: { jwtToken, tenant },
      headers: {
        'X-Memori-Trusted-App': secretKey,
      },
      method: 'POST',
    }) as Promise<
      ResponseSpec & { user: User; token?: string; flowID?: string }
    >,
});
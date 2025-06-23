import { ResponseSpec, User, UserFilters } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Tries a login with the specified credentials and returns a login token if successful.
   * @param user - The user object
   * @returns The logged in user object
   */
  userLogin: (user: User) =>
    apiFetcher('/PwlLogin', {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<
      ResponseSpec & { user: User; token?: string; flowID?: string }
    >,

  /**
   * Logs out the user.
   * @param authToken - The login token
   */
  userLogout: (authToken: string) =>
    apiFetcher(`/PwlLogout/${authToken}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of the currently logged in User object.
   * @param authToken - The login token
   * @returns The user object
   */
  getCurrentUser: (authToken: string) =>
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
  getUser: (authToken: string, userID: string) =>
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
  getUsersList: (authToken: string) =>
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
  getUsersListPaginated: (authToken: string, filters: UserFilters) =>
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
  deleteUser: (authToken: string, userID: string) =>
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
  updateUser: (authToken: string, userID: string, user: User) =>
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
  recoverUsername: (user: User) =>
    apiFetcher(`/RecoverPwlUserName`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Registers a new user.
   * @param {User} user - The user object
   */
  createUser: (authToken: string, user: Partial<User>) =>
    apiFetcher(`/PwlUser/${authToken}`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec & { user: User }>,

  /**
   * Tries a login with the specified JWT and returns a login token if successful.
   * @param {object} payload - The payload object
   * @param {string} payload.jwt - The JWT
   * @returns The logged in user object
   */
  loginWithJWT: (jwt: string) =>
    apiFetcher('/LoginWithJWT', {
      apiUrl,
      body: { jwt },
      method: 'POST',
    }) as Promise<
      ResponseSpec & { user: User; token?: string; flowID?: string }
    >,
}); 
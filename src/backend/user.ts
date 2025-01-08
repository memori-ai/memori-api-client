import { ResponseSpec, Tenant, User, UserFilters } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Registers a new user.
   * @param user - The user object
   * @returns The created user object
   */
  userSignUp: (user: User) =>
    apiFetcher('/User', {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec & { user: User }>,

  /**
   * Confirms the registration of a User and performs a Login.
   * @param user - The user object
   * @returns The created user object
   */
  userConfirmSignUp: (user: User) =>
    apiFetcher('/UserConfirm', {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec & { user: User; token?: string }>,

  /**
   * Tries a login with the specified credentials and returns a login token if successful.
   * @param user - The user object
   * @returns The logged in user object
   */
  userLogin: (user: User) =>
    apiFetcher('/Login', {
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
    apiFetcher(`/Logout/${authToken}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Gets the details of the currently logged in User object.
   * @param authToken - The login token
   * @returns The user object
   */
  getCurrentUser: (authToken: string) =>
    apiFetcher(`/User/${authToken}`, {
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
    apiFetcher(`/User/${authToken}/${userID}`, {
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
    apiFetcher(`/Users/${authToken}`, {
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
    apiFetcher(`/FilterUsers/${authToken}`, {
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
    apiFetcher(`/User/${authToken}/${userID}`, {
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
    apiFetcher(`/User/${authToken}/${userID}`, {
      apiUrl,
      method: 'PATCH',
      body: user,
    }) as Promise<
      ResponseSpec & {
        user: User;
      }
    >,

  /**
   * Resets a User's password.
   * If found, the User receives a verification code via e-mail.
   * The code must be sent via the ResetConfirm API, passing the same User object
   * sent to this API with the addition of the verification code and the new password.
   * @param {User} user - The user object
   */
  resetPassword: (user: User) =>
    apiFetcher(`/ResetPassword`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Confirms the password reset of a User and performs a Login
   * @param {User} user - The user object
   */
  resetConfirm: (user: User) =>
    apiFetcher(`/ResetConfirm`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<
      ResponseSpec & {
        user: User;
        token?: string;
        flowID?: string;
      }
    >,

  /**
   * Recovers a User's name and sends it to their configured e-mail.
   * @param {User} user - The user object
   */
  recoverUsername: (user: User) =>
    apiFetcher(`/RecoverUsername`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Re-sends the verification code to confirm a pending User registration.
   * @param {User} user - The user object
   */
  resendVerificationCode: (user: Partial<User>) =>
    apiFetcher(`/ResendVerificationCode`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec>,

  /**
   * Registers a new user.
   * @param {User} user - The user object
   */
  createUser: (authToken: string, user: Partial<User>) =>
    apiFetcher(`/User/${authToken}`, {
      apiUrl,
      body: user,
      method: 'POST',
    }) as Promise<ResponseSpec & { user: User }>,
});

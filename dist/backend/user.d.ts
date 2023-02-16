import { ResponseSpec, Tenant, User } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Registers a new user.
     * @param user - The user object
     * @returns The created user object
     */
    userSignUp: (user: User) => Promise<ResponseSpec & {
        user: User;
    }>;
    /**
     * Confirms the registration of a User and performs a Login.
     * @param user - The user object
     * @returns The created user object
     */
    userConfirmSignUp: (user: User) => Promise<ResponseSpec & {
        user: User;
        token?: string | undefined;
    }>;
    /**
     * Tries a login with the specified credentials and returns a login token if successful.
     * @param user - The user object
     * @returns The logged in user object
     */
    userLogin: (user: User) => Promise<ResponseSpec & {
        user: User;
        token?: string | undefined;
        flowID?: string | undefined;
    }>;
    /**
     * Logs out the user.
     * @param authToken - The login token
     */
    userLogout: (authToken: string) => Promise<ResponseSpec>;
    /**
     * Gets the details of a User object.
     * @param authToken - The login token
     * @param userID - The user ID
     * @returns The user object
     */
    getUser: (authToken: string, userID: string) => Promise<ResponseSpec & {
        user: User;
    }>;
    /**
     * Gets a list of all the existing User objects.
     * @param authToken - The login token
     * @returns A list of User objects
     */
    getUsersList: (authToken: string) => Promise<ResponseSpec & {
        users: User[];
    }>;
    /**
     * Deletes the currently logged in User.
     * @param {string} authToken - The login token
     * @param {string} userID: The User ID
     */
    deleteUser: (authToken: string, userID: string) => Promise<ResponseSpec>;
    /**
     * Updates the details of a User object.
     * @param authToken - The login token
     * @param userID - The user ID
     * @returns The user object
     */
    updateUser: (authToken: string, userID: string, user: User) => Promise<ResponseSpec & {
        user: User;
    }>;
    /**
     * Resets a User's password.
     * If found, the User receives a verification code via e-mail.
     * The code must be sent via the ResetConfirm API, passing the same User object
     * sent to this API with the addition of the verification code and the new password.
     * @param {User} user - The user object
     */
    resetPassword: (user: User) => Promise<ResponseSpec>;
    /**
     * Confirms the password reset of a User and performs a Login
     * @param {User} user - The user object
     */
    resetConfirm: (user: User) => Promise<ResponseSpec & {
        user: User;
        token?: string | undefined;
        flowID?: string | undefined;
    }>;
    /**
     * Recovers a User's name and sends it to their configured e-mail.
     * @param {User} user - The user object
     */
    recoverUsername: (user: User) => Promise<ResponseSpec>;
    /**
     * Gets the details of a Tenant object.
     * @param tenantName - The name of the tenant
     */
    getTenantConfig: (tenantName: string) => Promise<ResponseSpec & {
        tenant: Tenant;
    }>;
    /**
     * Re-sends the verification code to confirm a pending User registration.
     * @param {User} user - The user object
     */
    resendVerificationCode: (user: Partial<User>) => Promise<ResponseSpec>;
    /**
     * Registers a new user.
     * @param {User} user - The user object
     */
    createUser: (authToken: string, user: Partial<User>) => Promise<ResponseSpec & {
        user: User;
    }>;
};
export default _default;

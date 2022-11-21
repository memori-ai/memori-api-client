import { ResponseSpec, Notification } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Gets the Notification objects available for a specific Tenant.
     * @param {string} tenantID - The name of the tenant
     * @returns The list of Notification objects.
     */
    getTenantNotifications: (tenantID: string) => Promise<ResponseSpec & {
        notifications: Notification[];
    }>;
    /**
     * Gets the Notification objects available for a specific User.
     * @param {string} authToken - The login token
     * @returns The list of Notification objects.
     */
    getUserNotifications: (authToken: string) => Promise<ResponseSpec & {
        notifications: Notification[];
    }>;
};
export default _default;

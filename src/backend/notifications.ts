import type { ResponseSpec, Notification } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Gets the Notification objects available for a specific Tenant.
   * @param {string} tenantID - The name of the tenant
   * @returns The list of Notification objects.
   */
  getTenantNotifications: (tenantID: string) =>
    apiFetcher(`/TenantNotifications/${tenantID}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { notifications: Notification[] }>,

  /**
   * Gets the Notification objects available for a specific User.
   * @param {string} authToken - The login token
   * @returns The list of Notification objects.
   */
  getUserNotifications: (authToken: string) =>
    apiFetcher(`/UserNotifications/${authToken}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { notifications: Notification[] }>,

  /**
   * Create a new notification
   * @param {string} token - Authentication token
   * @param {Notification} notificationData - Notification specification
   * @returns {Promise<ResponseSpec>} The created notification response
   */
  createNotification: (token: string, notificationData: Notification) =>
    apiFetcher(`/Notifications/${token}`, {
      apiUrl,
      method: 'POST',
      body: notificationData,
    }) as Promise<ResponseSpec>,

  /**
   * Get a specific notification by ID
   * @param {string} token - Authentication token
   * @param {string} notificationId - Notification ID
   * @returns {Promise<ResponseSpec>} The notification response
   */
  getNotification: (token: string, notificationId: string) =>
    apiFetcher(`/Notifications/${token}/${notificationId}`, {
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Delete a notification
   * @param {string} token - Authentication token
   * @param {string} notificationId - Notification ID
   * @returns {Promise<ResponseSpec>} The deletion response
   */
  deleteNotification: (token: string, notificationId: string) =>
    apiFetcher(`/Notifications/${token}/${notificationId}`, {
      apiUrl,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,

  /**
   * List all notifications with optional filtering
   * @param {string} token - Authentication token
   * @param {'ACTIVE_AND_FUTURE' | 'ONLY_FUTURE' | 'ALL'} filter - Notification filter
   * @returns {Promise<ResponseSpec>} The list of notifications
   */
  listAllNotifications: (
    token: string,
    filter: 'ACTIVE_AND_FUTURE' | 'ONLY_FUTURE' | 'ALL' = 'ACTIVE_AND_FUTURE'
  ) =>
    apiFetcher(`/ListAllNotifications/${token}/${filter}`, {
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Update an existing notification
   * @param {string} token - Authentication token
   * @param {string} notificationId - Notification ID
   * @param {Partial<Notification>} notificationData - Updated notification specification
   * @returns {Promise<ResponseSpec>} The updated notification response
   */
  updateNotification: (
    token: string,
    notificationId: string,
    notificationData: Partial<Notification>
  ) =>
    apiFetcher(`/Notifications/${token}/${notificationId}`, {
      apiUrl,
      method: 'PATCH',
      body: notificationData,
    }) as Promise<ResponseSpec>,
});

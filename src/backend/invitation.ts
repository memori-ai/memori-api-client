import { ResponseSpec, Invitation } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Gets a list of invitations sent by the currently logged in User.
   * @param {string} authToken - The login token
   * @returns The list of Invitation objects.
   */
  getSentInvitations: (authToken: string) =>
    apiFetcher(`/SentInvitations/${authToken}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { invitations: Invitation[] }>,

  /**
   * Gets a list of invitations received by the currently logged in User.
   * @param {string} authToken - The login token
   * @returns The list of Invitation objects.
   */
  getReceivedInvitations: (authToken: string) =>
    apiFetcher(`/ReceivedInvitations/${authToken}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { invitations: Invitation[] }>,

  /**
   * Gets a list of all invitation objects
   * @param {string} authToken - The login token
   * @returns The list of Invitation objects.
   */
  getAllInvitations: (authToken: string) =>
    apiFetcher(`/AllInvitations/${authToken}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { invitations: Invitation[] }>,

  /**
   * Gets the details of an Invitation object of the currently logged in User.
   * @param {string} authToken - The login token
   * @param {string} invitationId - The ID of the Invitation object
   * @returns The Invitation object.
   */
  getInvitation: (authToken: string, invitationId: string) =>
    apiFetcher(`/Invitation/${authToken}/${invitationId}`, {
      apiUrl,
    }) as Promise<ResponseSpec & { invitation: Invitation }>,

  /**
   * Updates an existing Invitation object sent by the currently logged in User.
   * @param {string} authToken - The login token
   * @param {Invitation} invitation - The Invitation object
   * @returns The Invitation object.
   */
  updateInvitation: (
    authToken: string,
    invitation: Partial<Omit<Invitation, 'invitationID'>> & {
      invitationID: string;
    }
  ) =>
    apiFetcher(`/Invitation/${authToken}/${invitation.invitationID}`, {
      apiUrl,
      method: 'PATCH',
      body: invitation,
    }) as Promise<ResponseSpec & { invitation: Invitation }>,

  /**
   * Deletes an existing Invitation object.
   * @param {string} authToken - The login token
   * @param {string} invitationId - The ID of the Invitation object
   * @returns The Invitation object.
   */
  deleteInvitation: (authToken: string, invitationId: string) =>
    apiFetcher(`/Invitation/${authToken}/${invitationId}`, {
      apiUrl,
      method: 'DELETE',
    }) as Promise<ResponseSpec>,

  /**
   * Accepts an Invitation object.
   * @param {string} authToken - The login token
   * @param {string} invitationId - The ID of the Invitation object
   * @returns The Invitation object.
   */
  acceptInvitation: (authToken: string, invitationId: string) =>
    apiFetcher(`/AcceptInvitation/${authToken}/${invitationId}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<ResponseSpec & { invitation: Invitation }>,

  /**
   * Rejects an Invitation object.
   * @param {string} authToken - The login token
   * @param {string} invitationId - The ID of the Invitation object
   * @returns The Invitation object.
   */
  rejectInvitation: (authToken: string, invitationId: string) =>
    apiFetcher(`/RejectInvitation/${authToken}/${invitationId}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<ResponseSpec & { invitation: Invitation }>,

  /**
   * Send a new Invitation object
   * @param {string} authToken - The login token
   * @param {Invitation} invitation - The Invitation object
   * @returns The Invitation object.
   */
  sendInvitation: (
    authToken: string,
    invitation: Partial<Omit<Invitation, 'invitationID'>>
  ) =>
    apiFetcher(`/SendInvitation/${authToken}`, {
      apiUrl,
      method: 'POST',
      body: invitation,
    }) as Promise<ResponseSpec & { invitation: Invitation }>,
});

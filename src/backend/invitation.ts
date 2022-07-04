import type { ResponseSpec, Invitation } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/**
 * Gets a list of invitations sent by the currently logged in User.
 * @param {string} authToken - The login token
 * @returns The list of Invitation objects.
 */
export const getSentInvitations = (authToken: string) =>
  apiFetcher(`/SentInvitations/${authToken}`) as Promise<
    ResponseSpec & { invitations: Invitation[] }
  >;

/**
 * Gets a list of invitations received by the currently logged in User.
 * @param {string} authToken - The login token
 * @returns The list of Invitation objects.
 */
export const getReceivedInvitations = (authToken: string) =>
  apiFetcher(`/ReceivedInvitations/${authToken}`) as Promise<
    ResponseSpec & { invitations: Invitation[] }
  >;

/**
 * Gets a list of all invitation objects
 * @param {string} authToken - The login token
 * @returns The list of Invitation objects.
 */
export const getAllInvitations = (authToken: string) =>
  apiFetcher(`/AllInvitations/${authToken}`) as Promise<
    ResponseSpec & { invitations: Invitation[] }
  >;

/**
 * Gets the details of an Invitation object of the currently logged in User.
 * @param {string} authToken - The login token
 * @param {string} invitationId - The ID of the Invitation object
 * @returns The Invitation object.
 */
export const getInvitation = (authToken: string, invitationId: string) =>
  apiFetcher(`/Invitation/${authToken}/${invitationId}`) as Promise<
    ResponseSpec & { invitation: Invitation }
  >;

/**
 * Updates an existing Invitation object sent by the currently logged in User.
 * @param {string} authToken - The login token
 * @param {Invitation} invitation - The Invitation object
 * @returns The Invitation object.
 */
export const updateInvitation = (
  authToken: string,
  invitation: Partial<Omit<Invitation, 'invitationID'>> & {
    invitationID: string;
  },
) =>
  apiFetcher(`/Invitation/${authToken}/${invitation.invitationID}`, {
    method: 'PATCH',
    body: invitation,
  }) as Promise<ResponseSpec & { invitation: Invitation }>;

/**
 * Deletes an existing Invitation object.
 * @param {string} authToken - The login token
 * @param {string} invitationId - The ID of the Invitation object
 * @returns The Invitation object.
 */
export const deleteInvitation = (authToken: string, invitationId: string) =>
  apiFetcher(`/Invitation/${authToken}/${invitationId}`, {
    method: 'DELETE',
  }) as Promise<ResponseSpec>;

/**
 * Accepts an Invitation object.
 * @param {string} authToken - The login token
 * @param {string} invitationId - The ID of the Invitation object
 * @returns The Invitation object.
 */
export const acceptInvitation = (authToken: string, invitationId: string) =>
  apiFetcher(`/AcceptInvitation/${authToken}/${invitationId}`, {
    method: 'POST',
  }) as Promise<ResponseSpec & { invitation: Invitation }>;

/**
 * Rejects an Invitation object.
 * @param {string} authToken - The login token
 * @param {string} invitationId - The ID of the Invitation object
 * @returns The Invitation object.
 */
export const rejectInvitation = (authToken: string, invitationId: string) =>
  apiFetcher(`/RejectInvitation/${authToken}/${invitationId}`, {
    method: 'POST',
  }) as Promise<ResponseSpec & { invitation: Invitation }>;

/**
 * Send a new Invitation object
 * @param {string} authToken - The login token
 * @param {Invitation} invitation - The Invitation object
 * @returns The Invitation object.
 */
export const sendInvitation = (
  authToken: string,
  invitation: Partial<Omit<Invitation, 'invitationID'>>,
) =>
  apiFetcher(`/SendInvitation/${authToken}`, {
    method: 'POST',
    body: invitation,
  }) as Promise<ResponseSpec & { invitation: Invitation }>;

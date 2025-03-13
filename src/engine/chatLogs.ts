import { ChatLog, ResponseSpec } from '../types';
import { apiFetcher } from '../apiFetcher';

/*************************
 *                       *
 *       ChatLogs        *
 *                       *
 *************************/

export default (apiUrl: string) => ({
  /**
   * Gets the Chat Log objects for the Memori of the current session in a specific date interval.
   * @param {string} sessionId The session ID
   * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  getChatLogs: async (sessionId: string, dateFrom?: string, dateTo?: string) =>
    apiFetcher(
      `/ChatLogs/${sessionId}${dateFrom ? `/${dateFrom}` : ''}${
        dateFrom && dateTo ? `/${dateTo}` : ''
      }`,
      {
        method: 'GET',
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        chatLogs: ChatLog[];
      }
    >,

  /**
   * Gets the Chat Log objects for the Memori of the current session created by the current User.
   * @param {string} sessionId The session ID
   * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  getChatLogsByUser: async (sessionId: string, dateFrom?: string, dateTo?: string) =>
    apiFetcher(
      `/CurrentUserChatLogs/${sessionId}${dateFrom ? `/${dateFrom}` : ''}${
        dateFrom && dateTo ? `/${dateTo}` : ''
      }`,
      {
        method: 'GET',
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        chatLogs: ChatLog[];
      }
    >,

  /**
   * Gets the Chat Log objects for the Memori of the current session recorded during a specific other session.
   * @param {string} sessionId The session ID
   * @param {string} chatLogSessionID The session ID for which Chat Log objects are being searched
   */
  getSessionChatLogs: async (sessionId: string, chatLogSessionID: string) =>
    apiFetcher(`/SessionChatLogs/${sessionId}/${chatLogSessionID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        chatLogs: ChatLog[];
      }
    >,

  /**
   * Gets the Chat Log objects for the Memori of the current session recorded during a specific other session.
   * @param {string} sessionId The session ID
   * @param {string} userID The user ID
   * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  getUserChatLogs: async (
    sessionId: string,
    userID: string,
    dateFrom?: string,
    dateTo?: string
  ) =>
    apiFetcher(
      `/UserChatLogs/${sessionId}/${userID}${dateFrom ? `/${dateFrom}` : ''}${
        dateFrom && dateTo ? `/${dateTo}` : ''
      }`,
      {
        method: 'GET',
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        chatLogs: ChatLog[];
      }
    >,

  /**
   * Removes all Chat Log objects in a specific date internval.
   * @param {string} sessionId The session ID
   * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  deleteChatLogs: async (
    sessionId: string,
    dateFrom?: string,
    dateTo?: string
  ) =>
    apiFetcher(
      `/ChatLogs/${sessionId}${dateFrom ? `/${dateFrom}` : ''}${
        dateFrom && dateTo ? `/${dateTo}` : ''
      }`,
      {
        method: 'DELETE',
        apiUrl,
      }
    ) as Promise<ResponseSpec>,

  /**
   * Removes an existing Chat Log object.
   * @param {string} sessionId The session ID
   * @param {string} chatLogId The Chat Log object ID
   */
  deleteChatLog: async (sessionId: string, chatLogId: string) =>
    apiFetcher(`/ChatLog/${sessionId}/${chatLogId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

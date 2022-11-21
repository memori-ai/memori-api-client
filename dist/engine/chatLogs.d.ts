import { ChatLog, ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Gets the Chat Log objects for the Memori of the current session in a specific date interval.
     * @param {string} sessionId The session ID
     * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<ResponseSpec & {
        chatLogs: ChatLog[];
    }>;
    /**
     * Removes all Chat Log objects in a specific date internval.
     * @param {string} sessionId The session ID
     * @param {?string} dateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {?string} dateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    deleteChatLogs: (sessionId: string, dateFrom?: string | undefined, dateTo?: string | undefined) => Promise<ResponseSpec>;
    /**
     * Removes an existing Chat Log object.
     * @param {string} sessionId The session ID
     * @param {string} chatLogId The Chat Log object ID
     */
    deleteChatLog: (sessionId: string, chatLogId: string) => Promise<ResponseSpec>;
};
/*************************
 *                       *
 *       ChatLogs        *
 *                       *
 *************************/
export default _default;

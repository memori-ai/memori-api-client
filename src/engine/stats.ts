import { ResponseSpec, Stats, Memory, EventLog } from '../types';
import { apiFetcher } from '../apiFetcher';

/*****************
 *               *
 *     Stats     *
 *               *
 *****************/

export default (apiUrl: string) => ({
  /**
   * Computes text quality indexes for a Memori.
   * @param {string} sessionId - The session ID
   */
  getTextQualityIndexes: async (sessionId: string) =>
    apiFetcher(`/TextQualityIndexes/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        /**
         * @type {number}
         * An index of text quality of this Memori. It is the ratio of the defined words vs. the total of unique words used in question texts and story titles. A value of 1.0 means that no words are undefined, a value of 0.0 means that all words are undefined. Undefined words in a question text or story title have a profound negative impact on the ability to match them with user input.
         */
        textQualityIndex: number;

        /**
         * @type {string[]}
         * List of undefined words found in question texts and story titles.
         */
        undefinedWords: string[];

        /**
         * @type {number}
         * An index of text quality of the content of this Memori. It is the ratio of correct question texts and stories titles vs. the total number of question texts and story titles. A value of 1.0 means that all question texts and story titles are correct, a value of 0.0 means that no question text or story title is correct. A question text or story title is defined incorrect (or "faulty") if it contains 25% or more of undefined words. Undefined words in a question text or story title have a profound negative impact on the ability to match them with user input.
         */
        contentTextQualityIndex: number;

        /**
         * @type {Memory[]}
         * List of faulty Memory objects (questions and stories). A question or story is defined as "faulty" if it contains at least one undefined word.
         */
        faultyMemories?: Memory[];
      }
    >,

  /**
   * Get the Event Log objects for the Memori of the current session in a specific date interval
   * @param {string} sessionId The session ID
   * @param {string} strDateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {string} strDateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  getEventLogs: async (
    sessionId: string,
    strDateFrom: string,
    strDateTo: string
  ) =>
    apiFetcher(`/EventLogs/${sessionId}/${strDateFrom}/${strDateTo}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        eventLogs: EventLog[];
      }
    >,

  /**
   * Gets the Event Log objects for a specific Memory object in a specific date interval.
   * @param {string} sessionId - The session ID
   * @param {string} memoryId - The Memory object ID
   * @param {string} strDateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {string} strDateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  getMemoryEventLogs: async (
    sessionId: string,
    memoryId: string,
    strDateFrom: string,
    strDateTo: string
  ) =>
    apiFetcher(
      `/EventLogs/${sessionId}/${memoryId}/${strDateFrom}/${strDateTo}`,
      {
        method: 'GET',
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        eventLogs: EventLog[];
      }
    >,

  /**
   * Gets the Event Log objects for a specific Intent object in a specific date interval.
   * @param {string} sessionId - The session ID
   * @param {string} intentId - The Intent object ID
   * @param {string} strDateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   * @param {string} strDateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
   */
  getIntentEventLogs: async (
    sessionId: string,
    intentId: string,
    strDateFrom: string,
    strDateTo: string
  ) =>
    apiFetcher(
      `/EventLogs/${sessionId}/${intentId}/${strDateFrom}/${strDateTo}`,
      {
        method: 'GET',
        apiUrl,
      }
    ) as Promise<
      ResponseSpec & {
        eventLogs: EventLog[];
      }
    >,

  /**
   * Gets the Event Log objects for the Memori of the current session recorded during a specific other session.
   * @param {string} sessionID The session ID
   * @param {string} eventLogSessionID The session ID for which Event Log objects are being searched
   */
  getSessionEventLogs: async (sessionID: string, eventLogSessionID: string) =>
    apiFetcher(`/SessionEventLogs/${sessionID}/${eventLogSessionID}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        eventLogs: EventLog[];
      }
    >,
});

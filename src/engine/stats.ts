import { ResponseSpec, Stats, EventLog } from '../index.d';
import { apiFetcher } from '../apiFetcher';

/*****************
 *               *
 *     Stats     *
 *               *
 *****************/

export default (apiUrl: string) => ({
  /**
   * Computes usage statistics for the Memori of the current session.
   * @param {string} sessionId The session ID
   */
  getStatistics: async (sessionId: string) =>
    apiFetcher(`/Statistics/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        statistics: Stats;
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
});

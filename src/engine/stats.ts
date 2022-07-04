import type { ResponseSpec, Stats, EventLog } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/*****************
 *               *
 *     Stats     *
 *               *
 *****************/

/**
 * Computes usage statistics for the Memori of the current session.
 * @param {string} sessionId The session ID
 */
export const getStatistics = async (sessionId: string) =>
  apiFetcher(`/Statistics/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      statistics: Stats;
    }
  >;

/**
 * Get the Event Log objects for the Memori of the current session in a specific date interval
 * @param {string} sessionId The session ID
 * @param {string} strDateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
 * @param {string} strDateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
 */
export const getEventLogs = async (
  sessionId: string,
  strDateFrom: string,
  strDateTo: string,
) =>
  apiFetcher(`/EventLogs/${sessionId}/${strDateFrom}/${strDateTo}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      eventLogs: EventLog[];
    }
  >;

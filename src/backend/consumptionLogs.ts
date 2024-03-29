import { ResponseSpec, ConsumptionLog } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Gets the Consumption Log objects for a specific Tenant in a specific date interval.
   * @param {string} authToken - The login token
   * @param {string} tenantID - The name of the tenant
   * @param {string} type - Type of consumption (i.e. granularity), it may either be Daily or Monthly
   * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMdd
   * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMdd
   * @returns The list of Consumption Logs objects.
   */
  getTenantConsumptionLogs: (
    authToken: string,
    tenantID: string,
    type: 'Daily' | 'Monthly',
    dateFrom?: string,
    dateTo?: string
  ) =>
    apiFetcher(
      `/TenantConsumptionLogs/${authToken}/${tenantID}/${type}${
        dateFrom ? `/${dateFrom}` : ''
      }${dateFrom && dateTo ? `/${dateTo}` : ''}`,
      {
        apiUrl,
      }
    ) as Promise<ResponseSpec & { consumptionLogs: ConsumptionLog[] }>,

  /**
   * Gets the Consumption Log objects for a specific User in a specific date interval.
   * @param {string} authToken - The login token
   * @param {string} userID - The ID of the User object
   * @param {string} type - Type of consumption (i.e. granularity), it may either be Daily or Monthly
   * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMdd
   * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMdd
   * @returns The list of Consumption Logs objects.
   */
  getUserConsumptionLogs: (
    authToken: string,
    userID: string,
    type: 'Daily' | 'Monthly',
    dateFrom?: string,
    dateTo?: string
  ) =>
    apiFetcher(
      `/UserConsumptionLogs/${authToken}/${userID}/${type}${
        dateFrom ? `/${dateFrom}` : ''
      }${dateFrom && dateTo ? `/${dateTo}` : ''}`,
      {
        apiUrl,
      }
    ) as Promise<ResponseSpec & { consumptionLogs: ConsumptionLog[] }>,

  /**
   * Gets the Consumption Log objects for a specific Memori in a specific date interval.
   * @param {string} authToken - The login token
   * @param {string} memoriID - The ID of the Memori object
   * @param {string} type - Type of consumption (i.e. granularity), it may either be Daily or Monthly
   * @param {string=} dateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMdd
   * @param {string=} dateTo - The optional end of the date interval, in UTC time, in the format yyyyMMdd
   * @returns The list of Consumption Logs objects.
   */
  getMemoriConsumptionLogs: (
    authToken: string,
    memoriID: string,
    type: 'Daily' | 'Monthly',
    dateFrom?: string,
    dateTo?: string
  ) =>
    apiFetcher(
      `/MemoriConsumptionLogs/${authToken}/${memoriID}/${type}${
        dateFrom ? `/${dateFrom}` : ''
      }${dateFrom && dateTo ? `/${dateTo}` : ''}`,
      {
        apiUrl,
      }
    ) as Promise<ResponseSpec & { consumptionLogs: ConsumptionLog[] }>,
});

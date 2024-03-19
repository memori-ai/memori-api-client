import { ResponseSpec, ProcessStatus } from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Gets a list of processes started by the currently logged in User.
   * @param {string} authToken - The login token.
   * @param {string=} processType - Optional filter for Process type
   */
  getProcesses: async <T = ProcessStatus>(
    authToken: string,
    processType?: ProcessStatus['processType']
  ) =>
    apiFetcher(
      `/Processes/${authToken}${processType ? `/${processType}` : ''}`,
      {
        apiUrl,
        method: 'GET',
      }
    ) as Promise<
      ResponseSpec & {
        processes: T[];
      }
    >,

  /**
   * Gets a list of processes for the specified Memori.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The Memori ID
   * @param {string=} processType - Optional filter for Process type
   */
  getMemoriProcesses: async <T = ProcessStatus>(
    authToken: string,
    memoriID: string,
    processType?: ProcessStatus['processType']
  ) =>
    apiFetcher(
      `/MemoriProcesses/${authToken}/${memoriID}${
        processType ? `/${processType}` : ''
      }`,
      {
        apiUrl,
        method: 'GET',
      }
    ) as Promise<
      ResponseSpec & {
        processes: T[];
      }
    >,

  /**
   * Gets the status of an process.
   * @param {string} authToken - The login token.
   * @param {string} processID The process ID
   */
  getProcessStatus: async <T = ProcessStatus>(
    authToken: string,
    processID: string
  ) =>
    apiFetcher(`/ProcessStatus/${authToken}/${processID}`, {
      apiUrl,
      method: 'GET',
    }) as Promise<
      ResponseSpec & {
        status: T;
      }
    >,

  /**
   * Interrupts an ongoing process.
   * @param {string} authToken - The login token.
   * @param {string} processID The process ID
   */
  stopProcess: async <T = ProcessStatus>(
    authToken: string,
    processID: string
  ) =>
    apiFetcher(`/StopProcess/${authToken}/${processID}`, {
      apiUrl,
      method: 'POST',
    }) as Promise<
      ResponseSpec & {
        status: T;
      }
    >,
});

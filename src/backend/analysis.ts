import {
  ResponseSpec,
  AnalysisParams,
  AnalysisStatus,
  UserQueryMatch,
} from '../types';
import { apiFetcher } from '../apiFetcher';

export default (apiUrl: string) => ({
  /**
   * Starts an Analysis process for User/query match on Deep Thought known facts.
   * @param {string} authToken - The login token.
   * @param {string} memoriID - The ID of the Memori object.
   * @param {AnalysisParams} params The specifications of the analysis
   */
  analyzeUserQuery: async (
    authToken: string,
    memoriID: string,
    params: AnalysisParams
  ) =>
    apiFetcher(`/Analysis/AnalyzeUserQuery/${authToken}/${memoriID}`, {
      apiUrl,
      method: 'POST',
      body: {
        ...params,
      },
    }) as Promise<
      ResponseSpec & {
        status: AnalysisStatus;
      }
    >,

  /**
   * Lists Deep Thought User/query Match objects of the specified Analysis object, with pagination.
   * @param {string} authToken - The login token.
   * @param {string} analysisID - The Analysis process ID
   * @param {number} from The 0-based index of the first Expert Reference object to list
   * @param {number} howMany The number of the Expert Reference objects to list
   * @param {number=} threshold Threshold between 0.0 and 1.0. User objects whose match level is below this threshold will be discarded. If null, all User objects will be returned.
   */
  getUserQueryMatches: async (
    authToken: string,
    analysisID: string,
    from: number,
    howMany: number,
    threshold?: number
  ) =>
    apiFetcher(
      `/Analysis/UserQueryMatches/${authToken}/${analysisID}/${from}/${howMany}${
        threshold ? `/${threshold}` : ''
      }`,
      {
        apiUrl,
        method: 'GET',
      }
    ) as Promise<
      ResponseSpec & {
        /**
         * Total number of Deep Thought User/query Match objects.
         */
        count: number;
        /**
         * The list of Deep Thought User/query Match objects.
         */
        matches: UserQueryMatch[];
      }
    >,
});

import { DialogState, Medium, ResponseSpec } from '../types';
import { apiFetcher } from '../apiFetcher';

/******************
 *                *
 *     Dialog     *
 *                *
 ******************/

export default (apiUrl: string) => ({
  /**
   * Submits a Text Entered event to the session's Dialog State Machine.
   * @param {object} params
   * @param {string} params.sessionId The session ID
   * @param {string} params.text The text entered by the user
   */
  postTextEnteredEvent: async ({
    sessionId,
    text,
  }: {
    sessionId: string;
    text: string;
  }) =>
    apiFetcher(`/TextEnteredEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        text,
      },
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Submits a Place Changed event to the session's Dialog State Machine.
   * @param {object} params
   * @param {string} params.sessionId - The session ID
   * @param {string} params.placeName - The name of the place
   * @param {number} params.latitude - The latitude of the place
   * @param {number} params.longitude - The longitude of the place
   * @param {number} params.uncertaintyKm - The uncertainty of the place in kilometers
   */
  postPlaceChangedEvent: async ({
    sessionId,
    placeName,
    latitude,
    longitude,
    uncertaintyKm,
  }: {
    sessionId: string;
    placeName: string;
    latitude: number;
    longitude: number;
    uncertaintyKm?: number;
  }) =>
    apiFetcher(`/PlaceChangedEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        placeName,
        latitude,
        longitude,
        uncertaintyKm,
      },
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Submits a Date Changed event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postDateChangedEvent: async (sessionId: string) =>
    apiFetcher(`/DateChangedEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Submits a Tag Changed event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   * @param {string} tag The tag to set
   */
  postTagChangedEvent: async (sessionId: string, tag: string) =>
    apiFetcher(`/TagChangedEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { tag },
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Submits a Timeout event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postTimeoutEvent: async (sessionId: string) =>
    apiFetcher(`/TimeoutEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Submits a Medium Selected event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   * @param {Medium} medium The medium to set
   */
  postMediumSelectedEvent: async (sessionId: string, medium: Medium) =>
    apiFetcher(`/MediumSelectedEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { medium },
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Submits a Date Selected event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postDateSelectedEvent: async ({ sessionId }: { sessionId: string }) =>
    apiFetcher(`/DateSelectedEvent/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Submits a Place Selected event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postPlaceSelectedEvent: async ({ sessionId }: { sessionId: string }) =>
    apiFetcher(`/PlaceSelectedEvent/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Submits a Tag Selected event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postTagSelectedEvent: async ({ sessionId }: { sessionId: string }) =>
    apiFetcher(`/TagSelectedEvent/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

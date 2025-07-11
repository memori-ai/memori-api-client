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
   * Submits a Text Entered event to the session's Dialog State Machine.
   * @param {object} params
   * @param {string} params.sessionId The session ID
   * @param {string} params.text The text entered by the user
   * @param {object} params.questionsAndAnswers The questions and answers to submit
   */
  postTextEnteredEventExtended: async ({
    sessionId,
    text,
    questionsAndAnswersHistory,
  }: {
    sessionId: string;
    text: string;
    questionsAndAnswersHistory: {
      question: string;
      answer: string;
    }[];
  }) =>
    apiFetcher(`/ExtendedTextEnteredEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        text,
        questionsAndAnswersHistory,
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
   * @param {string} date Specifications for a Date Changed event. A Date Changed event changes the Current Date: the State Machine will use the new date for subsequent question resolution.
   * New date, in the format yyyy/MM/dd HH:mm:ss zzz, e.g. 2020/01/01 09:30:00 +02.
   */
  postDateChangedEvent: async (sessionId: string, date: string) =>
    apiFetcher(`/DateChangedEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: { date },
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

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
   * Selectable in R1, R6 e M1 or states with the AcceptMedia flag
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
   * Submits a Medium Deselected event to the session's Dialog State Machine.
   * A Medium Deselected event is used for removing media from an associated Memory or from use during dialog (e.g. by an intent or generative AI).
   * @param {string} sessionID The session ID
   * @param {string} mediumID The medium ID to set
   */
  postMediumDeselectedEvent: async (sessionID: string, mediumID: string) =>
    apiFetcher(`/MediumDeselectedEvent/${sessionID}`, {
      method: 'POST',
      apiUrl,
      body: { mediumID },
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Submits a Date Selected event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postDateSelectedEvent: async (sessionId: string) =>
    apiFetcher(`/DateSelectedEvent/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Submits a Place Selected event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postPlaceSelectedEvent: async (sessionId: string) =>
    apiFetcher(`/PlaceSelectedEvent/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Submits a Tag Selected event to the session's Dialog State Machine.
   * @param {string} sessionId The session ID
   */
  postTagSelectedEvent: async (sessionId: string) =>
    apiFetcher(`/TagSelectedEvent/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

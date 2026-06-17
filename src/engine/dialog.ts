import { DialogState, Medium, PlaceSpecs, ResponseSpec, TextEnteredAsyncResponse } from '../types';
import { apiFetcher } from '../apiFetcher';

/******************
 *                *
 *     Dialog     *
 *                *
 ******************/

function buildTextEnteredBody(params: {
  text: string;
  dateUTC?: string | null;
  place?: PlaceSpecs | null;
}) {
  const { text, dateUTC, place } = params;
  const body: {
    text: string;
    dateUTC?: string;
    place?: Record<string, number | string | null | undefined>;
  } = { text };
  if (dateUTC != null && dateUTC !== '') {
    body.dateUTC = dateUTC;
  }
  if (place != null && typeof place === 'object') {
    const placeBody: Record<string, number | string | null | undefined> = {};
    if (place.placeName != null) placeBody.placeName = place.placeName;
    if (place.latitude != null) placeBody.latitude = place.latitude;
    if (place.longitude != null) placeBody.longitude = place.longitude;
    if (place.uncertaintyKm != null) placeBody.uncertaintyKm = place.uncertaintyKm;
    if (Object.keys(placeBody).length > 0) {
      body.place = placeBody;
    }
  }
  return body;
}

export default (apiUrl: string) => ({

  /**
   * Submits a Text Entered event to the session's Dialog State Machine.
   * @param {object} params
   * @param {string} params.sessionId The session ID
   * @param {string} params.text The text entered by the user
   * @param {string} [params.dateUTC] Optional. Current date/time in UTC, ISO 8601 (e.g. 2026-03-16T12:00:00.000Z). If present, the backend updates the session's current date before processing.
   * @param {PlaceSpecs} [params.place] Optional. Geographical context for the message (placeName, latitude, longitude, uncertaintyKm). latitude and longitude must be sent together if used.
   */
  postTextEnteredEvent: async ({
    sessionId,
    text,
    dateUTC,
    place,
  }: {
    sessionId: string;
    text: string;
    dateUTC?: string | null;
    place?: PlaceSpecs | null;
  }) =>
    apiFetcher(`/TextEnteredEvent/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: buildTextEnteredBody({ text, dateUTC, place }),
    }) as Promise<
      ResponseSpec & {
        currentState: DialogState;
      }
    >,

  /**
   * Submits a Text Entered event to the session's Dialog State Machine
   * (fire-and-forget, returns 200 immediately).
   * Identical to postTextEnteredEvent, except the immediate HTTP 200 response is a
   * TextEnteredAsyncResponse with resultCode, resultMessage, and correlationID.
   * @param {object} params
   * @param {string} params.sessionId The session ID
   * @param {string} params.text The text entered by the user
   * @param {string} [params.dateUTC] Optional. Current date/time in UTC, ISO 8601 (e.g. 2026-03-16T12:00:00.000Z). If present, the backend updates the session's current date before processing.
   * @param {PlaceSpecs} [params.place] Optional. Geographical context for the message (placeName, latitude, longitude, uncertaintyKm). latitude and longitude must be sent together if used.
   */
  postEnterTextAsync: async ({
    sessionId,
    text,
    dateUTC,
    place,
  }: {
    sessionId: string;
    text: string;
    dateUTC?: string | null;
    place?: PlaceSpecs | null;
  }) =>
    apiFetcher(`/TextEnteredEventAsync/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: buildTextEnteredBody({ text, dateUTC, place }),
    }) as Promise<TextEnteredAsyncResponse>,

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
   * Submits a Text Entered event to the session's Dialog State Machine asynchronously.
   * Identical to postTextEnteredEventExtended, except the immediate HTTP 200 response
   * is a TextEnteredAsyncResponse with resultCode, resultMessage, and correlationID.
   * @param {object} params
   * @param {string} params.sessionId The session ID
   * @param {string} params.text The text entered by the user
   * @param {object} params.questionsAndAnswers The questions and answers to submit
   */
  postExtendedEnterTextAsync: async ({
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
    apiFetcher(`/ExtendedEnterTextAsync/${sessionId}`, {
      method: 'POST',
      apiUrl,
      body: {
        text,
        questionsAndAnswersHistory,
      },
    }) as Promise<TextEnteredAsyncResponse>,

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

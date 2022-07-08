import { DialogState, Medium, ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Submits a Text Entered event to the session's Dialog State Machine.
     * @param {object} params
     * @param {string} params.sessionId The session ID
     * @param {string} params.text The text entered by the user
     */
    postTextEnteredEvent: ({ sessionId, text, }: {
        sessionId: string;
        text: string;
    }) => Promise<ResponseSpec & {
        currentState: DialogState;
    }>;
    /**
     * Submits a Place Changed event to the session's Dialog State Machine.
     * @param {object} params
     * @param {string} params.sessionId - The session ID
     * @param {string} params.placeName - The name of the place
     * @param {number} params.latitude - The latitude of the place
     * @param {number} params.longitude - The longitude of the place
     * @param {number} params.uncertaintyKm - The uncertainty of the place in kilometers
     */
    postPlaceChangedEvent: ({ sessionId, placeName, latitude, longitude, uncertaintyKm, }: {
        sessionId: string;
        placeName: string;
        latitude: number;
        longitude: number;
        uncertaintyKm?: number | undefined;
    }) => Promise<ResponseSpec & {
        currentState: DialogState;
    }>;
    /**
     * Submits a Date Changed event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postDateChangedEvent: (sessionId: string) => Promise<ResponseSpec>;
    /**
     * Submits a Tag Changed event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     * @param {string} tag The tag to set
     */
    postTagChangedEvent: (sessionId: string, tag: string) => Promise<ResponseSpec & {
        currentState: DialogState;
    }>;
    /**
     * Submits a Timeout event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postTimeoutEvent: (sessionId: string) => Promise<ResponseSpec & {
        currentState: DialogState;
    }>;
    /**
     * Submits a Medium Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     * @param {Medium} medium The medium to set
     */
    postMediumSelectedEvent: (sessionId: string, medium: Medium) => Promise<ResponseSpec & {
        currentState: DialogState;
    }>;
    /**
     * Submits a Date Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postDateSelectedEvent: ({ sessionId }: {
        sessionId: string;
    }) => Promise<ResponseSpec>;
    /**
     * Submits a Place Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postPlaceSelectedEvent: ({ sessionId }: {
        sessionId: string;
    }) => Promise<ResponseSpec>;
    /**
     * Submits a Tag Selected event to the session's Dialog State Machine.
     * @param {string} sessionId The session ID
     */
    postTagSelectedEvent: ({ sessionId }: {
        sessionId: string;
    }) => Promise<ResponseSpec>;
};
/******************
 *                *
 *     Dialog     *
 *                *
 ******************/
export default _default;

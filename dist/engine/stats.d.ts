import { ResponseSpec, Stats, Memory, EventLog } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Computes usage statistics for the Memori of the current session.
     * @param {string} sessionId The session ID
     */
    getStatistics: (sessionId: string) => Promise<ResponseSpec & {
        statistics: Stats;
    }>;
    /**
     * Computes content quality indexes for a Memori.
     * @param {string} memoriID - The Memori object ID
     */
    getContentQualityIndexes: (memoriID: string) => Promise<ResponseSpec & {
        /**
         * @type {number}
         * An index of content quality of this Memori. The more content is added (and especially content with media, or stories with dates and places) the more the index grows.
         */
        contentQualityIndex: number;
        /**
         * @type {number}
         * An index of answer quality of this Memori. It is the ratio of the number of successful answer vs. the total of answers (successful, wrongful or missing).
         */
        answerQualityIndex: number;
        /**
         * @type {number}
         * The current number of unanswered questions.
         */
        unansweredQuestions: number;
    }>;
    /**
     * Computes text quality indexes for a Memori.
     * @param {string} sessionId - The session ID
     */
    getTextQualityIndexes: (sessionId: string) => Promise<ResponseSpec & {
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
        faultyMemories?: Memory[] | undefined;
    }>;
    /**
     * Get the Event Log objects for the Memori of the current session in a specific date interval
     * @param {string} sessionId The session ID
     * @param {string} strDateFrom The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {string} strDateTo The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getEventLogs: (sessionId: string, strDateFrom: string, strDateTo: string) => Promise<ResponseSpec & {
        eventLogs: EventLog[];
    }>;
    /**
     * Gets the Event Log objects for a specific Memory object in a specific date interval.
     * @param {string} sessionId - The session ID
     * @param {string} memoryId - The Memory object ID
     * @param {string} strDateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {string} strDateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getMemoryEventLogs: (sessionId: string, memoryId: string, strDateFrom: string, strDateTo: string) => Promise<ResponseSpec & {
        eventLogs: EventLog[];
    }>;
    /**
     * Gets the Event Log objects for a specific Intent object in a specific date interval.
     * @param {string} sessionId - The session ID
     * @param {string} intentId - The Intent object ID
     * @param {string} strDateFrom - The optional begin of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     * @param {string} strDateTo - The optional end of the date interval, in UTC time, in the format yyyyMMddHHmmssfff
     */
    getIntentEventLogs: (sessionId: string, intentId: string, strDateFrom: string, strDateTo: string) => Promise<ResponseSpec & {
        eventLogs: EventLog[];
    }>;
};
/*****************
 *               *
 *     Stats     *
 *               *
 *****************/
export default _default;

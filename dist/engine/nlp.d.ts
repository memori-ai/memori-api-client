import { ResponseSpec } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Looks up the vector definition for a word.
     * @param {string} sessionId The session ID
     * @param {string} word Word to be looked up
     */
    getWordVector: (sessionId: string, word: string) => Promise<ResponseSpec>;
    /**
     * Tries to guess the language of a sentence by analyzing key word occurrences.
     * @param {string} sessionId The session ID
     * @param {string} text Text to be used for guessing the language.
     */
    guessLanguage: (sessionId: string, text: string) => Promise<ResponseSpec & {
        languageGuesses: {
            [lang: string]: number;
        };
    }>;
};
/***************
 *             *
 *     NLP     *
 *             *
 ***************/
export default _default;

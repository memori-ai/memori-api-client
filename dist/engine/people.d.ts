import { ResponseSpec, Person } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Lists all Person objects.
     * @param {string} sessionId The session ID
     */
    getPeople: (sessionId: string) => Promise<ResponseSpec & {
        people: Person[];
    }>;
    /**
     * Gets the details of a Person object.
     * @param {string} sessionId The session ID
     * @param {string} personId The Person object ID
     */
    getPerson: (sessionId: string, personId: string) => Promise<ResponseSpec & {
        person: Person;
    }>;
    /**
     * Updates an existing Person object.
     * @param {string} sessionId The session ID
     * @param {Person} person The Person object
     */
    patchPerson: (sessionId: string, person: Person) => Promise<ResponseSpec & {
        person: Person;
    }>;
    /**
     * Removes an existing Person object.
     * @param {string} sessionId The session ID
     * @param {string} personId The Person object ID
     */
    deletePerson: (sessionId: string, personId: string) => Promise<ResponseSpec>;
    /**
     * Adds a new Person object.
     * @param {string} sessionId - The session ID
     * @param {Person} person - The Person object
     */
    postPerson: (sessionId: string, person: Person) => Promise<ResponseSpec & {
        person: Person;
    }>;
};
/******************
 *                *
 *     People     *
 *                *
 ******************/
export default _default;

import { ResponseSpec, Person } from '../index.d';
import { apiFetcher } from '../apiFetcher';

/******************
 *                *
 *     People     *
 *                *
 ******************/

export default (apiUrl: string) => ({
  /**
   * Lists all Person objects.
   * @param {string} sessionId The session ID
   */
  getPeople: async (sessionId: string) =>
    apiFetcher(`/People/${sessionId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        people: Person[];
      }
    >,

  /**
   * Gets the details of a Person object.
   * @param {string} sessionId The session ID
   * @param {string} personId The Person object ID
   */
  getPerson: async (sessionId: string, personId: string) =>
    apiFetcher(`/Person/${sessionId}/${personId}`, {
      method: 'GET',
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        person: Person;
      }
    >,

  /**
   * Updates an existing Person object.
   * @param {string} sessionId The session ID
   * @param {Person} person The Person object
   */
  patchPerson: async (sessionId: string, person: Person) =>
    apiFetcher(`/Person/${sessionId}/${person.personID!}`, {
      method: 'PATCH',
      body: person,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        person: Person;
      }
    >,

  /**
   * Removes an existing Person object.
   * @param {string} sessionId The session ID
   * @param {string} personId The Person object ID
   */
  deletePerson: async (sessionId: string, personId: string) =>
    apiFetcher(`/Person/${sessionId}/${personId}`, {
      method: 'DELETE',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
   * Adds a new Person object.
   * @param {string} sessionId - The session ID
   * @param {Person} person - The Person object
   */
  postPerson: async (sessionId: string, person: Person) =>
    apiFetcher(`/Person/${sessionId}`, {
      method: 'POST',
      body: person,
      apiUrl,
    }) as Promise<
      ResponseSpec & {
        person: Person;
      }
    >,
});

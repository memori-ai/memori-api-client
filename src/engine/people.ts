import type { ResponseSpec, Person } from 'types';
import { apiFetcher } from '../../helpers/apiFetcher';

/******************
 *                *
 *     People     *
 *                *
 ******************/

/**
 * Lists all Person objects.
 * @param {string} sessionId The session ID
 */
export const getPeople = async (sessionId: string) =>
  apiFetcher(`/People/${sessionId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      people: Person[];
    }
  >;

/**
 * Gets the details of a Person object.
 * @param {string} sessionId The session ID
 * @param {string} personId The Person object ID
 */
export const getPerson = async (sessionId: string, personId: string) =>
  apiFetcher(`/Person/${sessionId}/${personId}`, {
    method: 'GET',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      person: Person;
    }
  >;

/**
 * Updates an existing Person object.
 * @param {string} sessionId The session ID
 * @param {Person} person The Person object
 */
export const patchPerson = async (sessionId: string, person: Person) =>
  apiFetcher(`/Person/${sessionId}/${person.personID!}`, {
    method: 'PATCH',
    body: person,
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      person: Person;
    }
  >;

/**
 * Removes an existing Person object.
 * @param {string} sessionId The session ID
 * @param {string} personId The Person object ID
 */
export const deletePerson = async (sessionId: string, personId: string) =>
  apiFetcher(`/Person/${sessionId}/${personId}`, {
    method: 'DELETE',
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<ResponseSpec>;

/**
 * Adds a new Person object.
 * @param {string} sessionId - The session ID
 * @param {Person} person - The Person object
 */
export const postPerson = async (sessionId: string, person: Person) =>
  apiFetcher(`/Person/${sessionId}`, {
    method: 'POST',
    body: person,
    apiUrl: process.env.NEXT_PUBLIC_ENGINE_URL,
  }) as Promise<
    ResponseSpec & {
      person: Person;
    }
  >;

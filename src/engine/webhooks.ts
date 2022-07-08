import { ResponseSpec } from '../types';
import { apiFetcher } from '../apiFetcher';

/********************
 *                  *
 *     WebHooks     *
 *                  *
 ********************/

export default (apiUrl: string) => ({
  /**
   * Returns test slot values. Currently available test slots are:<ul><li><code>number</code>: integer numbers between 1 and 10</li><li><code>letter</code>: uppercase letters between A and Z</li><li><code>greek_letter</code>: capitalized Greek letters between Alpha and Omega</li></ul>
   */
  postTestSlot: async () =>
    apiFetcher(`/TestSlot`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,

  /**
      * Returns test intent results. Currently available test intents are:<ul><li><code>ECHO</code>: emits the intent utterance as-is.</li><li><code>COMBINE_LETTER_AND_NUMBER</code>: requires a letter slot and a number slot,
   emits the content of the two slots in justaxposition, e.g. "A10".</li><li><code>DATE_RANGE</code>: requires a date slot, emits the date range indicated
   by the date slot in the format "yyyy/MM/dd - yyyy/MM/dd".</li><li><code>AUTOINCREMENT</code>: returns a progressive number that increments by 1
   each time the intent is called.</li><li><code>FIBONACCI</code>: returns the next element of the Fibonacci series, using
   context variables to store the series progression.</li></ul>
      */
  postTestIntent: async () =>
    apiFetcher(`/TestIntent`, {
      method: 'GET',
      apiUrl,
    }) as Promise<ResponseSpec>,
});

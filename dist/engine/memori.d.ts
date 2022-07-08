import { ResponseSpec, Memori } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Registration of a new Memori object.
     * @param {Memori} memori - The Memori object
     */
    postMemori: (memori: Partial<Omit<Memori, 'memoriID'>>) => Promise<ResponseSpec>;
    /**
     * Updates an existing Memori object.
     * @param {Memori} memori - The Memori object
     */
    patchMemori: (memori: Partial<Memori> & {
        memoriID: string;
    }) => Promise<ResponseSpec>;
    /**
     * Deletes an existing Memori object.
     * @param {string} memoriId The Memori object ID
     */
    deleteMemori: (memoriId: string) => Promise<ResponseSpec>;
    /**
     * Lists Memori objects, with optional filtering.
     */
    postSearchMemori: () => Promise<ResponseSpec>;
};
/******************
 *                *
 *     Memori     *
 *                *
 ******************/
export default _default;

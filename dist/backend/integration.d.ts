import { ResponseSpec, Integration } from '../types';
declare const _default: (apiUrl: string) => {
    /**
     * Gets a list of integration objects for a specified Memori object.
     * @param memoriID - The id of the Memori object
     * @param authToken - The login token
     * @returns A list of Integration objects
     */
    getMemoriIntegrationsList: (authToken: string, memoriID: string) => Promise<ResponseSpec & {
        integrations: Integration[];
    }>;
    /**
     * Gets a list of integration objects.
     * @param authToken - The login token
     * @returns A list of Integration objects
     */
    getAllIntegrationsList: (authToken: string) => Promise<ResponseSpec & {
        integrations: Integration[];
    }>;
    /**
     * Gets the detail of an integration object of the currently logged in User.
     * @param authToken - The login token
     * @param integrationID - The ID of the integration object
     * @returns The Integration object
     */
    getIntegration: (authToken: string, integrationID: string) => Promise<ResponseSpec & {
        integration: Integration;
    }>;
    /**
     * Delete an exsisting integration object.
     * @param authToken - The login token
     * @param integrationID - The ID of the integration object
     */
    deleteIntegration: (authToken: string, integrationID: string) => Promise<ResponseSpec>;
    /**
     * Register a new integration object.
     * @param authToken - The login token
     * @param integration - The Integration object
     * @returns The Integration object
     */
    createIntegration: (authToken: string, integration: Integration) => Promise<ResponseSpec & {
        integration: Integration;
    }>;
    /**
     * Updates the integration object.
     * @param authToken - The login token
     * @param integrationID - The id of the Integration object
     * @param integration - The Integration object
     * @returns The Integration object
     */
    updateIntegration: (authToken: string, integrationID: string, integration: Integration) => Promise<ResponseSpec & {
        integration: Integration;
    }>;
};
export default _default;

import { getBackendApiUrl, getEngineApiUrl } from './helpers/getApiUrl';
import backend from './backend';
import engine from './engine';
import * as constants from './constants';
import asset from './helpers/asset';

const api = (backendEndpoint?: string, engineEndpoint?: string) => {
  const apiUrl = getBackendApiUrl(backendEndpoint);
  const engineApiUrl = getEngineApiUrl(engineEndpoint);

  const backendUrl = `${apiUrl}/api/v2`;
  const engineUrl = `${engineApiUrl}/memori/v2`;

  return {
    backend: backend(backendUrl),
    ...engine(engineUrl),
    constants: {
      ...constants,
      BACKEND_URL: backendUrl,
      ENGINE_URL: engineUrl,
    },
    asset: asset(backendUrl),
  };
};

export default api;

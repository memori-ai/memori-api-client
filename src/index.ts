import { getApiUrl } from './helpers/getApiUrl';
import backend from './backend';
import engine from './engine';
import * as constants from './constants';
import asset from './helpers/asset';

const api = (hostname?: string) => {
  const apiUrl = getApiUrl(hostname);
  const engineUrl = `${apiUrl}/memori/v2`;
  const backendUrl = `${apiUrl}/api/v2`;

  return {
    backend: backend(backendUrl),
    ...engine(engineUrl),
    constants: {
      ...constants,
      HOSTNAME: apiUrl,
      BACKEND_URL: backendUrl,
      ENGINE_URL: engineUrl,
    },
    asset: asset(backendUrl),
  };
};

export default api;

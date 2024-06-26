import { getApiUrl } from './helpers/getApiUrl';
import backend from './backend';
import engine from './engine';
import * as constants from './constants';
import asset from './helpers/asset';

const api = (backendEndpoint?: string, engineEndpoint?: string) => {
  const apiUrl = getApiUrl(backendEndpoint);
  const engineApiUrl = getApiUrl(engineEndpoint);

  const backendUrl = `${apiUrl}/api/v2`;
  const engineUrl = engineEndpoint
    ? `${engineApiUrl}/memori/v2`
    : `${apiUrl.replace('backend', 'engine')}/memori/v2`;

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

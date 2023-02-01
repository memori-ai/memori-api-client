import { getApiUrl } from './helpers/getApiUrl';
import backend from './backend';
import engine from './engine';
import * as constants from './constants';
import asset from './helpers/asset';

const api = (hostname?: string) => {
  const apiUrl = getApiUrl(hostname);

  return {
    backend: backend(`${apiUrl}/api/v2`),
    ...engine(`${apiUrl}/memori/v2`),
    constants,
    asset: asset(`${apiUrl}/api/v2`),
  };
};

export default api;

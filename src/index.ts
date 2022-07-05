import { getApiUrl } from './helpers';
import backend from './backend';
import engine from './engine';
import * as constants from './constants';

const api = (hostname?: string) => {
  const apiUrl = getApiUrl(hostname);

  return {
    backend: backend(`${apiUrl}/api/v2`),
    engine: engine(`${apiUrl}/memori/v2`),
    constants,
  };
};

export default api;

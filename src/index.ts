import { getApiUrl } from './helpers/getApiUrl';
import backend from './backend';
import engine from './engine';
import * as constants from './constants';
import speech from './speech';
import media from './helpers/media';

const api = (hostname?: string) => {
  const apiUrl = getApiUrl(hostname);

  return {
    backend: backend(`${apiUrl}/api/v2`),
    engine: engine(`${apiUrl}/memori/v2`),
    speech,
    constants,
    media: media(`${apiUrl}/api/v2`),
  };
};

export default api;

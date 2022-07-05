import backend from './backend';
import engine from './engine';

export const getAPIUrl = (hostname?: string) =>
  hostname
    ? new URL(
        hostname.startsWith('http') ? hostname : `https://${hostname}`
      ).origin.replace('http://', 'https://')
    : 'https://backend.memori.ai';

const api = (hostname?: string) => {
  const apiUrl = getAPIUrl(hostname);

  return {
    backend: backend(`${apiUrl}/api/v2`),
    engine: engine(`${apiUrl}/memori/v2`),
  };
};

export default api;

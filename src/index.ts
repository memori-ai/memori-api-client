import backend from './backend';
import engine from './engine';

const getTenantAPIUrl = (hostname: string) => hostname;

const api = (hostname: string) => {
  const tenantAPIURL = getTenantAPIUrl(hostname);

  return {
    backend: backend(`${tenantAPIURL}/api/v2`),
    engine: engine(`${tenantAPIURL}/memori/v2`),
  };
};

export default api;

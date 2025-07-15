export const getBackendApiUrl = (hostname?: string) =>
  hostname
    ? new URL(hostname.startsWith('http') ? hostname : `https://${hostname}`)
        .origin
    : 'https://backend.memori.ai';

export const getEngineApiUrl = (hostname?: string) =>
  hostname
    ? new URL(hostname.startsWith('http') ? hostname : `https://${hostname}`)
        .origin
    : 'https://engine.memori.ai';

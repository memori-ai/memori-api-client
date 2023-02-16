export const getApiUrl = (hostname?: string) =>
  hostname
    ? new URL(hostname.startsWith('http') ? hostname : `https://${hostname}`)
        .origin
    : 'https://backend.memori.ai';

export const getApiUrl = (hostname?: string) =>
  hostname
    ? new URL(
        hostname.startsWith('http') ? hostname : `https://${hostname}`
      ).origin.replace('http://', 'https://')
    : 'https://backend.memori.ai';

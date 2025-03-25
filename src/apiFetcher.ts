import { default as fetch } from 'cross-fetch';

export const apiFetcher = (
  path: string,
  opts: {
    apiUrl: string;
    method?: string;
    body?: object;
    headers?: object;
    text?: boolean;
  }
) =>
  fetch(`${opts.apiUrl}${path}`, {
    ...opts,
    body: opts?.body ? JSON.stringify(opts.body) : undefined,
    mode: 'cors',
    credentials: 'include',
    headers: {
      // "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      ...opts?.headers,
    },
  }).then(res => (opts?.text ? res.text() : res.json()));

/**
 * A specialized API fetcher for handling binary responses
 * Use this function when you need to download files or process binary data
 */
export const apiBinaryFetcher =  async (
  path: string,
  opts: {
    apiUrl: string;
    method?: string;
    body?: object;
    headers?: object;
    responseType?: 'arrayBuffer' | 'blob'; // Types of binary responses
  }
) => {
  const responseType = opts?.responseType || 'arrayBuffer';

  return fetch(`${opts.apiUrl}${path}`, {
    method: opts.method || 'GET',
    body: opts?.body ? JSON.stringify(opts.body) : undefined,
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/octet-stream, application/zip',
      ...opts?.headers,
    },
  }).then(async res => {
    if (!res.ok) {
      throw new Error(`API responded with status: ${res.status}`);
    }

    // Return the appropriate binary format
    return responseType === 'blob' ? res.blob() : res.arrayBuffer();
  });
};

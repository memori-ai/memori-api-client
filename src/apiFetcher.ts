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

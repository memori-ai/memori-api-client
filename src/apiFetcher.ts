export const fetcher = (
  path: string,
  opts?: {
    apiUrl?: string;
    method?: string;
    body?: object;
    headers?: object;
  }
) =>
  fetch(`${opts?.apiUrl ?? process.env.NEXT_PUBLIC_API_URL}${path}`, {
    ...opts,
    body: opts?.body ? JSON.stringify(opts.body) : undefined,
    mode: 'cors',
    credentials: 'include',
    headers: {
      // "Access-Control-Allow-Origin": "*",
      'Content-Type': 'application/json',
      ...opts?.headers,
    },
  }).then((res) => res.json());

export const devFetcher = (data: any) => Promise.resolve(data);

export const apiFetcher =
  process.env.CI === 'true' || process.env.NODE_ENV === 'test'
    ? devFetcher
    : fetcher;

export declare const fetcher: (path: string, opts: {
    apiUrl: string;
    method?: string;
    body?: object;
    headers?: object;
}) => Promise<any>;
export declare const devFetcher: (data: any) => Promise<any>;
export declare const apiFetcher: (path: string, opts: {
    apiUrl: string;
    method?: string;
    body?: object;
    headers?: object;
}) => Promise<any>;

export declare const apiFetcher: (path: string, opts: {
    apiUrl: string;
    method?: string;
    body?: object;
    headers?: object;
    text?: boolean;
}) => Promise<any>;

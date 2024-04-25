type Headers = {
    Authorization: string;
    'Content-Type'?: string;
};
export declare class FetchError extends Error {
    status: number;
    code?: string;
    metadata?: Record<string, unknown>;
    constructor(message: string, status: number, code?: string, metadata?: Record<string, unknown>);
}
declare const getHeaders: (accessToken: string, method: 'GET' | 'POST') => Headers;
declare const makeQueryString: (params: Record<string, unknown>) => string;
declare const fetchData: <T = any>(url: string, method: 'GET' | 'POST', accessToken: string, req?: Record<string, unknown>) => Promise<any>;
export { fetchData, getHeaders, makeQueryString };

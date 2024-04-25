"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeQueryString = exports.getHeaders = exports.fetchData = exports.FetchError = void 0;
class FetchError extends Error {
    constructor(message, status, code, metadata) {
        super(message);
        this.status = status;
        this.code = code;
        this.metadata = metadata;
    }
}
exports.FetchError = FetchError;
const getHeaders = (accessToken, method) => {
    const headers = {
        Authorization: `Bearer ${accessToken}`,
    };
    if (method === 'POST') {
        headers['Content-Type'] = 'application/json';
    }
    return headers;
};
exports.getHeaders = getHeaders;
const makeQueryString = (params) => {
    const esc = encodeURIComponent;
    const query = Object.keys(params)
        .map((k) => `${esc(k)}=${esc(params[k])}`)
        .join('&');
    return `?${query}`;
};
exports.makeQueryString = makeQueryString;
const fetchData = (url, method, accessToken, req) => __awaiter(void 0, void 0, void 0, function* () {
    const headers = Object.assign(Object.assign({}, getHeaders(accessToken, method)), { 'Content-Type': 'application/json' });
    const options = {
        method: method,
        headers: headers,
        body: req ? JSON.stringify(req) : undefined,
    };
    try {
        const response = yield fetch(url, options);
        console.log('BEGIN LOGGING!');
        if (response.ok) {
            const data = yield response.json();
            console.log('RESPONSE:', data);
            return data;
        }
        else {
            const errorResponse = yield response.json();
            console.log('ERROR RESPONSE:', errorResponse);
            throw new FetchError(errorResponse.message, response.status, errorResponse.code, errorResponse.metadata);
        }
    }
    catch (error) {
        if (error instanceof FetchError) {
            // If it's our custom error, rethrow it
            console.log('CUSTOM ERROR:', error.message, error.status, error.code, error.metadata);
            throw error;
        }
        else {
            // For other errors, wrap them in our custom error class
            console.log('OTHER ERROR:', error);
            throw new FetchError(error, 500);
        }
    }
});
exports.fetchData = fetchData;

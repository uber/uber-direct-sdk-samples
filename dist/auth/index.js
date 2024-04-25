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
exports.getAccessToken = void 0;
function getAccessToken() {
    return __awaiter(this, void 0, void 0, function* () {
        const clientId = process.env.UBER_DIRECT_CLIENT_ID;
        const clientSecret = process.env.UBER_DIRECT_CLIENT_SECRET;
        if (!clientId || !clientSecret) {
            throw new Error('Must include UBER_DIRECT_CLIENT_ID and UBER_DIRECT_CLIENT_SECRET in environment variables');
        }
        const body = {
            client_id: clientId,
            client_secret: clientSecret,
            grant_type: 'client_credentials',
            scope: ['direct.organizations', 'eats.deliveries'].join(' '),
        };
        try {
            const response = yield fetch('https://login.uber.com/oauth/v2/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(body).toString(),
            });
            if (response.ok) {
                const data = yield response.json();
                return data.access_token;
            }
            else {
                const error = yield response.text();
                throw new Error(`Failed to fetch access token: ${error}`);
            }
        }
        catch (err) {
            // TODO: Handle errors better
            console.log(err);
            throw err;
        }
    });
}
exports.getAccessToken = getAccessToken;

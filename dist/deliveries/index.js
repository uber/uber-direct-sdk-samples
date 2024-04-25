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
exports.createDeliveriesClient = exports.DeliveriesClient = void 0;
const utils_1 = require("../utils");
class DeliveriesClient {
    constructor(accessToken) {
        this.accessToken = accessToken;
        const customerId = process.env.UBER_DIRECT_CUSTOMER_ID;
        if (!customerId) {
            throw new Error('Must include UBER_DIRECT_CUSTOMER_ID in environment variables');
        }
        this.baseURL = `https://api.uber.com/v1/customers/${customerId}`;
    }
    createQuote(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/delivery_quotes`, 'POST', this.accessToken, req);
        });
    }
    createDelivery(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/deliveries`, 'POST', this.accessToken, req);
        });
    }
    getDelivery(deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/deliveries/${deliveryId}`, 'GET', this.accessToken);
        });
    }
    listDeliveries(options) {
        return __awaiter(this, void 0, void 0, function* () {
            let url = `${this.baseURL}/deliveries`;
            if (options) {
                url += (0, utils_1.makeQueryString)(options);
            }
            return (0, utils_1.fetchData)(url, 'GET', this.accessToken);
        });
    }
    cancelDelivery(deliveryId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/deliveries/${deliveryId}/cancel`, 'POST', this.accessToken);
        });
    }
    updateDelivery(deliveryId, req) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/deliveries/${deliveryId}`, 'POST', this.accessToken, req);
        });
    }
    proofOfDelivery(deliveryId, req) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/deliveries/${deliveryId}/proof-of-delivery`, 'POST', this.accessToken, req);
        });
    }
}
exports.DeliveriesClient = DeliveriesClient;
const createDeliveriesClient = (accessToken) => {
    return new DeliveriesClient(accessToken);
};
exports.createDeliveriesClient = createDeliveriesClient;

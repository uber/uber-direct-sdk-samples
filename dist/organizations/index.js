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
exports.createOrganizationsClient = exports.OrganizationsClient = void 0;
const utils_1 = require("../utils");
class OrganizationsClient {
    constructor(accessToken) {
        this.accessToken = accessToken;
        this.baseURL = 'https://api.uber.com/v1/direct';
    }
    createOrganization(req) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/organizations`, 'POST', this.accessToken, req);
        });
    }
    inviteMember(organizationId, req) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/organizations/${organizationId}/memberships/invite`, 'POST', this.accessToken, req);
        });
    }
    getOrganization(organizationId) {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.fetchData)(`${this.baseURL}/organizations/${organizationId}`, 'GET', this.accessToken);
        });
    }
}
exports.OrganizationsClient = OrganizationsClient;
const createOrganizationsClient = (accessToken) => {
    return new OrganizationsClient(accessToken);
};
exports.createOrganizationsClient = createOrganizationsClient;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrganizationsClient = exports.OrganizationsClient = exports.createDeliveriesClient = exports.DeliveriesClient = exports.getAccessToken = void 0;
var auth_1 = require("./auth");
Object.defineProperty(exports, "getAccessToken", { enumerable: true, get: function () { return auth_1.getAccessToken; } });
var deliveries_1 = require("./deliveries");
Object.defineProperty(exports, "DeliveriesClient", { enumerable: true, get: function () { return deliveries_1.DeliveriesClient; } });
Object.defineProperty(exports, "createDeliveriesClient", { enumerable: true, get: function () { return deliveries_1.createDeliveriesClient; } });
var organizations_1 = require("./organizations");
Object.defineProperty(exports, "OrganizationsClient", { enumerable: true, get: function () { return organizations_1.OrganizationsClient; } });
Object.defineProperty(exports, "createOrganizationsClient", { enumerable: true, get: function () { return organizations_1.createOrganizationsClient; } });

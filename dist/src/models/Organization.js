"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationModel = void 0;
const mongoose_1 = require("mongoose");
const OrganizationSchema = new mongoose_1.Schema({
    name: { type: String, required: true, index: true },
    country: { type: String, required: true, index: true },
    address: { type: String, required: true, index: true },
    timezone: { type: String, required: true, index: true },
    // @ts-ignore
    ownerId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User' },
});
exports.OrganizationModel = (0, mongoose_1.model)("Organization", OrganizationSchema);
//# sourceMappingURL=Organization.js.map
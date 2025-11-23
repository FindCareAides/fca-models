"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FacilityModel = void 0;
const mongoose_1 = require("mongoose");
const FacilitySchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    address: String,
    timezone: String,
    organizationId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Organization', required: true, index: true }
}, { timestamps: true });
exports.FacilityModel = (0, mongoose_1.model)("Facility", FacilitySchema);
//# sourceMappingURL=Facility.js.map
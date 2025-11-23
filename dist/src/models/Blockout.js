"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockOutModel = void 0;
const mongoose_1 = require("mongoose");
const BlockOutSchema = new mongoose_1.Schema({
    caregiverId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    organizationId: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Organization', required: true, index: true },
    start: { type: Date, required: true, index: true },
    end: { type: Date, required: true },
    note: String,
}, { timestamps: true });
exports.BlockOutModel = (0, mongoose_1.model)("BlockOut", BlockOutSchema);
//# sourceMappingURL=Blockout.js.map
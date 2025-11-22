"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShiftModel = exports.ShiftStatusEnum = void 0;
const mongoose_1 = require("mongoose");
var ShiftStatusEnum;
(function (ShiftStatusEnum) {
    ShiftStatusEnum["Assigned"] = "assigned";
    ShiftStatusEnum["Open"] = "open";
    ShiftStatusEnum["Swapped"] = "swapped";
    ShiftStatusEnum["Completed"] = "completed";
})(ShiftStatusEnum || (exports.ShiftStatusEnum = ShiftStatusEnum = {}));
const ShiftSchema = new mongoose_1.Schema({
    facilityId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Facility", required: true, index: true },
    caregiverId: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null, index: true },
    startTime: { type: Date, required: true, index: true },
    endTime: { type: Date, required: true },
    status: {
        type: String,
        enum: ShiftStatusEnum,
        default: ShiftStatusEnum.Assigned,
        index: true,
    },
    notes: String,
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
    recurring: { type: Boolean, default: false },
    recurrenceRule: String,
}, { timestamps: true });
ShiftSchema.index({ facilityId: 1, startTime: 1, status: 1 });
exports.ShiftModel = (0, mongoose_1.model)("Shift", ShiftSchema);
//# sourceMappingURL=Shift.js.map
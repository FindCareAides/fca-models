"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserRoleEnum = void 0;
const mongoose_1 = require("mongoose");
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum["Admin"] = "admin";
    UserRoleEnum["CareGiver"] = "careGiver";
})(UserRoleEnum || (exports.UserRoleEnum = UserRoleEnum = {}));
const AvailabilitySchema = new mongoose_1.Schema({
    startDate: Date,
    endDate: Date,
    reason: String,
});
const UserSchema = new mongoose_1.Schema({
    firstName: { type: String, required: true, index: true },
    lastName: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: UserRoleEnum, required: true, index: true },
    qualifications: [String],
    facilityId: { type: mongoose_1.Schema.Types.ObjectId, ref: "Facility" },
    availability: [AvailabilitySchema],
}, { timestamps: true });
UserSchema.index({ facilityId: 1, role: 1 });
exports.UserModel = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=User.js.map
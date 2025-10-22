import mongoose, { Schema, Document, model, models, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export enum UserRoleEnum {
  Admin= 'admin',
  CareGiver = 'careGiver'
}

export interface Availability {
  startDate: Date;
  endDate: Date;
  reason?: string;
}

export interface IUser extends BaseDocument, Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  role: UserRoleEnum;
  qualifications?: string[];
  facilityId?: mongoose.Types.ObjectId;
  availability?: Availability[];
}

const AvailabilitySchema = new Schema<Availability>({
  startDate: Date,
  endDate: Date,
  reason: String,
});

const UserSchema = new Schema<IUser>(
  {
    firstName: { type: String, required: true, index: true },
    lastName: { type: String, required: true, index: true },
    email: { type: String, required: true, unique: true, index: true },
    phone: { type: String },
    password: { type: String, required: true },
    role: { type: String, enum: UserRoleEnum, required: true, index: true },
    qualifications: [String],
    facilityId: { type: Schema.Types.ObjectId, ref: "Facility" },
    availability: [AvailabilitySchema],
  },
  { timestamps: true }
);

UserSchema.index({ facilityId: 1, role: 1 });

export const UserModel: Model<UserSchema> = models.User || model<IUser>("User", UserSchema);

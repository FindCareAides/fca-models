import mongoose, { Schema, Document, model, models, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export enum UserRoleEnum {
  Admin= 'admin',
  CareGiver = 'careGiver',
  Owner = 'Owner'
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
  password?: string;
  role: UserRoleEnum;
  qualifications?: string[];
  availability?: Availability[];
  organizationId: mongoose.Types.ObjectId;
  facilities?: mongoose.Types.ObjectId[];
  isActive: boolean;
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
    password: { type: String },
    isActive: { type: Boolean, required: true },
    role: { type: String, enum: UserRoleEnum, required: true, index: true },
    qualifications: [String],
    availability: [AvailabilitySchema],
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true, index: true },
    facilities: [{ type: Schema.Types.ObjectId, ref: 'Facility' }]
  },
  { timestamps: true }
);

UserSchema.index({ facilityId: 1, role: 1 });

export const UserModel: Model<UserSchema> = models.User || model<IUser>("User", UserSchema);

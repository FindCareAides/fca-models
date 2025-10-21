import mongoose, { Schema, Document, model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface IFacility extends BaseDocument, Document {
  name: string;
  address?: string;
  timezone?: string;
  admins?: mongoose.Types.ObjectId[];
}

const FacilitySchema = new Schema<IFacility>(
  {
    name: { type: String, required: true },
    address: String,
    timezone: String,
    admins: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

export const FacilityModel =
  mongoose.models.Facility || model<IFacility>("Facility", FacilitySchema);

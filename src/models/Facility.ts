import mongoose, { Schema, Document, model, models, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface IFacility extends BaseDocument, Document {
  name: string;
  address?: string;
  timezone?: string;
  admins?: mongoose.Types.ObjectId[];
  organizationId: mongoose.Types.ObjectId;
}

const FacilitySchema = new Schema<IFacility>(
  {
    name: { type: String, required: true },
    address: String,
    timezone: String,
    organizationId: { type: mongoose.Schema.Types.ObjectId, ref: 'Organization', required: true, index: true }
  },
  { timestamps: true }
);

// @ts-ignore
export const FacilityModel: Model<FacilitySchema> =
  models.Facility || model<IFacility>("Facility", FacilitySchema);

import { Schema, Types, model, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface IFacility extends BaseDocument {
  name: string;
  address?: string;
  timezone?: string;
  organizationId: Types.ObjectId;
}

const FacilitySchema = new Schema<IFacility>(
  {
    name: { type: String, required: true },
    address: String,
    timezone: String,
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true, index: true }
  },
  { timestamps: true }
);

export const FacilityModel = model("Facility", FacilitySchema) as Model<IFacility>;



import { Schema, Document, model, models, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface IOrganization extends BaseDocument, Document {
  name: string;
  country: string;
  address: string;
  timezone: string;
}

const OrganizationSchema = new Schema<IOrganization>({
  name: { type: String, required: true, index: true },
  country: { type: String, required: true, index: true },
  address: { type: String, required: true, index: true },
  timezone: { type: String, required: true, index: true },
});

export const OrganizationModel: Model<OrganizationSchema> = models.Organization || model<IOrganization>("Organization", OrganizationSchema);

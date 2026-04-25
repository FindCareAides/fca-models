import { Schema, Document, model, models, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface IOrganization extends BaseDocument, Document {
  name: string;
  country: string;
  address: string;
  timezone: string;
  stripeCustomerId?: string;
  subscriptionStatus?: 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'incomplete' | 'none';
}

const OrganizationSchema = new Schema<IOrganization>({
  name: { type: String, required: true, index: true },
  country: { type: String, required: true, index: true },
  address: { type: String, required: true, index: true },
  timezone: { type: String, required: true, index: true },
  // @ts-ignore
  ownerId: { type: Schema.Types.ObjectId, ref: 'User' },
  stripeCustomerId: { type: String, sparse: true, index: true },
  subscriptionStatus: {
    type: String,
    enum: ['trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete', 'none'],
    default: 'none',
  },
});

export const OrganizationModel = model("Organization", OrganizationSchema) as Model<IOrganization>;

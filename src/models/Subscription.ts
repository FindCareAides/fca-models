import { Schema, Document, model, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface ISubscription extends BaseDocument, Document {
  organizationId: Schema.Types.ObjectId;
  stripeCustomerId: string;
  stripeSubscriptionId: string;
  stripePriceId: string;
  status: 'trialing' | 'active' | 'past_due' | 'canceled' | 'unpaid' | 'incomplete';
  currentPeriodStart: Date;
  currentPeriodEnd: Date;
  cancelAtPeriodEnd: boolean;
  canceledAt?: Date;
  trialEnd?: Date;
}

const SubscriptionSchema = new Schema<ISubscription>(
  {
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true, unique: true, index: true },
    stripeCustomerId: { type: String, required: true },
    stripeSubscriptionId: { type: String, required: true },
    stripePriceId: { type: String, required: true },
    status: {
      type: String,
      enum: ['trialing', 'active', 'past_due', 'canceled', 'unpaid', 'incomplete'],
      required: true,
    },
    currentPeriodStart: { type: Date, required: true },
    currentPeriodEnd: { type: Date, required: true },
    cancelAtPeriodEnd: { type: Boolean, default: false },
    canceledAt: { type: Date },
    trialEnd: { type: Date },
  },
  { timestamps: true }
);

export const SubscriptionModel = model("Subscription", SubscriptionSchema) as Model<ISubscription>;

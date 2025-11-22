import mongoose, { Schema, Document, model, models, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export enum SwapStatusEnum {
  Pending = 'pending',
  Approved = 'approved',
  Declined = 'declined',
  Cancelled = 'cancelled'
}

export interface ISwapRequest extends BaseDocument, Document {
  shiftId: mongoose.Types.ObjectId,
  requestedBy: mongoose.Types.ObjectId,
  proposedTo: mongoose.Types.ObjectId,
  status: SwapStatusEnum,
  adminApprovedBy: mongoose.Types.ObjectId
}

const SwapRequestSchema = new Schema<ISwapRequest>({
  shiftId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shift', required: true },
  requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  proposedTo: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: SwapStatusEnum, default: SwapStatusEnum.Pending },
  adminApprovedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
}, { timestamps: true });

// @ts-ignore
export const SwapRequestModel: Model<SwapRequestSchema> = models.SwapRequest || model<ISwapRequest>('SwapRequest', SwapRequestSchema);

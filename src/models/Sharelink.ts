import mongoose, { Schema, Document, model } from "mongoose";
import type { BaseDocument } from "../types/common";

export enum ShareLinkTypeEnum {
  'Schedule' = 'schedule',
  'Shift' = 'shift'
}

export interface IShareLink extends BaseDocument, Document {
  entityType: ShareLinkTypeEnum,
  entityId: mongoose.Types.ObjectId;
  token: string;
  expiresAt: Date;
  createdBy: mongoose.Types.ObjectId;
}

const ShareLinkSchema = new Schema<IShareLink>({
  entityType: { type: String, enum: ShareLinkTypeEnum, required: true },
  entityId: { type: mongoose.Schema.Types.ObjectId, required: true },
  token: { type: String, required: true, unique: true },
  expiresAt: Date,
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('ShareLink', ShareLinkSchema);

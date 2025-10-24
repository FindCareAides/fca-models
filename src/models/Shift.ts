import mongoose, { Schema, Document, model } from "mongoose";
import type { BaseDocument } from "../types/common";

export enum ShiftStatusEnum {
  Assigned = 'assigned',
  Open = 'open',
  Swapped = 'swapped',
  Completed = 'completed'
}

export interface IShift extends BaseDocument, Document {
  facilityId: mongoose.Types.ObjectId;
  organizationId: mongoose.Types.ObjectId;
  caregiverId?: mongoose.Types.ObjectId | null;
  startTime: Date;
  endTime: Date;
  status: ShiftStatusEnum;
  notes?: string;
  createdBy?: mongoose.Types.ObjectId;
  recurring?: boolean;
  recurrenceRule?: string;
}

const ShiftSchema = new Schema<IShift>(
  {
    facilityId: { type: Schema.Types.ObjectId, ref: "Facility", required: true, index: true },
    organizationId: { type: Schema.Types.ObjectId, ref: "Facility", required: true, index: true },
    caregiverId: { type: Schema.Types.ObjectId, ref: "User", default: null, index: true },
    startTime: { type: Date, required: true, index: true },
    endTime: { type: Date, required: true },
    status: {
      type: String,
      enum: ShiftStatusEnum,
      default: ShiftStatusEnum.Assigned,
      index: true,
    },
    notes: String,
    createdBy: { type: Schema.Types.ObjectId, ref: "User" },
    recurring: { type: Boolean, default: false },
    recurrenceRule: String,
  },
  { timestamps: true }
);

ShiftSchema.index({ facilityId: 1, startTime: 1, status: 1 });

export const ShiftModel = model<IShift>("Shift", ShiftSchema);

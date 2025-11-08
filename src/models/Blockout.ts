import mongoose, { Schema, Document, model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface IBlockOut extends BaseDocument, Document {
  caregiverId: mongoose.Types.ObjectId;
  start: Date;
  end: Date;
  note?: string;
}

const BlockOutSchema = new Schema<IBlockOut>(
  {
    caregiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    start: { type: Date, required: true, index: true },
    end: { type: Date, required: true },
    note: String,
  },
  { timestamps: true }
);

export const BlockOutModel =
  mongoose.models.Facility || model<IBlockOut>("BlockOut", BlockOutSchema);

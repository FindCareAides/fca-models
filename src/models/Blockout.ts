import { Schema, Types, Document, model, models, Model } from "mongoose";
import type { BaseDocument } from "../types/common";

export interface IBlockOut extends BaseDocument, Document {
  caregiverId: Types.ObjectId;
  organizationId: Types.ObjectId;
  start: Date;
  end: Date;
  note?: string;
}

const BlockOutSchema = new Schema<IBlockOut>(
  {
    caregiverId: { type: Schema.Types.ObjectId, ref: 'User', required: true, index: true },
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true, index: true },
    start: { type: Date, required: true, index: true },
    end: { type: Date, required: true },
    note: String,
  },
  { timestamps: true }
);

export const BlockOutModel = model("BlockOut", BlockOutSchema) as Model<IBlockOut>;

import mongoose, { Schema, Document, model } from "mongoose";
import type { BaseDocument } from "../types/common";

export enum NotificationTypeEnum {
  'ShiftCreated' = 'shiftCreated',
  'ShiftSwap' = 'shiftSwap',
  'Reminder' = 'reminder',
  'ScheduleChange' = 'scheduleChange',
  'Info' = 'info'
}

export enum NotificationStatusEnum {
  Sent = 'sent',
  Read = 'read',
  Failed = 'failed'
}

export interface INotification extends BaseDocument, Document {
  userId: mongoose.Types.ObjectId,
  type: NotificationTypeEnum
  message: string;
  status: NotificationStatusEnum,
}

const NotificationSchema = new Schema<INotification>({
  userId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
  type: { type: String, enum: NotificationTypeEnum, default: NotificationTypeEnum.Info },
  message: String,
  status: { type: String, enum: NotificationStatusEnum, default: 'sent' },
  createdAt: { type: Date, default: Date.now }
}, { timestamps: true });

module.exports = mongoose.model('Notification', NotificationSchema);

import mongoose, { Document } from "mongoose";
import type { BaseDocument } from "../types/common";
export interface Availability {
    startDate: Date;
    endDate: Date;
    reason?: string;
}
export interface IUser extends BaseDocument, Document {
    _id: mongoose.Types.ObjectId;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
    passwordHash: string;
    role: "admin" | "caregiver";
    qualifications?: string[];
    facilityId?: mongoose.Types.ObjectId;
    availability?: Availability[];
}
export declare const UserModel: mongoose.Model<any, {}, {}, {}, any, any>;

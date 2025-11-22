import mongoose from 'mongoose';
export interface BaseDocument {
    _id: mongoose.Types.ObjectId;
    createdAt?: Date;
    updatedAt?: Date;
}

import mongoose, { Document } from 'mongoose';

export interface IGuest {
  _id: mongoose.Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  address: string;
  phone: string;
}

export interface ICreateGuest {
  name: string;
  address?: string;
  phone: string;
}

export type GuestDocument = IGuest & Document;

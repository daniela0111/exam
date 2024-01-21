import { ObjectId } from 'mongoose';

export type HotelId = ObjectId;
export interface Hotel {
  _id: HotelId;
  name: string;
  description: string;
  facilities?: string[];
  roomsAmount?: number;
}
export type Hotels = Hotel[];

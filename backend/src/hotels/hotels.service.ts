// tato servisa je provider hoteloveho rozhrani spoustejici jeho business logiku, spojeni s DB...
import { Injectable } from '@nestjs/common';
import { Hotels, Hotel, HotelId } from './interfaces/hotel.interface';
import { ResError } from 'src/common/errors';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HotelDb } from './schemas/hotel.schema';
import { CreateHotelDto } from './dto/create-hotel.dto';
//import { CreateHotelDto } from './dto/create-hotel.dto';
//import { HotelDb } from './schemas/hotel.schema';

export function createError(
  error: string,
  description?: string,
  errList?: string[],
): ResError {
  return {
    error,
    description,
    errList,
  };
}

@Injectable()
export class HotelsService {
  constructor(@InjectModel(HotelDb.name) private hotelModel: Model<HotelDb>) {}

  async create(hotelData: CreateHotelDto): Promise<HotelDb> {
    return this.hotelModel.create(hotelData);
  }
  async getDbHotel(hotelId: HotelId): Promise<Hotel | ResError> {
    try {
      return (await this.hotelModel.findById(hotelId)) as Hotel;
    } catch (e) {
      return createError('notFound', 'Hotel not found in DB');
    }
  }

  async getDbHotels() {
    return this.hotelModel.find();
  }
  async createFakeHotel() {
    return this.create({
      name: 'hotel ambassador',
      roomsAmount: 9,
      address: 'coloradi street 332/2',
      description: 'some valuable description about another hotel',
    });
  }

  async getHotelsList(): Promise<Hotels> {
    //@ts-ignore
    return this.getDbHotels();
  }
}

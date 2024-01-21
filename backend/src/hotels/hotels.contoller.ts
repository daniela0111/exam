// zde je vlastne router pro hotely
import {
  Body,
  Controller,
  Get,
  Param,
  Put,
  Delete,
  Post,
} from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { Hotels, Hotel, HotelId } from './interfaces/hotel.interface';
import { ResError } from 'src/common/errors';

@Controller('hotels') //this is URL path
export class HotelsController {
  // constructor dependency injection of HotelsService
  constructor(private readonly hotelService: HotelsService) {}

  @Get() // default GET response on /hotels
  getHotels(): Promise<Hotels> {
    return this.hotelService.getHotelsList();
  }
  /* @Get('get-db-hotel') // default GET response on /hotels
  getDbHotel() {
    return this.hotelService.getDbHotel();
  } */
  @Get('get-db-hotels') // default GET response on /hotels
  getDbHotels() {
    return this.hotelService.getDbHotels();
  }
  @Get('create-fake-hotel') // default GET response on /hotels
  createFakeHotel() {
    return this.hotelService.createFakeHotel();
  }

  @Get(':id') // subpath => /hotels/37
  async getHotel(@Param('id') hotelId: HotelId): Promise<Hotel | ResError> {
    return this.hotelService.getDbHotel(hotelId);
  }

  @Post('add')
  create(@Body() createHotelDto: CreateHotelDto) {
    return `This action create hotel: ${JSON.stringify(createHotelDto)}`;
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return `This action updates a #${id} hotel with data: ${JSON.stringify(updateHotelDto)}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} hotel`;
  }
}

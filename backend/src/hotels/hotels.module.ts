// tohle je vlastne jen takovy prehledny soupis komponent (controllery, providery...), ktere se pouzivaji v modulu hotels
// NEST.js te nenuti ho pouzivat, ale je to dobry best practice a pridava na prehlednosti struktury appky, může se hodit
import { Module } from '@nestjs/common';
import { HotelsController } from './hotels.contoller';
import { HotelsService } from './hotels.service';
import { MongooseModule } from '@nestjs/mongoose';
//import { HotelSchema } from './schemas/hotel.schema';
import forFeatureDb from '../database/for-feature.db';

//@Global() would make this module global, so it would be available in all other modules by such an import => import { Module, Global } from '@nestjs/common';
@Module({
  controllers: [HotelsController],
  providers: [HotelsService],
  exports: [HotelsService],
  imports: [MongooseModule.forFeature(forFeatureDb)],
})
export class HotelsModule {}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HotelsController } from './hotels/hotels.contoller';
import { AppService } from './app.service';
import { HotelsModule } from './hotels/hotels.module';
//import { AuthModule } from './auth/auth.module';
//import { UserModule } from './user/user.module';
import { HotelsService } from './hotels/hotels.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HotelDb, HotelSchema } from './hotels/schemas/hotel.schema';
//import { HotelSchema } from './hotels/schemas/hotel.schema';

@Module({
  imports: [
    HotelsModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017', {
      dbName: 'hotelovka',
    }),
    MongooseModule.forFeature([{ name: HotelDb.name, schema: HotelSchema }]),
  ],
  controllers: [AppController, HotelsController],
  providers: [AppService, HotelsService],
})
export class AppModule {}

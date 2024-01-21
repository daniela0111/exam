import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
//import { HydratedDocument } from 'mongoose';

/* export const HotelSchema = new Schema<Hotel>({
  
  name: { type: String, required: true },
  description: String,
  address: String,
  roomsAmount: Number,
});
 */

@Schema()
export class HotelDb {
  //@Prop({ type: String })
  //_id: HotelId;

  @Prop({ required: true })
  name: string;

  @Prop()
  address: string;

  @Prop()
  roomsAmount: number;

  @Prop()
  description: string;
}

export const HotelSchema = SchemaFactory.createForClass(HotelDb);

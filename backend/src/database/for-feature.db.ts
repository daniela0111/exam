// src/db/for-feature.db.ts
import { HotelDb, HotelSchema } from '../hotels/schemas/hotel.schema';

export default [{ name: HotelDb.name, schema: HotelSchema }];

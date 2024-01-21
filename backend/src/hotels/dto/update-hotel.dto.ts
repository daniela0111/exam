export class UpdateHotelDto {
  id: string;
  name: string;
  roomsAmount?: number;
  description?: string;
  facilities?: string[];
}

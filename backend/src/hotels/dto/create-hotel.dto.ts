export class CreateHotelDto {
  name: string;
  roomsAmount?: number;
  description?: string;
  facilities?: string[];
  address?: string;
}

export interface BowlingAlley {
  id: number;
  name: string;
  location: string;
  latitude: number;
  longitude: number;
  lanes: number;
  facilities: string[];
  openingHours: {
    weekday: string;
    weekend: string;
  };
  parking: boolean;
  foods: boolean;
  wheelchair: boolean;
  description: string;
  image: string;
  phone: string;
  website?: string;
}

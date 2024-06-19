import { Booking } from "../booking/Booking";

export type CampingSpace = {
  available: boolean | null;
  bookings?: Array<Booking>;
  createdAt: Date;
  description: string | null;
  id: string;
  location: string | null;
  name: string | null;
  updatedAt: Date;
};

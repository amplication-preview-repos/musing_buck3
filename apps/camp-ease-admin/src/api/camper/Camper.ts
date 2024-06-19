import { Booking } from "../booking/Booking";

export type Camper = {
  bookings?: Array<Booking>;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  phoneNumber: number | null;
  updatedAt: Date;
};

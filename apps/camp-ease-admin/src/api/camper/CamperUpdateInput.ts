import { BookingUpdateManyWithoutCampersInput } from "./BookingUpdateManyWithoutCampersInput";

export type CamperUpdateInput = {
  bookings?: BookingUpdateManyWithoutCampersInput;
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: number | null;
};

import { BookingCreateNestedManyWithoutCampersInput } from "./BookingCreateNestedManyWithoutCampersInput";

export type CamperCreateInput = {
  bookings?: BookingCreateNestedManyWithoutCampersInput;
  email?: string | null;
  fullName?: string | null;
  phoneNumber?: number | null;
};

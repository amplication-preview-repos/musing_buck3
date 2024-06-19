import { BookingUpdateManyWithoutCampingSpacesInput } from "./BookingUpdateManyWithoutCampingSpacesInput";

export type CampingSpaceUpdateInput = {
  available?: boolean | null;
  bookings?: BookingUpdateManyWithoutCampingSpacesInput;
  description?: string | null;
  location?: string | null;
  name?: string | null;
};

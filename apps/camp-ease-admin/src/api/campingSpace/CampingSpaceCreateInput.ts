import { BookingCreateNestedManyWithoutCampingSpacesInput } from "./BookingCreateNestedManyWithoutCampingSpacesInput";

export type CampingSpaceCreateInput = {
  available?: boolean | null;
  bookings?: BookingCreateNestedManyWithoutCampingSpacesInput;
  description?: string | null;
  location?: string | null;
  name?: string | null;
};

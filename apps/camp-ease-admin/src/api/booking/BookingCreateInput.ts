import { CamperWhereUniqueInput } from "../camper/CamperWhereUniqueInput";
import { CampingSpaceWhereUniqueInput } from "../campingSpace/CampingSpaceWhereUniqueInput";

export type BookingCreateInput = {
  camper?: CamperWhereUniqueInput | null;
  campingSpace?: CampingSpaceWhereUniqueInput | null;
  date?: Date | null;
};

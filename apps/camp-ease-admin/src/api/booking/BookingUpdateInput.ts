import { CamperWhereUniqueInput } from "../camper/CamperWhereUniqueInput";
import { CampingSpaceWhereUniqueInput } from "../campingSpace/CampingSpaceWhereUniqueInput";

export type BookingUpdateInput = {
  camper?: CamperWhereUniqueInput | null;
  campingSpace?: CampingSpaceWhereUniqueInput | null;
  date?: Date | null;
};

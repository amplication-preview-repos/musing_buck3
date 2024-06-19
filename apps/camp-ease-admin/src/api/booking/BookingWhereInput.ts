import { CamperWhereUniqueInput } from "../camper/CamperWhereUniqueInput";
import { CampingSpaceWhereUniqueInput } from "../campingSpace/CampingSpaceWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BookingWhereInput = {
  camper?: CamperWhereUniqueInput;
  campingSpace?: CampingSpaceWhereUniqueInput;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};

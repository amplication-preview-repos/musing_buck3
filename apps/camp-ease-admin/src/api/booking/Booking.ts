import { Camper } from "../camper/Camper";
import { CampingSpace } from "../campingSpace/CampingSpace";

export type Booking = {
  camper?: Camper | null;
  campingSpace?: CampingSpace | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
};

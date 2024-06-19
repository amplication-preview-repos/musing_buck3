import { SortOrder } from "../../util/SortOrder";

export type BookingOrderByInput = {
  camperId?: SortOrder;
  campingSpaceId?: SortOrder;
  createdAt?: SortOrder;
  date?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};

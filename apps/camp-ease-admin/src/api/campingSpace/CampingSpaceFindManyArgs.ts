import { CampingSpaceWhereInput } from "./CampingSpaceWhereInput";
import { CampingSpaceOrderByInput } from "./CampingSpaceOrderByInput";

export type CampingSpaceFindManyArgs = {
  where?: CampingSpaceWhereInput;
  orderBy?: Array<CampingSpaceOrderByInput>;
  skip?: number;
  take?: number;
};

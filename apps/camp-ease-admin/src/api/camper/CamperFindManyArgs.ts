import { CamperWhereInput } from "./CamperWhereInput";
import { CamperOrderByInput } from "./CamperOrderByInput";

export type CamperFindManyArgs = {
  where?: CamperWhereInput;
  orderBy?: Array<CamperOrderByInput>;
  skip?: number;
  take?: number;
};

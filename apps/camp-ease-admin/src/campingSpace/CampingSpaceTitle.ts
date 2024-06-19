import { CampingSpace as TCampingSpace } from "../api/campingSpace/CampingSpace";

export const CAMPINGSPACE_TITLE_FIELD = "name";

export const CampingSpaceTitle = (record: TCampingSpace): string => {
  return record.name?.toString() || String(record.id);
};

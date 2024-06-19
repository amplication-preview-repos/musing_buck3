import { Camper as TCamper } from "../api/camper/Camper";

export const CAMPER_TITLE_FIELD = "fullName";

export const CamperTitle = (record: TCamper): string => {
  return record.fullName?.toString() || String(record.id);
};

import { Owner as TOwner } from "../api/owner/Owner";

export const OWNER_TITLE_FIELD = "fullName";

export const OwnerTitle = (record: TOwner): string => {
  return record.fullName?.toString() || String(record.id);
};

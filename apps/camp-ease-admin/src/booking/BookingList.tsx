import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CAMPER_TITLE_FIELD } from "../camper/CamperTitle";
import { CAMPINGSPACE_TITLE_FIELD } from "../campingSpace/CampingSpaceTitle";

export const BookingList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Bookings"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <ReferenceField label="Camper" source="camper.id" reference="Camper">
          <TextField source={CAMPER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="CampingSpace"
          source="campingspace.id"
          reference="CampingSpace"
        >
          <TextField source={CAMPINGSPACE_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};

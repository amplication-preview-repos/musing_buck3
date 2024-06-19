import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMPER_TITLE_FIELD } from "./CamperTitle";
import { CAMPINGSPACE_TITLE_FIELD } from "../campingSpace/CampingSpaceTitle";

export const CamperShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="fullName" source="fullName" />
        <TextField label="ID" source="id" />
        <TextField label="phoneNumber" source="phoneNumber" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="camperId"
          label="Bookings"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Camper"
              source="camper.id"
              reference="Camper"
            >
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
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

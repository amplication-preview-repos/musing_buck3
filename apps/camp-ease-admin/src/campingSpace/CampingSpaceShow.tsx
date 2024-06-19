import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  BooleanField,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CAMPER_TITLE_FIELD } from "../camper/CamperTitle";
import { CAMPINGSPACE_TITLE_FIELD } from "./CampingSpaceTitle";

export const CampingSpaceShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <BooleanField label="available" source="available" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <TextField label="location" source="location" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Booking"
          target="campingSpaceId"
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

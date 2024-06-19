import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CAMPER_TITLE_FIELD } from "../camper/CamperTitle";
import { CAMPINGSPACE_TITLE_FIELD } from "../campingSpace/CampingSpaceTitle";

export const BookingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};

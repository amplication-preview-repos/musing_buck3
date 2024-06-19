import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CamperTitle } from "../camper/CamperTitle";
import { CampingSpaceTitle } from "../campingSpace/CampingSpaceTitle";

export const BookingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="camper.id" reference="Camper" label="Camper">
          <SelectInput optionText={CamperTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="campingSpace.id"
          reference="CampingSpace"
          label="CampingSpace"
        >
          <SelectInput optionText={CampingSpaceTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};

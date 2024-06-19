import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";
import { CamperTitle } from "../camper/CamperTitle";
import { CampingSpaceTitle } from "../campingSpace/CampingSpaceTitle";

export const BookingEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};

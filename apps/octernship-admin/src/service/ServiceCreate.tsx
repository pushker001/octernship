import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const ServiceCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};

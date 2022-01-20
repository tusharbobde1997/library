import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const AuthorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="AuthorName" source="authorName" />
      </SimpleForm>
    </Edit>
  );
};

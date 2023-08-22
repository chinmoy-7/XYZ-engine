import React from "react";
import { InputField } from "./InputField";

export const Step1 = ({disabled}) => {
  return (
    <div>
      <InputField disabled={disabled} name="project_name" label="Project Name" />
      <InputField disabled={disabled} name="project_desc" label="Project Description" />
      <InputField disabled={disabled} name="client" label="Client" />
      <InputField disabled={disabled} name="contractor" label="Contractor" />
    </div>
  );
};

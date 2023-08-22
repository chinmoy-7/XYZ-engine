import React, { useContext } from "react";
import { FormStep, MultiForm } from "./MultiForm";
import { formContext } from "../context/contextForm";
import { InputField } from "./InputField";
import { formSchema, step2Schema } from "../schema";
import { TextField } from "@mui/material";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { useNavigate } from "react-router-dom";
export const MainForm = () => {
  const navigate=useNavigate()
  const { initialValues } = useContext(formContext);
  console.log(initialValues);
  return (
    <div>
      <MultiForm
        initialValues={initialValues}
        onSubmit={(values) => {
          navigate("/result")
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <FormStep validationSchema={formSchema}>
          <Step1 />
        </FormStep>
        <FormStep validationSchema={step2Schema}>
          <Step2 />
        </FormStep>
      </MultiForm>
    </div>
  );
};

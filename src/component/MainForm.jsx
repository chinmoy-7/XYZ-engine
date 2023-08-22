import React, { useContext } from "react";
import { FormStep, MultiForm } from "./MultiForm";
import { formContext } from "../context/contextForm";
import { formSchema, step2Schema } from "../schema";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { useNavigate } from "react-router-dom";
import { Grid } from "@mui/material";
export const MainForm = () => {
  const navigate=useNavigate()
  const { initialValues } = useContext(formContext);
  console.log(initialValues);
  return (
    <div>
      <Grid container sx={{background: "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)"}} display={"flex"} justifyContent={"center"} bgcolor={"black"} alignItems={"center"} height={"100vh"}>
        <Grid container justifyContent={"center"} bgcolor={"white"} boxShadow={"-10px 10px black"} sx={{width:{xs:"90vw",sm:"60vw",md:"60vw",lg:"30vw"}}} minHeight={"60vh"} border={"1px solid black"}>
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
        </Grid>
      </Grid>
    </div>
  );
};

import React from "react";
import { InputField } from "./InputField";
import { Grid } from "@mui/material";

export const Step1 = ({disabled}) => {
  return (
    <div>
      <Grid container flexDirection={"column"} sx={{width:{xs:"70vw",sm:"50vw",md:"40vw",lg:"20vw"}}}  minHeight={"50vh"} display={"flex"}  justifyContent={"space-around"}>
      <InputField disabled={disabled} name="project_name" label="Project Name" />
      <InputField disabled={disabled} name="project_desc" label="Project Description" />
      <InputField disabled={disabled} name="client" label="Client" />
      <InputField disabled={disabled} name="contractor" label="Contractor" />
      </Grid>
    </div>
  );
};

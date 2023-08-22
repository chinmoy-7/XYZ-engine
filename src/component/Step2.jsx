import React, { useContext, useEffect } from "react";
import { InputField } from "./InputField";
import { Step1 } from "./Step1";
import { formContext } from "../context/contextForm";
import { useFormik } from "formik";
import {Grid,Box} from "@mui/material";
import { InputLabel } from "@mui/material";


export const Step2 = () => {
  const { csvObject, csv, initialValues } = useContext(formContext);

  return (
    <div>
      <Step1 disabled={true} />
      <Grid container   sx={{width:{xs:"70vw",sm:"50vw",md:"40vw",lg:"20vw"}}} gap={0} minHeight={"10vh"} height={"40vh"} display={"flex"} justifyContent={"space-between"} justifyItems={"center"} >

      <InputField type="file" name="csv" onChange={(e) => csvObject(e)} />
      <Box display={"flex"} flexDirection={"column"} width={"45%"}>
      <InputLabel htmlFor="min_x">Min X</InputLabel>
      <InputField csv={csv} name="min_x" />
      </Box>
      <Box  display={"flex"} flexDirection={"column"} width={"45%"}>
      <InputLabel htmlFor="max_x">Max X</InputLabel>
      <InputField csv={csv}  name="max_x" />
      </Box>
      <Box display={"flex"} flexDirection={"column"} width={"45%"}>
      <InputLabel htmlFor="min_y">Min Y</InputLabel>
      <InputField csv={csv}  name="min_y" />
      </Box>

      <Box marginBottom={"10px"} display={"flex"} flexDirection={"column"} width={"45%"}>
      <InputLabel htmlFor="max_y">Max Y</InputLabel>
      <InputField csv={csv}  name="max_y" />
      </Box>
      <Box marginBottom={"10px"} display={"flex"} flexDirection={"column"} width={"45%"}>
      <InputLabel htmlFor="min_z">Min Z </InputLabel>
      <InputField csv={csv}  name="min_z" />
      </Box>
      <Box marginBottom={"10px"} display={"flex"} flexDirection={"column"} width={"45%"}>
      <InputLabel htmlFor="max_z">Max Z</InputLabel>
      <InputField csv={csv}  name="max_z" />
      </Box>
      </Grid>
    </div>
  );
};

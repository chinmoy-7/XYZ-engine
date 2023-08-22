import React, { useContext, useEffect } from "react";
import { InputField } from "./InputField";
import { Step1 } from "./Step1";
import { formContext } from "../context/contextForm";
import { useFormik } from "formik";
import { InputLabel } from "@mui/material";

export const Step2 = () => {
  const { csvObject, csv, initialValues } = useContext(formContext);
  // if(csv){
  //   csv.slice(0,6).map(item=>{
  //     // console.log(item,"<><>=s",initialValues)
  //     initialValues["min_X"]=[...initialValues["min_X"],item?.X]
  //   })
  // }
  return (
    <div>
      <Step1 disabled={true} />
      <InputField type="file" name="csv" onChange={(e) => csvObject(e)} />
      <InputLabel htmlFor="min_x">Min X</InputLabel>
      <InputField csv={csv} name="min_x" />
      <InputLabel htmlFor="max_x">Max X</InputLabel>
      <InputField csv={csv} name="max_x" />
      <InputLabel htmlFor="min_y">Min Y</InputLabel>
      <InputField csv={csv} name="min_y" />
      <InputLabel htmlFor="max_y">Max Y</InputLabel>
      <InputField csv={csv} name="max_y" />
    </div>
  );
};

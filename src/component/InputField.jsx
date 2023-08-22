import React, { useEffect, useState } from "react";
import { TextField } from "@mui/material";
import { FieldConfig, useField } from "formik";
export const InputField = ({ csv, label, ...props }) => {
  const [field, meta] = useField(props);

  if (csv != undefined && csv?.length != 0) {

    let minX = Number.POSITIVE_INFINITY;
    let minY = Number.POSITIVE_INFINITY;
    let minZ = Number.POSITIVE_INFINITY;
    let maxX = Number.NEGATIVE_INFINITY;
    let maxY = Number.NEGATIVE_INFINITY;
    let maxZ = Number.NEGATIVE_INFINITY;
    
    for(let item of csv){
      if(item.X<minX){
        minX=item.X
      }
      if(item.X>maxX){
        maxX=item.X
      }
      if(item.Y<minY){
        minY=item.Y
      }
      if(item.Y>maxY){
        maxY=item.Y
      }
      if(item.Z>maxZ){
        maxZ=item.Z
      }
      if(item.Z<minZ){
        minZ=item.Z
      }
    }
    // MIN VALUE
    if (field.name == "min_x") {
      field.value = minX
      
    }
    if (field.name == "min_y") {
      field.value = minY
      
    }
    if (field.name == "max_z") {
      field.value = minZ
      
    }
    // MAX VALUE
    if (field.name == "max_x") {
      field.value = maxX
      
    }
    if (field.name == "max_y") {
      field.value = maxY
      
    }
    if (field.name == "max_z") {
      field.value = maxZ
      
    }
  }
  useEffect(()=>{

  },[field.name])
  return (
    <TextField
      fullWidth
      label={label}
      autoComplete="off"
      disabled={csv!=undefined&&csv?.length!=0?true:false}
      {...field}
      {...props}
      error={meta.touched && Boolean(meta.error)}
      helperText={meta.touched && meta.error}
    />
  );
};

import React, { useContext, useEffect } from "react";
import { InputField } from "./InputField";
import { Step1 } from "./Step1";
import { formContext } from "../context/contextForm";

export const Step2 = () => {
  const {csvObject,csv} = useContext(formContext)
  // if(csv){
  //   csv.slice(0,6).map(item=>{
  //     // console.log(item,"<><>=s",initialValues)
  //     initialValues["min_X"]=[...initialValues["min_X"],item?.X]
  //   })
  // }
  return (
    <div>
        <Step1 disabled={true}/>
      <InputField type="file" name="csv" onChange={(e)=>csvObject(e)} />
      <InputField name="min_x" label="MIN_X"  />
      <InputField name="max_x" label="MAX_X" />
      <InputField name="min_y" label="MIN_Y" />
      <InputField name="max_y" label="MAX_Y" />
    </div>
  );
};

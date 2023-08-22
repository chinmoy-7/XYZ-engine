import { createContext, useContext } from "react";
import {React,useState} from "react";
import Papa from "papaparse";
const formContext=createContext()


const FormContextProvider=({children})=>{
    const [csv,setCsv]=useState([])
    const initialValues={
        project_name:"",
        project_desc:"",
        client:"",
        contractor:"",
        csv:"",
        max_X:"", 
        min_X:"",
        max_Y:"",
        min_Y:"",
        max_Z:"",
        min_Z:"",

    }
    const csvObject = async (event) => {
        const file = event.target.files[0];
        const results = await new Promise((resolve, reject) => {
          Papa.parse(file, {
            header: true,
            skipEmptyLines: true,
            complete: function (results) {
              resolve(results.data);
            },
            error: function (error) {
              reject(error);
            },
          });
        });
        console.log(results)
        setCsv(results);
      };
    return(
        <formContext.Provider value={{initialValues,csvObject,setCsv,csvObject,csv}}>
            {children}
        </formContext.Provider>
    )
}
export  {formContext,FormContextProvider}
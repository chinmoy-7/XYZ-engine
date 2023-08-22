import { createContext, useContext } from "react";
import {React,useState} from "react";
import Papa from "papaparse";
const formContext=createContext()


const FormContextProvider=({children})=>{
    const [csv,setCsv]=useState([])
    const [initialValues,setInitialValues]=useState({
        project_name:"",
        project_desc:"",
        client:"",
        contractor:"",
        csv:"",
        max_x:"", 
        min_x:"",
        max_y:"",
        min_y:"",
        max_z:"",
        min_z:"",

    })
    console.log(initialValues,"COntext========")
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
        <formContext.Provider value={{csvObject,setCsv,csvObject,csv,initialValues}}>
            {children}
        </formContext.Provider>
    )
}
export  {formContext,FormContextProvider}
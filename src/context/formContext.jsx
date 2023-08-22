import { createContext, useState } from "react";
import { formSchema } from "../schema";
import { useFormik } from "formik";
import Papa from "papaparse";
import { useNavigate } from "react-router-dom";

const formContext = createContext();
const FormContextProvider = ({ children }) => {
    const navigate = useNavigate()
  //formik
  const initialValues = {
    project_name: "",
    project_desc: "",
    client: "",
    contractor: "",
  };
  const handleFormSubmit = () => {};
  const { handleSubmit, touched, errors, handleChange, values, handleBlur } =
    useFormik({
      initialValues: initialValues,
      validationSchema: formSchema,
      onSubmit: () => {
        handleFormSubmit();
      },
    });

  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({ item1: 0, item2: 0 });
  const [csv, setCsv] = useState();
  const nextHandler = () => {
    const len = Object.keys(errors).length;
    if (activeStep < 1) {
      setActiveStep(activeStep + 1);
      setCompleted({ ...completed, item1: 1 });
    }
  };
  const prevHandler = () => {
    if (activeStep >= 1) {
      setActiveStep(activeStep - 1);
      setCompleted({ ...completed, item2: 0, item1: 0 });
    }
  };

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
    setCsv(results);
  };
  return (
    <formContext.Provider
      value={{
        activeStep,
        setActiveStep,
        setCompleted,
        completed,
        nextHandler,
        prevHandler,
        initialValues,
        handleSubmit,
        touched,
        errors,
        handleChange,
        values,
        handleBlur,
        setCsv,
        csvObject,
        csv,
      }}
    >
      {children}
    </formContext.Provider>
  );
};

// export { formContext, FormContextProvider };

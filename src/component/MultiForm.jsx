import { Form, Formik } from "formik";
import React, { useState } from "react";
import { FormNav } from "./FormNav";

export const MultiForm = ({ children, initialValues, onSubmit }) => {
  const steps = React.Children.toArray(children);
  const [stepNumber, setStepNumber] = useState(0);
  const [snapshot, setSnapshot] = useState(initialValues);
  const totalStep = steps.length;
  const isLastStep = stepNumber == steps.length - 1;
  const currentStep = steps[stepNumber];

  const next = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber + 1);
  };
  const back = (values) => {
    setSnapshot(values);
    setStepNumber(stepNumber - 1);
  };
  const handleSubmit = async (values, actions) => {
    if (currentStep.props.onSubmit) {
      await currentStep.props.onSubmit(values);
    }
    if (isLastStep) {
      return onSubmit(values, actions);
    } else {
      actions.setTouched({});
      next(values);
    }
  };
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={handleSubmit}
        validationSchema={currentStep.props.validationSchema}
      >
        {(formik) => (
          <Form>
            {currentStep}
            <FormNav
              hasPrevious={stepNumber > 0}
              isLastStep={isLastStep}
              onClickBack={() => back(formik.values)}
            />
          </Form>
        )}
      </Formik>
    </div>
  );
};

export const FormStep = ({ stepName = "", children }) => children;

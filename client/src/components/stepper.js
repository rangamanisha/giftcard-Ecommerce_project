import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import GuestFrom from "./guestform";
import Checkout from "./checkout";
import { useSelector } from "react-redux";
import { getAuthState } from "../reducer/auth.reducer";

const Stepper = () => {
  // setup step validators, will be called before proceeding to the next step
  function step2Validator() {
    // return a boolean
  }

  function step3Validator() {
    // return a boolean
  }

  function onFormSubmit() {
    // handle the submit logic here
    // This function will be executed at the last step
    // when the submit button (next button in the previous steps) is pressed
  }

  const authState = useSelector(getAuthState);

  return (
    // render the progress bar
    <StepProgressBar
      startingStep={authState.isAuthenticated ? 1 : 0}
      onSubmit={onFormSubmit}
      steps={[
        {
          label: "Order Details",
          name: "step 1",
          content: <GuestFrom />,
        },
        {
          label: "Payment",
          name: "step 2",
          content: <Checkout />,
          validator: step2Validator,
        },
        {
          label: "Order Details",
          name: "step 3",
          content: "",
          validator: step3Validator,
        },
      ]}
    />
  );
};

export default Stepper;

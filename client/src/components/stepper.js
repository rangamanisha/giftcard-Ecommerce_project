import React from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
import GuestFrom from "./guestform";
import Checkout from "./checkout";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "../reducer/auth.reducer";
import { getOrderState, orderActions } from "../reducer/orders.reducers";
import { getCartItemsState } from "../reducer/cart.reducer";
import { getProfileState } from "../reducer/profile.reducer";

const Stepper = () => {
  const authState = useSelector(getAuthState);
  const orderState = useSelector(getOrderState);
  const cartState = useSelector(getCartItemsState);
  const profileState = useSelector(getProfileState);

  const dispatch = useDispatch();

  return (
    // render the progress bar
    <StepProgressBar
      startingStep={authState.isAuthenticated ? 1 : 0}
      primaryBtnClass={"invisible cart-next-btn"}
      secondaryBtnClass={"invisible cart-prev-btn"}
      steps={[
        {
          label: "Order Details",
          name: "step 1",
          content: (
            <GuestFrom
              orderState={orderState}
              cartState={cartState}
              orderActions={orderActions}
              dispatch={dispatch}
            />
          ),
        },
        {
          label: "Payment",
          name: "step 2",
          content: <Checkout />,
        },
        {
          label: "Order Details",
          name: "step 3",
          content: "",
        },
      ]}
    />
  );
};

export default Stepper;

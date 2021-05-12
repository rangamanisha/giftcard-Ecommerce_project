import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { cartAction } from "../reducer/cart.reducer";
import { orderActions } from "../reducer/orders.reducers";
import AllOrder from "./Orders/AllOrder";
import Confirm_Order from "./Orders/confirm_order";

const FailurePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(orderActions.clearState());
    dispatch(cartAction.clearState());
  }, [dispatch]);

  return <Confirm_Order />;
};

export default FailurePage;

import React, { useEffect } from "react";
import { Frames, CardNumber, ExpiryDate, Cvv } from "frames-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Frame.scss";
import Form from "react-bootstrap/Form";
import { getprofileListAction } from "../actions/profile.actions";
import {
  createGuestOrderAction,
  createOrderAction,
} from "../actions/orders.action";
import Loader from "./shared/Loader";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getOrderState, orderActions } from "../reducer/orders.reducers";
import { getCartItemsState } from "../reducer/cart.reducer";
import { getProfileState } from "../reducer/profile.reducer";
import { getAuthState } from "../reducer/auth.reducer";

const Checkout = (props) => {
  const orderState = useSelector(getOrderState);
  const cartState = useSelector(getCartItemsState);
  const dispatch = useDispatch();
  const profileState = useSelector(getProfileState);
  const authState = useSelector(getAuthState);
  const history = useHistory();

  const publicKey =
    cartState.checkoutCart.currency !== "SAR"
      ? `${process.env.REACT_APP_FRAMES_PUBLIC_KEY}`
      : `${process.env.REACT_APP_FRAMES_PUBLIC_KEY_SAR}`;

  useEffect(() => {
    dispatch(getprofileListAction({}));
  }, [dispatch]);

  useEffect(() => {
    if (orderState.error || orderState.order_checkout_error) {
      history.push({ pathname: "/failure" });
    }
  }, [orderState.order_checkout_error, orderState.error, history.push]);

  useEffect(() => {
    if (orderState?.redirect_url) {
      window.location.href = orderState?.redirect_url;
    }
  }, [orderState?.redirect_url, dispatch]);

  useEffect(() => {
    if (orderState.created_order) {
    }
  }, [orderState.created_order]);

  const processOrder = (event) => {
    if (authState.isAuthenticated) {
      const payload = {
        orders: {
          card_value_aed: null,
          order_total_aed: cartState.checkoutCart.total_amount,
          program_id: 1,
          use_credits: cartState.checkoutCart.are_reward_points_used,
          current_exchange_rate: cartState.conversion.currency_exchange_rate,
          use_hassad_points: false,
          language_code: "en",
          isbuynow: false,
          isforself: 1,
          payment_currency: cartState.checkoutCart.currency || "AED",
          currency: cartState.checkoutCart.currency_id,
        },
      };
      dispatch(createOrderAction({ data: payload, event }));
    } else {
      dispatch(
        createGuestOrderAction({ data: orderState.guest_payload, event })
      );
    }
  };

  const getFramesWidget = () => {
    if (publicKey) {
      return (
        <Frames
          config={{
            debug: true,
            publicKey,
            localization: {
              cardNumberPlaceholder: "Card number",
              expiryMonthPlaceholder: "MM",
              expiryYearPlaceholder: "YY",
              cvvPlaceholder: "CVV",
            },
            style: {
              base: {
                fontSize: "17px",
              },
            },
          }}
          cardTokenized={(e) => {
            processOrder(e);
          }}
        >
          <CardNumber />
          <div className="date-and-code">
            <ExpiryDate />
            <Cvv />
          </div>
          <Button
            id="pay-button"
            onClick={() => {
              dispatch(orderActions.setLoading(true));
              Frames.submitCard();
            }}
            disabled={orderState.loading}
          >
            {orderState.loading ? <Loader /> : null}
            PAY {cartState.checkoutCart.currency}{" "}
            {cartState.checkoutCart.total_amount}
          </Button>
        </Frames>
      );
    }
    return null;
  };

  return (
    <Row className="mx-auto payment-card">
      <Col>
        <div className="mt-5 mx-auto custom">
          <Form.Group
            controlId="formBasicEmail1"
            className="w-100 mx-auto icons_login"
          >
            <Form.Control
              size="md"
              type="text"
              placeholder="Name on the card"
              value={
                profileState?.profile?.first_name ||
                orderState?.guest_payload?.user?.first_name ||
                ""
              }
              onChange=""
              className="cc-card card-number field"
              name="first_name"
              readOnly
            />
          </Form.Group>
          {getFramesWidget()}
        </div>
      </Col>
    </Row>
  );
};

export default Checkout;

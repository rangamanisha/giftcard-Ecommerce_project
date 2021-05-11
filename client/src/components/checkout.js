import React, { useEffect } from "react";
import { Frames, CardNumber, ExpiryDate, Cvv } from "frames-react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Frame.scss";
import Form from "react-bootstrap/Form";
import { getProfileState } from "../reducer/profile.reducer";
import { getprofileListAction } from "../actions/profile.actions";
import { useDispatch, useSelector } from "react-redux";
import { getOrderState } from "../reducer/orders.reducers";
import { getCartItemsState } from "../reducer/cart.reducer";
import {
  createOrderAction,
  createOrderCheckoutAction,
} from "../actions/orders.action";

const Checkout = () => {
  const profilestate = useSelector(getProfileState);
  const orderState = useSelector(getOrderState);
  const cartState = useSelector(getCartItemsState);
  const dispatch = useDispatch();
  const data = profilestate;
  const publicKey =
    cartState.checkoutCart.currency !== "SAR"
      ? `${process.env.REACT_APP_FRAMES_PUBLIC_KEY}`
      : `${process.env.REACT_APP_FRAMES_PUBLIC_KEY_SAR}`;

  useEffect(() => {
    dispatch(getprofileListAction({}));
  }, [dispatch]);

  const processOrder = async (event) => {
    const payload = {
      orders: {
        card_value_aed: null,
        order_total_aed: cartState.checkoutCart.total_amount_aed,
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
    await dispatch(createOrderAction(payload));
    if (orderState.created_order) {
      const payload = {
        payment: {
          token: event.token,
          amount: parseFloat(
            parseFloat(orderState.created_order.payable_amount) * 100
          ).toFixed(2),
          payment_currency: cartState.checkoutCart.currency,
          currency: cartState.checkoutCart.currency,
          order_id: orderState.created_order.id,
        },
      };
      await dispatch(createOrderCheckoutAction(payload));
      console.log("redirect_url ", orderState.created_order["redirect_url"]);
      if (orderState.created_order["redirect_url"]) {
        window.location.href = orderState.created_order["redirect_url"];
      }
    }
  };

  const getFramesWidget = () => {
    console.log("publicKey ", publicKey);
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
          ready={() => {}}
          frameActivated={(e) => {}}
          frameFocus={(e) => {}}
          frameBlur={(e) => {}}
          frameValidationChanged={(e) => {}}
          paymentMethodChanged={(e) => {}}
          cardValidationChanged={(e) => {}}
          cardTokenized={(e) => {
            processOrder(e);
          }}
          cardTokenizationFailed={(e) => {}}
        >
          <CardNumber />
          <div className="date-and-code">
            <ExpiryDate />
            <Cvv />
          </div>
          <button
            id="pay-button"
            onClick={() => {
              Frames.submitCard();
            }}
          >
            PAY {cartState.checkoutCart.currency}{" "}
            {cartState.checkoutCart.total_amount}
          </button>
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
              value={data.first_name}
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

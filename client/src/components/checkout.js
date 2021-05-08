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
import { getGiftcardsState } from "../reducer/giftCards.reducer";

const Checkout = () => {
  const profilestate = useSelector(getProfileState);
  const orderState = useSelector(getOrderState);
  const giftCardsState = useSelector(getGiftcardsState)
  const dispatch = useDispatch();
  const data = profilestate;

  useEffect(() => {
    dispatch(getprofileListAction({}));
  }, [dispatch]);


  const createOrder = (event) => {
    const payload = {
      orders: {
        "card_value_aed": null,
        "order_total_aed": "2000.00",
        "program_id": 1,
        "use_credits": false,
        "current_exchange_rate": 0,
        "use_hassad_points": false,
        "language_code": "en",
        "isbuynow": false,
        "isforself": 1,
        "payment_currency": giftCardsState.selectedCurrency.unit_name_short || 'AED',
        "currency": giftCardsState.selectedCurrency.id || 1

      }
    }
    dispatch()
  }


  const processOrder = async (event) => {

  }

  return (
    <Row className="mx-auto payment-card">
      <Col>
        <div className="mt-5 mx-auto custom">
          <Form.Group
            controlId="formBasicEmail"
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

          <Frames
            config={{
              debug: true,
              publicKey: "pk_test_df45f274-5c54-4e59-8587-c52de6ce7a18",
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
            ready={() => { }}
            frameActivated={(e) => { }}
            frameFocus={(e) => { }}
            frameBlur={(e) => { }}
            frameValidationChanged={(e) => { }}
            paymentMethodChanged={(e) => { }}
            cardValidationChanged={(e) => { }}
            cardSubmitted={(e) => {
              createOrder(e);
            }}
            cardTokenized={(e) => {
              console.log('cart tokenized triggered');
              processOrder(e)
            }}
            cardTokenizationFailed={(e) => { }}
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
              PAY GBP 25.00
            </button>
          </Frames>
        </div>
      </Col>
    </Row>
  );
};

export default Checkout;

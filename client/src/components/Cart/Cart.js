import React, { useEffect } from "react";
import "./Cart.css";
import { Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState } from "../../reducer/auth.reducer";
import { getGiftcardsState } from "../../reducer/giftCards.reducer";
import { getRewardPointsState } from "../../reducer/rewardpoints.reducer";
import { getRewardPointsAction } from "../../actions/rewardpoints.actions";
import { getCartItemsState } from "../../reducer/cart.reducer";

import {
  fetchItemsByCartAction,
  getConversionRateAction,
  getPaymentCurrencyAction,
} from "../../actions/cart.actions";
import CartWidget from "./CartWidget";
import CartItemContainer from "./CartItemContainer";

function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector(getAuthState);
  const cartState = useSelector(getCartItemsState);
  const rewardState = useSelector(getRewardPointsState);
  const giftunitState = useSelector(getGiftcardsState);

  useEffect(() => {
    if (authState.isAuthenticated) {
      console.log("authState ", authState);
      dispatch(
        fetchItemsByCartAction({
          currency: giftunitState?.selectedCurrency?.unit_short_name || "AED",
          currency_id: giftunitState?.selectedCurrency?.id || 1,
        })
      );
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getPaymentCurrencyAction());
    if (authState.isAuthenticated) {
      dispatch(getRewardPointsAction());
    }
  }, [dispatch]);

  const handleChangeCurrency = (event) => {
    const selectedCurrency = JSON.parse(event);
    if (selectedCurrency) {
      dispatch(getConversionRateAction(selectedCurrency));
    }
  };

  return (
    <>
      <Container fluid>
        <Row className="my-5">
          <Col md={5}>
            <CartWidget
              state={cartState}
              authState={authState}
              rewardState={rewardState}
              giftunitState={giftunitState}
              handleChangeCurrency={handleChangeCurrency}
              history={history}
            />
          </Col>

          {/* Second Column of cart */}

          <Col md={7}>
            <CartItemContainer
              cartState={cartState}
              giftCardState={giftunitState}
              history={history}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;

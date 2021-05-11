import React, { useEffect } from "react";
import "./Cart.css";
import { Col, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState } from "../../reducer/auth.reducer";
import { getGiftcardsState } from "../../reducer/giftCards.reducer";
import { getRewardPointsState } from "../../reducer/rewardpoints.reducer";
import { getRewardPointsAction } from "../../actions/rewardpoints.actions";
import { cartAction, getCartItemsState } from "../../reducer/cart.reducer";

import {
  addRemoveQuantityAction,
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

  const removeItem = (item) => {
    if (authState.isAuthenticated) {
      dispatch(
        addRemoveQuantityAction({
          ...item,
          action: "CLEAR",
          country: giftunitState.selectedCountry,
        })
      );
    } else {
      const lineItems = cartState.lineItems.filter(
        (lineItem) =>
          !(
            lineItem.brand_id === item.brand_id &&
            lineItem.giftcard_value === item.giftcard_value
          )
      );
      dispatch(cartAction.saveItemsToCart(lineItems));
      if (lineItems.length) {
        const totalCartItems = lineItems
          .map((lineItem) => parseFloat(lineItem.quantity))
          .reduce((accumulator, currentValue) => accumulator + currentValue);
        dispatch(cartAction.updateTotalCartItems(totalCartItems));
      } else {
        dispatch(cartAction.updateTotalCartItems(0));
      }
    }
  };

  const incrementQuantity = (item) => {
    if (authState.isAuthenticated) {
      dispatch(
        addRemoveQuantityAction({
          ...item,
          action: "ADD",
          country: giftunitState.selectedCountry,
        })
      );
    } else {
      const lineItems = cartState.lineItems.map((lineItem) => {
        if (
          lineItem.brand_id === item.brand_id &&
          lineItem.giftcard_value === item.giftcard_value
        ) {
          return Object.assign({}, lineItem, {
            quantity: parseFloat(lineItem.quantity) + 1,
          });
        }
        return lineItem;
      });
      dispatch(cartAction.saveItemsToCart(lineItems));
    }
  };

  const decrementQuantity = (item) => {
    if (authState.isAuthenticated) {
      dispatch(
        addRemoveQuantityAction({
          ...item,
          action: "REMOVE",
          country: giftunitState.selectedCountry,
        })
      );
    } else {
      if (item.quantity === 1) {
        removeItem(item);
      } else {
        const lineItems = cartState.lineItems.map((lineItem) => {
          if (
            lineItem.brand_id === item.brand_id &&
            lineItem.giftcard_value === item.giftcard_value
          ) {
            return Object.assign({}, lineItem, {
              quantity: parseFloat(lineItem.quantity) - 1,
            });
          }
          return lineItem;
        });
        dispatch(cartAction.saveItemsToCart(lineItems));
      }
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

          <Col md={7}>
            <CartItemContainer
              cartState={cartState}
              giftCardState={giftunitState}
              history={history}
              removeItem={removeItem}
              incrementQuantity={incrementQuantity}
              decrementQuantity={decrementQuantity}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;

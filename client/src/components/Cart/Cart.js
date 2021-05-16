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
import { getTopBarState } from "../../reducer/topbar.reducer";
import { getOrderState } from "../../reducer/orders.reducers";
import {
  createOrderAction,
  processGiftCardCheckoutAction,
} from "../../actions/orders.action";

function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector(getAuthState);
  const cartState = useSelector(getCartItemsState);
  const rewardState = useSelector(getRewardPointsState);
  const giftunitState = useSelector(getGiftcardsState);
  const topbarState = useSelector(getTopBarState);
  const orderState = useSelector(getOrderState);

  useEffect(() => {
    if (authState.isAuthenticated) {
      dispatch(
        fetchItemsByCartAction({
          currency: giftunitState?.selectedCountry?.unit_short_name || "AED",
          currency_id: giftunitState?.selectedCountry?.id || 1,
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
      if (item.quantity === 1) {
        removeItem(item);
      } else {
        dispatch(
          addRemoveQuantityAction({
            ...item,
            action: "REMOVE",
            country: giftunitState.selectedCountry,
          })
        );
      }
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

  const createCheckout = async (data) => {
    if (!data?.are_reward_points_used) {
      dispatch(cartAction.updateCheckout(data));
      history.push("payment");
    } else {
      const payload = {
        orders: {
          card_value_aed: null,
          order_total_aed: data.total_amount,
          program_id: 1,
          use_credits: data.are_reward_points_used,
          current_exchange_rate: cartState.conversion.currency_exchange_rate,
          use_hassad_points: data.are_reward_points_used,
          language_code: "en",
          isbuynow: false,
          isforself: 1,
          payment_currency: data.currency || "AED",
          currency: data.currency_id,
        },
      };
      await dispatch(createOrderAction({ data: payload, event: {} }));
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
              createCheckout={createCheckout}
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
              topbarState={topbarState}
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;

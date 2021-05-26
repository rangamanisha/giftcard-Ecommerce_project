import React, { useEffect } from "react";
import "./Cart.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
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
  getFixerConversionRateAction,
  getPaymentCurrencyAction,
} from "../../actions/cart.actions";
import CartWidget from "./CartWidget";
import CartItemContainer from "./CartItemContainer";
import { getTopBarState } from "../../reducer/topbar.reducer";
import { createOrderAction } from "../../actions/orders.action";
import EmptyCartImage from "../../assets/empty-state-cart.svg";

function Cart() {
  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector(getAuthState);
  const cartState = useSelector(getCartItemsState);
  const rewardState = useSelector(getRewardPointsState);
  const giftunitState = useSelector(getGiftcardsState);
  const topbarState = useSelector(getTopBarState);

  useEffect(() => {
    if (authState.isAuthenticated) {
      dispatch(
        fetchItemsByCartAction({
          currency: cartState?.selectedCurrency?.unit_short_name || "AED",
          currency_id: cartState?.selectedCurrency?.id || 1,
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

  const handleChangeCurrency = async (event) => {
    const selectedCurrency = JSON.parse(event);
    if (selectedCurrency) {
      if (authState.isAuthenticated) {
        await dispatch(
          fetchItemsByCartAction({
            currency: selectedCurrency?.unit_name_short || "AED",
            currency_id: selectedCurrency?.id || 1,
          })
        );
      }
      await dispatch(getFixerConversionRateAction(selectedCurrency));
    }
    // dispatch(getFixerConversionRateAction(selectedCurrency));
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
        if (lineItems.length) {
          const totalCartItems = lineItems
            .map((lineItem) => parseFloat(lineItem.quantity))
            .reduce((accumulator, currentValue) => accumulator + currentValue);
          dispatch(cartAction.updateTotalCartItems(totalCartItems));
        } else {
          dispatch(cartAction.updateTotalCartItems(0));
        }
      }
    }
  };

  const createCheckout = async (data) => {
    if (data?.are_reward_points_used && !data?.isDiffAmountToBePaid) {
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
    } else {
      dispatch(cartAction.updateCheckout(data));
      history.push("payment");
    }
  };

  const getCartContent = () => {
    if (cartState.lineItems.length) {
      return (
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
      );
    }
    return (
      <>
        <Row>
          <Col xs={12} className="text-center">
            <img src={EmptyCartImage} className="img-fluid empty-cart-image" />
          </Col>
          <Col xs={12} className="text-center pt-4">
            <h2 className="empty-cart-header">Your orders list looks empty!</h2>
          </Col>
          <Col xs={12} className="text-center pt-2">
            <h6 className="empty-cart-subheader">What are you waiting for?</h6>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ offset: 4, span: 4 }} className="pt-4">
            <Button
              className="btn-block start-gifting-btn"
              variant="info"
              type="button"
              onClick={(e) => history.push({ pathname: "/" })}
            >
              Start Gifting
            </Button>
          </Col>
        </Row>
      </>
    );
  };

  return (
    <>
      <Container
        fluid={cartState.lineItems.length}
        className={`${
          !cartState.lineItems.length ? "empty-cart-container" : ""
        }`}
      >
        {getCartContent()}
      </Container>
    </>
  );
}

export default Cart;

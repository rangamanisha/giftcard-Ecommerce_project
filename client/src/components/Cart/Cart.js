import React, { useState, useEffect, useCallback } from "react";
import "./Cart.css";
import { get, isEmpty, map, assign, reduce, isNull, isUndefined } from "lodash";
import { Col, Image, Row, Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { getAuthState } from "../../reducer/auth.reducer";
import {
  getConversionRateAction,
  giftCardsUnitAction,
} from "../../actions/giftcards.actions";
import {
  getGiftcardsState,
  giftCardsAction,
} from "../../reducer/giftCards.reducer";
import { getRewardPointsState } from "../../reducer/rewardpoints.reducer";
import { getRewardPointsAction } from "../../actions/rewardpoints.actions";
import { cartAction, getCartItemsState } from "../../reducer/cart.reducer";

import DropdownToggle from "react-bootstrap/esm/DropdownToggle";
import DropdownItem from "react-bootstrap/esm/DropdownItem";
import { Dropdown } from "react-bootstrap";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { RiArrowDownSLine } from "react-icons/ri";
import exclamation from "../../assets/Group4790.svg";
import ButtunDelete from "../../assets/Button-Delete.svg";
import { Button, ButtonToolbar, ButtonGroup } from "react-bootstrap";
import {
  addRemoveQuantityAction,
  fetchItemsByCartAction,
} from "../../actions/cart.actions";

function Cart() {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}>
      {children}
      <RiArrowDownSLine />
    </a>
  ));
  CustomToggle.displayName = 'CustomToggle';

  const dispatch = useDispatch();
  const history = useHistory();
  const authState = useSelector(getAuthState);
  const isAuthenticated = get(authState, "isAuthenticated");
  const cartState = useSelector(getCartItemsState);
  const rewardState = useSelector(getRewardPointsState);
  const giftunitState = useSelector(getGiftcardsState);
  const giftGlobalPoints = parseFloat(get(rewardState, "total_credits"));
  const card = giftunitState.selectedBrand;
  const payment = giftunitState.selectedCountry;
  const currencies = get(giftunitState, 'paymentCurrency.currencies');
  const selectedCurrency = get(giftunitState, 'selectedCurrency')
  const [currencyIndex, setCurrencyIndex] = useState(0);
  const conversionRate = get(
    giftunitState,
    "conversion.currency_exchange_rate"
  );
  const lineItems = get(cartState, "lineItems").length
    ? get(cartState, "lineItems")
    : get(cartState, "fetchedCartItems") || [];
  const [useGiftiPoints, setUseGiftiPoints] = React.useState(
    rewardState &&
      rewardState.total_credits &&
      !isNull(rewardState.total_credits)
      ? true
      : false
  );
  const [conversionrate, setconversion] = useState(conversionRate);
  //const [activePoints, setActivePoint] = useState(giftGlobalPoints)
  useEffect(() => {
    setconversion(conversionRate);
  }, [conversionRate]);

  useEffect(() => {
    dispatch(getRewardPointsAction());
  }, [rewardState, dispatch]);
  useEffect(() => {
    dispatch(
      giftCardsUnitAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
        giftunit_id: giftunitState.giftunit_id,
      })
    );
  }, [giftunitState.giftunit_id, dispatch]);
  useEffect(() => {
    let id = get(selectedCurrency, "id");
    dispatch(getConversionRateAction(id));
  }, [get(selectedCurrency, "id")]);

  useEffect(() => {
    if (authState.isAuthenticated) {
      dispatch(
        fetchItemsByCartAction({
          currency: giftunitState?.selectedCurrency?.unit_short_name || "AED",
          currency_id: giftunitState?.selectedCurrency?.id || 1,
        })
      );
    }
  }, []);

  const handleUpdate = (item, operation) => {
    const _item = assign({}, item);
    const { quantity } = _item;
    // const index = map(lineItems, (Item, index) => {
    //   if(Item.id === _item.id && Item.selectedDenomination === _item.selectedDenomination){
    //     return index
    //   }
    // })
    // console.log(index)
    const payload = {
      brand_name: item.name,
      quantity: item.quantity,
      giftcard_value: item.selectedDenomination,
      currency: giftunitState?.selectedCurrency?.unit_name_short || "AED",
      action: "ADD",
    };
    switch (operation) {
      case "add":
        if (quantity >= 5) return null;
        else {
          delete _item.quantity;
          if (authState.isAuthenticated) {
            dispatch(addRemoveQuantityAction({ data: payload, item }));
          } else {
            dispatch(
              cartAction.updateLineItem(
                assign({}, _item, { quantity: quantity + 1 })
              )
            );
          }
        }
      case "sub":
        if (quantity <= 0) return null;
        else {
          delete _item.quantity;
          if (authState.isAuthenticated) {
            dispatch(
              addRemoveQuantityAction({
                data: { ...payload, action: "REMOVE" },
                item,
              })
            );
          } else {
            dispatch(
              cartAction.updateLineItem(
                assign({}, _item, { quantity: quantity - 1 })
              )
            );
          }
        }
    }
  };

  const handleRemove = (item) => {
    if (authState.isAuthenticated) {
      const payload = {
        brand_name: item.name,
        quantity: item.quantity,
        giftcard_value: item.selectedDenomination,
        currency: giftunitState?.selectedCurrency?.unit_name_short || "AED",
        action: "CLEAR",
      };
      dispatch(addRemoveQuantityAction({ data: payload, item }));
    } else {
      dispatch(cartAction.removeLineItem(item));
    }
  };
  const lineValue = reduce(
    lineItems,
    (sum, i) => {
      return sum + i.selectedDenomination * i.quantity;
    },
    0
  );
  const handleChangeCurreny = (currency) => {
    setCurrencyIndex(parseInt(currency));
    dispatch(giftCardsAction.setSelectCurreny(currencies[parseInt(currency)]));
  };
  const convertedAmount = React.useCallback((selectedCurrency) => {
    if (!isUndefined(conversionrate) && conversionrate !== 0) {
      return lineValue * conversionrate;
    } else {
      return lineValue;
    }
  });
  const totalLineAmount = React.useCallback(() => {
    const lineAmount = convertedAmount();
    if (!lineAmount) return 0;
    else if (useGiftiPoints) {
      const convertedPoints = convertedGiftiPoints();
      return lineAmount - convertedPoints;
    } else {
      return lineAmount;
    }
  }, [useGiftiPoints, selectedCurrency, conversionrate]);
  const currencyShort = React.useCallback(() => {
    if (!isUndefined(giftunitState.selectedCountry)) {
      return get(giftunitState, "selectedCurrency.unit_name_short");
    } else {
      return get(payment, "unit_symbol");
    }
  }, [selectedCurrency]);
  /**
   * @params conversionRate, giftiGlobalPoints
   * if selectedCurrency then we should multiply the points to exchange rate and return the points
   * @returns
   */
  const convertedGiftiPoints = React.useCallback(() => {
    if (isNull(giftGlobalPoints)) return null;
    if (selectedCurrency && selectedCurrency.id && conversionrate) {
      let pointsToCurrency = giftGlobalPoints * conversionrate;
      return parseFloat(pointsToCurrency).toFixed(2);
    } else {
      return giftGlobalPoints;
    }
  }, [useGiftiPoints, conversionrate]);
  return (
    <>
      <Container fluid>
        <Row className="my-5">
          <Col md={5}>
            <div className="cart-first-column p-3">
              <div className="d-flex align-items-end">
                <h6 className="flex-grow-1">Total Pay</h6>
                <div className="flex-shrink-1 cart-currency p-1">
                  <small>Select Payment Currency</small>
                  <span className="mx-2">|</span>
                  <Dropdown
                    className="d-inline"
                    onSelect={(e) => handleChangeCurreny(e)}
                  >
                    <DropdownToggle
                      as={CustomToggle}
                      id="dropdown-custom-components"
                    ></DropdownToggle>
                    <DropdownMenu align="right" style={{ overflow: "auto" }}>
                      {map(currencies, (c, i) => (
                        <DropdownItem
                          key={i}
                          eventKey={i}
                          value={c.unit_name_short}
                          active={currencyIndex === i}
                        >
                          {c.unit_name_short}
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                  <small>{currencyShort()}</small>
                </div>
              </div>
              <h4 className="mt-2 mb-3">
                {currencyShort()} {convertedAmount()}
              </h4>
              <div className="d-flex justify-content-between">
                <span>Subtotal</span>
                <span>
                  {currencyShort()} {lineValue ? convertedAmount() : 0}
                </span>
              </div>
              {useGiftiPoints && lineValue && (
                <div className="d-flex justify-content-between">
                  <span>Reward Points</span>
                  <span>
                    - {currencyShort()} {convertedGiftiPoints()}
                  </span>
                </div>
              )}
              <hr />
              <div className="d-flex justify-content-between mb-5">
                <span>
                  <strong>Total</strong>
                </span>
                <span>
                  <strong>
                    {currencyShort()} {lineValue ? totalLineAmount() : 0}
                  </strong>
                </span>
              </div>
              <div className="d-flex flex-column justify-content-center align-content-between border border-2 ggp-parent-box rounded p-2 mb-4">
                {!isAuthenticated && (
                  <Image
                    src={exclamation}
                    rounded
                    style={{ width: "4%", height: "4%" }}
                  />
                )}
                {isAuthenticated && (
                  <div className="row d-flex align-items-baseline">
                    <div className="m-3">
                      <input
                        type="checkbox"
                        id="giftpoint-checkbox"
                        value="1"
                        name="use giftipoints"
                        onClick={() => {
                          setUseGiftiPoints(!useGiftiPoints);
                        }}
                        checked={useGiftiPoints}
                      />
                    </div>
                    <label>Use Gifti Global Points</label>
                  </div>
                )}
                {!isAuthenticated && (
                  <p>
                    <small>
                      You can also use your Gifti Global Points, Login or Sign
                      up to use your Gift Global Points
                    </small>
                  </p>
                )}
                <div className="p-2 ggp-box mx-auto">
                  <span className=" fs-6 text-center d-block">
                    <small>Gifti Global Points</small>
                  </span>
                  <span className="text-center d-block">
                    {useGiftiPoints ? 0 : giftGlobalPoints}
                  </span>
                </div>
              </div>

              <div className="d-flex justify-content-around">
                {!isAuthenticated && (
                  <Button
                    type="button"
                    variant="white"
                    onClick={() =>
                      history.push("auth/login", { redirectTo: "cart" })
                    }
                  >
                    Log In
                  </Button>
                )}
                <Button
                  type="button"
                  variant="persianGreen"
                  onClick={() => history.push("payment")}
                >
                  {isAuthenticated ? "Checkout" : "Checkout as guest"}
                </Button>
              </div>
            </div>
          </Col>

          {/* Second Column of cart */}

          <Col md={7}>
            <div className="col-second">
              <div className="d-flex justify-content-between">
                <span className="cart-head"> Cart</span>
                <p
                  onClick={() => history.push("/")}
                  style={{
                    cursor: "pointer",
                    textAlign: "left",
                    textDecoration: "underline",
                    letterSpacing: "0px",
                    color: "#00B2AE",
                    opacity: 1,
                    fontWeight: 500,
                  }}
                >
                  Continue Shopping
                </p>
              </div>
              {!isEmpty(lineItems) &&
                map(lineItems, (item, i) => (
                  <div key={i}>
                    <div className="item-list">
                      <Row className="align-items-center">
                        <Col md={3}>
                          <Image
                            src={get(item, "images.color.medium_rectangle")}
                            rounded
                            style={{
                              width: "100%",
                              height: "auto",
                              objectFit: "contain",
                            }}
                          />
                        </Col>
                        <Col md={9}>
                          <div className="item-details">
                            <p>
                              <b>{get(item, "name")}</b>
                            </p>
                            <p>Gifting for: {get(item, "giftingTo")} </p>
                            <div className="d-flex justify-content-between align-items-center mt-3 mr-2">
                              <div className="cart-inc-dec-box px-1">
                                <button
                                  className="btn btn-link"
                                  onClick={() => handleUpdate(item, "sub")}
                                >
                                  <span>-</span>
                                </button>
                                <span className="mx-2">
                                  {get(item, "quantity")}
                                </span>
                                <button
                                  className="btn btn-link"
                                  onClick={() => handleUpdate(item, "add")}
                                >
                                  <span>+</span>
                                </button>
                              </div>
                              <span className="count-name">
                                {get(payment, "country_name")}
                              </span>
                              <span className="count-symbol">
                                {get(payment, "unit_symbol")}{" "}
                                {get(item, "selectedDenomination") *
                                  get(item, "quantity")}
                              </span>
                              <Image
                                src={ButtunDelete}
                                style={{
                                  width: "5%",
                                  height: "5%",
                                  cursor: "pointer",
                                }}
                                onClick={() => handleRemove(item)}
                              />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                ))}
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Cart;



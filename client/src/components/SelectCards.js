import React, { useState, useEffect } from "react";
import { Button, ButtonGroup } from "react-bootstrap";
import { Col, Row, Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import plusicon from "../assets/+.svg";
import minusicon from "../assets/minus.svg";
import Footer1 from "./Stikyfooter";
import {
  descriptionBrandAction,
  termBrandAction,
} from "../actions/brands.action";
import GiftiGiftCard from "./GiftGiftCard";
import { useDispatch, useSelector } from "react-redux";
import { getBrandsState } from "../reducer/brands.reducer";
import { getGiftcardsState } from "../reducer/giftCards.reducer";
import { get, map } from "lodash";
import { useHistory } from "react-router-dom";
import { cartAction, getCartItemsState } from "../reducer/cart.reducer";
import { getAuthState } from "../reducer/auth.reducer";
import { updateCartAction } from "../actions/cart.actions";
import { getFixerConvertedAmount } from "../services/giftCards.service";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import { getCommonState } from "../reducer/common.reducer";

const SelectCards = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [eventKey11, seteventkey] = useState(1);
  const [selectedDenomination, setSelectedDenomiation] = useState(null);
  const [count, setCount] = useState(0);
  const giftunitState = useSelector(getGiftcardsState);
  const productAndTermState = useSelector(getBrandsState);
  const authState = useSelector(getAuthState);
  const cartState = useSelector(getCartItemsState);
  const commonState = useSelector(getCommonState);
  const [tempvisible, setTempVisible] = useState(
    !commonState?.giftingToUser?.name
  );
  const card = giftunitState.selectedBrand;
  const payment = giftunitState.selectedCountry;
  const [rate, setRate] = useState(0);
  const [giftTo, setGiftTo] = useState(
    commonState?.giftingToUser?.name ? "someoneElse" : "myself"
  );
  const [giftToParams, setGiftToParams] = useState({
    email: null,
    name: commonState?.giftingToUser?.name || null,
    message: null,
    gifting_image_id:null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSelect = (eventKey1) => {
    seteventkey(eventKey1);
  };
  const handleGiftTo = (e) => {
    setTempVisible(e.target.value === "myself" ? true : false);
    setGiftTo(e.target.value);
    setGiftToParams({ email: null, name: null, message: null,gifting_image_id:null, });
  };
  const increment = () => {
    if (count >= 5) {
      return null;
    } else {
      const inc = parseFloat(selectedDenomination * (count + 1));
      setCount(count + 1);
      setRate(inc);
    }
  };
  const decrement = () => {
    if (count === 0) {
      return null;
    } else {
      const dec = parseFloat(selectedDenomination * (count - 1));
      setCount(count - 1);
      setRate(dec);
    }
  };
  const handleDenomination = (d) => {
    setSelectedDenomiation(parseFloat(d));
    setCount(1);
    setRate(d);
  };

  React.useEffect(() => {
    dispatch(
      termBrandAction({
        currency: giftunitState.selectedCountry?.id || 1,
        id: get(card, "id"),
      })
    );
    dispatch(
      descriptionBrandAction({
        currency: giftunitState.selectedCountry?.id || 1,
        program_id: 1,
        id: get(card, "id"),
        image_size: "medium_rectangle",
        image_type: "Color",
      })
    );
  }, [get(card, "id")]);

  const saveToCart = async (shouldRedirect) => {
    dispatch(pageLoaderActions.setPageLoadingAction(true));
    const addToCartItem = {
      quantity: count,
      brand_id: card.id,
      currency: giftunitState.selectedCountry?.unit_name_short,
      giftcard_value: selectedDenomination,
      card_value_aed: selectedDenomination,
      isforself: giftTo === "myself",
      country_id: giftunitState.selectedCountry?.country_id,
      name: card.name,
      country_name: giftunitState.selectedCountry.country_name,
    };

    if (!addToCartItem.isforself){
      addToCartItem["gift_message"] = giftToParams?.message || "";
      addToCartItem["contact_name"] = giftToParams?.name || null;
      addToCartItem["contact_email"] = giftToParams?.email || null;
      addToCartItem["gifting_image_id"] = giftToParams?.gifting_image_id || "";
    }

    if (
      giftunitState.selectedCountry?.unit_name_short &&
      giftunitState.selectedCountry?.unit_name_short !== "AED"
    ) {
      const response = await getFixerConvertedAmount(
        selectedDenomination,
        giftunitState.selectedCountry?.unit_name_short,
        "AED"
      );
      addToCartItem.card_value_aed = response.converted_amount; // Converted amount is already fixed to 2 decimal places
    }
    if (authState.isAuthenticated) {
      dispatch(updateCartAction(addToCartItem));
    } else {
      const lineItems = cartState.lineItems;
      if (!lineItems.length) {
        dispatch(cartAction.saveItemsToCart([addToCartItem]));
        dispatch(cartAction.updateTotalCartItems(addToCartItem.quantity));
      } else {
        const isItemPresent = lineItems.find(
          (item) =>
            item.brand_id === addToCartItem.brand_id &&
            item.giftcard_value === addToCartItem.giftcard_value
        );
        let updatedLineItems = [];
        if (isItemPresent) {
          updatedLineItems = lineItems.map((item) => {
            if (
              item.brand_id === addToCartItem.brand_id &&
              item.giftcard_value === addToCartItem.giftcard_value
            ) {
              return Object.assign({}, item, {
                quantity:
                  parseFloat(item.quantity) +
                  parseFloat(addToCartItem.quantity),
              });
            }
            return item;
          });
          dispatch(cartAction.saveItemsToCart(updatedLineItems));
        } else {
          updatedLineItems = [addToCartItem, ...lineItems];
          dispatch(cartAction.saveItemsToCart(updatedLineItems));
        }
        const totalCartItems = updatedLineItems
          .map((updatedItem) => updatedItem.quantity)
          .reduce((accumulator, currentValue) => accumulator + currentValue);
        dispatch(cartAction.updateTotalCartItems(totalCartItems));
      }
    }
    setCount(0);
    setRate(0);
    setSelectedDenomiation(null);
    dispatch(pageLoaderActions.setPageLoadingAction(false));
    if (shouldRedirect) {
      history.push("cart");
    }
  };

  const disableAddToCartButton = () => {
    if (
      !giftTo === "myself" &&
      !(giftToParams.email && giftToParams.name && giftToParams.message )
    ) {
      return true;
    }
    return false;
  };

  return (
    <>
      <Container fluid className="selected-card-box">
        <Row>
          <Col md={4}>
            <div style ={{textAlign:"center"}}>
              <img
                src={get(card, "images.color.medium_rectangle")}
                alt="AmazonMedium"style ={{maxWidth:"100%"}}
              />
            </div>
          </Col>
          <Col md={8}>
            <div className="selected-card-details">
              <p className="select-card-text-lg">{get(card, "name")}</p>
              <p className="select-card-text">{`Select Card Value (${get(
                payment,
                "unit_name_short"
              )})`}</p>
              <div className="card-amnt mt-3">
                {map(
                  get(productAndTermState, "description.brand.denominations"),
                  (d, i) => (
                    <Button
                      variant="outline-info"
                      className="mr-3 select-card-button mt-2"
                      onClick={() => handleDenomination(d)}
                      active={selectedDenomination === parseFloat(d)}
                      key={i}
                    >
                      {parseFloat(d)}
                    </Button>
                  )
                )}
              </div>
              <p className="select-card-text mt-5">Gifting for</p>
              <div className="row">
                <Form.Check
                  value="myself"
                  type="radio"
                  className="giftslabs"
                  label="Myself"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios1"
                  checked={giftTo === "myself"}
                  onChange={(e) => handleGiftTo(e)}
                />
                <Form.Check
                  value="someoneElse"
                  type="radio"
                  className="giftslabs"
                  label="Someone else"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  checked={giftTo === "someoneElse"}
                  onChange={(e) => handleGiftTo(e)}
                />
              </div>
              {tempvisible === false ? (
                <GiftiGiftCard
                  giftToParams={giftToParams}
                  setGiftToParams={setGiftToParams}
                />
              ) : (
                ""
              )}
              <div>
                <Nav onSelect={handleSelect}>
                  <Nav.Item id="product">
                    <Nav.Link eventKey="1" active={eventKey11 === "1"}>
                      Description
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item id="product">
                    <Nav.Link eventKey="2">Terms & Condtions</Nav.Link>
                  </Nav.Item>
                </Nav>
                {eventKey11 === "1" ? (
                  <div
                    className="mt-4"
                    id="profile"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <p className="mt-4">
                      {get(
                        productAndTermState,
                        "description.brand.product_description"
                      )}
                    </p>
                  </div>
                ) : (
                  <div
                    className="mt-4"
                    id="contact"
                    role="tabpanel"
                    aria-labelledby="contact-tab"
                  >
                    <p>
                      {get(productAndTermState, "terms[0].terms_text")}
                      <br />
                    </p>
                  </div>
                )}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="fix-footer">
        <Footer1 className="">
          <div className="fix-footer row">
            <div className="col-lg-4"></div>
            <div className="col-lg-8 col-md-12 col-sm-12">
              <div className="row">
                <div className="col-md-5 col-sm-12 d-flex">
                  <div className="d-flex">
                    <small className="amttext">Total Amount</small>
                    <h4 className="ml-sm-2 amttext2">
                      {rate} {get(payment, "unit_name_short")}
                    </h4>
                  </div>

                  <div className="mobile-view">
                    <ButtonGroup
                      className="btnclasss mr-3"
                      aria-label="Second group"
                    >
                      <Button
                        variant="link"
                        disabled={!selectedDenomination}
                        onClick={decrement}
                      >
                        {" "}
                        <img style={{ maxHeight: "3px" }} src={minusicon} />
                      </Button>{" "}
                      <Button disabled variant="link">
                        <b>{count}</b>
                      </Button>{" "}
                      <Button
                        variant="link"
                        disabled={!selectedDenomination}
                        onClick={increment}
                      >
                        {" "}
                        <img style={{ maxHeight: "11px" }} src={plusicon} />
                      </Button>
                    </ButtonGroup>
                  </div>
                </div>
                <div className="col-md-7 col-sm-12">
                  <span className="desktop-view">
                    <ButtonGroup
                      className="btnclasss mr-3"
                      aria-label="Second group"
                    >
                      <Button
                        variant="link"
                        disabled={!selectedDenomination}
                        onClick={decrement}
                      >
                        {" "}
                        <img style={{ maxHeight: "3px" }} src={minusicon} />
                      </Button>{" "}
                      <Button disabled variant="link">
                        <b>{count}</b>
                      </Button>{" "}
                      <Button
                        variant="link"
                        disabled={!selectedDenomination}
                        onClick={increment}
                      >
                        {" "}
                        <img style={{ maxHeight: "11px" }} src={plusicon} />
                      </Button>
                    </ButtonGroup>
                  </span>
                  <Button
                    className="nav-btn mr-2 text-white"
                    disabled={
                      !selectedDenomination ||
                      !count ||
                      (giftTo !== "myself" &&
                        !(
                          giftToParams.email &&
                          giftToParams.name ||
                          giftToParams.message ||
                          giftToParams.gifting_image_id
                        ))
                    }
                    onClick={(e) => saveToCart(false)}
                    variant="info"
                  >
                    Add to cart
                  </Button>{" "}
                  <Button
                    className="nav-btn mr-2 text-white"
                    disabled={
                      !selectedDenomination ||
                      !count ||
                      (giftTo !== "myself" &&
                        !(
                          giftToParams.email ||
                          giftToParams.name ||
                          giftToParams.message||
                          giftToParams.gifting_image_id
                        ))
                    }
                    onClick={() => saveToCart(true)}
                  >
                    Buy Now
                  </Button>{" "}
                </div>
              </div>
            </div>
          </div>
        </Footer1>
      </div>
    </>
  );
};

export default SelectCards;

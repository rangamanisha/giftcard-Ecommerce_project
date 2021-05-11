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
import GiftGiftCard from "./GiftGiftCard";
import { useDispatch, useSelector } from "react-redux";
import { getBrandsState } from "../reducer/brands.reducer";
import {
  getGiftcardsState,
  giftCardsAction,
} from "../reducer/giftCards.reducer";
import { get, map, isUndefined } from "lodash";
import { useHistory } from "react-router-dom";
import { cartAction, getCartItemsState } from "../reducer/cart.reducer";
import { getAuthState } from "../reducer/auth.reducer";
import { updateCartAction } from "../actions/cart.actions";
import { getTopBarState } from "../reducer/topbar.reducer";
import { getConvertedAmount } from "../services/giftCards.service";

const SelectCards = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [eventKey11, seteventkey] = useState(1);
  const [tempvisible, setTempVisible] = useState(true);
  const [selectedDenomination, setSelectedDenomiation] = useState(null);
  const [count, setCount] = useState(0);
  const giftunitState = useSelector(getGiftcardsState);
  const productAndTermState = useSelector(getBrandsState);
  const authState = useSelector(getAuthState);
  const cartState = useSelector(getCartItemsState);
  const card = giftunitState.selectedBrand;
  const payment = giftunitState.selectedCountry;
  const [rate, setRate] = useState(0);
  const [giftTo, setGiftTo] = useState("myself");
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const topbarState = useSelector(getTopBarState);

  const selectedCountry = giftunitState.selectedCountry;
  const countryId = selectedCountry
    ? topbarState.countries.find(
        (country) => country.country_name === selectedCountry.country_name
      )?.id || 0
    : 0;

  const handleSelect = (eventKey1) => {
    seteventkey(eventKey1);
  };
  const handleGiftTo = (e) => {
    setTempVisible(e.target.value === "myself" ? true : false);
    setGiftTo(e.target.value);
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
        currency: countryId,
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
    const addToCartItem = {
      quantity: count,
      brand_id: card.id,
      currency: giftunitState.selectedCountry?.unit_name_short,
      giftcard_value: selectedDenomination,
      card_value_aed: selectedDenomination,
      isforself: giftTo === "myself",
      country_id: giftunitState.selectedCountry?.id,
      name: card.name,
      country_name: giftunitState.selectedCountry.country_name,
    };
    if (
      giftunitState.selectedCountry?.unit_name_short &&
      giftunitState.selectedCountry?.unit_name_short !== "AED"
    ) {
      const response = await getConvertedAmount(
        selectedDenomination,
        giftunitState.selectedCountry?.unit_name_short,
        "AED"
      );
      addToCartItem.card_value_aed = parseFloat(
        response.data.converted_amount
      ).toFixed(2);
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
    if (shouldRedirect) {
      history.push("cart");
    }
  };
  return (
    <>
      <Container fluid className="selected-card-box">
        <Row>
          <Col md={4}>
            <div className="selected-img">
              <img
                src={get(card, "images.color.medium_rectangle")}
                alt="AmazonMedium"
                className="select-card-size1"
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
                  value="someone else"
                  type="radio"
                  className="giftslabs"
                  label="Someone else"
                  name="formHorizontalRadios"
                  id="formHorizontalRadios2"
                  checked={giftTo === "someone else"}
                  onChange={(e) => handleGiftTo(e)}
                />
              </div>
              {tempvisible === false ? <GiftGiftCard /> : ""}
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
            <small className="ml-sm-5 ml-33 amttext">Total Amount</small>
            <h4 className="ml-sm-2 amttext2">
              {rate} {get(payment, "unit_name_short")}
            </h4>
            <div className="col mr-5">
              <ButtonGroup className="mr-3" aria-label="Second group">
                <Button
                  variant="light"
                  disabled={!selectedDenomination}
                  onClick={decrement}
                >
                  {" "}
                  <img src={minusicon} />
                </Button>{" "}
                <Button disabled variant="light">
                  {count}
                </Button>{" "}
                <Button
                  variant="light"
                  disabled={!selectedDenomination}
                  onClick={increment}
                >
                  {" "}
                  <img src={plusicon} />
                </Button>
              </ButtonGroup>
              <Button
                className="nav-btn mr-2 text-white"
                disabled={!selectedDenomination}
                onClick={(e) => saveToCart(false)}
              >
                Add to cart
              </Button>{" "}
              <Button
                className="nav-btn mr-2"
                disabled={!selectedDenomination}
                onClick={() => saveToCart(true)}
                variant="info"
              >
                Buy Now
              </Button>{" "}
            </div>
          </div>
        </Footer1>
      </div>
    </>
  );
};

export default SelectCards;

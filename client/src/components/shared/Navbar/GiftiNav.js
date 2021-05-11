import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "../../../reducer/auth.reducer";
import Logo from "../../../assets/logo.svg";
import Search from "../../../assets/search.svg";
import Shoppingcart from "../../../assets/shopping-cart.svg";
import UserLogin from "../../../assets/User-login.svg";
import Location from "../../../assets/location.svg";
import {
  getGiftcardsState,
  giftCardsAction,
} from "../../../reducer/giftCards.reducer";
import { getCountriesListAction } from "../../../actions/topbar.actions";
import Topbar from "../Topbar";
import { giftCardsUnitAction } from "../../../actions/giftcards.actions";
import { isEmpty, get, sortBy } from "lodash";
import { cartTotalCountAction } from "../../../actions/cart.actions";
import { getCartItemsState } from "../../../reducer/cart.reducer";
import { getTopBarState } from "../../../reducer/topbar.reducer";
//Countries are comming from giftunit
const GiftiNav = () => {
  const bg = "white";
  const variant = "white";
  const authState = useSelector(getAuthState);
  const giftunitState = useSelector(getGiftcardsState);
  const cartState = useSelector(getCartItemsState);
  const state = useSelector(getTopBarState);
  const dispatch = useDispatch();
  const countries = isEmpty(giftunitState.countries)
    ? []
    : sortBy(get(giftunitState, "countries"), ["country_name"]);

  const [isTotalCartCountActionCalled, setIsTotalCartCountActionCalled] =
    useState(false);

  useEffect(() => {
    dispatch(getCountriesListAction());
  }, [dispatch]);

  useEffect(() => {
    if (authState.isAuthenticated && !isTotalCartCountActionCalled) {
      setIsTotalCartCountActionCalled(true);
      dispatch(
        cartTotalCountAction({
          currency: giftunitState.selectedCountry?.unit_name_short || "AED",
        })
      );
    }
  }, [
    authState.isAuthenticated,
    isTotalCartCountActionCalled,
    setIsTotalCartCountActionCalled,
    dispatch,
  ]);

  const countryChanged = (value) => {
    const filteredId = state.countries.filter(
      (country) => country.country_name === value.country_name
    );
    if (filteredId && filteredId.length) {
      value = { ...value, id: filteredId[0].id };
    }
    dispatch(giftCardsAction.selectCountry(value));
  };

  return (
    <Topbar
      bg={bg}
      variant={variant}
      logoIcon={Logo}
      locationIcon={Location}
      state={giftunitState}
      countriesList={countries}
      searchIcon={Search}
      userLoginIcon={UserLogin}
      shoppingCartIcon={Shoppingcart}
      showLogin={!authState.isAuthenticated}
      onCountrySelected={countryChanged}
      cartState={cartState}
    />
  );
};

export default GiftiNav;

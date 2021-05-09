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
import { topbarActions } from "../../../reducer/topbar.reducer";
//Countries are comming from giftunit
const GiftiNav = () => {
  const bg = "white";
  const variant = "white";
  const authState = useSelector(getAuthState);
  const giftunitState = useSelector(getGiftcardsState);
  const dispatch = useDispatch();
  const countries = isEmpty(giftunitState.countries)
    ? []
    : sortBy(get(giftunitState, "countries"), ["country_name"]);
  useEffect(() => {
    dispatch(giftCardsUnitAction);
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCountriesListAction());
  }, [dispatch]);

  const countryChanged = (value) => {
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
    />
  );
};

export default GiftiNav;

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
// import { get, map, isEmpty, filter, isUndefined, cloneDeepWith } from 'lodash';

import { giftCardsUnitAction } from "../../../actions/gitCards.actions";
import { isEmpty, get, sortBy } from "lodash";
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
    if (isEmpty(get(giftunitState, "selectedCountry"))) {
      dispatch(giftCardsAction.selectCountry(countries[0]));
    }
    dispatch(getCountriesListAction());
  }, [dispatch, countries]);

  const countryChanged = (value) => {
    dispatch(giftCardsAction.selectCountry(value));
  };

  return (
    <Topbar
      bg={bg}
      variant={variant}
      logoIcon={Logo}
      locationIcon={Location}
      country={get(giftunitState.selectedCountry, "country_name")}
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

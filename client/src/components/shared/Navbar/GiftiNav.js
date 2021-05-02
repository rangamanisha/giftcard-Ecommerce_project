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
import { isEmpty, get } from "lodash";
//Countries are comming from giftunitstate 
const GiftiNav = () => {
  const bg = "white";
  const variant = "white";
  const authState = useSelector(getAuthState);
  const giftunitState = useSelector(getGiftcardsState);
  const dispatch = useDispatch();
  const countries = giftunitState.countries.map(
    (country) => country["country_name"]
  );
  const countries1 = giftunitState.countries;
  // console.log(countries1[0].sort('country_name'))
  // .sort((a, b) => (a.country_name > b.country_name) ? 1 : -1);
  const countries11 = [...countries1].sort();

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
      countriesList={countries1}
      searchIcon={Search}
      userLoginIcon={UserLogin}
      shoppingCartIcon={Shoppingcart}
      showLogin={!authState.isAuthenticated}
      onCountrySelected={countryChanged}
    />
  );
};

export default GiftiNav;


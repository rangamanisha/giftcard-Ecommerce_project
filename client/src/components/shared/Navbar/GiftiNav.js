import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAuthState } from "../../../reducer/auth.reducer";
import Logo from "../../../assets/logo.svg";
import Search from "../../../assets/search.svg";
import Shoppingcart from "../../../assets/shopping-cart.svg";
import UserLogin from "../../../assets/User-login.svg";
import Location from "../../../assets/location.svg";
import Profile from "../../../assets/uprofile.svg";
import Cart from "../../../assets/cart.svg";
import Exit from "../../../assets/exit.svg";
import Coins from "../../../assets/coins.svg";
import { getTopBarState } from "../../../reducer/topbar.reducer";
import { getCountriesListAction } from "../../../actions/topbar.actions";
import Topbar from "../Topbar";

const GiftiNav = () => {
  const bg = "white";
  const variant = "white";
  const authState = useSelector(getAuthState);
  const topbarState = useSelector(getTopBarState);
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = topbarState.countries.map(
    (country) => country["country_name"]
  );

  useEffect(() => {
    dispatch(getCountriesListAction());
  }, [dispatch]);

  const countryChanged = (event) => {
    setSelectedCountry(event.target.outerText);
  };

  return (
    <Topbar
      bg={bg}
      variant={variant}
      first_name={authState.first_name}
      logoIcon={Logo}
      locationIcon={Location}
      cartIcon={Cart}
      exitIcon={Exit}
      coinsIcon={Coins}
      profileIcon={Profile}
      country={selectedCountry}
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

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAuthState } from '../../../reducer/auth.reducer';
import Logo from '../../../assets/logo.svg';
import Search from '../../../assets/search.svg';
import Shoppingcart from '../../../assets/shopping-cart.svg';
import UserLogin from '../../../assets/User-login.svg';
import Location from '../../../assets/location.svg';
import { getTopBarState, topbarActions } from '../../../reducer/topbar.reducer';
import {getGiftcardsState, giftCardsAction} from '../../../reducer/giftCards.reducer'
import { getCountriesListAction, selectCountryAction } from '../../../actions/topbar.actions';
import Topbar from '../Topbar';
import {giftCardsUnitAction} from '../../../actions/gitCards.actions'

const GiftiNav = () => {
    const bg = 'white';
    const variant = 'white';
    const authState = useSelector(getAuthState);
    const topbarState = useSelector(getTopBarState);
    const giftunitState = useSelector(getGiftcardsState);
    const dispatch = useDispatch()
    const [selectedCountry, setSelectedCountry] = useState(null);
    const countries = giftunitState.countries.map(country => country['country_name']);

    useEffect(() => {
        dispatch((giftCardsUnitAction));
    }, [dispatch]);

  useEffect(() => {
    dispatch(getCountriesListAction());
  }, [dispatch]);

    const countryChanged = (event) => {
        
        dispatch(giftCardsAction.selectCountry(event.target.outerText));
    }

    return (
        <Topbar
            bg={bg}
            variant={variant}
            logoIcon={Logo}
            locationIcon={Location}
            country={topbarState.selectedCountry}
            country={giftunitState.selectedCountry}
            countriesList={countries}
            searchIcon={Search}
            userLoginIcon={UserLogin}
            shoppingCartIcon={Shoppingcart}
            showLogin={!authState.isAuthenticated}
            onCountrySelected={countryChanged}
        />
    );
}

export default GiftiNav;

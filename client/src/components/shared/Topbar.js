import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

import { useHistory } from "react-router-dom";
import { Dropdown } from "primereact/dropdown";
import "./Topbar.scss";
import UserProfileDropDown from "../UserProfileDropDown";
import exitIcon from "../../assets/exit.svg";
import coinsIcon from "../../assets/coins.svg";
import cartIcon from "../../assets/cart.svg";
import userIcon from "../../assets/uprofile.svg";

import Container from "react-bootstrap/Container";

const Topbar = (props) => {
  const {
    bg,
    variant,
    logoIcon,
    locationIcon,
    countriesList,
    userLoginIcon,
    shoppingCartIcon,
    showLogin,
    onCountrySelected,
    state,
    cartState,
  } = props;
  const user = localStorage.getItem("first_name");
  const history = useHistory();

  const clearsession = () => {
    localStorage.removeItem('access_token');
    localStorage.removeItem('first_name');
     localStorage.removeItem('state');
    sessionStorage.clear();
    window.location.reload();
  };

  const getProfile = () => {
    if (showLogin) {
      return (
        <Button
          className="nav-btn"
          variant="info"
          onClick={() => history.push({ pathname: "/auth/login" })}
        >
          <img src={userLoginIcon} alt="Icon" className="mr-3" />
          Log in
        </Button>
      );
    }
    return (
      <UserProfileDropDown
        user={user}
        userLoginIcon={userLoginIcon}
        clearSession={clearsession}
        profileIcon={userIcon}
        coinsIcon={coinsIcon}
        exitIcon={exitIcon}
        cartIcon={cartIcon}
      />
    );
  };

  const onCountryChange = (e) => {
    onCountrySelected(e.value);
  };
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option.country_name}</div>
        </div>
      );
    }
    return <span>{props.placeholder}</span>;
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.country_name}</div>
      </div>
    );
  };
  return (
    <Navbar bg={bg} variant={variant} className="gifti-nav">
      <Container fluid className="flex-wrap">
        <div className="navbar-nav flex-row order-first mb-2">
          <div className="nav-item">
            <Navbar.Brand onClick={() => history.push({ pathname: "/" })}>
              <Button variant="white">
                <img src={logoIcon} alt="Icon" />
              </Button>
            </Navbar.Brand>
          </div>
          <div className="nav-item mt-2">
            <p className="location">
              <small>I am gifting to</small>
            </p>
            <img src={locationIcon} alt="Icon" />
            <Dropdown
              value={state.selectedCountry}
              options={countriesList}
              onChange={onCountryChange}
              filter
              filterBy="country_name"
              placeholder={
                state.selectedCountry?.country_name || "Please select"
              }
              optionLabel="country_name"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
            />
          </div>
        </div>
        <div className="navbar-nav flex-lg-row gifti-nav-flex order-lg-last">
          <div className="nav-item mr-2">
            <Button className="nav-btn text-white">For Business</Button>{" "}
          </div>
          <div className="nav-item mr-2">
            <Button className="nav-btn" variant="info">
              Redeem Your Gifti Global Card
            </Button>{" "}
          </div>
          <div className="nav-item mr-2">{getProfile()}</div>
          <div className="nav-item">
            <Button className="nav-btn btn-cart" variant="link">
              <img
                src={shoppingCartIcon}
                alt="shoppingcart-icon"
                onClick={() => history.push("/cart")}
              />
              {cartState.totalCartItems > 0 ? (
                <span class="badge badge-danger" id="lblCartCount">
                  {" "}
                  {cartState.totalCartItems}
                </span>
              ) : null}
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Topbar;

import React from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";
import { useHistory } from "react-router-dom";
import { useState, useRef } from "react";
import { Dropdown as Dropdown1 } from "react-bootstrap";
import { Dropdown } from "primereact/dropdown";
import "./Topbar.scss";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import Container from "react-bootstrap/Container";

const Topbar = (props) => {
  const {
    bg,
    variant,
    logoIcon,
    locationIcon,
    country,
    countriesList,
    searchIcon,
    userLoginIcon,
    shoppingCartIcon,
    showLogin,
    onCountrySelected,
  } = props;
  const user = localStorage.getItem("first_name");
  const history = useHistory();
  const [selectedCountry, setSelectedCountry] = useState(
    "United Arab Emirates"
  );

  const clearsession = () => {
    localStorage.clear();
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
      <Dropdown1>
        <Dropdown1.Toggle variant="info" className="nav-btn">
          <span>
            <img src={userLoginIcon} alt="Icon" className="mr-2" />
          </span>
          {user}
        </Dropdown1.Toggle>
        <Dropdown1.Menu>
          <Dropdown1.Item eventKey="1">Profile</Dropdown1.Item>
          <Dropdown1.Item eventKey="2">Gifti Global Points</Dropdown1.Item>
          <Dropdown1.Item eventKey="1">Orders</Dropdown1.Item>
          <Dropdown1.Item onClick={clearsession}>Logout</Dropdown1.Item>
        </Dropdown1.Menu>
      </Dropdown1>
    );
  };
  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
    onCountrySelected(e.value.country_name);
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
      <Container fluid>
        <div className="navbar-nav flex-row order-first mb-2">
          <div className="nav-item">
            <Navbar.Brand
              onClick={() => history.push({ pathname: "/" })}
            >
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
              value={selectedCountry}
              options={countriesList}
              onChange={onCountryChange}
              filter
              filterBy="country_name"
              placeholder="United Arab Emirates"
              optionLabel="country_name"
              valueTemplate={selectedCountryTemplate}
              itemTemplate={countryOptionTemplate}
            />
          </div>
          <div className="nav-item ml-4 mt-2">
            <InputGroup>
              <FormControl
                className="search-button"
                placeholder="What are you looking for ?"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                size="40"
              />
              <InputGroup.Append>
                <Button className="search-button-b" variant="light">
                  <img src={searchIcon} alt="search-icon" />
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
        </div>
        <div className="navbar-nav flex-lg-row gifti-nav-flex">
          <div className="nav-item mr-2">
            <Button className="nav-btn text-white">For Business</Button>{" "}
          </div>
          <div className="nav-item mr-2">
            <Button className="nav-btn" variant="info">
              Redeem Your Gifti Global Card
              </Button>{" "}
          </div>
          <div className="nav-item mr-2">
            {getProfile()}
          </div>
          <div className="nav-item mr-2">
            <Button className="nav-btn btn-cart" variant="link">
              <img src={shoppingCartIcon} alt="shoppingcart-icon" />
              <span class="badge badge-warning" id="lblCartCount">
                {" "}
                1{" "}
              </span>
            </Button>
          </div>
        </div>
      </Container>
    </Navbar>
  );
};

export default Topbar;

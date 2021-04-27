import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { useHistory } from 'react-router-dom';
import { useState, useRef } from 'react';
import { Dropdown } from 'primereact/dropdown';
import './Topbar.scss';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { get } from 'lodash';

const Topbar = (props) => {
  const { bg, variant, logoIcon, locationIcon, country, countriesList, searchIcon, userLoginIcon, shoppingCartIcon, showLogin, onCountrySelected } = props;
  const user = localStorage.getItem('first_name');
  const history = useHistory();
  const [selectedCountry, setSelectedCountry] = useState('United Arab Emirates' );
//   const countries = [
//     {name: 'Australia', code: 'AU'},
//     {name: 'Brazil', code: 'BR'},
//     {name: 'China', code: 'CN'},
//     {name: 'Egypt', code: 'EG'},
//     {name: 'France', code: 'FR'},
//     {name: 'Germany', code: 'DE'},
//     {name: 'India', code: 'IN'},
//     {name: 'Japan', code: 'JP'},
//     {name: 'Spain', code: 'ES'},
//     {name: 'United States', code: 'US'}
// ];

  const getProfile = () => {
    return (
      <Button
        className="nav-btn mr-2"
        variant="info"
        onClick={() => history.push({ pathname: '/auth/login' })}>
        <img src={userLoginIcon} alt="Icon" className="mr-3" />
        Log in
      </Button>
    );
  };

  // const getCountriesDD = () => {
  //   return countriesList.map((c, i) => <NavDropdown.Item key={i}>{c}</NavDropdown.Item>);
  // };
  const onCountryChange = (e) => {
    setSelectedCountry(e.value);
    onCountrySelected(e.value);
  };
  const selectedCountryTemplate = (option, props) => {
    if (option) {
      return (
        <div className="country-item country-item-value">
          <div>{option}</div>
        </div>
      );
    }
    return (
      <span>
        {props.placeholder}
      </span>
    );
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option}</div>
      </div>
    );
  };
  return (
    <Navbar bg={bg} variant={variant}>
      <Form inline className="mx-auto">
        <Navbar.Brand className="pl-3">
          <img src={logoIcon} alt="Icon" />
        </Navbar.Brand>
        <Nav className="pl-3">
        <span className="location">
            <small>I am gifting to</small>
          </span>
        <span className="location">
          <small>I am gifting to</small>
        </span>
        <img src={locationIcon} alt="Icon" />
          <Dropdown value={selectedCountry}
          options = {countriesList.sort()}
          onChange={onCountryChange}
          filter
          placeholder="Select a Country"
          optionLabel="name"
          valueTemplate={selectedCountryTemplate}
          itemTemplate={countryOptionTemplate}/>
        </Nav>
        <InputGroup className="pl-3">
          <FormControl
            className="search-button"
            placeholder="What are you looking for ?"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <Button className="search-button-b" variant="light">
              <img src={searchIcon} alt="search-icon" />
            </Button>
          </InputGroup.Append>
        </InputGroup>
        <div className="pl-3">
          <Button className="nav-btn mr-2 text-white">For Business</Button>{' '}
          <Button className="nav-btn mr-2" variant="info">
            Redeem Your Gifti Global Card
          </Button>{' '}
          {getProfile()}
          <Button className="nav-btn-link" variant="link">
            <img src={shoppingCartIcon} alt="shoppingcart-icon" />
           <span class='badge badge-warning' id='lblCartCount'> 1 </span>
          </Button>
        </div>
      </Form>
    </Navbar>
  );
};

export default Topbar;

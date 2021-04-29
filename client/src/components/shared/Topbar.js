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
import {Dropdown as Dropdown1} from 'react-bootstrap';
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
  const [selectedCountry, setSelectedCountry] = useState('United Arab Emirates');

  const clearsession = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.location.reload();
  };

  const getProfile = () => {
    if (showLogin) {
      return (
        <Button
          className="nav-login mr-2"
          variant="info"
          onClick={() => history.push({ pathname: '/auth/login' })}>
          <img src={userLoginIcon} alt="Icon" className="mr-3" />
          Log in
        </Button>
      );
    }
    return (
      <Dropdown1 className="pt-1">
        <Dropdown1.Toggle variant="info" className="nav-btn">
          <span>
            <img src={userLoginIcon} alt="Icon" className="mr-2" />
          </span>
          {user}
        </Dropdown1.Toggle>
        <Dropdown1.Menu>
          <Dropdown1.Item eventKey="1">Profile</Dropdown1.Item>
          <Dropdown1.Item eventKey="2">Gifti Global Points</Dropdown1.Item>
          <Dropdown1.Item onClick={() => history.push({ pathname: '/order/allorder' })}>Orders</Dropdown1.Item>
          <Dropdown1.Item onClick={clearsession}>Logout</Dropdown1.Item>
        </Dropdown1.Menu>
      </Dropdown1>
    );
  };
  const onCountryChange = (e) => {
    console.log('e ', e);
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
    return (
      <span>
        {props.placeholder}
      </span>
    );
  };
  const countryOptionTemplate = (option) => {
    return (
      <div className="country-item">
        <div>{option.country_name}</div>
      </div>
    );
  };
  return (
    <Navbar bg={bg} variant={variant}>
      <Form inline >
        <Navbar.Brand className="pl-3" onClick={() => history.push({ pathname: '/' })}>
          <Button variant="white">
            <img src={logoIcon} alt="Icon" />
          </Button>
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
            options={countriesList}
            onChange={onCountryChange}
            filter
            filterBy="country_name"
            placeholder="United Arab Emirates"
            optionLabel="country_name"
            valueTemplate={selectedCountryTemplate}
            itemTemplate={countryOptionTemplate} />
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
        <Row className="pl-3">
          <Col className="mt-1">
            <Button className="nav-btn mr-2 text-white">For Business</Button>{' '}
            <Button className="nav-btn" variant="info">
              Redeem Your Gifti Global Card
            </Button>{' '}
          </Col>

          {getProfile()}
          <Button className="nav-btn-link " variant="link">
            <img src={shoppingCartIcon} alt="shoppingcart-icon" />
            <span class='badge badge-warning' id='lblCartCount'> 1 </span>
          </Button>
        </Row>
      </Form>
    </Navbar>
  );
};

export default Topbar;
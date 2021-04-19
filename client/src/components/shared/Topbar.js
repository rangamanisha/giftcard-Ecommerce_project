import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { useHistory } from 'react-router-dom';
import {isEmpty} from 'lodash';

import './Topbar.scss';

const Topbar = (props) => {
    const { bg, variant, logoIcon, locationIcon, country, countriesList, searchIcon, userLoginIcon, shoppingCartIcon, showLogin, onCountrySelected } = props;
    const history = useHistory();

    const getProfile = () => {
        return (
            <Button className="nav-btn mr-2" variant="info" onClick={() => history.push({ pathname: '/auth/login' })}>
                <img src={userLoginIcon} alt="Icon" className="mr-3" />Log in</Button>
        )
    }

    const getCountriesDD = () => {
        return countriesList.map((c, i) => (<NavDropdown.Item key={i}>{c}</NavDropdown.Item>));
    }

    return (
        <Navbar bg={bg} variant={variant}>
            <Form inline className="mx-auto">
                <Navbar.Brand className="pl-3"><img src={logoIcon} alt="Icon" /></Navbar.Brand>
                <Nav className="pl-3">
                    <span className="location"><small>I am gifting to</small></span>
                    <img src={locationIcon} alt="Icon" />
                    <NavDropdown  title={isEmpty(country) ?  countriesList[0] : country} id="basic-nav-dropdown" onClick={(val) => onCountrySelected(val)}>
                        {getCountriesDD()}
                    </NavDropdown>
                </Nav>
                <InputGroup className="pl-3">
                    <FormControl
                        className="search-button"
                        placeholder="What are you looking for ?"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <InputGroup.Append>
                        <Button className="search-button-b" variant="light"><img src={searchIcon} alt="search-icon" /></Button>
                    </InputGroup.Append>
                </InputGroup>
                <div className="pl-3">
                    <Button className="nav-btn mr-2 text-white">For Business</Button>{' '}
                    <Button className="nav-btn mr-2" variant="info">Redeem Your Gifti Global Card</Button>{' '}
                    {getProfile()}
                    <Button className="nav-btn-link" variant="link">
                        <img src={shoppingCartIcon} alt="shoppingcart-icon" />
                    </Button>
                </div>
            </Form>
        </Navbar>
    )
}

export default Topbar;
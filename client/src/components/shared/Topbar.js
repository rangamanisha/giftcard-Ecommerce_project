import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import { useHistory } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import './Topbar.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Topbar = (props) => {

    const { bg, variant, logoIcon, locationIcon, country, countriesList, searchIcon, userLoginIcon, shoppingCartIcon, showLogin, onCountrySelected, profileIcon, coinsIcon, exitIcon, cartIcon } = props;
    
    const user = localStorage.getItem("first_name");
    const history = useHistory();
         
    const clearsession = () => {
        localStorage.clear();
        sessionStorage.clear();
        window.location.reload();
    }

    const getProfile = () => {
        if (showLogin) {
            return (
                <Button className="nav-login mr-2" variant="info" onClick={() => history.push({ pathname: '/auth/login' })}>
                <img src={userLoginIcon} alt="Icon" className="mr-3" />Log in</Button>
            );
        }

        
       const handleClick = () => history.push("/profile");
        return (

            <Dropdown className="pt-1">
                <Dropdown.Toggle variant="info" className="nav-btn">
                  <span>
                    <img src={userLoginIcon} alt="Icon" className="mr-2" />
                  </span>
                  {user}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item className="userfont-dropdown border-line" onClick={handleClick}><img src={profileIcon} alt="Icon" className="mr-2"/>Profile</Dropdown.Item>
                  <Dropdown.Item className="userfont-dropdown border-line">
                  <img src={coinsIcon} alt="Icon" className="mr-2"/>Gifti Global Points
                  </Dropdown.Item>
                  <Dropdown.Item className="userfont-dropdown border-line"><img src={cartIcon} alt="Icon" className="mr-2"/>Orders</Dropdown.Item>
                  <Dropdown.Item className="userfont-dropdown border-line"onClick={clearsession}><img src={exitIcon} alt="Icon" className="mr-2"/>Logout</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
         
        );
    }

    const getCountriesDD = () => {
        return countriesList.map((c, i) => (<NavDropdown.Item key={i}>{c}</NavDropdown.Item>));
    }

    return (
        <Navbar bg={bg} variant={variant}>
            <Form inline className="mx-auto">
                <Navbar.Brand className="pl-3" onClick={() => history.push({ pathname: '/' })}><Button  variant="white"><img src={logoIcon} alt="Icon" /></Button></Navbar.Brand>
                <Nav className="pl-3">
                    <span className="location"><small>I am gifting to</small></span>
                    <img src={locationIcon} alt="Icon" />
                    <NavDropdown title={country || countriesList[0]} id="basic-nav-dropdown" onClick={(val) => onCountrySelected(val)}>
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
                <Row className="pl-3"> 
                    <Col className="mt-1">
                    <Button className="nav-btn mr-2 text-white">For Business</Button>{' '}
                    <Button className="nav-btn" variant="info">Redeem Your Gifti Global Card</Button>{' '}
                    </Col>

                 
                      {getProfile()}
                        <Button className="nav-btn-link " variant="link">
                            <img src={shoppingCartIcon} alt="shoppingcart-icon" />
                        </Button>

            
                </Row>
            </Form>
        </Navbar>
    )
}

export default Topbar;
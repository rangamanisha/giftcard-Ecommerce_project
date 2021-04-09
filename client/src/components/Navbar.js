import React from 'react';
import { useHistory  } from 'react-router-dom';
import { Navbar, NavDropdown, Nav , Button, FormControl, InputGroup } from 'react-bootstrap';
import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import Shoppingcart from '../assets/shopping-cart.svg';
import UserLogin from '../assets/User-login.svg';
import Location from '../assets/location.svg';


  const Navbars = () => {
  let history = useHistory();
  const handleClick = () => history.push("/auth/login");
  
  return (
    <div>

    <Navbar bg="light" variant="light">
      <Navbar.Brand ><img src={Logo} alt="Icon"/></Navbar.Brand>
      <Nav className="mr-sm-4">
      <span className="location"><small>I am gifting to</small></span>  
      <img src={Location} alt="Icon"/>
      <NavDropdown title="United Arab Emirates" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Oman</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Saudi Arabia</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Kuwait</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>

    
  <InputGroup className="mr-lg-5 search-field">
  <FormControl
      className="search-button"
      placeholder="What are you looking for ?"
      aria-label="Recipient's username"
      aria-describedby="basic-addon2"
   /> 
    <InputGroup.Append>
      <Button className="search-button-b" variant="light"><img src={Search} alt="Icon"/></Button>
    </InputGroup.Append>
  </InputGroup>  
   
    <Button className="mr-sm-3 Navbar-button text-white">For Business</Button>{' '}
    <Button className="mr-sm-3 Navbar-button-b" variant="info">Redeem Your Gifti Global Card</Button>{' '}
    <Button className="mr-sm-3 Navbar-button-c" variant="info" onClick={handleClick}><img src={UserLogin} alt="Icon" className="mr-sm-3"/>Log in</Button>
    <img src={Shoppingcart} alt="Icon" style={{width:'38px'}}/>  
    </Navbar>
  </div>
  );
}

export default Navbars;

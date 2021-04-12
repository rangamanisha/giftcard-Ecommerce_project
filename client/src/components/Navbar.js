import { Link  } from 'react-router-dom';
import { Navbar, NavDropdown, Nav , Button, Form, FormControl, InputGroup } from 'react-bootstrap';
import Logo from '../assets/logo.svg';
import Search from '../assets/search.svg';
import Shoppingcart from '../assets/shopping-cart.svg';
import UserLogin from '../assets/User-login.svg';
import Location from '../assets/location.svg';



  const Navbars = (props) => {
  return (

<Navbar bg="white" variant="white">
 <Form inline className="mx-auto">
 <Navbar.Brand className="pl-3"><img src={Logo} alt="Icon"/></Navbar.Brand>
  <Nav className="pl-3">
      <span className="location"><small>I am gifting to</small></span>  
      <img src={Location} alt="Icon"/>
      <NavDropdown title="United Arab Emirates" id="basic-nav-dropdown">
        {props.country}
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
          <Button className="search-button-b" variant="light"><img src={Search} alt="search-icon"/></Button>
        </InputGroup.Append>
      </InputGroup>
      <div className="pl-3">
        <Button className="nav-btn mr-2 text-white">For Business</Button>{' '}
        <Button className="nav-btn mr-2" variant="info">Redeem Your Gifti Global Card</Button>{' '}
        <Link to='/auth/login'>
        <Button className="nav-btn mr-2" variant="info">
          <img src={UserLogin} alt="Icon" className="mr-3" />Log in</Button></Link> 

          <Link>
          <Button className="nav-btn-link" variant="link">
          <img src={Shoppingcart} alt="shoppingcart-icon" />
        </Button></Link>      
       
        </div>
      </Form>
      </Navbar>    
  );
}

export default Navbars;

import React from 'react';
import ReactBootstrap, {
    Button,
    Form,
    FormControl,
    Col,
    Row,
    InputGroup,
  } from "react-bootstrap";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Emailicon from '../assets/Email-icon.svg';
import Usericon from '../assets/User-icon.svg';
import Passwordicon from '../assets/Password-icon.svg';


const Signup = () => {
    return (
        <div className="body">
          <Navbar />
          <div>
          <div className="login-card mx-auto mt-5">
        <p className="login-text text-center h3 pt-5">Create an Account</p>
        <p className="text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form>
        <div className="row">
        <Form.Group controlId="formBasicText" className="singup-input mr-sm-3 icons_login">
            <Form.Control size="lg" type="text" placeholder="First Name" className="icons_fields"/>
            <img
                src={Usericon}
                alt="Icon"
                className="icon_img"
              />
        </Form.Group>
        <Form.Group controlId="formBasicText" className="singup-inputfield mr-sm-3">
            <Form.Control size="lg" type="text" placeholder="Last Name"  className="icons_fields_b"/>
        </Form.Group>
        </div>

          <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="email" placeholder="Enter email" className="icons_fields"/>
            <img
                src={Emailicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Password" className="icons_fields"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Confirm Password" className="icons_fields"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>
          
          <Button className="btn-custom mt-3" variant="info" size="lg">
            Sign up
          </Button>

          <p className="text-center mt-3">Already have an account ? Log in</p>

          <table width="100%">
            <tbody>
              <tr>
                <td>
                  <hr />
                </td>
                <td
                  style={{
                    width: "1px",
                    padding: "0 10px",
                    whiteSpace: "nowrap",
                  }}
                >
                  or sign up with
                </td>
                <td>
                  <hr />
                </td>
              </tr>
            </tbody>
          </table>
        </Form>
      </div>

          </div>
          <Footer />  
        </div>
    )
}

export default Signup;

import React from 'react';
import Emailicon from '../assets/Email-icon.svg';
import { Button, Form } from "react-bootstrap";
import Footer from "./Footer";

function ForgotPassword() {
  return (
    <>
      <div className="forgot-password mx-auto">
        <p className="login-text text-center h3 pt-5">Forgot your password?</p>
        <p className="text-center mt-0">
          <small>Enter your email below</small>
        </p>

        <Form>
          <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login mt-5">
            <Form.Control size="lg" type="email" placeholder="Enter email" className="icons_fields" />
            <img
              src={Emailicon}
              alt="Icon"
              className="icon_img"
            />
          </Form.Group>

          <Button className="btn-custom mt-3" variant="info" size="lg">
            Reset my Password
          </Button>
        </Form>
      </div>
      <Footer />
    </>
  )
}

export default ForgotPassword;

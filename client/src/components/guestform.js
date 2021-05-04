import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Usericon from "../assets/User-icon.svg";
import Emailicon from "../assets/Email-icon.svg";

const GuestForm = () => {
  return (
    <>
      <div className="Guestform-card mx-auto">
        <p className="login-text text-center h3 pt-5">Checkout as guest</p>
        <p className="login-sub-text text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form className="user">
          <div className="row">
            <Form.Group
              controlId="formBasicText"
              className="singup-input mr-sm-3 icons_login"
            >
              <Form.Control
                size="md"
                type="text"
                placeholder="First Name"
                className="icons_fields"
                value=""
                name="first_name"
              />
              <img src={Usericon} alt="Icon" className="icon_img" />
            </Form.Group>
            <Form.Group
              controlId="formBasiclast-name"
              className="singup-inputfield mr-sm-3"
            >
              <Form.Control
                size="lg"
                type="text"
                placeholder="Last Name"
                className="icons_fields_b"
                value=""
                onChange=""
                name="last_name"
              />
            </Form.Group>
          </div>

          <Form.Group
            controlId="formBasicEmail"
            className="w-75 mx-auto icons_login"
          >
            <Form.Control
              size="md"
              type="email"
              placeholder="Enter email"
              value=""
              onChange=""
              className="icons_fields"
              name="email"
            />
            <img src={Emailicon} alt="Icon" className="icon_img" />
          </Form.Group>

          <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="Submit"
          >
            Next
          </Button>
        </Form>
      </div>
    </>
  );
};

export default GuestForm;

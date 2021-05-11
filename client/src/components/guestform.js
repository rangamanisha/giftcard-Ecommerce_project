import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Usericon from "../assets/User-icon.svg";
import Emailicon from "../assets/Email-icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const GuestForm = () => {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().min(1).max(500),
      last_name: Yup.string().min(1).max(500),
      email: Yup.string().min(2).max(500).email("Please enter valid email"),
    }),
  });

  return (
    <>
      <div className="Guestform-card mx-auto">
        <p className="login-text text-center h3 pt-5">Checkout as guest</p>
        <p className="login-sub-text text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form className="user" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Form.Group
                controlId="formBasicText"
                className="singup-input icons_login"
              >
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="First Name"
                  className="icons_fields"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  name="first_name"
                  isInvalid={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
                <img src={Usericon} alt="Icon" className="icon_img" />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group
                controlId="formBasiclast-name"
                className="singup-inputfield"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name"
                  className="icons_fields_b"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  name="last_name"
                  isInvalid={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Form.Group controlId="formBasicEmail4" className="icons_login">
                <Form.Control
                  size="md"
                  type="email"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="icons_fields"
                  name="email"
                  isInvalid={formik.touched.email && formik.errors.email}
                />
                <img src={Emailicon} alt="Icon" className="icon_img" />
              </Form.Group>
            </div>
          </div>
          <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="button"
          >
            Next
          </Button>
        </Form>
      </div>
    </>
  );
};

export default GuestForm;

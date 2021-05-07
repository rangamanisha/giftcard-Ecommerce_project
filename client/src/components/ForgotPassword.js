import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Emailicon from "../assets/Email-icon.svg";
import { Button, Form } from "react-bootstrap";
import { getAuthState } from "../reducer/auth.reducer";
import * as Yup from "yup";
import { useFormik } from "formik";
import { forgotpasswordAction } from "../actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { useEffect } from "react";

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().min(2).max(200).email().required(),
    }),
    onSubmit: (data) => {
      console.log(data);
      dispatch(forgotpasswordAction(data));
    },
  });

  useEffect(() => {
    if (state.status === "OK") {
      history.push({ pathname: "/" });
    }
  });

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="forgot-password mx-auto">
              <p className="login-text text-center h3 ">
                Forgot your password?
              </p>
              <p className="text-center mt-0">
                <small>Enter your email below</small>
              </p>

              <Form onSubmit={formik.handleSubmit}>
                <Form.Group controlId="formBasicEmail" className="icons_login">
                  <Form.Control
                    size="md"
                    type="email"
                    placeholder="Enter email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    className="icons_fields"
                    name="email"
                  />
                  <img src={Emailicon} alt="Icon" className="icon_img" />
                </Form.Group>

                {formik.errors.email ? (
                  <p className="validation-messages">{formik.errors.email}</p>
                ) : null}
                {state.errors && state.errors.length ? (
                  <p className="validation-messages">
                    {state.errors.join("\n")}
                  </p>
                ) : null}

                <Button
                  className="btn-custom"
                  variant="info"
                  size="lg"
                  type="Submit"
                >
                  Reset my Password
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ForgotPassword;

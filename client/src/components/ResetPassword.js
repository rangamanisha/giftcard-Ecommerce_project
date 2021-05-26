import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import Passwordicon from "../assets/Password-icon.svg";
import * as Yup from "yup";
import { getAuthState } from "../reducer/auth.reducer";
import { useFormik } from "formik";
import {
  resetpasswordAction,
  updatepasswordAction,
} from "../actions/auth.actions";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
      token: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Password is required'),
      password_confirmation: Yup.string().required('Confirm your password')
         .oneOf([Yup.ref('password'), null], 'Passwords must match')
    })
    ,
    onSubmit: (data) => {
      if (state.isAuthenticated) {
        dispatch(updatepasswordAction(data));
      } else {
        dispatch(resetpasswordAction(data));
      }
    },
        validateOnChange: false,
  });

  useEffect(() => {
    const token = history.location.search.substring(
      1,
      history.location.search.length
    );
    formik.setFieldValue("token", token);
  }, []);

  useEffect(() => {
    if (state.reset) {
      history.push({ pathname: "/auth/login" });
    }
  }, [state.reset, history]);

  return (
    <>
      <Container>
        <Row>
          <Col>
            <div className="forgot-password mx-auto">
              <p className="login-text text-center h3">Enter your Password</p>
              <Form className="mt-4" onSubmit={formik.handleSubmit}>
                <Form.Group
                  controlId="formBasicnew_password"
                  className="icons_login"
                >
                  <Form.Control
                    size="md"
                    type="password"
                    placeholder="new password"
                    className="icons_fields"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                  />
                  <img src={Passwordicon} alt="Icon" className="icon_img" />
                </Form.Group>
                {formik.touched.password && formik.errors.password ? (
                  <p className="validation-messages">
                    {formik.errors.password}
                  </p>
                ) : null}

                <Form.Group
                  controlId="formBasicconfirm_password"
                  className="icons_login"
                >
                  <Form.Control
                    size="md"
                    type="password"
                    placeholder="ConfirmPassword"
                    className="icons_fields"
                    value={formik.values.password_confirmation}
                    onChange={formik.handleChange}
                    name="password_confirmation"
                  />
                  <img src={Passwordicon} alt="Icon" className="icon_img" />
                </Form.Group>
                {formik.touched.password_confirmation &&
                formik.errors.password_confirmation ? (
                  <p className="validation-messages">
                    {formik.errors.password_confirmation}
                  </p>
                ) : null}
                <Button
                  className="btn-custom"
                  variant="info"
                  size="lg"
                  type="submit"
                >
                  ok
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ResetPassword;

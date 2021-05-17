import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Emailicon from "../assets/Email-icon.svg";
import Usericon from "../assets/User-icon.svg";
import Passwordicon from "../assets/Password-icon.svg";
import { signupAction } from "../actions/auth.actions";
import { getAuthState, authActions } from "../reducer/auth.reducer";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleLogin from "react-google-login";
import Facebookicon from "../assets/Facebook-icon.svg";
import { loginAction, googlesigninAction } from "../actions/auth.actions";

const Signup = () => {
  const googleId = `${process.env.REACT_APP_GOOGLE_API_KEY || ""}`;
  const fbId = `${process.env.REACT_APP_FB_APP_ID || ""}`;
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const history = useHistory();
  const [showPass, setPass] = useState(false);
  const togglePass = () => {
    setPass(showPass ? false : true);
  };
  const eye = <FontAwesomeIcon icon={faEye} />;

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },

    validationSchema: Yup.object({
      first_name: Yup.string().min(2).max(200).required(),
      last_name: Yup.string().min(2).max(200).required(),
      email: Yup.string().min(2).max(200).email().required(),
      password: Yup.string().min(2).max(200).required(),
      password_confirmation: Yup.string().min(2).max(200).required(),
    }),
    onSubmit: (data) => {
      dispatch(signupAction(data));
      formik.resetForm();
    },
    validateOnChange: false,
  });

  useEffect(() => {
    if (state.signupSuccess) {
      history.push({ pathname: "/" });
    }
  }, [state.signupSuccess, history]);
  React.useEffect(() => {
    return dispatch(authActions.clearErrors());
  });
  const responseGoogle = (response) => {
    const accessToken = response.accessToken;
    dispatch(googlesigninAction({ accessToken }));
  };

  return (
    <>
      <Container>
        <div>
          <div className="login-card mx-auto">
            <p className="login-text text-center h3 pt-5">Create an Account</p>
            <p className="text-center mt-0">
              <small>Enter to continue and explore within your grasp</small>
            </p>

            <Form onSubmit={formik.handleSubmit} className="user">
              <Row>
                <Col md={7}>
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
                    />
                    <img src={Usericon} alt="Icon" className="icon_img" />
                  </Form.Group>
                </Col>
                <Col md={5}>
                  <Form.Group
                    controlId="formBasiclast-name"
                    className="singup-inputfield "
                  >
                    <Form.Control
                      size="md"
                      type="text"
                      placeholder="Last Name"
                      className="icons_fields_b"
                      value={formik.values.last_name}
                      onChange={formik.handleChange}
                      name="last_name"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  {formik.errors.first_name ? (
                    <p className="validation-messages">
                      {formik.errors.first_name}
                    </p>
                  ) : null}
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group
                    controlId="formBasicEmail6"
                    className="icons_login"
                  >
                    <Form.Control
                      size="md"
                      type="email"
                      placeholder="Enter email"
                      className="icons_fields"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      name="email"
                    />
                    <img src={Emailicon} alt="Icon" className="icon_img" />
                  </Form.Group>
                  {formik.errors.email ? (
                    <p className="validation-messages">{formik.errors.email}</p>
                  ) : null}

                  <Form.Group
                    controlId="formBasicPassword"
                    className="icons_login"
                  >
                    <Form.Control
                      size="md"
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      className="icons_fields"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                    />
                    <img src={Passwordicon} alt="Icon" className="icon_img" />
                    <i onClick={togglePass} className="icon_right">
                      {eye}
                    </i>{" "}
                  </Form.Group>
                  {formik.errors.password ? (
                    <p className="validation-messages">
                      {formik.errors.password}
                    </p>
                  ) : null}
                  <Form.Group
                    controlId="formBasic-confirmPassword"
                    className="icons_login"
                  >
                    <Form.Control
                      size="md"
                      type={showPass ? "text" : "password"}
                      placeholder="Confirm Password"
                      className="icons_fields"
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      name="password_confirmation"
                    />
                    <i onClick={togglePass} className="icon_right">
                      {eye}
                    </i>{" "}
                    <img src={Passwordicon} alt="Icon" className="icon_img" />
                  </Form.Group>
                  {formik.errors.password_confirmation ? (
                    <p className="validation-messages">
                      {formik.errors.password_confirmation}
                    </p>
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
                    type="submit"
                  >
                    Sign up
                  </Button>

                  <p className="login-bottom-text text-center mt-3">
                    Already have an account ?{" "}
                    <Link to="/auth/login">Log in</Link>
                  </p>

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
                          className="login-bottom-text"
                        >
                          or sign up with
                        </td>
                        <td>
                          <hr />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className="social-btn">
                    <div className="google mr-3">
                      <GoogleLogin
                        style={{ display: "block" }}
                        variant="outline-light"
                        className="google-button"
                        clientId={googleId}
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                      ></GoogleLogin>
                    </div>
                    <div className="facebook">
                      <Button
                        variant="outline-light"
                        className="facebook-button"
                        provider="facebook"
                        appId={fbId}
                      >
                        <img
                          src={Facebookicon}
                          style={{ width: "50px", height: "50px" }}
                          alt="Icon"
                        />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Signup;

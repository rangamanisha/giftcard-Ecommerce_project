import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Usericon from "../assets/User-icon.svg";
import Passwordicon from "../assets/Password-icon.svg";
import Facebookicon from "../assets/Facebook-icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";
import Alert from "react-bootstrap/Alert";
import { getAuthState, authActions } from "../reducer/auth.reducer";
import { loginAction, logoutAction } from "../actions/auth.actions";
import { useHistory } from "react-router";
import Fade from "react-bootstrap/Fade";
import { Link } from "react-router-dom";
import checkbox from "../assets/checkbox.svg";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
// import FacebookLogin from "react-facebook-login";

import { getuseractiveAction } from "../actions/useractive.actions";
import { getUserActiveState } from "../reducer/useractive.reducer";

const Login = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const useractive = useSelector(getUserActiveState);
  const history = useHistory();
  const [isValid, setIsValid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");
  const [loginBtnClicked, setLoginBtnClicked] = useState(false);

  const googleId = `${process.env.REACT_APP_GOOGLE_API_KEY || ""}`;
  const fbId = `${process.env.REACT_APP_FB_APP_ID || ""}`;

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
      password: Yup.string().min(2).max(200).required("Password is required"),
    }),
    onSubmit: (data) => {
      setLoginBtnClicked(true);
      dispatch(loginAction(data));
    },
    validateOnChange: false,
  });

  useEffect(() => {
    localStorage.clear();
    dispatch(logoutAction());
  }, []);

  useEffect(() => {
    const search = history.location.search;
    if (search.indexOf("?confirm_account=") !== -1) {
      const token = search.split("confirm_account=")[1];
      const data = { token };
      dispatch(getuseractiveAction(data));
      if (useractive.verified === true) {
        setIsValid(true);
        setMessage(
          "Your account has been successfully created. Go to profile !"
        );
        window.setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    }
  }, [dispatch, useractive.verified, history]);

  useEffect(() => {
    if (loginBtnClicked && state.isAuthenticated) {
      history.push({ pathname: "/" });
    }

    if (state.reset) {
      setIsValid(true);
      setMessage("Your Password has been successfully updated.");
      window.setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [state.isAuthenticated, state.reset, history]);

  const googleLoginSuccess = (event) => {
    setLoginBtnClicked(true);
    dispatch(
      loginAction({
        provider: "Google",
        token_type: "access_token",
        token: event.accessToken,
        expires_at: event?.tokenObj?.expires_at,
      })
    );
  };

  const googleLoginFailure = (event) => {
    console.log("error ", event);
    dispatch(authActions.setErrors(["Login failed, Please try again..."]));
  };

  const facebookLoginSuccess = (event) => {
    setLoginBtnClicked(true);
    dispatch(
      loginAction({
        provider: "Facebook",
        token_type: "access_token",
        token: event.accessToken,
        expires_at: event?.data_access_expiration_time,
      })
    );
  };

  const facebookLoginFailure = (event) => {
    console.log("error ", event);
    dispatch(authActions.setErrors(["Login failed, Please try again..."]));
  };

  return (
    <>
      <div>
        {isValid ? (
          <Fade>
            <Alert variant="info" transition={visible}>
              <img
                src={checkbox}
                className="mr-3"
                style={{ width: "30px" }}
                alt="Icon"
              />
              {message}
            </Alert>
          </Fade>
        ) : (
          <></>
        )}
      </div>

      <Container>
        <Row>
          <Col>
            <div className="login-card mx-auto">
              <p className="login-text text-center h3 pt-5">
                Login to your Account
              </p>
              <p className="login-sub-text text-center mt-0">
                <small>Enter to continue and explore within your grasp</small>
              </p>

              <Form onSubmit={formik.handleSubmit} className="user login-form">
                <Form.Group controlId="formBasicEmail5" className="icons_login">
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
                  <img src={Usericon} alt="Icon" className="icon_img" />
                </Form.Group>

                {formik.touched.email && formik.errors.email ? (
                  <p className="validation-messages">{formik.errors.email}</p>
                ) : null}

                <Form.Group
                  controlId="formBasicPassword"
                  className="icons_login"
                >
                  <Form.Control
                    size="md"
                    type="password"
                    placeholder="Password"
                    className="icons_fields"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    name="password"
                    isInvalid={
                      formik.touched.password && formik.errors.password
                    }
                  />
                  <img src={Passwordicon} alt="Icon" className="icon_img" />
                </Form.Group>

                {formik.touched.password && formik.errors.password ? (
                  <p className="validation-messages">
                    {formik.errors.password}
                  </p>
                ) : null}

                <div className="redio-forgot">
                  <Form.Group className="forgot" style={{ textAlign: "left" }}>
                    <Link
                      className="link-color"
                      to={{
                        pathname: "/auth/forgotpassword",
                        state: { idc: false },
                      }}
                    >
                      Forgot Password?
                    </Link>
                  </Form.Group>
                </div>

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
                  Login to Continue
                </Button>

                <p className="login-bottom-text text-center mt-3">
                  Don’t have an account ? <Link to="/auth/signup">Sign up</Link>
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
                        or sign in with
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
                      onSuccess={googleLoginSuccess}
                      onFailure={googleLoginFailure}
                      isSignedIn={false}
                    />
                  </div>
                  <div className="facebook">
                    <FacebookLogin
                      appId={fbId}
                      callback={facebookLoginSuccess}
                      onFailure={facebookLoginFailure}
                      size="medium"
                      autoLoad={false}
                      render={(renderProps) => (
                        <button onClick={renderProps.onClick}>
                          <img
                            src={Facebookicon}
                            variant="outline-light"
                            autoLoad
                            auto_logout_link={`true`}
                            className="facebook-button"
                            style={{ width: "50px", height: "50px" }}
                            alt="Icon"
                          />
                        </button>
                      )}
                    />
                  </div>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;

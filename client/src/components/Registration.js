import React from "react";
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
import { getAuthState } from "../reducer/auth.reducer";
import { useFormik } from "formik";
import { useHistory } from "react-router";
import * as Yup from "yup";
import { Link } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const history = useHistory();

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
      console.log("data ", data);
      dispatch(signupAction(data));
    },
  });

  useEffect(() => {
    if (state.signupSuccess) {
      history.push({ pathname: "/" });
    }
  }, [state.signupSuccess, history]);

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
                    controlId="formBasicEmail"
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
                      type="password"
                      placeholder="Password"
                      className="icons_fields"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                      name="password"
                    />
                    <img src={Passwordicon} alt="Icon" className="icon_img" />
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
                      type="password"
                      placeholder="password confirmation"
                      className="icons_fields"
                      value={formik.values.password_confirmation}
                      onChange={formik.handleChange}
                      name="password_confirmation"
                    />
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

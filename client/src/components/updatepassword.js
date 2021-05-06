import React from "react";
import { useState, useEffect } from "react";
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
import Fade from "react-bootstrap/Fade";
import Alert from "react-bootstrap/Alert";
import checkbox from "../assets/checkbox.svg";

const UpdatePassword = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const [isValid, setIsValid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
    },
    validationSchema: Yup.object({
      password: Yup.string().min(2).max(200).required(),
      password_confirmation: Yup.string().min(2).max(200).required(),
    }),
    onSubmit: (data) => {
      dispatch(updatepasswordAction(data));
      formik.resetForm();
    },
  });

  useEffect(() => {
    if (state.message === "Password updated successfully!") {
      setIsValid(true);
      setMessage("Password updated successfully!");
      window.setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [state.message]);

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
      <div className="forgot-password mx-auto">
        <p className="login-text text-center h3 pt-5">Enter your Password</p>
        <Form className="mt-4" onSubmit={formik.handleSubmit}>
          <Form.Group
            controlId="formBasicnew_password"
            className="w-75 mx-auto icons_login"
          >
            <Form.Control
              size="lg"
              type="password"
              placeholder="new password"
              className="icons_fields"
              value={formik.values.password}
              onChange={formik.handleChange}
              name="password"
            />
            <img src={Passwordicon} alt="Icon" className="icon_img" />
          </Form.Group>
          {formik.errors.password ? (
            <p className="validation-messages">{formik.errors.password}</p>
          ) : null}

          <Form.Group
            controlId="formBasicconfirm_password"
            className="w-75 mx-auto icons_login"
          >
            <Form.Control
              size="lg"
              type="password"
              placeholder="ConfirmPassword"
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
          <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="submit"
          >
            ok
          </Button>
        </Form>
      </div>
    </>
  );
};

export default UpdatePassword;

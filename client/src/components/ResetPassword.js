import React from 'react';
import { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import Passwordicon from '../assets/Password-icon.svg';
import * as Yup from 'yup';
import { getAuthState } from '../reducer/auth.reducer';
import { useFormik } from 'formik';
import { resetpasswordAction } from '../actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const ResetPassword = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const history = useHistory();

  const value = localStorage.getItem('token');
  console.log(value);

  const formik = useFormik({
    initialValues: {
      password: '',
      password_confirmation: '',
      token: value
    },
    validationSchema: Yup.object({
      password: Yup.string().min(2).max(200).required(),
      password_confirmation: Yup.string().min(2).max(200).required()
    }),
    onSubmit: (data) => {
      console.log(data);
      dispatch(resetpasswordAction(data));
    }
  });

  useEffect(() => {
    localStorage.setItem('token', history.location['search'].split('?', 2)[1]);
    if (state.reset) {
      history.push({ pathname: '/auth/login' });
    }
  }, [state.reset, history]);

  return (
    <>
      <div className="forgot-password mx-auto">
        <p className="login-text text-center h3 pt-5">Enter your Password</p>
        <Form className="mt-4" onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formBasicnew_password" className="w-75 mx-auto icons_login">
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

          <Form.Group controlId="formBasicconfirm_password" className="w-75 mx-auto icons_login">
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
            <p className="validation-messages">{formik.errors.password_confirmation}</p>
          ) : null}
          <Button className="btn-custom mt-3" variant="info" size="lg" type="submit">
            ok
          </Button>
        </Form>
      </div>
    </>
  );
};

export default ResetPassword;

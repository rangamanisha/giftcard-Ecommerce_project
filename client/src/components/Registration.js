import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "./Footer";
import Emailicon from '../assets/Email-icon.svg';
import Usericon from '../assets/User-icon.svg';
import Passwordicon from '../assets/Password-icon.svg';
import { signupAction } from '../actions/auth.actions';
import { getAuthState } from '../reducer/auth.reducer'
import { useFormik } from 'formik';
import { useHistory } from 'react-router';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

const Signup = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const history = useHistory();


  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password : '',
      confirm_password: '',
    },

    validationSchema: Yup.object({
      first_name: Yup.string().min(2).max(200).required(),
      last_name: Yup.string().min(2).max(200).required(),
      email: Yup.string().min(2).max(200).email().required(),
      password: Yup.string().min(2).max(200).required(),
      confirm_password: Yup.string().min(2).max(200).required(),
    }),
    onSubmit: (data) => {
      console.log('data ', data);
      dispatch(signupAction(data));
    }
  });


  useEffect(() => {
    debugger;
    if (state.status) {
      history.push({ pathname: '/' })
    }
  },
[state.status, history]);

  return (
    <>
      <div>
        <div className="login-card mx-auto mt-5">
          <p className="login-text text-center h3 pt-5">Create an Account</p>
          <p className="text-center mt-0">
            <small>Enter to continue and explore within your grasp</small>
          </p>

          <Form onSubmit={formik.handleSubmit} className="user" >
            <div className="row">
              <Form.Group controlId="formBasicText" className="singup-input mr-sm-3 icons_login">
                <Form.Control size="md" type="text" placeholder="First Name" className="icons_fields" value={formik.values.first_name} onChange={formik.handleChange} name="first_name" />
                <img
                  src={Usericon}
                  alt="Icon"
                  className="icon_img"
                />
              </Form.Group> 
              <Form.Group controlId="formBasicText" className="singup-inputfield mr-sm-3">
                <Form.Control size="lg" type="text" placeholder="Last Name" className="icons_fields_b" value={formik.values.last_name} onChange={formik.handleChange} name="last_name" />
              </Form.Group>
            </div>

            <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login">
              <Form.Control size="md" type="email" placeholder="Enter email" className="icons_fields" value={formik.values.email} onChange={formik.handleChange} name="email" />
              <img
                src={Emailicon}
                alt="Icon"
                className="icon_img"
              />
            </Form.Group>
            {formik.errors.email ? (<p className="validation-messages">{formik.errors.email}</p>) : null}

            <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Password" className="icons_fields" value={formik.values.password} onChange={formik.handleChange} name="password"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Confirm Password" className="icons_fields" value={formik.values.confirm_password} onChange={formik.handleChange} name="confirm_password"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>
            <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="submit"
          >
            Sign up
          </Button>

            <p className="text-center mt-3">Already have an account ? <Link to="/auth/login">Log in</Link></p>

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
                  >
                    or sign up with
                </td>
                  <td>
                    <hr />
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Signup;

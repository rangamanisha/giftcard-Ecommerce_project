import React from 'react';
import { useEffect } from 'react';
import { Button, Form } from "react-bootstrap";
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




   const value = localStorage.getItem("access_token");
  
    const formik = useFormik({
        initialValues: {
            new_password:'',
            confirm_password: '',
            token: value
        },
        validationSchema: Yup.object({
            new_password: Yup.string().min(2).max(200).required(),
            confirm_password: Yup.string().min(2).max(200).required()
        }),
        onSubmit: (data) => {
          console.log(data);
          dispatch(resetpasswordAction(data));
        }
      });

      useEffect(() => {
        debugger;
        if (state.reset) {
          localStorage.setItem("access_token",history.location['search'].split("=",2)[1]);
          history.push({ pathname: '/auth/login' })
        }
      }, [state.reset, history]);
  

  return (
    <>
      <div className="forgot-password mx-auto">
        <p className="login-text text-center h3 pt-5">Enter your Password</p>
        <Form className="mt-4" onSubmit={formik.handleSubmit}>
        <Form.Group controlId="formBasicnew_password" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="new password" className="icons_fields" value={formik.values.new_password} onChange={formik.handleChange} name="new_password"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>
          {formik.errors.new_password ? (<p className="validation-messages">{formik.errors.new_password}</p>) : null}
          
          <Form.Group controlId="formBasicconfirm_password" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Confirm Password" className="icons_fields" value={formik.values.confirm_password} onChange={formik.handleChange} name="confirm_password"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>
          {formik.errors.confirm_password ? (<p className="validation-messages">{formik.errors.confirm_password}</p>) : null}
          <Button className="btn-custom mt-3" variant="info" size="lg" type="submit">
         ok
          </Button>
        </Form>
      </div>
    </>
  )
}

export default ResetPassword;

import React from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "./Footer";
import Emailicon from '../assets/Email-icon.svg';
import Usericon from '../assets/User-icon.svg';
import { signupAction } from '../actions/auth.actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Signup = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      country_name: '',
      phone: '',
      lang_key: 'en'
    },
    validationSchema: Yup.object({
      first_name: Yup.string().min(2).max(200).required(),
      last_name: Yup.string().min(2).max(200).required(),
      email: Yup.string().min(2).max(200).email().required(),
      country_name: Yup.string().min(2).max(200).required(),
      phone: Yup.string().min(10).max(10).required()
    }),
    onSubmit: (data) => {
      console.log('data ', data);
      dispatch(signupAction(data));
    }
  });

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
                <Form.Control size="lg" type="text" placeholder="First Name" className="icons_fields" value={formik.values.first_name} onChange={formik.handleChange} name="first_name" />
                <img
                  src={Usericon}
                  alt="Icon"
                  className="icon_img"
                />
              </Form.Group> 
              {formik.errors.first_name ? (<p className="validation-messages">{formik.errors.first_name}</p>) : null}
              <Form.Group controlId="formBasicText" className="singup-inputfield mr-sm-3">
                <Form.Control size="lg" type="text" placeholder="Last Name" className="icons_fields_b" value={formik.values.last_name} onChange={formik.handleChange} name="last_name" />
              </Form.Group>
              {formik.errors.last_name ? (<p className="validation-messages">{formik.errors.last_name}</p>) : null}
            </div>

            <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login">
              <Form.Control size="lg" type="email" placeholder="Enter email" className="icons_fields" value={formik.values.email} onChange={formik.handleChange} name="email" />
              <img
                src={Emailicon}
                alt="Icon"
                className="icon_img"
              />
            </Form.Group>
            {formik.errors.email ? (<p className="validation-messages">{formik.errors.email}</p>) : null}

            <Form.Group controlId="formBasictel" className="w-75 mx-auto icons_login">
              <Form.Control size="lg" type="tel" placeholder="Phone" className="icons_fields" value={formik.values.phone} onChange={formik.handleChange} name="phone" />
            </Form.Group>
            {formik.errors.phone ? (<p className="validation-messages">{formik.errors.phone}</p>) : null}


            <Form.Group controlId="formBasictext" className="w-75 mx-auto icons_login">
              <Form.Control size="lg" type="text" placeholder="Country name" className="icons_fields" value={formik.values.country_name} onChange={formik.handleChange} name="country_name" />
            </Form.Group>
            {formik.errors.country_name ? (<p className="validation-messages">{formik.errors.country_name}</p>) : null}

            <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="submit"
          >
            Sign up
          </Button>

            <p className="text-center mt-3">Already have an account ? Log in</p>

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

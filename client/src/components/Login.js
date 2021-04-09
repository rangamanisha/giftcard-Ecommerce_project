import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Usericon from '../assets/User-icon.svg';
import Passwordicon from '../assets/Password-icon.svg';
import Googleicon from '../assets/Google-icon.svg';
import Facebookicon from '../assets/Facebook-icon.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Login = () => { 

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      isActive: true
    },
    validationSchema: Yup.object({
      email: Yup.string().min(2).max(200).email().required(),
      password: Yup.string().min(2).max(200).required(),
    }),
    onSubmit: (data) => {
      console.log('data ', data);
    }
  });
  

  return (
    <div className="body">
      <Navbar />   
      <div className="login-card mx-auto">
        <p className="login-text text-center h3 pt-5">Login to your Account</p>
        <p className="login-sub-text text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form onSubmit={formik.handleSubmit} class="user">
          <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="email" placeholder="Enter email" value={formik.values.email} onChange={formik.handleChange}  className="icons_fields" name="email"/>
            <img
                src={Usericon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
          
            <Form.Control size="lg" type="password" placeholder="Password" className="icons_fields" value={formik.values.password} onChange={ formik.handleChange }  name="password" />
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>
          <div className="row">
            <Form.Group style={{ marginLeft: "77px" }}>
              <Form.Check
                type="radio"
                label="Remember Me"
                name="formHorizontalRadios"
                id="formHorizontalRadios1"
              />
            </Form.Group>
            <Form.Group style={{ marginLeft: "162px" }}>
              <span>Forgot me?</span>
            </Form.Group>
          </div>
          <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="Submit"
          >
            Login to Continue
          </Button>

          <p className="login-bottom-text text-center mt-4">Don’t have an account ? Sign up</p>

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

          <div className="row mt-4">
            <Button
              variant="outline-secondary"
              className="google-button mr-sm-3"
            >
              <img
                src={Googleicon}
                style={{ width: "24px", height: "50px" }}
                alt="Icon"
                
              />
            </Button>
            <Button
              variant="outline-secondary"
              className="facebook-button mr-sm-3"
            >
              {" "}
              <img
                src={Facebookicon}
                style={{ width: "50px", height: "50px" }}
                alt="Icon"
              />
            </Button>
          </div>
        </Form>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

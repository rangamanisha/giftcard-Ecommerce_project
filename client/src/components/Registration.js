import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar from "./Navbar";
import Footer from "./Footer";
import Emailicon from '../assets/Email-icon.svg';
import Usericon from '../assets/User-icon.svg';
import { signupAction } from '../actions/signup.actions';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getAuthState } from '../reducer/auth.reducer'
import { useHistory } from 'react-router';

const Signup = () => {
  const dispatch = useDispatch();
  const state = useSelector(getAuthState);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email:'',
      country_name:'',
      phone: '',
      "lang_key": "en"
    },
    validationSchema: Yup.object({
      first_name: Yup.string().min(2).max(200).email().required(),
      last_name: Yup.string().min(2).max(200).email().required(),
      email: Yup.string().min(2).max(200).email().required(),
      password: Yup.string().min(2).max(200).required(),
      country_name: Yup.string().min(2).max(200).required(),
    }),
    onSubmit: (data) => {
      dispatch(signupAction(data));
      console.log(data);
    }
  });

    return (
        <div className="body">
          <Navbar />
          <div>
          <div className="login-card mx-auto mt-5">
        <p className="login-text text-center h3 pt-5">Create an Account</p>
        <p className="text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form onsubmit={formik.handleSubmit} className="user" >
        <div className="row">
        <Form.Group controlId="formBasicText" className="singup-input mr-sm-3 icons_login">
            <Form.Control size="lg" type="text" placeholder="First Name" className="icons_fields" value={formik.values.first_name} onChange={ formik.handleChange } name="first_name"/>
            <img
                src={Usericon}
                alt="Icon"
                className="icon_img"
              />
        </Form.Group>
        <Form.Group controlId="formBasicText" className="singup-inputfield mr-sm-3">
            <Form.Control size="lg" type="text" placeholder="Last Name"  className="icons_fields_b" value={formik.values.last_name} onChange={ formik.handleChange } name="last_name"/>
        </Form.Group>
        </div>

        <Form.Group controlId="formBasicEmail" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="email" placeholder="Enter email" className="icons_fields" value={formik.values.email} onChange={ formik.handleChange } name="email"/>
            <img
                src={Emailicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

          <Form.Group controlId="formBasictel" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="tel" placeholder="Phone" className="icons_fields" value={formik.values.phone} onChange={ formik.handleChange } name="phone"/>
    </Form.Group>   



          <Form.Group controlId="formBasictext" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="text" placeholder="Country name" className="icons_fields" value={formik.values.country_name} onChange={ formik.handleChange } name="country_name"/>
          </Form.Group>

      {/*    <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Password" className="icons_fields"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="w-75 mx-auto icons_login">
            <Form.Control size="lg" type="password" placeholder="Confirm Password" className="icons_fields"/>
            <img
                src={Passwordicon}
                alt="Icon"
                className="icon_img"
              />
          </Form.Group>

    */}
          
          <Button className="btn-custom mt-3" variant="info" size="lg"  type="Submit">
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
  </div>
    )
}

export default Signup;

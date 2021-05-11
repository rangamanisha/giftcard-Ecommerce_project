import React, { useState, useEffect } from "react";
import "./Idc.scss";
import IDC_LOGO_white_icon_1 from "../../assets/IDC_LOGO_white_icon_1.svg";
import { Link } from "react-router-dom";
import Slider from '../../assets/Slider.png';
import Alert from "react-bootstrap/Alert";
import Fade from "react-bootstrap/Fade";
import checkbox from "../../assets/checkbox.svg";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAuthState } from "../../reducer/auth.reducer";

import { getIdcState } from "../../reducer/idc.reducer";
import { IdcSignInAction } from "../../actions/idc_action";
const Idc_Signin = () => {
  const dispatch = useDispatch();
  const state = useSelector(getIdcState);
  const state1 = useSelector(getAuthState);
  const history = useHistory();
  const [idcIsValid, setIdcIsValid] = useState(false);
  const [idcVisible, setIdcVisible] = useState(true);
  const [isValid, setIsValid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");

  // useEffect(()=>{
  //     let token = window.localStorage.getItem( 'idc_access_token' );
  //     if( !!token ) {
  //       token = JSON.parse( token );
  //       if (!!token.expires_at) {
  //         let expires_at = new Date( token.expires_at );
  //         if( expires_at - Date.now( ) > 0 ) {
  //           return token;
  //         } else {
  //           localStorage.removeItem('idc_access_token');
  //           return null;
  //         }
  //       } else {
  //         return token;
  //       }
  //     } else {
  //     localStorage.removeItem('idc_access_token');
  //       return null;
  //     }
  
  // })

  useEffect(() => {
  if (state1.status === "OK"&& state.isIdcAuthenticated === false) {
    setIsValid(true);
    setMessage(
      "A verification link has been sent to your provided email address. To Reset your Password."
    );
    window.setTimeout(() => {
      setVisible(false);
    }, 3000);
  }
}, [state1.signupSuccess, state1.status , state.isIdcAuthenticated]);


  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().min(2).max(200).email().required(),
      password: Yup.string().min(2).max(200).required(),
    }),
    onSubmit: (data) => {
      dispatch(IdcSignInAction(data));
    },
  });
  useEffect(() => {
    if (state.isIdcAuthenticated) {
      history.push({ pathname: "/idc/order" });
    }
  }, [state.isIdcAuthenticated]);

  return (
    <>
    <div className="signInLayout1">
      <div className="container-fluid px-0">    
        <div className="row no-gutter">
          <div className="col-xs-12 col-md-4">
            <div className="sidebarLoginImage">
              <img src={IDC_LOGO_white_icon_1} alt="" className="overlapImg" />
              <img src={Slider} alt="" className="biggerImg" />
            </div>
            </div>
            <div className="col-xs-12 col-md-8">    
                <div className="contentLoginRight">
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
                    <h2>Welcome Back</h2>
                    <p>Login to manage your account.</p>
                    <div className="formLoginWrapper">
                        <form name="idc_order" role="form" onSubmit={formik.handleSubmit} >
                            <div className="form-group">
                                <label className="customL">
                                    <span>EMAIL ADDRESS</span>
                                </label>
                                <input type="email" placeholder="Email address" className="form-control"
                                 value={formik.values.email}
                                onChange={formik.handleChange} name="email" />
          {formik.errors.email ? (
            <p className="validation-messages">{formik.errors.email}</p>
          ) : null}
                            </div>
                            <div className="form-group">
                                <label className="customL">
                                    <span>PASSWORD</span>
                                    <Link className="link-color"  className="forgotURL" to={{pathname:"/auth/forgotpassword",state:{"idc":true}}}>
                                    Forgot Password
                    </Link>
                                 
                                </label>
                                <input type="password" ng-model="password" name="password" 
                                 value={formik.values.password}
                                onChange={formik.handleChange} placeholder="Password" className="form-control"/>
                            </div>
                            {state.errors && state.errors.length ? (
                    <p className="validation-messages">
                      {state.errors.join("\n")}
                    </p>
                  ) : null}
                  <div className="btn-layout1 text-center">
                    <button
                      className="btn"
                      type="submit"
                      ng-disabled="idc_order.$invalid"
                    >
                      Log in
                    </button>
                  </div>
                </form>
                <div className="borderSpaceWhite">
                  <span className="blank"></span>
                </div>
                <p className="text-center">
                  For any assistance please contact{" "}
                  <a href="mailto:care@giftiglobal.com" target="_blank">
                    care@giftiglobal.com
                  </a>
                </p>
                <ul className="social-Layout1">
                  <li>
                    <a href="https://www.facebook.com/giftiglobal/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/giftiglobal/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/giftiglobal">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bottomFooterBar"></div>
          </div>
        </div>
   </div>
   </div>     
</>
  );
};

export default Idc_Signin;

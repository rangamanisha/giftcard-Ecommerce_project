import React , { useState, useEffect } from 'react';
import './Idc.css';
import IDC_LOGO_white_icon_1 from '../../assets/IDC_LOGO_white_icon_1.svg';
import Slider from '../../assets/Slider.png';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import {IdcSignInAction} from '../../actions/idc_action';

const Idc_Signin = () => {
    const dispatch = useDispatch();
    // const state = useSelector(getAuthState);
    const history = useHistory();
    const [idcIsValid, setIdcIsValid] = useState(false);
    const [idcVisible, setIdcVisible] = useState(true);

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




    return (
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
                    <h2>Welcome Back</h2>
                    <p>Login to manage your account.</p>
                    <div className="formLoginWrapper">
                        <form name="idc_order" role="form" onSubmit={formik.handleSubmit} novalidate>
                            <div className="form-group">
                                <label className="customL">
                                    <span>EMAIL ADDRESS</span>
                                </label>
                                <input type="email" placeholder="{{ 'Email address' | translate }}" className="form-control"
                                autocomplete="off" value={formik.values.email}
                                onChange={formik.handleChange} name="email" ng-required="true"/>
                                <p className="help-block" ng-if="idc_order.username.$empty && idc_order.username.$dirty">Please enter a
                                    valid Email Address </p>
                            </div>
                            <div className="form-group">
                                <label className="customL">
                                    <span>PASSWORD</span>
                                    <a ng-click="dialogForgotPassword1( )" className="forgotURL">Forgot Password</a>
                                </label>
                                <input type="password" ng-model="password" name="password" required
                                autocomplete="off" value={formik.values.password}
                                onChange={formik.handleChange} placeholder="Password" className="form-control"/>
                            </div>
                            <div className="btn-layout1 text-center">
                                <button className="btn" type="submit"
                                    ng-disabled="idc_order.$invalid">Log in</button>
                            </div>
                        </form>
                        <div className="borderSpaceWhite">
                            <span className="blank"></span>
                        </div>
                        <p className="text-center">
                            For any assistance please contact <a href="mailto:care@giftiglobal.com" target="_blank">care@giftiglobal.com</a>
                        </p>
                        <ul className="social-Layout1">
                            <li>
                                <a href="https://www.facebook.com/giftiglobal/"><i className="fa fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/giftiglobal/"><i className="fa fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/giftiglobal"><i className="fa fa-twitter"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="bottomFooterBar">

                </div>
            </div>
        </div>
    </div>
 </div>
    );
}

export default Idc_Signin;
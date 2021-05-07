import React from 'react';
import './Idc.scss';
import Tabs from 'react-bootstrap/Tabs';
import { useHistory } from "react-router";
import * as Yup from "yup";
import { getAuthState } from "../../reducer/auth.reducer";
import { useFormik } from "formik";
import {IdcChangePasswordAction} from "../../actions/idc_action";
import {IdcProfileAction} from "../../actions/idc_action";
import Tab from 'react-bootstrap/Tab';
import { getIdcState } from '../../reducer/idc.reducer';
import { map, get } from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const IdcProfile = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      password: "",
      password_confirmation: "",
      current_password:""
     
    },
    validationSchema: Yup.object({
      current_password:Yup.string().min(2).max(200).required(),
      password: Yup.string().min(2).max(200).required(),
      password_confirmation: Yup.string().min(2).max(200).required(),
    }),
    onSubmit: (data) => {
      dispatch(IdcChangePasswordAction(data));
    },
  });
  React.useEffect(() => {
    dispatch(
      IdcProfileAction()
    );
  }, [dispatch]);
  const idcState = useSelector(getIdcState);
  const idc_user = get(idcState, "user");

const history = useHistory();
 
    return(
<>
<div className="wrapper-container custom-sign mb-5">
<div className="container-fluid animated fadeInRight profile-section">

        <div className="tabs-container vertical-buffer-10">
       
      <Tabs  id="profile-info">
    
  <Tab eventKey="profile" title="Profile info">
  <div class="row m-t m-b card-1">
  <div className="container-fluid">
                    <div className="row">

                    {/* <div className="visible-xs col-xs-12 vertical-buffer-20"></div> */}
                    <div className="col">
                      <table className="table borderless table-hover pull-left flip profile-info">
                        <tr>
                          <td className="text-left"> Name </td>
                          <td >{idcState.first_name} {idcState.last_name}</td>
                        </tr>
                        <tr>
                          <td className="text-left"> Email</td>
                          <td>{idcState.email} </td>
                        </tr>
                      </table>
                    </div>
                    </div>
                </div>
              </div>

  </Tab>

  <Tab eventKey="contact" title="Change password">
  <div class="row m-t m-b card-1">
   
  <div className="col-sm-6 mt-5 mb-5">
                  <form name="forms.updatePasswordForm"  onSubmit={formik.handleSubmit} role="form" id ="profileform">
                    <div className="form-group">
                        <input type="password" placeholder="Current Password"
                          value={formik.values.current_password}
                          onChange={formik.handleChange}
                          name="current_password"   className="form-control"/>
                    </div>
                    <div className="form-group">
                      <input type="password" placeholder="New Password" 
                         value={formik.values.password}
                         onChange={formik.handleChange}
                         name="password"  className="form-control"/>
                    </div>
                    <div className="form-group">
                        <input type="password" placeholder=" Confirm Password"
                           value={formik.values.password_confirmation}
                           onChange={formik.handleChange}
                         name="password_confirmation"  className="form-control"/>
                    </div>
                    <button type="submit" className="btn btn-primary btnDesign greenBgBTN" > Update Password </button>
                  </form>
                </div>
       </div> 
        
  </Tab>
</Tabs>
</div>
</div>
</div>

  </>
 
  )}

  export default IdcProfile;
  
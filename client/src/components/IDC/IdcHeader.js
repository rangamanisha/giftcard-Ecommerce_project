import React , { useState, useEffect } from 'react';
import './Idc.css';
import Group1 from '../../assets/Group 1.svg';
import userIcon1 from '../../assets/userIcon1.svg';
import userIcon2 from '../../assets/userIcon2.svg';
import exitIcon from '../../assets/exitIcon.svg';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getIdcState } from '../../reducer/idc.reducer';
import {IdcTotalCreditnAction} from '../../actions/idc_action';


const Idc_Header = () =>{
    const dispatch = useDispatch();
    const state = useSelector(getIdcState);
    const history = useHistory();

      useEffect(() => {
        dispatch(IdcTotalCreditnAction());
      }, [dispatch]);


    useEffect(() => {
        if (state && state.isIdcAuthenticated) {
          history.push({ pathname: "/idc/order" });
        }
    }, [state.isIdcAuthenticated]);

    const signout= ()=>{
        localStorage.clear('idc_access_token');
        history.push({path:"/idc/signin"});
    }
    return(
        <>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"/>
        <div className="headerLayout1">
        <div className="container layout1">
        <div>
            <div className="col-xs-12">
                <div className="headerWrap">
                    <div className="mediaIconLogo">
                        <a href="https://giftiglobal.com/"><img src={Group1} width="200" alt="" /></a>
                    </div>
                    {state.isIdcAuthenticated ? (
                    <div className="accountInfoPoints">
                        <ul className="accountListing">
                            <li className="listings">
                                <p className="btnDesign" id="user_points"> <span className="textField">Available Balance (AED) : <strong>{state.idcCredits} </strong></span> </p>
                            </li>
                            <li className="listings">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle btnDesign greenBgBTN" type="button" data-toggle="dropdown">
                                        <img src={userIcon1} width="18" alt="" />
                                        <span className="textField">{state.first_name}</span>
                                        <span className="caret"></span>
                                    </button>
                                    <ul className="dropdown-menu">
                                        <li>
                                            <a ui-sref="password_change">
                                                <img src={userIcon2} width="18" alt="" />
                                                Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a onClick={() => signout()}>
                                              <img src={exitIcon} width="18" alt="" />
                                              Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>):''}
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}
export default Idc_Header;
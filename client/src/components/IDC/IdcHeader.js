import React from 'react';
import './Idc.scss';
import Group1 from '../../assets/Group 1.svg';
import userIcon1 from '../../assets/userIcon1.svg';
import userIcon2 from '../../assets/userIcon2.svg';
import exitIcon from '../../assets/exitIcon.svg';
const Idc_Header = () =>{
    return(
        <>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;600;700;800;900&display=swap" rel="stylesheet"/>

        <div className="headerLayout1">
    <div className="container layout1">
        <div className="row">
            <div className="col-xs-12">
                <div className="headerWrap">
                    <div className="mediaIconLogo">
                        <a href="https://giftiglobal.com/"><img src={Group1} width="200" alt="" /></a>
                    </div>
                    <div ng-if ="show_idc_header" className="accountInfoPoints">
                        <ul className="accountListing">
                            <li className="listings">
                                <p className="btnDesign" id="user_points"> <span className="textField">Available Balance (AED) : <strong>idc_user_credit </strong></span> </p>
                            </li>
                            <li className="listings">
                                <div className="dropdown">
                                    <button className="btn btn-primary dropdown-toggle btnDesign greenBgBTN" type="button" data-toggle="dropdown">
                                        <img src={userIcon1} width="18" alt="" />
                                        <span className="textField">gsjgajgsa</span>
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
                                            <a onClick="signOut( )">
                                              <img src={exitIcon} width="18" alt="" />
                                              Logout
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>
    );
}
export default Idc_Header;
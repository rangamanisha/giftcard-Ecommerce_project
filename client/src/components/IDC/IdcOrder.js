import React from 'react';
import './Idc.css';
import IDC_Send_Gift_Card_Page from '../../assets/IDC_Send_Gift_Card_Page.png';
const Idc_Order = ()=>{
    return (
        <>
        <div className="IDC_orderP">
    <div style={{display: "none"}}>
        <table>
            <tr>
                <th>First_Name</th>
                <th>Last_Name</th>
                <th>Email</th>
                <th>Company</th>
                <th>Designation</th>
                <th>Country</th>
                <th>Phone</th>
                <th>Product</th>
                <th>Currency</th>
                <th>Denomination</th>
                <th>Quantity</th>
            </tr>
            <tr>
                <td>John</td>
                <td>Nick</td>
                <td>john12@gmail.com</td>
                <td>MIT</td>
                <td>Software Developer</td>
                <td>America</td>
                <td>92323323</td>
                <td>IDC</td>
                <td>AED</td>
                <td>100</td>
                <td>2</td>
            </tr>
        </table>
    </div>
    <div className="container layout1">
        <div className="row">
            <div className="col-xs-12">
                <div className="top-tagline">

                    <div className="tagline-text">
                        <h2>IDC GIFT CARD DISTRIBUTION MODULE</h2>
                    </div>
                    <div className="logo-image">
                        <img src={IDC_Send_Gift_Card_Page} alt="Gifty Global" className="img-responsive"/>
                    </div>
                </div>
            </div>
        </div>
        <div className="row rowWithFlex">
            <div className="col-xs-12 col-md-5">
                <div className="alert-box">
                    <p><span>You can upload a</span> CSV file <span>with a total of</span> 25 IDC gift cards at a time <span>to bulk send gift cards to your users. Click on the</span> download sample button <span>to follow the correct format for your upload.</span></p>
                </div>
                <form name="idc_submit_Form" role="form"  ng-submit="bulk_upload_file($event)" novalidate>
                <div className="file-drop-box">
                        <div className="download-wrap text-right">
                            <span>Download Sample File</span>
                            <a onclick="exportTableToCSV('Sample.csv')" className="btn btn-blue btn-radius">Download</a>
                        </div>
                        <div className="drop-file-wrap">
                            <div className="drop-file-icon">+</div>
                            <h6>Click to select your file</h6>
                            <div className="uploadFileDesign">
                                <input type="file"
                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                name="uploadFile" size="40"
                                onchange="angular.element(this).scope().getFileDetails(this);" id ="upload-filess"/>
                            </div>
       
                        </div>
                        <div ng-if = "filename">
                            <div className="field-block">
                                <div className='label label-info' id="upload-file-info">filename</div>
                                <span><a className="delete-btn" onClick="delete_uploaded_file()">&times;</a> </span>

                            </div>
                        </div>
                </div>
                <div className="col-xs-12 col-md-12" style ={{ marginTop: "15px"}}>
                    <div ng-show="new_card_value > 0 && show_bulk_amount == true" className="credit-values form-group">
                        Total Value :new_card_value
                    </div>
                </div>
                <div className="btn-layout1 text-center">
                    <button ng-disabled="!filename || loading " className="btn"
                    type="submit">
                        
                        'Send IDC Gift Card' |
                        translate
                        
                    </button>
                </div>
            </form>
               
                <div className="footer-section desktop">
                    <div className="borderSpaceWhite">
                   
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
            <div className="col-xs-12 col-md-1">
                <div className="centerValignText"><h5 className="form-divider-text text-center">OR</h5></div>
            </div>
            <div className="col-xs-12 col-md-6">
                <div className="alert-box" style={{maxWidth: "493px"}}>
                    <p><span>Quickly send an IDC gift card of your choice to a single user.</span></p>
                </div>
                <form name="idc_submit_Form" role="form" novalidate>
 
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label className="customL">
                                <span>First Name</span>
                            </label>
                            <input type="text" name="first_name" required
                                placeholder="'First Name' " ng-model="forms.first_name"
                                autocomplete="off" ng-pattern="/^[a-zA-Z\s]*$/" className="form-control"
                                />
                            <p className="help-block text-danger"
                                ng-if="(idc_submit_Form.first_name.$error.required && idc_submit_Form.first_name.$dirty) || idc_submit_Form.first_name.$error.pattern">
                                'First Name is invalid' </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group" show-errors>
                            <label className="customL">
                                <span>Last Name</span>
                            </label>
                            <input type="text" name="last_name" required
                                placeholder="'Last Name' " autocomplete="off"
                                ng-model="forms.last_name" ng-pattern="/^[a-zA-Z\s]*$/"
                                className="form-control"/>
                            <p className="help-block text-danger"
                                ng-if="(idc_submit_Form.last_name.$error.required && idc_submit_Form.last_name.$dirty) || idc_submit_Form.last_name.$error.pattern">
                                'Last Name is invalid' </p>
                        </div>
                    </div>
                </div>
                <div className="form-group">
                    <label className="customL">
                        <span>Email</span>
                    </label>
                    <input type="text" autocomplete="off" className="form-control" name="email" ng-model="forms.email" type="email"
                        placeholder="Email"
                        ng-pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))|[0-9]{10}$/'/>


                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label className="customL">
                                <span>Company</span>
                            </label>
                            <input type="text" name="company" 
                                placeholder="'Company' " autocomplete="off"
                                ng-model="forms.company" ng-pattern="/^[a-zA-Z\s]*$/" className="form-control" required/>
                            <p className="help-block text-danger"
                                ng-if="(idc_submit_Form.company.$error.required && idc_submit_Form.company.$dirty) || idc_submit_Form.company.$error.pattern">
                                'Company' </p>
                        </div>
                    </div>
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label className="customL">
                                <span>Designation</span>
                            </label>
                            <input type="text" name="designation" required autocomplete="off"
                                placeholder="'Designation' " ng-model="forms.designation"
                                ng-pattern="/^[a-zA-Z\s]*$/" className="form-control"/>
                            <p className="help-block text-danger"
                                ng-if="(idc_submit_Form.designation.$error.required && idc_submit_Form.designation.$dirty) || idc_submit_Form.designation.$error.pattern">
                                'Designation' </p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="form-group">
                        <div className="col-xs-12 col-md-6 col-lg-6">
                            <div className="form-group">
                                <div className="input-group" style={{width: "100%"}}>
                                    <label className="customL">
                                        <span>Country</span>
                                    </label>
                                    <select className="form-control" style={{fontSize: "16px"}}
                                        ng-options="country.country_name as country.country_name | translate for country in countries"
                                        ng-model="forms.country_name"
                                        ng-init="forms.country_name = 'United Arab Emirates'"
                                        ng-change="setPhonePrefix(forms.country_name)">
                                    </select>
                                </div>
                                <p className="help-block text-danger"
                                    ng-if="(gcvaForm.phone.$error.required && gcvaForm.phone.$dirty) || gcvaForm.phone.$error.pattern">
                                    'A valid phone is required' </p>
                            </div>
                        </div>

                        <div className="col-xs-12 col-md-6 col-lg-6">
                            <div className="form-group mobileField">
                                <label className="customL">
                                    <span>Mobile Number</span>
                                </label>
                                <div className="input-group">
                                    <span className="input-group-addon">country_code</span>
                                    <input type="text" name="mobile_number" ng-model="forms.mobile_number"
                                        ng-required="true" placeholder="'Mobile Number' "
                                        autocomplete="off" className="form-control mobile-number-input"
                                        minlength="phone_min_length" maxlength="phone_max_length"
                                        numbers-only/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label className="customL">
                                <span>Product</span>
                            </label>
                            <select className="form-control" style={{fontSize: "16px"}}
                                ng-options="products.product_name_to_display as products.product_name_to_display | translate for products in idc_products"
                            ng-change = "setproduct()" ng-model="forms.product"/>


                        </div>
                    </div>

                    <div className="col-xs-12 col-md-6">
                        <div className="form-group">
                            <label className="customL">
                                <span>Quantity</span>
                            </label>
                            <input type="number" name="quantity" placeholder="Enter Quantity"
                                ng-model="forms.Quantity" min="1" value="1" autocomplete="off"
                                className="form-control" ng-change="setQuantity(forms.Quantity)"
                                onKeyPress="if(this.value.length >= 1) return false" ng-required="true"
                                oninput="this.value=this.value.replace(/[^1-9]/g,'')"/>
                        </div>
                    </div>

                </div>

                <div className="col-xs-12 col-md-12">
                    <div ng-show="new_card_value > 0 && show_single_order_amount == true" className="credit-values">
                        Total Value :new_card_value
                    </div>
                </div>
                <br/>
                <div className="btn-layout1 text-center">
                    <button ng-disabled="idc_submit_Form.$invalid || loading" className="btn"
                   ng-click="order_idc_giftCard()" type="submit">
                        
                        'Send IDC Gift Card' 
                        
                    </button>
                </div>
                <br/><br/>
            </form>

            <div className="footer-section mobile">
                <div className="borderSpaceWhite">

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
        </div>
    </div>
    <div className="bottomFooterBar">
    </div>
</div>


        </>
    );
}

export default Idc_Order;
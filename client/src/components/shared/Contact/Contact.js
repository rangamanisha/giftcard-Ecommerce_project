import React, { useState } from "react";
import './Contact.css';
import { FaPhoneAlt } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import Header from '../Header/Header';

function Contact() {
    return (
        <div className="container-fluid">
            <Header />
            <div className="row justify-content-center">
            <ul className="col-5 mt-4">
                    <h2>Get  in Touch</h2>
                        <li className="account-options-item ">
                            <div className="row">
                                <div className="col-1 btn-icons-phone button-icon mt-2" >
                                    <FaPhoneAlt/>
                                </div>
                                <div className="col">
                                    <p className ="lableStyle">phone Number</p>
                                    <p className='textContent'/*style={{ marginTop: "-10px"}}*/>+971(0)4 872 8418</p>
                                </div>
                            </div>
                        </li>

                        <li className="account-options-item ">
                            <div className="row">
                                <div className="col-1 btn-icons-phone button-icon mt-2" >
                                <HiOutlineMail/>
                                </div>
                                <div className="col">
                                    <p className ="lableStyle">Eamil</p>
                                    <p className='textContent'/*style={{ marginTop: "-10px"}}*/>care@giftiglobal.com</p>
                                </div>
                            </div>
                        </li>

                        <li className="account-options-item ">
                            <div className="row">
                                <div className="col-1 btn-icons-phone button-icon mt-2" >
                                <GoLocation/>
                                </div>
                                <div className="col">
                                    <p className ="lableStyle">Location</p>
                                    <p className='textContent'/*style={{ marginTop: "-10px"}}*/>Grosvenor Business Tower Office 1102 Barsha Heights TecomDubai, UAE</p>
                                </div>
                            </div>
                        </li>
                        

                         
                        {/* <li className="account-options-item ">
                            <div className="row">
                                <div className="col-2 btn-icons-phone button-icon mt-2" >
                                    <HiOutlineMail/>
                                </div>
                                <div className="ml-3">
                                    <p className ="lableStyle" style={{marginLeft:"49px",marginTop:"-46px"}} >Email</p>
                                    <p className='textContent' style={{ marginTop: "-10px"}}style={{ marginTop: "-10px" ,marginLeft:"48px"}}>care@giftiglobal.com</p>
                                </div>
                            </div>
                        </li>  */}
                        {/* <li className="account-options-item ">
                            <div className="row">
                                <div className="col-2 btn-icons-phone button-icon mt-2" >
                                    <GoLocation/>
                                </div>
                                <div className="ml-2 col-6">
                                    <p style={{marginLeft:"-14px"}}>Location</p>
                                    <p style={{ marginTop:"-9px" ,marginLeft:"-13px"}}>text updated</p>
                                </div>
                            </div>
                        </li> */}                       
                    </ul>

                    
                    <div className="col-4">
        <form className="details">
            <h1>Contact Us</h1>
            <div className="form-group ">
                <label for="Name">Name</label>
                <input type="Name" className="form-control" id="Name" placeholder="Enter your name" />
            </div>
            <div className="form-group ">
                <label for="email">Email</label>
                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="form-group ">
                <label for="Message">Message</label>
                <textarea className="form-control" id="Message" rows="3" placeholder="Enter your message"></textarea>
            </div>
            <button type="button" className="col-4 btn-send">send</button>
        </form>

    </div>
            </div>
        </div>
    );
}


export default Contact;
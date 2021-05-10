import React from "react";
// import "./Contact.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import Header from "../HeaderPage/Header";
import Mobile from '../../../assets/Mobile.png'
import email from '../../../assets/email.png'
import loc from '../../../assets/loc.png'
import '../../../App.scss'

function Contact() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <h2 className="my-4 text">Get in Touch</h2>
            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon">
                <img src={Mobile} alt="mobile" className="contact_icons"/>
              </div>
              <div className="c-label " >
                <label className="lableStyle">phone Number</label>
                <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                  +971(0)4 872 8418
                </p>
              </div>
            </div>

            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon"
              style={{display:"flex", alignItems:'center'}}
              >
                <img src={email} className="contact_icons"/>
              </div>
              <div className="c-label">
                <label className="lableStyle" >Email</label>
                <p className="textContent" style={{ font:"Carior"}}>
                  care@giftiglobal.com
                </p>
              </div>
            </div>
            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon">
                <img src={loc} className="contact_icons"/>
              </div>
              <div className="c-label">
                <label className="lableStyle">Location</label>
                <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                  Grosvenor Business Tower Office 1102 Barsha Heights
                  TecomDubai, UAE
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <form className="details">
                <h1>Contact Us</h1>
                <div className="form-group ">
                  <label htmlFor="Name" style={{font:'Roboto-Regular', color:'#77808B'}}>Name</label>
                  <input
                    type="Name"
                    className="form-control"
                    id="Name"
                    placeholder="Enter your name"
                    style={{font:'Roboto-Regular', color:'#A2A9B0'}}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="email" style={{font:'Roboto-Regular', color:'#77808B'}}>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                    style={{font:'Roboto-Regular', color:'#A2A9B0'}}
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="Message" style={{font:'Roboto-Regular', color:'#77808B'}}>Message</label>
                  <textarea
                    className="form-control"
                    id="Message"
                    rows="3"
                    placeholder="Enter your message"
                    style={{font:'Roboto-Regular', color:'#A2A9B0'}}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="startgf-fields-button  btn btn-info"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

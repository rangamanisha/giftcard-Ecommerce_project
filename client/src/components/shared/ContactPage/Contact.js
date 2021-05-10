import React from "react";
// import "./Contact.scss";
import { FaPhoneAlt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { GoLocation } from "react-icons/go";
import Header from "../HeaderPage/Header";

function Contact() {
  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <h2 className="my-4">Get in Touch</h2>
            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon">
                <FaPhoneAlt />
              </div>
              <div className="c-label">
                <label className="lableStyle">phone Number</label>
                <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                  +971(0)4 872 8418
                </p>
              </div>
            </div>

            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon">
                <HiOutlineMail />
              </div>
              <div className="c-label">
                <label className="lableStyle">Email</label>
                <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                  care@giftiglobal.com
                </p>
              </div>
            </div>
            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon">
                <GoLocation />
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
                  <label htmlFor="Name">Name</label>
                  <input
                    type="Name"
                    className="form-control"
                    id="Name"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="form-group ">
                  <label htmlFor="Message">Message</label>
                  <textarea
                    className="form-control"
                    id="Message"
                    rows="3"
                    placeholder="Enter your message"
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

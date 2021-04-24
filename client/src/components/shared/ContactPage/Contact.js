import React from 'react';
import './Contact.css';
import { FaPhoneAlt } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { GoLocation } from 'react-icons/go';
import Header from '../HeaderPage/Header';

function Contact() {
  return (
    <>
      <div className="container-fluid">
        <Header />
        <div className="row justify-content-center">
          <ul className="col-5 mt-4">
            <h2>Get in Touch</h2>
            <li className="account-options-item ">
              <div className="row">
                <div className="col-1 btn-icons-phone button-icon mt-2">
                  <FaPhoneAlt />
                </div>
                <div className="col mt-1">
                  <label className="lableStyle">phone Number</label>
                  <p className="textContent" /*style={{ marginTop: "-10px"}}*/>+971(0)4 872 8418</p>
                </div>
              </div>
            </li>

            <li className="account-options-item ">
              <div className="row">
                <div className="col-1 btn-icons-phone button-icon mt-2">
                  <HiOutlineMail />
                </div>
                <div className="col mt-1">
                  <label className="lableStyle">Email</label>
                  <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                    care@giftiglobal.com
                  </p>
                </div>
              </div>
            </li>

            <li className="account-options-item ">
              <div className="row">
                <div className="col-1 btn-icons-phone button-icon mt-2">
                  <GoLocation />
                </div>
                <div className="col mt-1">
                  <label className="lableStyle">Location</label>
                  <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                    Grosvenor Business Tower Office 1102 Barsha Heights TecomDubai, UAE
                  </p>
                </div>
              </div>
            </li>
          </ul>

          <div className="col-4">
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
                  placeholder="Enter your message"></textarea>
              </div>
              <button type="button" className="col-4 btn-send">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

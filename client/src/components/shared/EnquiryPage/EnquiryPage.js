import React from 'react';

import './EnquiryPage.css';
import { IoIosAdd } from 'react-icons/io';
import { MdSearch } from 'react-icons/md';
import { IoIosClose } from 'react-icons/io';
import { Col, Row } from 'react-bootstrap';

import Header from '../HeaderPage/Header';
import Footer from '../../Footer';

function EnquiryPage() {
  return (
    <>
      <Row className="justify-content-center m-5">
        <Col lg="4">
          <h3 className="font-weight-bold faq-col">Frequently Asked Questions</h3>
        </Col>
        <Col lg="7">
          <div className="input-group">
            <input
              type="text"
              className="form-control frequently-asked-input enquiry-searchbar"
              placeholder="What are you looking for?"
            />
            <span className="frequently-asked-input enqpage-search enqpage-border">
              <MdSearch />
            </span>
          </div>
        </Col>
      </Row>
      <div className="container">
        <Header />
        <div className="frequently-asked-container">
          <div className="row justify-content-between">
            <div className="col-4 align-self-start">
              <h3 className="faqbox">Frequently Asked Questions</h3>
            </div>
            <div className="col-8 align-self-center">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control frequently-asked-input enquiry-searchbar"
                  placeholder="What are you looking for?"
                />
                <span className="frequently-asked-input enqpage-search enqpage-border">
                  <MdSearch />
                </span>
              </div>
            </div>
          </div>
          <div className="my-2">
            <h4 className="help-question">Help with your questions...</h4>
            <p className="help-content">
              if you have any questions take a look at your FAQ section below .If you can&apos;t
              find the answer,please contact us{' '}
            </p>
          </div>
          <div className="row mt-5">
            <div className="col-4">
              <ul className=" d-flex flex-column justify-content-between account-options">
                <li className="account-options-item ">Account Creation</li>
                <li className="account-options-item ">Account Management</li>
                <li className="account-options-item ">How does it Work?</li>
                <li className="account-options-item ">About GiftiGlobal Gift card</li>
                <li className="account-options-item ">My Data and Privacy</li>
              </ul>
            </div>
            <div className="col-7 offset-1">
              <div className="d-flex flex-column justify-content-between p-2 account-container">
                <div className="mb-3 parah-style">How do i change my password?</div>
                <div className="mb-3">
                  Click on <strong>‘Sign In’</strong>. Click on <strong>‘Reset password’</strong>{' '}
                  next to your password.
                </div>
                <div>
                  Once you change your password, you will receive an email with a link to prompt you
                  to change your password. Remember to check your spam folder if you don’t receive
                  an email.
                </div>
                <IoIosClose style={{ position: 'absolute', right: '24px', top: '10px' }} />
              </div>

              <div className="input-group mt-4">
                <input
                  type="text"
                  className="form-control enqpage-border"
                  placeholder="Problems logging in?"
                />
                <IoIosAdd
                  style={{ position: 'absolute', right: '20px', top: '10px', color: '#3A72EC' }}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
      <div className="footer-enquiry-page"></div>
    </>
  );
}
export default EnquiryPage;

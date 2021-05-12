import React, { useEffect } from "react";

// import "./EnquiryPage.scss";
import { IoIosAdd } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { IoIosClose } from "react-icons/io";
import { Col, Row } from "react-bootstrap";

import Header from "../HeaderPage/Header";

function EnquiryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="container my-4">
        <Row className="">
          <Col md={5}>
            <h3 className="font-weight-bold faq-col">
              Frequently Asked Questions
            </h3>
          </Col>
          <Col md={7} className="align-self-center">
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
        <Row className="mt-3">
          <Col md={12}>
            <div className="help-faq mt-3">
              <h5>Help with your questions…</h5>
              <p>
                If you have any questions take a look at our FAQs section below.
                If you can’t find the answer, please contact us
              </p>
            </div>
          </Col>
        </Row>
        <Row>
          {/* <Row className="justify-content-between mt-5"> */}
          <Col md={5} className="mt-4">
            <ul className="list-unstyled ml-5">
              <li className="mb-3 faq-list">Account Creation</li>
              <li className="mb-3 faq-list" style={{ color: "#3A86FF" }}>
                Account Management
              </li>
              <li className="mb-3 faq-list">How does it work?</li>
              <li className="mb-3 faq-list">About GiftiGlobal Gift Card</li>
              <li className="mb-3 faq-list">My Data and Privacy</li>
            </ul>
          </Col>
          <Col md={7} className="align-self-center mt-4">
            <div className="account-container">
              <div className="mb-3 parah-style help-faq">
                How do i change my password?
              </div>
              <div className="mb-3" style={{ opacity: "0.5" }}>
                Click on <strong>‘Sign In’</strong>. Click on{" "}
                <strong>‘Reset password’</strong> next to your password.
              </div>
              <div style={{ opacity: "0.5" }}>
                Once you change your password, you will receive an email with a
                link to prompt you to change your password. Remember to check
                your spam folder if you don’t receive an email.
              </div>
              <IoIosClose
                style={{
                  position: "absolute",
                  right: "24px",
                  top: "10px",
                  width: "5%",
                  height: "15%",
                }}
              />
            </div>
          </Col>
          {/* </Row> */}
        </Row>
        <Row className="mt-2">
          <Col md={5}></Col>
          <Col md={7} className="">
            <div className="input-group">
              <input
                type="text"
                className="form-control enqpage-border py-3"
                placeholder="Problems logging in?"
              />
              <IoIosAdd
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "6px",
                  color: "#3A72EC",
                  width: "5%",
                  height: "60%",
                }}
              />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default EnquiryPage;

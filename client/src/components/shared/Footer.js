import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="home-footer">
      <Container>
        <Row>
          <Col md={4}>
            <img src={Logo} className="mt-4" alt="Icon" />
            <p className="mt-4 Footer-text">
              {" "}
              The ONLY Global Digital Gift Card, that can be used for all
              CURRENCIES, all denominations, across 86 COUNTRIES and redeemed
              over 4,000+ BRANDS
            </p>
            <div>
              <FontAwesomeIcon icon={faFacebookF} className="mr-4" />
              <FontAwesomeIcon icon={faYoutube} className="mr-4" />
              <FontAwesomeIcon icon={faTwitter} className="mr-4" />
              <FontAwesomeIcon icon={faLinkedin} className="mr-4" />
              <FontAwesomeIcon icon={faInstagram} className="mr-4" />
            </div>
          </Col>
          <Col md={2} className="Gifti_Global_is mt-5">
            <ul style={{ listStyleType: "none" }}>
              <span>Gifti Global</span>
              <li className="footer-text-list mt-3">Featured Cards</li>
              <li className="footer-text-list mt-2">All Gift cards</li>
              <li className="footer-text-list mt-2">For Business</li>
              <li className="footer-text-list mt-2">About us</li>
            </ul>
          </Col>
          <Col md={2} className="Gifti_Global_is mt-5">
            <ul style={{ listStyleType: "none" }}>
              <span>About</span>
              <li className="footer-text-list mt-3">Terms & Conditions</li>
              <li className="footer-text-list mt-3">FAQS</li>
              <li className="footer-text-list mt-3">Privacy Policy</li>
              <li className="footer-text-list mt-3">Contact us</li>
            </ul>
          </Col>
          <Col md={4} className="Gifti_Global_is mt-5">
            <ul style={{ listStyleType: "none" }}>
              <span>Get in Touch with Us</span>
              <li className="footer-text-list mt-3">
                Grosvenor Business Tower Office 1102 Barsha Heights TecomDubai,
                UAE
              </li>
              <li className="footer-text-list mt-3">All Gift cards</li>
              <li className="footer-text-list mt-3">For Business</li>
              <li className="footer-text-list mt-3">About us</li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">Gifti Global - © 2020 All Rights Reserved</p>
      </Container>
    </footer>
  );
};

export default Footer;

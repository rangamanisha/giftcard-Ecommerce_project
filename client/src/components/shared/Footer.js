import React, { useState, useEffect } from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Logo from "../../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import "../../App.scss";
import Map from "../../assets/Map.png";
import Mail from "../../assets/Mail.png";
import PhoneIcon from "../../assets/PhoneIcon.png";
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "../../App.scss";

const Footer = () => {
  const history = useHistory();
  const [date, setDate] = useState();
  const getYear = () => {
    setDate(new Date().getFullYear());
  };
  useEffect(() => {
    getYear();
  }, []);
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
              <a
                href="https://www.facebook.com/giftiglobal/"
                className="social"
              >
                <FontAwesomeIcon icon={faFacebookF} className="mr-4" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCdCdTEynac-Z_w3A3PSSXmg"
                className="social"
              >
                <FontAwesomeIcon icon={faYoutube} className="mr-4" />
              </a>
              <a href="https://twitter.com/giftiglobal" className="social">
                <FontAwesomeIcon icon={faTwitter} className="mr-4" />
              </a>
              <a
                href="https://www.linkedin.cn/company/giftiglobal"
                className="social"
              >
                <FontAwesomeIcon icon={faLinkedin} className="mr-4" />
              </a>
              <a
                href="https://www.instagram.com/giftiglobal/"
                className="social"
                className="social"
              >
                <FontAwesomeIcon icon={faInstagram} className="mr-4" />
              </a>
            </div>
          </Col>
          <Col md={4} className="Gifti_Global_is mt-5">
            <ul style={{ listStyleType: "none" }}>
              <span>About</span>
              <li
                className="footer-text-list mt-3"
                onClick={() => history.push("/terms-and-conditions")}
                style={{ cursor: "pointer" }}
              >
                Terms & Conditions
              </li>
              <li
                className="footer-text-list mt-3"
                onClick={() => history.push("/faq")}
                style={{ cursor: "pointer" }}
              >
                FAQS
              </li>
              <li
                className="footer-text-list mt-3"
                onClick={() => history.push("/privacy-policy")}
                style={{ cursor: "pointer" }}
              >
                Privacy Policy
              </li>
              <li
                className="footer-text-list mt-3"
                onClick={() => history.push("/contact")}
                style={{ cursor: "pointer" }}
              >
                Contact us
              </li>
            </ul>
          </Col>
          <Col md={4} className="Gifti_Global_is mt-5">
            <ul style={{ listStyleType: "none" }}>
              <span>Get in Touch with Us</span>
              <li
                className="footer-text-list mt-3"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img src={Map} alt="map" className="footer_icons" />
                Grosvenor Business Tower Office 1102 Barsha Heights TecomDubai,
                UAE
              </li>
              <li className="footer-text-list mt-3">
                <img src={PhoneIcon} alt="phone" className="footer_icons" />
                +97(0)4872 8418
              </li>
              <li className="footer-text-list mt-3">
                <img src={Mail} alt="mail" className="footer_icons" />
                care@giftiglobal.com
              </li>
            </ul>
          </Col>
        </Row>
        <hr />
        <p className="text-center">
          Gifti Global - © {date} All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;

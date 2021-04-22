import React from 'react';
import Logo from '../assets/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faYoutube,
  faTwitter,
  faLinkedin,
  faInstagram
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <footer className="home-footer">
      <div className="row">
        <div>
          <img src={Logo} className="mt-5" style={{ marginLeft: '150px' }} alt="Icon" />
          <p className="mt-4 Footer-text" style={{ marginLeft: '150px' }}>
            {' '}
            The ONLY Global Digital Gift Card, that can be used for all
            <br /> CURRENCIES, all denominations, across 86 COUNTRIES and
            <br /> redeemed over 4,000+ BRANDS
          </p>
          <div style={{ marginLeft: '150px' }}>
            <FontAwesomeIcon icon={faFacebookF} className="ml-sm-5" />
            <FontAwesomeIcon icon={faYoutube} className="ml-sm-5" />
            <FontAwesomeIcon icon={faTwitter} className="ml-sm-5" />
            <FontAwesomeIcon icon={faLinkedin} className="ml-sm-5" />
            <FontAwesomeIcon icon={faInstagram} className="ml-sm-5" />
          </div>
        </div>
        <div className="Gifti_Global_is mt-5">
          <ul style={{ listStyleType: 'none' }}>
            <span>Gifti Global</span>
            <li className="footer-text-list mt-3">Featured Cards</li>
            <li className="footer-text-list mt-2">All Gift cards</li>
            <li className="footer-text-list mt-2">For Business</li>
            <li className="footer-text-list mt-2">About us</li>
          </ul>
        </div>
        <div className="Gifti_Global_is mt-5">
          <ul style={{ listStyleType: 'none' }}>
            <span>About</span>
            <li className="footer-text-list mt-3">Terms & Conditions</li>
            <li className="footer-text-list mt-3">FAQS</li>
            <li className="footer-text-list mt-3">Privacy Policy</li>
            <li className="footer-text-list mt-3">Contact us</li>
          </ul>
        </div>
        <div className="Gifti_Global_is mt-5">
          <ul style={{ listStyleType: 'none' }}>
            <span>Get in Touch with Us</span>
            <li className="footer-text-list mt-3">
              Grosvenor Business Tower Office 1102 <br />
              Barsha Heights TecomDubai, UAE
            </li>
            <li className="footer-text-list mt-3">All Gift cards</li>
            <li className="footer-text-list mt-3">For Business</li>
            <li className="footer-text-list mt-3">About us</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="text-center">Gifti Global - © 2020 All Rights Reserved</p>
    </footer>
  );
};

export default Footer;

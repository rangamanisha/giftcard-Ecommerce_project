import React, { useState } from 'react';
import './ConditionsPage.css';
import Header from '../Header/Header';

function ConditionsPage() {
  return (
    <div className="container-fluid">
      <Header />
      <div className="row mx-5">
        <div className="col-8">
          <h3>Terms & Conditions</h3>
          <button type="button" className="btn btn-primary btn-sm">
            Last Updated: 1 January 2021
          </button>

          <hr></hr>
          <h6>Welcome to Gifti Global</h6>
          <p>
            Welcome to www.giftiglobal.com("site").The owner and operator of the site is MYLIST FZ
            LLC with Fujairah media Free Zone Trade License registration number 1722/2011 FCC having
            its registered office at Fujairah,Fujairah Tower,united Arab Emirates (PO BOX
            334555,Dubai,United Arab Emirates) ("MyList") a limited liability company registered in
            the United Arab Emirates ("UAE").
          </p>
          <p>
            These terms of use and all policies and additional terms (if applicable) posted on the
            site set out the terms on which we offer you access to and use of our site ,services and
            applications including our mobile applications (collectively,the "services").You can
            find all of our polices and additional terms here:www.giftiglobal.com("Legal
            Documents").
          </p>
          <p>These legal documents are incorporated by reference into these Terms of Use.</p>
          <p>
            By accessinng,registering and/or continuing to use or access our services,You are
            agreeing to be bounded by these Terms of Use and the Legal Documents wutb immediate
            effect.These Terms of Use and the Legal Documents are subject to change by us any
            time.Your continued use of the site following an such change constitutes your aggrement
            to these Terms of Use and Legal Documents and so modified.
          </p>
          <p>
            References in these Terms of Use yo "You"(or similar)are references to you as an
            individual or legal enitity as the case may be.
          </p>
          <h6>ABOUT OUR SITE</h6>
          <p>
            The site is an e-gift cards platform that allows bussiness individuals and enterprise to
            buy products.
          </p>
          <p>
            We reserve the right to introduce new services an update or withdraw any of the
            services,in our sole discretion,and we will not be liable to you for exercising this
            discretion.
          </p>
          <h6>1.ELIGIBILITY AND REGISTRATION REQUIREMENTS</h6>
          <p>
            1.1.You are eligible to register as a buyer and benefit from the serivices if you meet
            the following eligibility criteria:
          </p>
          <p className="ml1">
            1.1.1 you are above the legal age for purchasing products in your country of
            residence;and
          </p>
          <p className="ml1">
            1.1.2 you are able to provide a valid email address for the delivery of the products.
          </p>
          <p>
            1.2. in order to register to the site,you will need to provide us with certain
            information.Your registration to the site may not be acceptedif you do not provide us
            with the required information.We reserve the right to undertake such checks as are
            necessary to verify identity.
          </p>
          <p>
            1.3.Once you have successfully completed registration,your registration shall continue
            for an indefinite period,subject ton suspension or termination in accordance with clause
            6 of these Terms of Use.
          </p>
          <p>
            1.4.Your information will be used for the purpose of contacting you in relation to your
            orders.With your explicit permission,we may send you emails about our products and other
            updates.If after you opt-in,you change your mind,you may withdraw your consent for us to
            contact you,for the continued collection, use or disclosure of your information,at any
            time,by contacting us at care@giftiglobal.com.
          </p>
        </div>

        <div className="col-3 offset-1 sticky-top condition-container">
          <div className="d-flex flex-column justify-content-between p-2">
            <div className="condition-item-style">Welcome to Gifti Global</div>
            <div className="condition-item-style">ABOUT OUR SITE</div>
            <div className="condition-item-style">1. ELIGIBILITY AND REGISTRATION REQUIREMENTS</div>
            <div className="condition-item-style">2. YOUR OBLIGATIONS</div>
            <div className="condition-item-style">3. INTELLECTUAL PROPERTY RIGHTS</div>
          </div>
        </div>
        {/* 
                
                 <div class="info-terms-content">
                <div class="row">
                <div class="col-8">
                    <h3>Terms & Conditions</h3>
                    <button type="button" class="btn btn-primary btn-sm">Last Updated: 1 January 2021</button>


                <div class="details col-3 offset-1 giftglobal-info-container">
                    <p>Welcome to Gifti Global</p>
                    <p class="mt1" style={{color:"#007bff"}}>About our site</p>
                    <p class="mt1">1.ELIGIBILITY AND REGISTRATION REQUIREMENTS</p>
                    <p class="mt1">2.YOUR OBLIGATIONS</p>
                    <p class="mt1">3.INTELLECTUAL PROPERTY RIGHTS</p>
                </div> */}
      </div>
    </div>
  );
}
export default ConditionsPage;

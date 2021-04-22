import React from 'react';
import './PrivacypolicyPage.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../Header/Header';

function PrivacypolicyPage() {
  return (
    <div className="container-fluid">
      <Header />

      <div className="row mx-5">
        <div className="col-8">
          <h3>Privacy Policy</h3>
          <button type="button" className="btn btn-primary btn-sm">
            Last Updated: 1 January 2021
          </button>

          <hr></hr>
          <h6 id="welcome">Welcome to Gifti Global</h6>
          <p>
            This Privacy Policy sets out the basis on which any personal data, including but not
            limited to payments details and other information we collect from you or other sources
            or other sources or that you provide to us ("information") will be handled by us in
            connection with your access and use of www.giftiglobal.com,and/or the mobile application
            (collectively,the "services").We understand the importance you place on the
            information,and we are committed to protecting and respecting your privacy .Please read
            the following carefully to understand our practises regarding your information .By using
            our services,you agree to the handling of your information in accordance with this
            privacy policy.
          </p>
          <p>
            References in this privacy policy to "We","our"or "us" (or similar) are references to
            giftiglobal.com owned by MYLIST FZ LLC.
          </p>
          <p>
            Referneces to "user" or "you" (or similar) are references to you as an individual or
            legal entitiy as the case may be{' '}
          </p>
          <h6>WHAT INFORMATION WE MAY COLLECT FROM YOU </h6>
          <p>We may collect and process the following information about you:</p>
          <p>
            Information that you provide by filling in forms on our platforms,incliding information
            provided at the time of registering to use our platform and other co-registerations
            (e.g.social media logins),subscribing to our services,posting material or requesting
            further services;{' '}
          </p>
          <p>
            the information you provide when you enter a competition or promotion via our platform
            ,provide reviews;testimonials or feedback on our platforms;
          </p>
          <p>
            Information you provide us ,or that we may collect from you ,when you report a problem
            with our platform;a record of correspondence if you contact us;
          </p>
          <p>general,aggregated,demographic and non personal information;</p>
          <p>
            if you download or use our mobile appplication,we may have access to details about your
            location and your mobile device,including a unique identifier for your device;{' '}
          </p>
          <p>
            details of transactions you carry out through our platform and of the fulfilment of your
            orders;
          </p>
          <p>
            details about your computer, including but not limited to your IP address,operating
            system and browser type as well as informaton about your general internet usage (e.g.by
            using technology that stores information on or gains access to your device, such as
            cookies, tracking pixels, web beacons,etc.,(together,"cookies");
          </p>
          <p>
            your email address from a third party if you indicate that you have consented to that
            third party sharing your informaion with us; and{' '}
          </p>
          <p>
            any other information we consider necessary to enhance your experience on the platform.
          </p>
          <h6 id="rights">HOW WE WILL USE YOUR INFORMATION</h6>
          <p>we may use information held about you in following ways:</p>
          <p>
            to provide you with information,products or services that you request from us or which
            we feel may interest you where you have consented to be contacted for such purposes;
          </p>
          <p>
            to provide you with loction-based services,such as advertising,search results and other
            personalised content;
          </p>
          <p>
            to carry out our obligations arising from any contracts entered into between you and
            another entity using our platform or between you and us;
          </p>
          <p>
            to improve our services and to deliver a better and more personalised service to you;
          </p>
          <p>
            to ensure that content from our platform is presented in the most effective manner for
            you and the device you use to access our platform;
          </p>
        </div>
        <div className="col-3 offset-1 sticky-top privacy-container">
          <div className="d-flex flex-column justify-content-between p-2">
            <div className="privacy-item-style">
              <a href="#welcome" tabIndex="1">
                Welcome to Gifti Global
              </a>
            </div>
            <div className="privacy-item-style">WHAT INFORMATION WE MAY COLLECT FROM YOU</div>
            <div className="privacy-item-style">HOW WE WILL USE YOUR INFORMATION</div>
            <div className="privacy-item-style">HOW WE WILL USE YOUR INFORMATION</div>
            <div className="privacy-item-style">
              <a href="#rights" tabIndex="2">
                INTELLECTUAL PROPERTY RIGHTS
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
                    <div class="row mx-5">
                        <div class="col-8">
                        <h3 className=''>Privacy Policy</h3>
                    <button type="button" class="btn btn-primary">Last Updated: 1 January 2021</button>
                    <hr></hr>
                    <h6>Welcome to Gifti Global</h6>
                    <p>This Privacy Policy sets out the basis on which any personal data, including but not limited to payments details and other information we collect from you or other sources or other sources or that you provide to us ("information") will be handled by us in connection with your access  and use of www.giftiglobal.com,and/or the mobile application (collectively,the "services").We understand the importance you place on the information,and we are committed to protecting and respecting your privacy .Please read the following carefully to understand our practises regarding your information .By using our services,you agree to the handling of your information in accordance with this privacy policy.</p>
                    <p>References in this privacy policy to "We","our"or "us" (or similar) are references to giftiglobal.com owned by MYLIST FZ LLC.</p>
                    <p>Referneces to "user" or "you" (or similar) are references to you as an individual or legal entitiy as the case may be </p>
                    <h6>WHAT INFORMATION WE MAY COLLECT FROM YOU </h6>
                    <p>We may collect and process the following information about you:</p>
                    <p>Information that you provide by filling in forms on our platforms,incliding information provided at the time of registering to use our platform and other co-registerations (e.g.social media logins),subscribing to our services,posting material or requesting further services;  </p>
                    <p>the information you provide when you enter a competition or promotion via our platform ,provide reviews;testimonials or feedback on our platforms;</p>
                    <p>Information you provide us ,or that we may collect from you ,when you report a problem with our platform;a record of correspondence if you contact us;</p>
                    <p>general,aggregated,demographic and non personal information;</p>
                    <p>if you download or use our mobile appplication,we may have access to details about your location and your mobile device,including a unique identifier for your device; </p>
                    <p>details of transactions you carry out through our platform and of the fulfilment of your orders;</p>
                    <p>details about your computer, including but not limited to your IP address,operating system and browser type as well as informaton about your general internet usage (e.g.by using technology that stores information on or gains access to your device, such as cookies, tracking pixels, web beacons,etc.,(together,"cookies");</p>
                    <p>your email address from a third party if you indicate that you have consented to that third party sharing your informaion with us; and </p>
                    <p>any other information we consider necessary to enhance your experience on the platform.</p>
                    <h6>HOW WE WILL USE YOUR INFORMATION</h6>
                    <p>we may use information held about you in following ways:</p>
                    <p>to provide you with information,products or services that you request from us or which we feel may interest you where you have consented to be contacted for such purposes;</p>
                    <p>to provide you with loction-based services,such as advertising,search results and other personalised content;</p>
                    <p>to carry out our obligations arising from any contracts entered into between you and another entity using our platform or between you and us;</p>
                    <p>to improve our services and to deliver a better and more personalised service to you;</p>
                    <p>to ensure that content from our platform is presented in the most effective manner for you and the device you use to access our platform;</p>
                         </div>
                        <div class="details col-3 giftglobal-info-container">
                        <p>Welcome to Gifti Global</p>
                    <p style={{color:"#007bff"}}>What information We May Collect From You</p>
                    <p>HOW WE WILL USE YOUR INFORMATION</p>
                    <p>HOW WE WILL USE YOUR INFORMATION</p>
                    <p>INTELLECTUAL PROPERTY RIGHTS</p>
                         </div>
                        </div>
                </div> */}
    </div>
  );
}
export default PrivacypolicyPage;

import React, { useEffect } from "react";
import "./EnquiryPage.scss";
import Button from "react-bootstrap/Button";
import { Tab, Row, Col, Nav } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { MdSearch } from "react-icons/md";
import Accordion from "react-bootstrap/Accordion";
import Header from "../HeaderPage/Header";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";

import Mail from "../../../assets/email-white.svg";
import PhoneIcon from "../../../assets/PhoneIcon.png";

function EnquiryPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ContextAwareToggle = ({ children, eventKey, callback }) => {
    const currentEventKey = eventKey;

    const decoratedOnClick = useAccordionToggle(
      eventKey,
      () => callback && callback(eventKey)
    );

    const isCurrentEventKey = currentEventKey === eventKey;

    return (
      <div
        style={{ p: isCurrentEventKey ? "+" : "-" }}
        onClick={decoratedOnClick}
      >
        {children}
      </div>
    );
  };
  const account_creation = () => {
    return (
      <Accordion defaultActiveKey="0">
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="0">
            How can I create an account
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {" "}
              <p> Gifting with us is easy.</p>
              <ol>
                <li>
                  Click on <strong>Sign Up.</strong>
                </li>
                <li>
                  Fill in the required fields – we will need your name, email
                  address, country of residence and mobile number. Click{" "}
                  <strong>‘Sign Up’</strong>.
                </li>
                <li>
                  You will receive a confirmation email to create your own
                  password and activate your account.
                </li>
              </ol>
              <p>
                That’s it! You have access to a world of digital gift cards!
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="1">
            Can I create multiple accounts?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              {" "}
              <p>
                Yes. However, you will have to use a different email address for
                each account that you create. You can use the same mobile number
                for multiple accounts.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Accordion.Toggle as={Card.Header} eventKey="2">
            Do I have to create an account to place an order?
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="2">
            <Card.Body>
              {" "}
              <p>
                You have to create on account with{" "}
                <a href="https://giftiglobal.com">giftiglobal.com</a> before
                placing an order. Once your account is created, you can purchase
                any e-gift card in any country available and you don’t need to
                enter your personal information for your future purchases.
              </p>
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    );
  };
  const Management = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card className="faq">
            <Accordion.Toggle as={Card.Header} eventKey="0">
              How do I change my password?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Click on <strong>'Sign In'</strong> . Click on{" "}
                  <strong>'Reset password'</strong> next to your password.
                </p>
                <p>
                  Once you change your password, you will receive an email with
                  a link to prompt you to change your password. Remember to
                  check your spam folder if you don’t receive an email.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card className="faq">
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Problems logging in?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Need help? Contact our customer care team at +971 4 8728418 or
                  chat with us for further assistance.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };
  const workDoes = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              How can I place an order?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {" "}
                <p>
                  You can either purchase a digital gift card for yourself or
                  for a friend/relative by using your credit or debit or using
                  your GiftiGlobal Credits.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };
  const aboutGiftiGlobal = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              I received a GiftiGlobal gift card and I would like to redeem it
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Please create an account on{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a> and
                  redeem GiftiGlobal gift card by clicking ‘Convert Your Card’
                  and follow the simple conversion process.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              What is GiftiGlobal points?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  GiftiGlobal points give you access to a wide selection of gift
                  cards.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              I have GiftiGlobal credits on my account. Is there any expiry
              date?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>
                  Yes, your GiftiGlobal points are valid for 12 months from the
                  date it was credited on your{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a> account.
                  Once the credit is redeemed, the validity of the gift card
                  will start on the date of GiftiGlobal credits redemption.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              I received a notification that GiftiGlobal points are expiring
              soon. Can you extend its validity?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  We cannot extend the validity of your GiftiGlobal points but
                  we have thousands of exciting brands you can redeem them for.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              GiftiGlobal points expired last month. Can you revalidate it?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                  All GiftiGlobal points, once expired cannot be revalidated or
                  credited back into your{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a> account{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              Can I transfer GiftiGlobal points to my friend’s account?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p>
                  GiftiGlobal points is personal. You cannot transfer
                  GiftiGlobal points to your friend’s account but you can buy a
                  gift card using your GiftiGlobal points and send it to your
                  friends or loved ones.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              Can you convert GiftiGlobal points into cash?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <p>
                  Unfortunately, GiftiGlobal points cannot be exchanged for
                  cash.
                </p>{" "}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              How can I get more GiftiGlobal points?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <p>
                  Yes. However, you will have to use a different email address
                  for each account that you create. You can use the same mobile
                  number for multiple accounts.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>

          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              I have multiple giftiglobal.com accounts. Can you merge
              GiftiGlobal points?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <p>
                  Unfortunately, GiftiGlobal points are personal and cannot be
                  merged between different accounts.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };
  const MyData = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              I have created my giftiglobal.com account and saved my personal
              and financial information. Is it safe?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {" "}
                <p>
                  Yes, your privacy is important to us. We restrict access to
                  non-public personal and financial information of our customers
                  and maintain strict procedural safeguards to protect it.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              What do you do with my personal and financial information?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Your information is used by us and / or our affiliates for the
                  purpose of contacting you in relation to your order/s and
                  processing it. We may disclose your personal information if we
                  are only required by law to do so.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              I don’t want to receive any marketing related communications
              anymore. How can I unsubscribe?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {" "}
                <p>
                  You have to create on account with{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a> before
                  placing an order. Once your account is created, you can
                  purchase any e-gift card in any country available and you
                  don’t need to enter your personal information for your future
                  purchases.
                </p>
                <p>
                  You may withdraw your consent for us to contact you, for the
                  continued collection, use or disclosure of your information,
                  at any time, by contacting us at{" "}
                  <a href="mailto:care@giftiglobal.com">care@giftiglobal.com</a>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };
  const MyOrders = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Where can I view all my orders?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Please log in to your{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a> account
                  and select <strong>‘Orders’</strong>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              How much can I purchase an e-gift card for?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  The denominations vary and it depends on the e-gift card you
                  will select. Please select your preferred e-gift card and
                  preferred denomination.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              I am having problems ordering an e-gift card. What should I do?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                <p>
                  For any assistance completing your order, please contact us on
                  the live chat, or by email at
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              Can I cancel an order?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  Due to the speed of our fulfilment process once you have
                  submitted your order, the details that you have provided
                  cannot be changed, nor can your order be cancelled and
                  prevented from being sent.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              I’ve ordered the wrong e-gift card. What can I do?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                  Please contact us on
                  <a href="mailto:care@giftiglobal.com">
                    care@giftiglobal.com
                  </a>{" "}
                  or call us on +971 4 8728418 and we will endeavour to process
                  replacement. Kindly note that this is subject for approval and
                  once approved, we will provide you an alternative e-gift card
                  of the same currency and denomination.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="5">
              I’ve selected the wrong denomination of e-gift card. What can I
              do?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="5">
              <Card.Body>
                <p>
                  If the denomination you’ve selected is lesser than the amount
                  you prefer to purchase, we recommend that you make another
                  order. Please note that we can’t cancel your order in case,
                  you prefer a lesser e-gift card value.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="6">
              Can I return the e-gift cards?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="6">
              <Card.Body>
                <p>
                  No. Once order has been completed, the e-gift card is
                  considered sold and cannot be returned.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="7">
              Can I purchase an e-gift card for someone?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="7">
              <Card.Body>
                <p>
                  Yes, you can purchase an e-gift card as a gift to your family
                  member, a friend or a colleague and send it together with a
                  message of your choice!
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="8">
              I have purchased an e-gift card for my friend. Can you cancel it
              and send it to another friend of mine?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="8">
              <Card.Body>
                <p>
                  Unfortunately, we will not be able to cancel the fulfilment of
                  the e-gift card to the original recipient and send it to
                  another recipient.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="9">
              Can I purchase multiple e-gift cards which needs to be sent to
              different email addresses at once?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="9">
              <Card.Body>
                <p>
                  Unfortunately not, you will need to place separate orders.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="10">
              I have lost my e-gift card. Can you replace it?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="10">
              <Card.Body>
                <p>
                  If you have lost your e-gift card, we can resend it to you
                  provided that’s its not redeemed yet. For any other e-gift
                  cards, we are unable to offer a refund or replacement for
                  those items. Once e-gift cards are sent to your registered
                  email address, we are unable to track whether they have been
                  used or not. For this reason, we are unable to offer refunds
                  or exchanges on any e-gift cards that are lost or stolen
                  whilst in your possession.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="11">
              Are there any restrictions on purchasing e-gift cards?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="11">
              <Card.Body>
                <p>
                  The maximum e-gift card order value permitted is AED 1000 or
                  equivalent value in SAR, USD & EURO. A maximum of 5 gift cards
                  can be placed per order, but an order may not exceed AED 1000
                  or equivalent value in SAR, USD & EURO in total.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="12">
              Can I buy e-gift cards in bulk?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="12">
              <Card.Body>
                <p>
                  Yes. A bulk order is defined as a purchase that exceeds the
                  AED 1000 or equivalent value in SAR, USD & EURO limit imposed
                  on the site. If you'd like to place a bulk order, then please
                  contact our Sales Team via{" "}
                  <a href="mailto:sales@giftiglobal.com">
                    sales@giftiglobal.com.
                  </a>{" "}
                  Please state the quantity and denominations of the requested
                  e-gift cards.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="13">
              How do I place a bulk corporate order?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="13">
              <Card.Body>
                <p>
                  If you'd like to place a bulk corporate order, then please
                  contact our dedicated Sales Team via{" "}
                  <a href="mailto:sales@giftiglobal.com">
                    sales@giftiglobal.com
                  </a>{" "}
                  or by calling{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a>. Please
                  state the quantity and denominations of the requested e-gift
                  cards.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="14">
              Do you offer discounts for bulk purchases?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="14">
              <Card.Body>
                <p>
                  Please contact our Sales Team via{" "}
                  <a href="mailto:sales@giftiglobal.com">
                    sales@giftiglobal.com.
                  </a>{" "}
                  You need to state the quantity and denominations of the
                  requested e-gift cards and they will determine whether a bulk
                  discount is available.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };
  const Payment = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              Which methods of payment do you accept?{" "}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {" "}
                <p>
                  We accept debit and credit cards from Visa & Mastercard. We
                  also accept payments from PayPal.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Can I use a MyList gift card to buy an e-gift card?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  No, you cannot use an MyList gift card to make a purchase on{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a>.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              My payment using my credit card didn’t go through. Can I pay my
              order through wire transfer?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {" "}
                <p>
                  You have to create on account with{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a> before
                  placing an order. Once your account is created, you can
                  purchase any e-gift card in any country available and you
                  don’t need to enter your personal information for your future
                  purchases.
                </p>
                <p>
                  No. Only debit and credit card payments are acceptable as
                  payment method currently.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              I changed my mind. Can I change my gift card to another one?{" "}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                {" "}
                <p>No. Gift cards cannot be exchanged or returned.</p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              My debit/credit card has been declined. Why could this be?{" "}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                  Please check that the name and address used to create the
                  account matches the billing details registered against your
                  debit / credit card.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };
  const Deleviery = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              My order hasn’t arrived yet. What should I do?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  Please be aware that all successful orders are fulfilled and
                  sent to the registered email address within 72 hours. If this
                  time has passed, please contact us on{" "}
                  <a href="mailto:care@giftiglobal.com">care@giftiglobal.com</a>{" "}
                  or call us on +971 4 8728418. We recommend that you check your
                  spam or junk folder before contacting our Customer Care Team.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="1">
              Part of my order is missing. What should I do
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
                <p>
                  Please contact us on{" "}
                  <a href="mailto:care@giftiglobal.com">care@giftiglobal.com</a>{" "}
                  or call us on +971 4 8728418. Kindly note that we will require
                  your registered email or mobile number for us to check the
                  status of your order.{" "}
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="2">
              I have input an incorrect email address when placing my order.
              What can I do?{" "}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="2">
              <Card.Body>
                {" "}
                <p>
                  You have to create on account with{" "}
                  <a href="https://giftiglobal.com">giftiglobal.com</a> before
                  placing an order. Once your account is created, you can
                  purchase any e-gift card in any country available and you
                  don’t need to enter your personal information for your future
                  purchases.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="3">
              I successfully placed my order and it’s been more than 72 hours
              but it hasn’t arrived yet, why is this?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="3">
              <Card.Body>
                <p>
                  If your order has not been dispatched, we may be able to
                  update the email address for you. Please contact us on{" "}
                  <a href="mailto:care@giftiglobal.com">care@giftiglobal.com</a>{" "}
                  or call us on +971 4 8728418 to let us know of the correct
                  email address and include your order number.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="4">
              I received the order in my email and it’s incorrect!{" "}
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="4">
              <Card.Body>
                <p>
                  At <a href="https://giftiglobal.com">giftiglobal.com</a>, we
                  aim for 100% satisfaction when customers receive their orders.
                  However, if there appears to be a with your order, please
                  contact us on{" "}
                  <a href="mailto:care@giftiglobal.com">care@giftiglobal.com</a>{" "}
                  or call us on +971 4 8728418 within 24 hours. We will need
                  your order number and registered email address to resolve any
                  queries you can have so please include this in your
                  communication. If you also include information about the
                  fault, then this will also help with a speedy resolution.
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };
  const techincalIssues = () => {
    return (
      <>
        <Accordion defaultActiveKey="0">
          <Card>
            <Accordion.Toggle as={Card.Header} eventKey="0">
              giftiglobal.com website is not working properly, what should I do?
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                <p>
                  {" "}
                  If you are having difficulty using the site or have received
                  an error message, please check the following:
                </p>
                <ol>
                  <li>
                    Is your internet connection still functioning properly-
                    check to see if other websites are operating as normal on
                    your computer?
                  </li>
                  <li>
                    Try clicking the refresh button; this may help to dislodge
                    any glitches which have occurred.
                  </li>
                  <li>
                    Try clearing your internet history; this can sometimes
                    become a bit full which can lead to the internet operating
                    very slowly.
                  </li>
                </ol>
                <p>
                  If you have checked these and still cannot locate the source
                  of the problem, please contact us on the live chat, send us an
                  email at{" "}
                  <a href="mailto:care@giftiglobal.com">care@giftiglobal.com</a>{" "}
                  or call us on <a href="tel:+971 4 8728418">+971 4 8728418.</a>
                </p>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </>
    );
  };

  return (
    <>
      {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
  <Row>
  
    <Col sm={9}>

    </Col>
  </Row>
</Tab.Container> */}
      <Header />
      <div className="faqMainWrap">
        <div className="container my-4">
          <Row className="">
            <Col md={12}>
              <h3 className="font-weight-bold faq-col faq_title">
                Frequently Asked Questions
              </h3>
            </Col>
            {/* <Col md={8} className="d-flex align-items-center">
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
            </Col> */}
          </Row>
          <Row className="mt-3">
            <Col md={12}>
              <div className="help-faq mt-3">
                <h5>Help with your questions…</h5>
                <p>
                  If you have any questions take a look at our FAQs section
                  below. If you can’t find the answer, please contact us
                </p>
              </div>
            </Col>
          </Row>
          <Tab.Container id="faq" defaultActiveKey="account_creation">
            <Row className="mt-5">
              <Col md={4} className="mt-4">
                <Nav variant="pills" className="flex-column">
                  <Nav.Item>
                    <Nav.Link
                      className="mb-3 faq-list"
                      eventKey="account_creation"
                    >
                      Account Creation
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="mb-3 faq-list"
                      eventKey="account_managemant"
                    >
                      Account Management
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mb-3 faq-list" eventKey="workDoes">
                      How does it work?
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="mb-3 faq-list"
                      eventKey="aboutGiftCard"
                    >
                      About GiftiGlobal Gift Card
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mb-3 faq-list" eventKey="privacy">
                      My Data and Privacy
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mb-3 faq-list" eventKey="orders">
                      My Orders
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mb-3 faq-list" eventKey="payment">
                      About My Payment
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link className="mb-3 faq-list" eventKey="delivery">
                      About My Delivery
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      className="mb-3 faq-list"
                      eventKey="technicalIssues"
                    >
                      Technical issues
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col md={8} className="align-self-center mt-4">
                <div>
                  <Tab.Content>
                    <Tab.Pane eventKey="account_creation">
                      {account_creation()}
                    </Tab.Pane>
                    <Tab.Pane eventKey="account_managemant">
                      {Management()}
                    </Tab.Pane>
                    <Tab.Pane eventKey="workDoes">{workDoes()}</Tab.Pane>
                    <Tab.Pane eventKey="aboutGiftCard">
                      {aboutGiftiGlobal()}
                    </Tab.Pane>
                    <Tab.Pane eventKey="privacy">{MyData()}</Tab.Pane>
                    <Tab.Pane eventKey="orders">{MyOrders()}</Tab.Pane>
                    <Tab.Pane eventKey="payment">{Payment()}</Tab.Pane>
                    <Tab.Pane eventKey="delivery">{Deleviery()}</Tab.Pane>
                    <Tab.Pane eventKey="technicalIssues">
                      {techincalIssues()}
                    </Tab.Pane>
                  </Tab.Content>
                  {/* <div className="mb-3 parah-style help-faq">
                  How do i change my password?
                </div> */}
                  {/* <div className="mb-3" style={{ opacity: "0.5" }}>
                  Click on <strong>‘Sign In’</strong>. Click on{" "}
                  <strong>‘Reset password’</strong> next to your password.
                </div> */}
                  {/* <div style={{ opacity: "0.5" }}>
                  Once you change your password, you will receive an email with a
                  link to prompt you to change your password. Remember to check
                  your spam folder if you don’t receive an email.
                </div> */}
                  {/* <IoIosClose
                  style={{
                    position: "absolute",
                    right: "24px",
                    top: "10px",
                    width: "5%",
                    height: "15%",
                  }}
                /> */}
                </div>
              </Col>
              {/* </Row> */}
            </Row>
          </Tab.Container>
          {/* <Row className="mt-2">
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
          </Row> */}
        </div>
        <div className="faq-bootom-border">
          <div className="row pb-5">
            <div className=" col-sm-2"></div>
            <div className=" col-sm-8">
              <div className="faq-text">
                We’re always happy to serve you <br /> Reach out to us through
                any of these channels
              </div>
            </div>
            <div className="col-sm-2"></div>
          </div>
          <div className="row pb-5">
            <div className="col-sm-3"></div>
            <div className="col-sm-6" style={{ textAlign: "center" }}>
              <Button className="nav-btn text-white mr-5">
                <a
                  href="mailto:care@giftiglobal.com"
                  target="_blank"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  <img src={Mail} alt="mail" />
                  &nbsp; &nbsp; &nbsp;care@giftiglobal.com
                </a>
              </Button>{" "}
              <Button
                variant="light"
                className="nav-btn "
                style={{ color: "#544E5D" }}
              >
                {" "}
                <img src={PhoneIcon} alt="phone" /> +971 (0)4 872 8418
              </Button>{" "}
            </div>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default EnquiryPage;

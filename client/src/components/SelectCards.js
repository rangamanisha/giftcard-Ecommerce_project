import React from 'react';
import Footer from './Footer';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import AmazonMedium from '../assets/amazon_medium.png';

const SelectCards = () => {
  return (
    <>
      <div className="row">
        <img src={AmazonMedium} alt="AmazonMedium" className="select-card-size ml-5 mt-5 " />
        <div className="col ml-5 mt-5">
          <h1 className="select-card-text">Amazon eGift Card</h1>
          <h5 className="select-card-text mt-3">Select Card Value (AED)</h5>
          <div className="mt-3">
            <Button variant="outline-info" className="mr-sm-3 select-card-button">
              50
            </Button>
            <Button variant="outline-info" className="mr-sm-3 select-card-button">
              100
            </Button>
            <Button variant="outline-info" className="mr-sm-3 select-card-button">
              250
            </Button>
            <Button variant="outline-info" className="mr-sm-3 select-card-button">
              500
            </Button>
          </div>
          <h5 className="select-card-text mt-3">Gifting for</h5>
          <div className="row mr-sm-3 mt-3">
            <Form.Check
              type="radio"
              label="Myself"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Someone else"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
          </div>
          <div>
            <p>
              Amazon.com.au Gift Cards is the perfect gift of choice! It gives your recipient the
              ability to choose from millions of items sold on
              <br />
              Amazon.com.au – from electronics to fashion to appliances and household items.
            </p>
            <div className="row">
              <small className="mr-sm-5 ml-3">Total Amount</small>
              <h4 className="mr-sm-5 select-card-text">AED 250</h4>
              <div className="col">
                <Button variant="info" className="mr-sm-5 selects-card-button-a">
                  Add to cart
                </Button>
                <Button variant="primary" className="mr-sm-5 selects-card-button-b">
                  Buy Now
                </Button>
              </div>
            </div>
            <p className="mt-4">
              Your giftee can use their Amazon.com Gift Card towards books, electronics, music, and
              more. The Amazon.com.au website is the place to find and discover almost anything you
              want to buy online at a great price.
            </p>
            <p>
              spend hours thinking about whether to buy your recipient something for their home,
              their wardrobe or for their travels. Or you could open their doors of possibility by
              treating them to an Amazon.com.au gift card from Prezzee, which will give them a world
              of choice and save you a lot of time! What’s more, by choosing a Amazon.com.au eGift
              Card from Prezzee, your gift card is ready to send in moments after your order, so
              they’re absolutely perfect for last minute gifts. Choose from SMS or email delivery –
              all gift cards are stored and managed digitally, meaning no lost or worse still, gift
              cards that have expired because you’ve forgotten all about them. Your giftee will have
              24/7 access to their wonderful gift right on their mobile phone – how thoughtful is
              that!? Amazon.com.au Gift Cards carry no fees and do not expire.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SelectCards;

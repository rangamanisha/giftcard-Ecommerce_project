import React from "react";
import Form from "react-bootstrap/Form";
import AmazonMedium from "../assets/amazon_medium.png";

const giftGiftCard = () => {
  return (
    <div>
      <p className="select-card-text mt-5">Sent to</p>
      <Form>
        <Form.Group controlId="formBasicEmail3">
          <Form.Control type="text" placeholder="Name" className="mt-3" />
          <Form.Control
            type="email"
            placeholder="Enter email"
            className="mt-3"
          />
          <Form.Control as="textarea" className="mt-3" rows={3} />
        </Form.Group>
      </Form>
      <p className="select-card-text mt-5">Choose A Template</p>
      <div className="row">
        <img
          src={AmazonMedium}
          alt="AmazonMedium"
          className="templatetheme ml-5"
        />
        <img
          src={AmazonMedium}
          alt="AmazonMedium"
          className="templatetheme ml-5"
        />
        <img
          src={AmazonMedium}
          alt="AmazonMedium"
          className="templatetheme ml-5"
        />
      </div>
    </div>
  );
};

export default giftGiftCard;

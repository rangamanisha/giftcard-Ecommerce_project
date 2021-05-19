import React from "react";
import Form from "react-bootstrap/Form";
import AmazonMedium from "../assets/amazon_medium.png";
import { useFormik } from "formik";
import * as Yup from "yup";

const GiftiGiftCard = (props) => {
  const { giftToParams, setGiftToParams } = props;

  const formik = useFormik({
    initialValues: {
      name: giftToParams.name,
      email: giftToParams.email,
      message: giftToParams.message,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).max(100).required(),
      email: Yup.string().email(),
      message: Yup.string().min(1).max(500),
    }),
    onSubmit: (data) => {
      setGiftToParams();
    },
  });

  const updateGiftToParams = (id, event) => {
    setGiftToParams({ ...giftToParams, [id]: event.target.value });
    formik.handleChange(event);
  };

  return (
    <div>
      <p className="select-card-text mt-5">Sent to</p>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group>
          <Form.Control
            type="text"
            placeholder="Name"
            id="name"
            name="name"
            className="mt-3"
            onChange={(e) => updateGiftToParams("name", e)}
            value={formik.values.name}
          />
          <Form.Control
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            className="mt-3"
            onChange={(e) => updateGiftToParams("email", e)}
          />
          <Form.Control
            as="textarea"
            className="mt-3"
            rows={3}
            id="message"
            name="message"
            onChange={(e) => updateGiftToParams("message", e)}
          />
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

export default GiftiGiftCard;

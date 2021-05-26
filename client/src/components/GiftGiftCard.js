import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { getGiftcardsState } from "../reducer/giftCards.reducer";
import { get, map, isEmpty } from "lodash";
import Button from "react-bootstrap/Button";
import { useEffect } from "react";
import TextareaCounter from 'react-textarea-counter';
import { useFormik } from "formik";
import * as Yup from "yup";
import { giftCardThemeAction } from "../actions/giftcards.actions";

const GiftiGiftCard = (props) => {
  const dispatch = useDispatch();
  const [giftvalue, setGiftvalue] = useState(0);
  useEffect(() => {
    dispatch(giftCardThemeAction());
  }, [dispatch]);
  const state = useSelector(getGiftcardsState);
  const giftimages = get(state, "theme");
  const { giftToParams, setGiftToParams } = props;
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
      gifting_image_id: giftToParams.gifting_image_id,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).max(100).required(),
      email: Yup.string().email().min(1).max(100).required(),
      message: Yup.string().min(1).max(255),
      gifting_image_id: "",
    }),
    onSubmit: (data) => {
      setGiftToParams();
    },
  });

  const updateGiftToParams = (id, event) => {
    const payload = { ...giftToParams };
    if (id && event.target.value) {
      setGiftToParams({ ...payload, [id]: event.target.value });
      formik.handleChange(event);
    }
  };
  const updateGiftValue = (value) => {
    setGiftvalue(value);
    const payload1 = { ...giftToParams };
    payload1.gifting_image_id = value;
    setGiftToParams({ ...payload1, gifting_image_id: value });
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
            // size="lg"
            name="name"
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.name && formik.errors.name}
            className="mt-3 giftsomeone "
            onChange={(e) => {
              formik.handleChange(e);
              updateGiftToParams("name", e);
            }}
          />
                    {formik.touched.name && formik.errors.name ? (
            <p className="validation-messages1">{formik.errors.name}</p>
          ) : null}
          <Form.Control
            type="email"
            id="email"
            // size="lg"
            name="email"

            placeholder="Enter email"
            onBlur={formik.handleBlur}
            isInvalid={formik.touched.email && formik.errors.email}
            className="mt-3 giftsomeone"
            onChange={(e) => {
              formik.handleChange(e);
              updateGiftToParams("email", e);
            }}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className="validation-messages1">{formik.errors.email}</p>
          ) : null}
<TextareaCounter countLimit={255}  className="giftsome1 mt-3"
             rows={3}
             cols={53}
             style={{
              border: "0.800000011920929px solid #b2b2c9",
              borderRadius: "10px",
              fontSize:"15px",
              padding:"8px"
            }}
            placeholder="Leave a personal message"
            id="message"
            name="message"
             onBlur={formik.handleBlur}
            isInvalid={formik.touched.message && formik.errors.message}
            onChange={(e) => {
              formik.handleChange(e);
              updateGiftToParams("message", e);
            }} />
        
          {formik.touched.message && formik.errors.message ? (
            <p className="validation-messages1">{formik.errors.message}</p>
          ) : null}

          <p className="select-card-text mt-3">Choose A Template</p>
          <div className="row">
            {map(giftimages, (images2, i) => (
              <React.Fragment key={i}>
                {map(get(images2, "gifting_images"), (images1, j) => (
                  <React.Fragment key={j}>
                    <Button
                      variant="link"
                      className="themetemplates ml-3 mb-3"
                      onClick={() => updateGiftValue(images1.gifting_id)}
                      active={giftvalue === images1.gifting_id}
                      key={j}
                    >
                      <img
                        src={get(images1, "images.xsmall_rectangle")}
                        alt="AmazonMedium"
                        value={images1.gifting_id}
                        name="gifting_image_id"
                      />
                    </Button>
                  </React.Fragment>
                ))}
              </React.Fragment>
            ))}
          </div>
        </Form.Group>
      </Form>
      {/* <p className="select-card-text mt-5">Choose A Template</p>
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
      </div> */}
    </div>
  );
};

export default GiftiGiftCard;

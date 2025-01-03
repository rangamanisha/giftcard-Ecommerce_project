import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Usericon from "../assets/User-icon.svg";
import Emailicon from "../assets/Email-icon.svg";
import { useFormik } from "formik";
import * as Yup from "yup";

const GuestForm = (props) => {
  const { cartState, orderActions, dispatch } = props;

  const getMarginAmount = (amount) => {
    const additionalCharge = (parseFloat(amount) * 5) / 100;
    const totalAmount = parseFloat(
      additionalCharge + parseFloat(amount)
    ).toFixed(2);
    return totalAmount;
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().min(1).max(500).required(),
      last_name: Yup.string().min(1).max(500).required(),
      email: Yup.string()
        .min(2)
        .max(500)
        .email("Please enter valid email")
        .required(),
    }),
    onSubmit: (data) => {
      const payload = {
        user: {
          first_name: data.first_name,
          email: data.email,
          last_name: data.last_name,
        },
        giftcard: cartState.lineItems.map((lineItem) => {
          const item = {
            ...lineItem,
            card_value_aed:
              lineItem.currency !== cartState.checkoutCart.currency
                ? getMarginAmount(lineItem.card_value_aed)
                : lineItem.card_value_aed,
          };
          return item;
        }),
        order: {
          order_total_aed: cartState.checkoutCart.total_amount,
          program_id: 1, //
          payment_currency: cartState.checkoutCart.currency,
          isforself: true, //
          isbuynow: false, //
          card_value_aed: null, //
          use_credits: false, //
          current_exchange_rate: parseFloat(
            cartState.conversion.currency_exchange_rate
          ).toFixed(2), //
          use_hassad_points: false, //
          language_code: "en", //
          currency: cartState.checkoutCart.currency_id, //
        },
      };
      dispatch(orderActions.setGuestPayload(payload));
      const nextButton = document.getElementsByClassName("cart-next-btn")[0];
      nextButton.click();
    },
  });

  return (
    <>
      <div className="Guestform-card mx-auto">
        <p className="login-text text-center h3 pt-5">Checkout as guest</p>
        <p className="login-sub-text text-center mt-0">
          <small>Enter to continue and explore within your grasp</small>
        </p>

        <Form className="user" onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <Form.Group
                controlId="formBasicText"
                className="singup-input icons_login"
              >
                <Form.Control
                  size="md"
                  type="text"
                  placeholder="First Name"
                  className="icons_fields"
                  value={formik.values.first_name}
                  onChange={formik.handleChange}
                  name="first_name"
                  isInvalid={
                    formik.touched.first_name && formik.errors.first_name
                  }
                />
                <img src={Usericon} alt="Icon" className="icon_img" />
              </Form.Group>
            </div>
            <div className="col-sm-12 col-md-6">
              <Form.Group
                controlId="formBasiclast-name"
                className="singup-inputfield"
              >
                <Form.Control
                  size="lg"
                  type="text"
                  placeholder="Last Name"
                  className="icons_fields_b"
                  value={formik.values.last_name}
                  onChange={formik.handleChange}
                  name="last_name"
                  isInvalid={
                    formik.touched.last_name && formik.errors.last_name
                  }
                />
              </Form.Group>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <Form.Group controlId="formBasicEmail4" className="icons_login">
                <Form.Control
                  size="md"
                  type="email"
                  placeholder="Enter email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  className="icons_fields"
                  name="email"
                  isInvalid={formik.touched.email && formik.errors.email}
                />
                <img src={Emailicon} alt="Icon" className="icon_img" />
              </Form.Group>
            </div>
          </div>
          <Button
            className="btn-custom mt-3"
            variant="info"
            size="lg"
            type="submit"
          >
            Next
          </Button>
        </Form>
      </div>
    </>
  );
};

export default GuestForm;

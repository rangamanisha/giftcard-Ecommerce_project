import React, { useEffect } from "react";
import Header from "../HeaderPage/Header";
import Mobile from "../../../assets/Mobile.png";
import email from "../../../assets/email.png";
import loc from "../../../assets/loc.png";
import "../../../App.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { contactUsAction } from "../../../actions/common.actions";
import { commonActions, getCommonState } from "../../../reducer/common.reducer";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();
  const commonState = useSelector(getCommonState);

  useEffect(() => {
    if (commonState.contact) {
      dispatch(commonActions.updateContact(null));
    }
  }, [commonState.contact]);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).max(100).required(),
      email: Yup.string().email().min(1).max(300).required(),
      message: Yup.string().min(1).max(500).required(),
    }),
    onSubmit: (data) => {
      const payload = {
        contact_us: { ...payload },
      };
      dispatch(contactUsAction(payload));
    },
  });

  return (
    <>
      <Header />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-5">
            <h2 className="my-4 text">Get in Touch</h2>
            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon">
                <img src={Mobile} alt="mobile" className="contact_icons" />
              </div>
              <div className="c-label ">
                <label className="lableStyle">phone Number</label>
                <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                  +971(0)4 872 8418
                </p>
              </div>
            </div>

            <div className="contact-adrs">
              <div
                className="btn-icons-phone button-icon"
                style={{ display: "flex", alignItems: "center" }}
              >
                <img src={email} className="contact_icons" />
              </div>
              <div className="c-label">
                <label className="lableStyle">Email</label>
                <p className="textContent" style={{ font: "Carior" }}>
                  care@giftiglobal.com
                </p>
              </div>
            </div>
            <div className="contact-adrs">
              <div className="btn-icons-phone button-icon">
                <img src={loc} className="contact_icons" />
              </div>
              <div className="c-label">
                <label className="lableStyle">Location</label>
                <p className="textContent" /*style={{ marginTop: "-10px"}}*/>
                  Grosvenor Business Tower Office 1102 Barsha Heights
                  TecomDubai, UAE
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-7">
            <div className="contact-form">
              <form className="details" onSubmit={formik.handleSubmit}>
                <h1>Contact Us</h1>
                <div className="form-group ">
                  <label
                    htmlFor="Name"
                    style={{ font: "Roboto-Regular", color: "#77808B" }}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    style={{ font: "Roboto-Regular", color: "#A2A9B0" }}
                  />
                </div>
                <div className="form-group ">
                  <label
                    htmlFor="email"
                    style={{ font: "Roboto-Regular", color: "#77808B" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Enter your email"
                    style={{ font: "Roboto-Regular", color: "#A2A9B0" }}
                  />
                </div>
                <div className="form-group ">
                  <label
                    htmlFor="Message"
                    style={{ font: "Roboto-Regular", color: "#77808B" }}
                  >
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    rows="3"
                    placeholder="Enter your message"
                    style={{ font: "Roboto-Regular", color: "#A2A9B0" }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="startgf-fields-button  btn btn-info"
                >
                  send
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

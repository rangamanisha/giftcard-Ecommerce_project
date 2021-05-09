import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Emailicon from "../assets/Email-icon.svg";
import Usericon from "../assets/User-icon.svg";
import Calendericon from "../assets/calendar-alt.svg";
import Phoneicon from "../assets/phone-alt.svg";
import Col from "react-bootstrap/Col";
import * as Yup from "yup";
import { useFormik } from "formik";
import { getProfileState } from "../reducer/profile.reducer";
import {
  getprofileListAction,
  updateUserprofileAction,
} from "../actions/profile.actions";
import { useDispatch, useSelector } from "react-redux";

const UserProfile = () => {
  const profilestate = useSelector(getProfileState);
  const dispatch = useDispatch();

  const data = profilestate;

  console.log(data, "0000000000000");

  useEffect(() => {
    dispatch(getprofileListAction({}));
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      firstName: data.first_name ? data.first_name : "",
      lastName: data.last_name ? data.last_name : "",
      dob: data.date_of_birth ? data.date_of_birth : "",
      language: data.language ? data.language : "",
      country: data.country ? data.country : "",
      phone: "",
      gender: "",
      email: data.email ? data.email : "",
    },
    validationSchema: Yup.object({
      // email: Yup.string().min(2).max(200).email().required(),
      phone: Yup.string().min(10).max(10).required(),
    }),
    onSubmit: (data) => {
      console.log(data);
      dispatch(updateUserprofileAction(data));
    },
  });

  return (
    <div className="profile-card mx-auto mt-5 col-md-5">
      <Form className="profile" onSubmit={formik.handleSubmit}>
        <Form.Row>
          <Form.Group
            as={Col}
            xs={5}
            controlId="formBasicText"
            className="icons_login profile-input"
          >
            <Form.Control
              size="sm"
              type="text"
              placeholder="First Name"
              className="profile-iconsfields"
              // value={data.first_name}
              value={formik.values.firstName}
              onChange={formik.handleChange}
              name="firstName"
            />
            <img src={Usericon} alt="Icon" className="profile_icon" />
          </Form.Group>

          <Form.Group
            as={Col}
            xs={4}
            controlId="formBasicText"
            className="icons_login"
          >
            <Form.Control
              size="sm"
              type="text"
              placeholder="Last Name"
              className="profile-iconsfields-a"
              // value={data.last_name}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              name="lastName"
            />
          </Form.Group>
        </Form.Row>

        <Form.Group
          controlId="formGridEmail"
          className="w-75 mt-2 mx-auto icons_login"
        >
          <Form.Control
            size="sm"
            type="date"
            id="example-date-input"
            className="profile-iconsfields"
            value={formik.values.dob}
            onChange={formik.handleChange}
            name="dob"
          />
          <img src={Calendericon} alt="Icon" className="profile_icon" />
        </Form.Group>

        <Form.Group controlId="language" className="w-75 mt-4 mx-auto">
          <Form.Control
            size="sm"
            type="text"
            placeholder="language"
            className="profile-iconsfields-b"
            // value={data.language}
            value={formik.values.language}
            onChange={formik.handleChange}
            name="language"
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="w-75 mt-4 mx-auto">
          <Form.Control
            size="sm"
            type="text"
            placeholder="Country"
            className="profile-iconsfields-b"
            // value={data.country}
            value={formik.values.country}
            onChange={formik.handleChange}
            name="country"
          />
        </Form.Group>

        <Form.Group
          controlId="formBasicPassword"
          className="w-75 mt-4 mx-auto icons_login"
        >
          <Form.Control
            size="sm"
            type="text"
            placeholder="phone number"
            className="profile-iconsfields"
            value={formik.values.phone}
            onChange={formik.handleChange}
            name="phone"
          />
          <img src={Phoneicon} alt="Icon" className="profile_icon" />
        </Form.Group>
        {formik.errors.phone ? (
          <p className="validation-messages">{formik.errors.phone}</p>
        ) : null}

        <Form.Group
          controlId="formBasicEmail"
          className="w-75 mt-4 mx-auto icons_login"
        >
          <Form.Control
            size="sm"
            type="email"
            placeholder="Email"
            className="profile-iconsfields"
            // value={data.email}
            value={formik.values.email}
            onChange={formik.handleChange}
            name="email"
            readOnly
          />
          <img src={Emailicon} alt="Icon" className="profile_icon" />
        </Form.Group>

        <div className="text-center">
          <Button
            className="profile-btn w-75 mt-4"
            variant="info"
            size="lg"
            type="submit"
          >
            Edit Profile /save changes
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UserProfile;

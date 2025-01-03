import React, { useEffect, useState } from "react";
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
import {getGiftcardsState} from '../reducer/giftCards.reducer'
import * as moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";
import { getAuthState } from "../reducer/auth.reducer";


const UserProfile = () => {
  const profilestate = useSelector(getProfileState);
  const dispatch = useDispatch();
  const authState = useSelector(getAuthState);
  useEffect(() => {
    if (authState.isAuthenticated) {
      dispatch(getprofileListAction({}));
    }
  }, [dispatch]);
  const giftunitState = useSelector(getGiftcardsState);
  const countries = giftunitState.countries.
  map((country) => country["country_name"]).sort();

  const formik = useFormik({
    initialValues: {
      firstName: profilestate.profile?.first_name || "",
      lastName: profilestate.profile?.last_name || "",
      dob: profilestate.profile?.birthday || null,
      language: profilestate.profile?.language || "",
      country: profilestate.profile?.nationality || null,
      phone: profilestate.profile?.phone || "",
      gender: profilestate.profile?.gender || "",
      email: profilestate.profile?.email || "",
      countryName: profilestate.profile?.country_name || ""
    },
    validationSchema: Yup.object({
      phone: Yup.string().min(10).max(10),
    }),
    onSubmit: (data) => {
      dispatch(updateUserprofileAction(data));
    },
  });
  const handleShow = () => {
    swal({
      title: "",
      icon: "success",
      text: "We've successfully edited your details..",
      type: "",
      allowEscapeKey: false,
      showConfirmButton: true,
      showCancelButton: false,
      confirmButtonColor: "#00AF9A",
    })
  }

  return (
    <div className="profile-card mx-auto col-md-5">
      <Form className="profile" onSubmit={formik.handleSubmit}>
        <Form.Row style={{paddingRight: '8px'}}>
          <Form.Group
            as={Col}
            xs={5}
            controlId="formBasicText"
            className="icons_login profile-input"
            style={{paddingLeft: '0px',
              paddingRight: '2px'}}
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
          className="w-75 mt-4 mx-auto icons_login"
        >
          <Form.Control
            size="sm"
            type="date"
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

          {/* <Form >
           
            <CountrySelect
        value={country}
        onChange={setCountry}
        matchNameFromStart={false}
        matchAbbreviations
        name="country"
      />
        </Form> */}
         <Form.Group controlId="exampleForm.ControlSelect1" className="w-75 mt-4 mx-auto">
          <Form.Control
            size="sm"
            as="select"
            placeholder="Country"
            className="profile-iconsfields-b"
            value={formik.values.country}
            onChange={formik.handleChange}
            name="country"
          >
            {countries.map((c, i) => (
                          <option key={i}>{c}</option>
                        ))}
            </Form.Control>
        </Form.Group>
        <Form.Group
          controlId="formBasicP"
          className="w-75 mt-4 mx-auto icons_login"
        >
          <Form.Control
            size="sm"
            type="number"
            placeholder="phone number"
            className="profile-iconsfields"
            value={formik.values.phone}
            onChange={formik.handleChange}
            name="phone"
            className="no-spin"
          />
          <img src={Phoneicon} alt="Icon" className="profile_icon" />
        </Form.Group>
        {formik.errors.phone ? (
          <p className="validation-messages">{formik.errors.phone}</p>
        ) : null}

        <Form.Group
          controlId="formBasicEmail7"
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
            onClick={handleShow}
          >
            Edit Profile
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default UserProfile;

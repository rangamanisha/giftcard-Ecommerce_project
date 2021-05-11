import React from "react";
import "./Idc.scss";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import swal from "sweetalert";
import CsvDownloader from "react-csv-downloader";
import { useState } from "react";
import { map, get, result, find } from "lodash";
import IDC_Send_Gift_Card_Page from "../../assets/IDC_Send_Gift_Card_Page.png";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getIdcState } from "../../reducer/idc.reducer";
import {
  IdcTotalCreditnAction,
  IdcConvertCurrencyAction,
  IdcCountriesAction,
  IdcProfileAction,
  IdcVaritiesAction,
  IdcSignleOrderAction,
  IdcCountryCode,
} from "../../actions/idc_action";
import { countryCodeApiCall } from "../../services/idc.service";
export const API_URL = process.env.REACT_APP_API_URL;

const Idc_Order = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const idcState = useSelector(getIdcState);
  // const idcCountries = useSelector(getTopBarState);
  const idc_varities = get(idcState, "idcProduct.idc_product");
  const countries = get(idcState, "countries");
  const [selectedFile, setSelectedFile] = useState("");
  const [filename1, setFilename1] = useState();
  const [fileerrors, setFileerrors] = useState();
  const [errorr, seterrorr] = useState();
  const [filecredit, setFilecredit] = useState();
  const [idccurrency, setidccurrency] = useState();
  const [denomination, setDenomination] = useState("");
  const [giftcard_variety_id, setgiftcard_variety_id] = useState("");
  const access_token = localStorage.getItem("idc_access_token");
  const delete_uploaded_file = () => {
    setFilename1("");
    setFilecredit("");
    setSelectedFile("");
    setFileerrors("");
    seterrorr("");
  };
  const changeHandler = (event) => {
    event.preventDefault();
    setFileerrors("");
    seterrorr("");
    setSelectedFile(event.target.files[0]);
    setFilename1(event.target.files[0].name);

    let file = event.target.files[0];
    let formData = new FormData();
    formData.append("idc_order_file", file);
    let url = API_URL + "/idc_orders/get_use_credit_for_file";
    let bulkapifile = fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    bulkapifile.then((resp) => {
      resp.json().then((result) => {
        console.log(result.code);
        if (result.code === 200 && result.data) {
          setFilecredit(result.data.order.total_credit_to_used);
        } else if (result.code === 404 || result.code === 400) {
          console.log(result);
          setFileerrors(result.message);
        } else if (result.code === 401) {
          localStorage.clear();
          history.push({ pathname: "/idc/signin" });
        }
      });
    });
  };
  const onSubmitfile = (e) => {
    e.preventDefault();
    console.log(e);
    setSelectedFile(e.target[1].files[0]);
    let file = e.target[1].files[0];
    let formData = new FormData();
    formData.append("idc_order_file", file);
    let url = API_URL + "/idc_orders";
    let bulkapifile = fetch(url, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: "Bearer " + access_token,
      },
    });
    bulkapifile.then((resp) => {
      resp.json().then((result) => {
        if (result.code === 200) {
          swal({
            title: "",
            icon: "success",
            text: "We've successfully received your details. The giftcard will be sent to the user soon.",
            type: "",
            button: {
              text: "Go Back To Homepage",
            },
            allowEscapeKey: false,
            showConfirmButton: true,
            showCancelButton: false,
            confirmButtonColor: "#00AF9A",
          }).then(function () {
            window.location.reload();
          });
        } else if (
          result.code === 400 ||
          result.code === 404 ||
          result.code === 401
        ) {
          console.log(result.code);
          seterrorr(result.message);
        }
      });
    });
  };

  const csvData = [
    [
      `First_Name`,
      `Last_Name`,
      `Email`,
      "Company",
      "Designation",
      "Country",
      "Phone",
      "Product",
      "Currency",
      "Denomination",
      "Quantity",
    ],
    [
      "John",
      "Nick",
      "john12@gmail.com",
      "MIT",
      "Software Developer",
      "America",
      "992236254",
      "IDC",
      "AED",
      "100",
      "2",
    ],
  ];
  const columns = [
    {
      id: "first",
      displayName: "First_Name",
    },
    {
      id: "second",
      displayName: "Last_Name",
    },
    {
      id: "third",
      displayName: "Email",
    },
    {
      id: "fourth",
      displayName: "Company",
    },
    {
      id: "fivth",
      displayName: "Designation",
    },
    {
      id: "sixth",
      displayName: "Country",
    },
    {
      id: "seventh",
      displayName: "Phone",
    },
    {
      id: "eightth",
      displayName: "Product",
    },
    {
      id: "nineth",
      displayName: "Currency",
    },
    {
      id: "tenth",
      displayName: "Denomination",
    },
    {
      id: "eleventh",
      displayName: "Quantity",
    },
  ];
  const datas = [
    {
      first: "John",
      second: "Nick",
      third: "john12@gmail.com",
      fivth: "Software Developer",
      fourth: "MIT",
      sixth: "America",
      seventh: "992236254",
      eightth: "IDC",
      nineth: "AED",
      tenth: "100",
      eleventh: "2",
    },
  ];

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      company_name: "",
      designation: "",
      phone: "",
      quantity: "",
      product: "",
      company_title: "",
      country: "",
      denomination: "",
      giftcard_variety_id: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().min(2).max(200).email().required(),
      last_name: Yup.string().min(2).max(200).required(),
      first_name: Yup.string().min(2).max(200).required(),
      company_title: Yup.string().min(2).max(200).required(),
      company_name: Yup.string().min(2).max(200).required(),
      product: Yup.string().min(2).max(200).required(),
      country: Yup.string().min(2).max(200).required(),
      phone: Yup.number().required(),
      quantity: Yup.number().min(1).max(25).required(),
    }),
    onSubmit: (data) => {
      dispatch(
        IdcSignleOrderAction({
          denomination: { denomination },
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          company_name: data.company_name,
          company_title: data.company_title,
          phone: data.phone,
          quantity: data.quantity,
          product: data.product,
          country: data.country,
          giftcard_variety_id: { giftcard_variety_id },
        })
      );
    },
  });

  React.useEffect(() => {
    dispatch(IdcTotalCreditnAction());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(IdcVaritiesAction());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(IdcProfileAction());
  }, [dispatch]);
  React.useEffect(() => {
    dispatch(IdcCountriesAction());
  }, [dispatch]);

  const handleOffence = (name) => {
    formik.values.quantity = "";
    setFilecredit("");
    let match = find(idc_varities, { product_name_to_display: name });
    setDenomination(match.denomination);
    setgiftcard_variety_id(match.giftcard_variety_id);
    setidccurrency(match.curreny_name);
  };
  const creditamount = (e) => {
    const count = e.target.value;
    const amountValue = denomination * count;
    dispatch(
      IdcConvertCurrencyAction({
        amount: amountValue,
        margin: 0,
        dest: "AED",
        source: { idccurrency },
      })
    );
  };

  return (
    <>
      <div className="IDC_orderP">
        <div className="container layout1">
          <div>
            <div className="col-xs-12">
              <div className="top-tagline">
                <div className="tagline-text">
                  <h2>IDC GIFT CARD DISTRIBUTION MODULE</h2>
                </div>
                <div className="logo-image">
                  <img
                    src={IDC_Send_Gift_Card_Page}
                    alt="Gifty Global"
                    className="img-responsive"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="row rowWithFlex">
            <div className="col-xs-12 col-md-5">
              <div className="alert-box">
                <p>
                  <span>You can upload a</span> CSV file{" "}
                  <span>with a total of</span> 25 IDC gift cards at a time{" "}
                  <span>
                    to bulk send gift cards to your users. Click on the
                  </span>{" "}
                  download sample button{" "}
                  <span>to follow the correct format for your upload.</span>
                </p>
              </div>
              <form role="form" onSubmit={onSubmitfile}>
                <div className="file-drop-box">
                  <div className="download-wrap text-right">
                    <span>Download Sample File</span>
                    <CsvDownloader
                      filename="Sample.csv"
                      separator=","
                      wrapColumnChar=""
                      columns={columns}
                      datas={datas}
                      text="DOWNLOAD"
                      className="btn btn-blue btn-radius"
                    />
                    {/* <CSVLink data={csvData}filename={"Sample.csv"} enclosingCharacter={``} className="btn btn-blue btn-radius">Download me</CSVLink> */}
                  </div>
                  <div className="drop-file-wrap">
                    <div className="drop-file-icon">+</div>
                    <h6>Click to select your file</h6>
                    <div className="uploadFileDesign">
                      <input
                        type="file"
                        name="uploadFile"
                        onChange={changeHandler}
                      />
                    </div>
                  </div>

                  {filename1 && !fileerrors ? (
                    <div>
                      <div className="field-block">
                        <div className="label label-info" id="upload-file-info">
                          {filename1}
                        </div>
                        <span>
                          <a
                            className="delete-btn"
                            onClick={delete_uploaded_file}
                          >
                            &times;
                          </a>{" "}
                        </span>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {fileerrors ? (
                    <p className="validation-messages">{fileerrors}</p>
                  ) : (
                    ""
                  )}
                </div>
                {filecredit ? (
                  <div
                    className="col-xs-12 col-md-12"
                    style={{ marginTop: "15px" }}
                  >
                    <div className="credit-values form-group">
                      Total Value : {filecredit}
                    </div>
                  </div>
                ) : (
                  ""
                )}

                {errorr ? (
                  <p className="validation-messages">{errorr}</p>
                ) : null}
                <div className="btn-layout1 text-center">
                  <button disabled={!filecredit} className="btn" type="submit">
                    Send IDC Gift Card
                  </button>
                </div>
              </form>

              <div className="footer-section desktop">
                <div className="borderSpaceWhite"></div>
                <p className="text-center">
                  For any assistance please contact{" "}
                  <a href="mailto:care@giftiglobal.com" target="_blank">
                    care@giftiglobal.com
                  </a>
                </p>
                <ul className="social-Layout1">
                  <li>
                    <a href="https://www.facebook.com/giftiglobal/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/giftiglobal/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/giftiglobal">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xs-12 col-md-1">
              <div className="centerValignText">
                <h5 className="form-divider-text text-center">OR</h5>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="alert-box" style={{ maxWidth: "493px" }}>
                <p>
                  <span>
                    Quickly send an IDC gift card of your choice to a single
                    user.
                  </span>
                </p>
              </div>
              <form
                name="idc_submit_Form"
                role="form"
                onSubmit={formik.handleSubmit}
              >
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>First Name</span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        placeholder="First Name "
                        value={formik.values.first_name}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                      {formik.errors.first_name ? (
                        <p className="validation-messages">
                          {formik.errors.first_name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>Last Name</span>
                      </label>
                      <input
                        type="text"
                        name="last_name"
                        placeholder="Last Name "
                        value={formik.values.last_name}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                      {formik.errors.last_name ? (
                        <p className="validation-messages">
                          {formik.errors.last_name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label className="customL">
                    <span>Email</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    type="email"
                    placeholder="Email"
                    pattern='/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))|[0-9]{10}$/'
                  />
                  {formik.errors.email ? (
                    <p className="validation-messages">{formik.errors.email}</p>
                  ) : null}
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>Company</span>
                      </label>
                      <input
                        type="text"
                        name="company_name"
                        placeholder="Company "
                        value={formik.values.company_name}
                        onChange={formik.handleChange}
                        className="form-control"
                      />
                      {formik.errors.company_name ? (
                        <p className="validation-messages">
                          {formik.errors.company_name}
                        </p>
                      ) : null}
                    </div>
                  </div>
                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>Designation</span>
                      </label>
                      <input
                        type="text"
                        name="company_title"
                        value={formik.values.company_title}
                        onChange={formik.handleChange}
                        placeholder="Designation "
                        className="form-control"
                      />
                      {formik.errors.company_title ? (
                        <p className="validation-messages">
                          {formik.errors.company_title}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>Country</span>
                      </label>
                      <Form.Control
                        as="select"
                        custom
                        id="product_select"
                        name="country"
                        value={formik.values.country}
                        onChange={formik.handleChange}
                      >
                        <option value="Select Country">Select Country</option>
                        {map(countries, (c, i) => (
                          <option key={i} value={c.country_name}>
                            {c.country_name}
                          </option>
                        ))}
                      </Form.Control>

                      {formik.errors.country ? (
                        <p className="validation-messages">
                          {formik.errors.country}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>Mobile Number</span>
                      </label>
                      <div>
                        {/* <span className="input-group-addon">{idcState.country_code}</span> */}
                        <input
                          type="text"
                          name="phone"
                          value={formik.values.phone}
                          onChange={formik.handleChange}
                          placeholder="Mobile Number "
                          className="form-control mobile-number-input"
                        />
                        {formik.errors.phone ? (
                          <p className="validation-messages">
                            {formik.errors.phone}
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>Product</span>
                      </label>
                      <Form.Control
                        as="select"
                        custom
                        id="product_select"
                        value={formik.values.product}
                        onChange={(e) => {
                          formik.handleChange(e);
                          handleOffence(e.currentTarget.value);
                        }}
                        name="product"
                      >
                        <option value="Select Product">Select Product</option>
                        {map(idc_varities, (c, i) => (
                          <option key={i} value={c.product_name_to_display}>
                            {c.product_name_to_display}
                          </option>
                        ))}
                      </Form.Control>
                      {formik.errors.product ? (
                        <p className="validation-messages">
                          {formik.errors.product}
                        </p>
                      ) : null}
                    </div>
                  </div>

                  <div className="col-xs-12 col-md-6">
                    <div className="form-group">
                      <label className="customL">
                        <span>Quantity</span>
                      </label>
                      <input
                        type="number"
                        name="quantity"
                        value={formik.values.quantity}
                        onChange={(e) => {
                          formik.handleChange(e);
                          creditamount(e);
                        }}
                        placeholder="Enter Quantity"
                        min="1"
                        max="10"
                        className="form-control"
                      />
                      {formik.errors.quantity ? (
                        <p className="validation-messages">
                          {formik.errors.quantity}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </div>
                {idcState.points ? (
                  <div className="col-xs-12 col-md-12">
                    <div className="credit-values">
                      Total Value :{idcState.points}
                    </div>
                  </div>
                ) : (
                  ""
                )}
                <br />
                {idcState.errors && idcState.errors.length ? (
                  <p className="validation-messages">
                    {idcState.errors.join("\n")}
                  </p>
                ) : null}
                <div className="btn-layout1 text-center">
                  <button
                    disabled={!(formik.isValid && formik.dirty)}
                    className="btn"
                    type="submit"
                  >
                    Send IDC Gift Card
                  </button>
                </div>
                <br />
                <br />
              </form>

              <div className="footer-section mobile">
                <div className="borderSpaceWhite"></div>
                <p className="text-center">
                  For any assistance please contact{" "}
                  <a href="mailto:care@giftiglobal.com" target="_blank">
                    care@giftiglobal.com
                  </a>
                </p>
                <ul className="social-Layout1">
                  <li>
                    <a href="https://www.facebook.com/giftiglobal/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/giftiglobal/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/giftiglobal">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="bottomFooterBar"></div>
      </div>
    </>
  );
};

export default Idc_Order;

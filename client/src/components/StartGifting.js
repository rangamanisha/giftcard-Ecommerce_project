import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import StartingGift from "../assets/starting-gift.svg";
import {
  getGiftcardsState,
  giftCardsAction,
} from "../reducer/giftCards.reducer";
import StartingGift2 from "../assets/start-giftting2.svg";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getTopBarState } from "../reducer/topbar.reducer";
import { commonActions } from "../reducer/common.reducer";

const StartGifting = () => {
  const giftunitState = useSelector(getGiftcardsState);
  const topbarState = useSelector(getTopBarState);
  const dispatch = useDispatch();
  const countries = giftunitState.countries;

  const formik = useFormik({
    initialValues: {
      name: "",
      country: parseInt(countries[0]?.id) || 1,
      wantTo: "treatMySelf",
      sendGiftTo: "",
      livingIn: parseInt(countries[0]?.id) || 1,
    },
    validationSchema: Yup.object({
      name: Yup.string().min(1).max(200),
      country: Yup.number(),
      wantTo: Yup.string().oneOf(["treatMySelf", "sendAGift"]),
      sendGiftTo: Yup.string().min(1).max(200),
      livingIn: Yup.number(),
    }),
  });
  const history = useHistory();

  const triggerBrowseGifts = async (event) => {
    if (event) {
      event.preventDefault();
    }
    const data = formik.values;
    const selectedCountry = countries.filter(
      (r) =>
        r.id ===
        (data.wantTo === "treatMySelf"
          ? parseInt(data.country)
          : parseInt(data.livingIn))
    )[0];
    const countryId =
      topbarState.countries.filter(
        (country) => country.country_name === selectedCountry?.country_name
      )[0]?.id || 1;
    await dispatch(commonActions.setUser({ name: data.name }));
    if (data.wantTo === "treatMySelf") {
      await dispatch(commonActions.setUser({ name: data.name }));
      await dispatch(commonActions.setGiftingToUser(null));
    } else {
      await dispatch(commonActions.setUser(null));
      await dispatch(commonActions.setGiftingToUser({ name: data.sendGiftTo }));
    }
    await dispatch(
      giftCardsAction.selectCountry({
        ...selectedCountry,
        country_id: countryId,
      })
    );
    history.push({ pathname: "/allcards" });
  };

  const getAdditionalFields = () => {
    if (formik.values.wantTo === "sendAGift") {
      return (
        <Row className="col-xs-12 col-md-9 offset-md-1">
          <Col>
            <Form.Group as={Row}>
              <Form.Label className="startgf-fields-text">to</Form.Label>
              <Col>
                <Form.Control
                  className="mb-2"
                  id="sendGiftTo"
                  placeholder="Enter his/her name"
                  onChange={formik.handleChange}
                />
              </Col>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group as={Row}>
              <Form.Label className="startgf-fields-text">living in</Form.Label>
              <Col>
                <Form.Group>
                  <Form.Control
                    as="select"
                    className="mr-sm-2"
                    id="livingIn"
                    onChange={formik.handleChange}
                    custom
                  >
                    {countries.map((c, i) => (
                      <option key={i} value={c?.id}>
                        {c?.country_name || ""}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Form.Group>
          </Col>
        </Row>
      );
    }
    return null;
  };

  return (
    <Container>
      <Row className="cardgifiti-startgf custom-card mt-5">
        <Col md={2}>
          <img
            src={StartingGift}
            className="startgiftingimg"
            alt="startgiftingimg"
          />
        </Col>
        <Col md={8}>
          <h1 className="startgf-text text-center">Start Gifting</h1>
          <Form className="mt-4" onSubmit={formik.handleSubmit}>
            <Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label className="startgf-fields-text">I am</Form.Label>
                  <Col>
                    <Form.Control
                      className="mb-2"
                      id="name"
                      name="name"
                      placeholder="Enter your name"
                      onChange={formik.handleChange}
                    />
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label className="startgf-fields-text">
                    Living in
                  </Form.Label>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="country"
                        onChange={formik.handleChange}
                        custom
                      >
                        {countries.map((c, i) => (
                          <option key={i} value={c?.id}>
                            {c?.country_name || ""}
                          </option>
                        ))}
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label className="startgf-fields-text">
                    I want to
                  </Form.Label>
                  <Col>
                    <Form.Group>
                      <Form.Control
                        as="select"
                        className="mr-sm-2"
                        id="wantTo"
                        custom
                        onChange={formik.handleChange}
                      >
                        <option value="treatMySelf">Treat Myself</option>
                        <option value="sendAGift">Send a gift</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
            {getAdditionalFields()}
          </Form>
          <div className="text-center">
            <Button
              variant="info"
              size="md"
              className="mt-3 startgf-fields-button"
              onClick={triggerBrowseGifts}
            >
              Browse Gifts
            </Button>
          </div>
        </Col>
        <Col md={2}>
          <img
            src={StartingGift2}
            className="startgiftingimg"
            alt="startgiftingimg"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default StartGifting;

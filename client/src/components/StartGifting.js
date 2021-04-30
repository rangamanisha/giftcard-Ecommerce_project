import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// import { useHistory } from 'react-router-dom'
import { useSelector } from "react-redux";
import StartingGift from "../assets/starting-gift.svg";
// import {getGiftcardsState, giftCardsAction} from '../..reducer/giftCards.reducer'
import {
  getGiftcardsState,
  giftCardsAction,
} from "../reducer/giftCards.reducer";
import { useState, useEffect } from "react";
import StartingGift2 from "../assets/start-giftting2.svg";
import { useHistory } from "react-router-dom";

const StartGifting = () => {
  const giftunitState = useSelector(getGiftcardsState);
  // const dispatch = useDispatch()
  const [selectedCountry, setSelectedCountry] = useState(null);
  const countries = giftunitState.countries
    .map((country) => country["country_name"])
    .sort();

  const getCountriesDD = () => {
    return;
  };
  const history = useHistory();
  return (
    <Row>
      <div className="cardgifiti-startgf custom-card row mx-auto mt-5">
        <Col xs={2}>
          <img
            src={StartingGift}
            className="startgiftingimg"
            alt="startgiftingimg"
          />
        </Col>

        <Col xs={8}>
          <h1 className="startgf-text text-center">Start Gifting</h1>
          <Form className="mt-5">
            <Row>
              <Col>
                <Form.Group as={Row}>
                  <Form.Label className="startgf-fields-text">I am</Form.Label>
                  <Col>
                    <Form.Control
                      className="mb-2"
                      id="inlineFormInput"
                      placeholder="Enter your name"
                    />
                    {/* <Form.Control type="text" placeholder="" /> */}
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
                        id="inlineFormCustomSelect"
                        custom
                      >
                        {countries.map((c, i) => (
                          <option key={i}>{c}</option>
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
                        id="inlineFormCustomSelect"
                        custom
                      >
                        <option value="0" selected="selected">
                          Treat Myself
                        </option>
                        <option value="1">Send a gift</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                </Form.Group>
              </Col>
            </Row>
          </Form>

          <div className="text-center">
            <Button
              variant="info"
              size="md"
              className="mt-3 startgf-fields-button"
              onClick={() => history.push("allcards")}
            >
              Browse Gifts
            </Button>
          </div>
        </Col>

        <Col xs={2}>
          <img
            src={StartingGift2}
            className="startgiftingimg"
            alt="startgiftingimg"
          />
        </Col>
      </div>
    </Row>
  );
};

export default StartGifting;

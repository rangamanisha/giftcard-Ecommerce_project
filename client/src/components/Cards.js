import React from "react";
import {
  Button,
  Col,
  Image,
  Container,
  Row,
} from "react-bootstrap";
import {useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import GiftiGlobal from "../assets/Gifti-Global.png";
import Country from "../assets/country.svg";
import Target from "../assets/target.svg";
import Giftcard from "../assets/gift-card.svg";


const Cards = () => {
  const history = useHistory();
  return (
    <Container fluid>
    <React.Fragment>

      <Row className="cardgifiti mt-5 mx-auto">
      <Col sm={5} className="card-text-align">
        <p className="gifticard-text">
          Gifti Global Makes Every Gift Meaningful
        </p>
        <p>
          Treat yourself or send customisable e-gift cards with a
          selection of +4,000 brands in +100 countries
        </p>
        <div>
          <Button className="custom-button mr-sm-3" onClick={() => history.push('allcards')}>
            Start Gifiting&nbsp;
            <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Button>
          <Button variant="outline-secondary">How it works</Button>
        </div>
      </Col>

      <Col sm={7}>
      <Image src={GiftiGlobal} fluid/>
      </Col>
      </Row>

        <Row className="mt-5 icon-margin">
          <Col sm>
            <div className="widgets_div">
              <div className="icon_div">
                <span>
                  <Image src={Country} className="mr-sm-3" fluid />
                </span>
              </div>
              <div className="text_div">
                <span> Select a country and browse e-gift cards within</span>
                <br />
                <span>4,000+ brands</span>
              </div>
            </div>
          </Col>

          <Col sm>
            <div className="widgets_div">
              <div className="icon_div">
                <span>
                  <Image src={Target} className="mr-sm-3" />
                </span>
              </div>
              <div className="text_div">
                <span>Treat yourself or send an e-gift with a </span>
                <br />
                <span>personalised message by email, sms or whatsapp</span>
              </div>
            </div>
          </Col>

          <Col sm>
            <div className="widgets_div">
              <div className="icon_div">
                <span>
                  <Image src={Giftcard} className="mr-sm-3" />
                </span>
              </div>
              <div className="text_div">
                <span>Buy with your credit or debit card or</span>
                <br />
                <span>using your Gifti Global card or points</span>
              </div>
            </div>
          </Col>
        </Row>
      </React.Fragment>
    </Container>
  );
};

export default Cards;

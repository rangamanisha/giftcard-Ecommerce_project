import React from 'react';
import ReactBootstrap, { Card, Button, Col, Image, Container, Row, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import GiftiGlobal from '../assets/Gifti-Global.png';
import { ReactComponent as Country } from '../assets/country.svg';
import { ReactComponent as Target } from '../assets/target.svg';
import { ReactComponent as Giftcard } from '../assets/gift-card.svg';
import StartingGift from '../assets/starting-gift.svg';
import StartingGift2 from '../assets/start-giftting2.svg';
import Appleitunes from '../assets/Appleitunes.png';
import Asec from '../assets/5asec.png';
import Careem from '../assets/Careem.png';
import Ace from '../assets/Ace.png';
import {useHistory} from 'react-router-dom';

const card = () => {
  return (
    <div className="container-fluid">
      <div className="cardgifiti custom-card row mx-auto mt-5">
        <p className="gifticard-text">
          Gifti Global Makes
          <br />
          Every Gift Meaningful
        </p>
        <p style={{ marginLeft: '75px' }}>
          Treat yourself or send customisable e-gift cards with a<br />
          selection of +4,000 brands in +100 countries
        </p>
        <div className="row" style={{ marginLeft: '75px' }}>
          <Button className="custom-button mr-sm-3">
            Start Gifiting&nbsp;<FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
          </Button>
          <Button variant="outline-secondary">How it works</Button>
        </div>
        <img src={GiftiGlobal} className="card-image" alt="Gifti-Global" />
      </div>
      <div className="row mt-5" style={{ marginLeft: '112px' }}>
        <Country className="mr-sm-3"></Country>
        <small className="custom-font">
          Select a country and browse e-gift cards within
          <br /> 4,000+ brands
        </small>
        <Target className="mr-sm-3 icons"></Target>
        <small className="custom-font">
          Treat yourself or send an e-gift with a,
          <br />
          personalised message by email, sms or whatsapp
        </small>
        <Giftcard className="mr-sm-3 icons"></Giftcard>
        <small className="custom-font">
          Buy with your credit or debit card or
          <br />
          using your Gifti Global card or points
        </small>
      </div>
      <div className="cardgifiti-startgf custom-card row mx-auto mt-5">
        <img src={StartingGift} className="startgiftingimg" alt="Icon" />
        <h1 className="startgf-text mx-auto">Start Gifting</h1>
        <Form className="mt-5 mb-2">
          <Row>
            <Col>
              <Form.Control placeholder="" />
            </Col>
            <Col>
              <Form.Control placeholder="" />
            </Col>
            <Col>
              <Form.Control placeholder="" />
            </Col>
          </Row>
          <Button variant="info" size="md" className="mt-5" style={{ marginLeft: '330px' }} onClick={() => history.pushState('/allcards')}>
            Browse Gifts
          </Button>{' '}
        </Form>
        <img src={StartingGift2} className="startgiftimg" alt="Icon" />
      </div>
      <div className="cardgifiti-card mt-5">
        <p className="giftiallcard-text mt-5">Brands recommended for you in the UAE</p>
        <div style={{ marginLeft: '130px' }}>
          <img src={Careem} className="ml-sm-5 imgcards mt-5" alt="Careem" />
          <img src={Asec} className="ml-sm-5 imgcards mt-5" alt="Asec" />
          <img src={Appleitunes} className="ml-sm-5 imgcards mt-5" alt="Appleitunes" />
          <img src={Ace} className="ml-sm-5 imgcards mt-5" alt="Ace" />
        </div>
      </div>
    </div>
  );
};

export default card;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { map, isEmpty } from 'lodash';
import { featureBrandsAction } from '../actions/brands.action';
import { getBrandsState } from '../reducer/brands.reducer';
import { get } from 'lodash'
import Carousel from "react-elastic-carousel";
import AmazonMedium from "../assets/amazon_medium.png";

import Item from "./item";
import { getGiftcardsState } from '../reducer/giftCards.reducer';
import { Link } from 'react-router-dom';



const giftGiftCard = () => {
  return (
    <div>
      <p className="select-card-text mt-5">Sent to</p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Name" className="mt-3" />
          <Form.Control type="email" placeholder="Enter email" className="mt-3" />
        </Form.Group>
      </Form>
      <p className="select-card-text mt-5">Choose A Template</p>
      <div class="row">
        <img src={AmazonMedium} alt="AmazonMedium" className="templatetheme ml-5" />
        <img src={AmazonMedium} alt="AmazonMedium" className="templatetheme ml-5" />
        <img src={AmazonMedium} alt="AmazonMedium" className="templatetheme ml-5" />
      </div>
    </div>


  );
};

export default giftGiftCard;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Technology from "../assets/technology.svg";
import Toys from "../assets/toys.svg";
import Suitcase from "../assets/suitcase.svg";
import Hypermarket from "../assets/Hypermarket.svg";
import Flowersandgift from "../assets/flowersandgift.svg";
import Beauty from "../assets/Beauty.svg";
import Shipped from "../assets/shipped.svg";
import Allmenu from "../assets/allmenu.svg";
import {featureBrandsAction} from '../actions/brands.action';
import {getBrandsState} from '../reducer/brands.reducer';
// import React, { useDebugValue } from "react";
// import { useDispatch, useSelector } from "react-redux";
import {get} from 'lodash'



const AllFeaturedCards = () => {
const dispatch = useDispatch();
const state = useSelector(getBrandsState);
const fetaured_brands = get(state, 'data')
  React.useEffect(() => {
    console.log("hello");
    dispatch(featureBrandsAction({ 
      currency: 1,
      program_id:1
    }))

  }, [])
  return (
    <div>
    <div className="cardgifiti-card">
      <p className="giftiallcard-text">Featured Cards</p>
      <p className="allgiftcard-text">
        Buy Most Popular eGift Cards in UAE
        <br />
        Personalized gift vouchers delivered online & redeemable at popular
        Brands
      </p>
      <div>
      <div className="mt-5 ">
        <div className="row" style={{ marginLeft: "130px" }}>
          <div className="box">
            <a href="#/">Arrow</a>
          </div>
          <div className="box">
            <a href="#/">
              <img
                src={Allmenu}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">All Gift Cards</p>
            </a>
          </div>

          <div className="box">
            <a href="#/">
              <img
                src={Flowersandgift}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">Flowers & Gifts</p>
            </a>
          </div>

          <div className="box">
            <a href="#/">
              <img
                src={Beauty}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">Beauty</p>
            </a>
          </div>

          <div className="box">
            <a href="#/">
              <img
                src={Hypermarket}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">Hypermarket</p>
            </a>
          </div>

          <div className="box">
            <a href="#/">
              <img
                src={Technology}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">Technology</p>
            </a>
          </div>

          <div className="box">
            <a href="#/">
              <img
                src={Toys}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">Kids & toys</p>
            </a>
          </div>

          <div className="box">
            <a href="#/">
              <img
                src={Suitcase}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">Travel & hotels</p>
            </a>
          </div>

          <div className="box">
            <a href="#/">
              <img
                src={Shipped}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">Transportation</p>
            </a>
          </div>
          <div className="box">
            <a href="#/">arrow</a>
          </div>
          </div>
        </div>
        {/* <div className="cardgifiti-card">
          <p className="giftiallcard-text">Featured Cards</p>
          <p className="allgiftcard-text">
            Buy Most Popular eGift Cards in UAE
            <br />
            Personalized gift vouchers delivered online & redeemable at popular
            Brands
          </p>
          <div style={{ marginLeft: "130px", marginTop: "-35px" }}>
            <div></div>
            <div className="mr-sm-5 row"></div>
          </div>
        </div>
      </div> */}
    
  </div>
  </div>
  </div>
  );
};

export default AllFeaturedCards;

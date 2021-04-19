import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { map, isEmpty } from 'lodash';
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
import Carousel from "react-elastic-carousel";
import Item from "./item";
const AllFeaturedCards = () => {
const dispatch = useDispatch();
const state = useSelector(getBrandsState);
const fetaured_brands = get(state, 'data')
const brandsWithfeatutre = get(state, 'featured_brands')
const fetaured_brands1 = get(brandsWithfeatutre,'data')
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 1 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 3 }
];

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
      
      <div className="gificards">
        {<Carousel breakPoints={breakPoints}>
          
            <>{
            map(get(fetaured_brands1, 'brands'), (brand, i)  => (
              <>
              <Item> <img src={get(brand, 'images.color.medium_rectangle')} className="mr-sm-5 imgcards mt-5" alt={brand.name} /></Item> 
              </>
            ))
          }
            </>
            </Carousel>
        
        }
        </div>
        </div>
        </div>
  );
};

export default AllFeaturedCards;

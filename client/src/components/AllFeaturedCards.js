import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { map, isEmpty } from 'lodash';
import { featureBrandsAction } from '../actions/brands.action';
import { getBrandsState } from '../reducer/brands.reducer';
import { get } from 'lodash'
import Carousel from "react-elastic-carousel";
import Item from "./item";
import { getGiftcardsState } from '../reducer/giftCards.reducer';
import {Link } from 'react-router-dom';
import Giftcard from './Giftcard';
const AllFeaturedCards = () => {
  const dispatch = useDispatch();
  const state = useSelector(getBrandsState);
  const giftunitState = useSelector(getGiftcardsState);
  const fetaured_brands = get(state, 'data')
  const brandsWithfeatutre = get(state, 'featured_brands')
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 1 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  React.useEffect(() => {
    console.log("hello");
    dispatch(featureBrandsAction({
      currency: giftunitState.giftunit_id,
      program_id: 1
    }))

  }, [giftunitState.giftunit_id])
  const nowCountry = isEmpty(get(giftunitState, 'selectedCountry.country_name')) ? get(giftunitState, 'countries[0].country_name') : get(giftunitState, 'selectedCountry.country_name')

  return (
    <div>
      <div>
    </div>
      <div className="cardgifiti-card">
        <p className="giftiallcard-text">{`Brands recommended for you in the ${nowCountry}`}</p>
        <p className="allgiftcard-text">
          {`Buy Most Popular eGift Cards in ${nowCountry}`}
        <br />
        Personalized gift vouchers delivered online & redeemable at popular Brands
      </p>
        <div className="gificards">
          {
            <>
              <Carousel pagination={0} breakPoints={breakPoints}>
                {
                  map(get(brandsWithfeatutre, 'brands'), (brand, i) => (
                    <Item>
                      <>
                        <Link to="/selectcard">
                          <Giftcard brand={brand}/>
                        </Link>
                      </>
                    </Item>
                  ))
                }
              </Carousel>
            </>

          }
        </div>

      </div>
    </div>
    
  );
};

export default AllFeaturedCards;

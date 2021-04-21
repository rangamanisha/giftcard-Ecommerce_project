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


const AllFeaturedCards = () => {
  const dispatch = useDispatch();
  const state = useSelector(getBrandsState);
  const giftunitState = useSelector(getGiftcardsState);
  const fetaured_brands = get(state, 'data')
  const brandsWithfeatutre = get(state, 'featured_brands')
  // const fetaured_brands1 = get(brandsWithfeatutre,'data')
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
          {
            <>
              <Carousel pagination={0} breakPoints={breakPoints}>
                {
                  map(get(brandsWithfeatutre, 'brands'), (brand, i) => (
                    <Item>
                      <>
                        <Link to="/selectcard">
                          <img src={get(brand, 'images.color.medium_rectangle')} className="mr-sm-5 imgcards" alt={brand.name} />
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

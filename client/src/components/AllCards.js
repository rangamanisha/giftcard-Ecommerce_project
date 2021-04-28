import React from 'react';
import { useState, useRef } from 'react';
import AllCategoryCards from './AllCategoryCards';
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../actions/category.actions';
import { getCategoryState } from '../reducer/category.reducer'
import { get, map, isEmpty, filter, isUndefined, cloneDeepWith } from 'lodash';
import { brandsByCategoryAction, allBrandAction, featureBrandsAction } from '../actions/brands.action';
import { getBrandsState } from '../reducer/brands.reducer';
import { getTopBarState } from '../reducer/topbar.reducer';
import { giftCardsUnitAction } from '../actions/gitCards.actions';
import { getGiftcardsState } from '../reducer/giftCards.reducer';
import AllFeaturedCards from './AllFeaturedCards';
import Giftcard from './Giftcard'


function AllCards() {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState(1);
  const [items, setitems] = useState([]);
  const [visible, setvisible] = useState(3);
  const state = useSelector(getCategoryState)
  const brandState = useSelector(getBrandsState);
  const topbarState = useSelector(getTopBarState)
  const giftunitState = useSelector(getGiftcardsState);
  const categories = get(state, 'data')
  const category_brands = get(brandState, 'category_brands')
  const brandsWithCategory = get(brandState, 'allBrands')
  const [activeCategory, setActiveCategory] = React.useState()
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 7 },
    { width: 1200, itemsToShow: 8 }
  ];

  React.useEffect(() => {
    dispatch(categoryAction({
      currency: giftunitState.giftunit_id,
      program_id: 1
    }))
  }, [giftunitState.giftunit_id])
  React.useEffect(() => {
    dispatch(allBrandAction({
      currency: giftunitState.giftunit_id,
      program_id: 1,
      image_size: "medium_rectangle",
      image_type: "Color",
      list_type: "group"
    }))


  }, [giftunitState.giftunit_id])
  React.useEffect(() => {
    dispatch(giftCardsUnitAction({
      currency: 1,
      program_id: 1,
      giftunit_id: giftunitState.giftunit_id
    }))

  }, [giftunitState.giftunit_id])

  const nowCountry = isEmpty(get(giftunitState, 'selectedCountry.country_name')) ? get(giftunitState, 'countries[0].country_name') : get(giftunitState, 'selectedCountry.country_name')

  return (

    <div class="allGiftCard">
      <p className="giftiallcard-text-a">Browse by Category</p>
      <AllCategoryCards />
      <div>

        <AllFeaturedCards />
      </div>
      <div>
        <p className="giftiallcard-text">{`All Gift Cards in the ${nowCountry}`}</p>
        <p className="allgiftcard-text">
          {`Buy Most Popular eGift Cards in ${nowCountry}`} 
        <br />
        Personalized gift vouchers delivered online & redeemable at popular Brands
      </p>
      </div>
      <div className="gificards mt-5 ">
        {
          isEmpty(get(brandState, 'brands')) ?

            map(brandsWithCategory, (category, i) =>
              <>{
                map(get(category, 'brands'), (brand, i) => (
                  <>
                    <Giftcard brand={brand} key={i}/>
                  </>
                ))
              }
              </>
            ) :


            map(get(brandState, 'brands'), (brand, i) => (
              <>
                  <Giftcard brand={brand} key={i}/>
              </>
            ))
        }

      </div>
    </div>
  )
}

export default AllCards;


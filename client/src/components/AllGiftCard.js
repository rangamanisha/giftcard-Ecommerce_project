import React from 'react';
import Carousel from "react-elastic-carousel";
// import styled from "styled-component";
import Item from "./item";
import { useState } from 'react';
import Allmenu from "../assets/allmenu.svg";
import { Link } from 'react-router-dom';

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import CategoryCard from '../components/categoryCard'
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../actions/category.actions';
// import { giftcardUnitAction } from '../actions/category.actions'
import { getCategoryState } from '../reducer/category.reducer'
import { get, map, isEmpty } from 'lodash';
import { brandsByCategoryAction, allBrandAction, featureBrandsAction } from '../actions/brands.action';
import { getBrandsState } from '../reducer/brands.reducer';
import { getTopBarState } from '../reducer/topbar.reducer';
import { giftCardsUnitAction } from '../actions/gitCards.actions';
import { getGiftcardsState } from '../reducer/giftCards.reducer';


function AllGiftCard() {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState(1);
  const [items, setitems] = useState([]);
  const [visible, setvisible] = useState(3);
  const state = useSelector(getCategoryState)
  const brandState = useSelector(getBrandsState);
  const topbarState = useSelector(getTopBarState)
  const giftunitState = useSelector(getGiftcardsState);
  const categories = get(state, 'data')
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
  React.useEffect(() => {

    dispatch(featureBrandsAction({
      currency: giftunitState.giftunit_id,
      program_id: 1
    }))

  }, [giftunitState.giftunit_id])


  const getCardsWithCategory = (category) => {
    const { id, name} = category
    //dispatch action to get cards by category
    dispatch(brandsByCategoryAction({
      currency: giftunitState.giftunit_id,
      program_id: 1,
      category_id: id
    }))
    setActiveCategory(id)
  }

  const Shormoreitems = () => {
    setvisible((prevValue) => prevValue + 3)
  }


  const nowCountry = isEmpty(get(topbarState, 'selectedCountry')) ? get(topbarState, 'countries[0].country_name') : get(topbarState, 'selectedCountry')

  return (

    <div class="allGiftCard">
      <div>
        <p className="giftiallcard-text">{`All Gift Cards in the ${nowCountry}`}</p>
        <p className="giftiallcard-text-a">Browse by Category</p>
      </div>
      <div className="slideclass" >
        <Carousel pagination={0} breakPoints={breakPoints}>
          <Item>
            <div className="box" >

              <img
                src={Allmenu}
                alt="Icon"
                style={{ width: "30px", height: "30px" }}
              />
              <br />
              <p className="products_icons">All Gift Cards</p>

            </div>
          </Item>
          {
            !isEmpty(categories) && map(categories, (category) => (
              <>
                <Item>
                  {
                    <button className="transparentButton" onClick={() => getCardsWithCategory(category)}>
                      <CategoryCard category={category} key={category.id} nowActive={category.id === activeCategory ? true : false} />
                    </button>
                  }
                </Item>
              </>
            ))
          }

        </Carousel>
      </div>
      <div className="gificards mt-5 ">
        {
          isEmpty(get(brandState, 'brands')) ?

            map(brandsWithCategory, (category) =>
              <>{
                map(get(category, 'brands'), (brand) => (
                  <>
                    <Link to="/selectcard">
                      <img src={get(brand, 'images.color.medium_rectangle')} className="mr-sm-5 imgcards mt-5" alt={brand.name} />
                    </Link>
                  </>
                ))
              }
              </>
            ) :
            map(get(brandState, 'brands'), (brand) => (
              <>
                <img src={get(brand, 'images.color.medium_rectangle')} className="mr-sm-5 imgcards mt-5" alt={brand.name} />
              </>
            ))
        }
      </div>
      <div class="text-center">
        <button onClick={Shormoreitems} type="button" class="mt-3 startgf-fields-button btn btn-info btn-md">Load More</button></div>
    </div>
  )
}

export default AllGiftCard;

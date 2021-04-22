import React from 'react';
import Carousel from "react-elastic-carousel";
import Item from "./item";
import Allmenu from "../assets/allmenu.svg";
import CategoryCard from '../components/categoryCard'
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../actions/category.actions';
import { getCategoryState } from '../reducer/category.reducer'
import { get, map, isEmpty } from 'lodash';
import { brandsByCategoryAction, allBrandAction, featureBrandsAction } from '../actions/brands.action';
import { getBrandsState } from '../reducer/brands.reducer';
import { getTopBarState } from '../reducer/topbar.reducer';
import { giftCardsUnitAction } from '../actions/gitCards.actions';
import { getGiftcardsState } from '../reducer/giftCards.reducer';
import {useHistory, Link} from 'react-router-dom';
import AllFeaturedCards from './AllFeaturedCards';
import Giftcard from './Giftcard';


function AllGiftCard() {
  const dispatch = useDispatch();
  const history = useHistory();
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
      currency: giftunitState.giftunit_id,
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
    
         
  
  const nowCountry = isEmpty(get(giftunitState, 'selectedCountry.country_name')) ? get(giftunitState, 'countries[0].country_name') : get(giftunitState, 'selectedCountry.country_name')
  const allTheBrands = [];
  map(brandsWithCategory, (category) => {
      map(get(category, 'brands'), brand => {
        if(allTheBrands.length <= 15){
          allTheBrands.push(brand)
        }
        else return null
      })
  })

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
    {<AllFeaturedCards/>}
        <div className="gificards mt-5 ">
          {
            isEmpty(get(brandState, 'brands')) ? 

              
                map(allTheBrands, (brand, i) => (
                  <>
                    
                      <Giftcard brand={brand}/>
                    
                  </>
                ))
              
              
            : 
            
              
              map(get(brandState, 'brands'), (brand, i) => (
                
                <>
                {i <= 15 ?
                   <Giftcard brand={brand}/> 
                    : null} 
                </>
              ) )
            }
        </div>
      <div class="text-center"><button  onClick={() => history.push('AllCards')} type="button" class="mt-3 startgf-fields-button btn btn-info btn-md">Load More</button></div>
</div>
    )
}

export default AllGiftCard;

import React from 'react';
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
// import styled from "styled-component";
import Item from "./item";
import Technology from "../assets/technology.svg";
import Toys from "../assets/toys.svg";
import Suitcase from "../assets/suitcase.svg";
import Hypermarket from "../assets/Hypermarket.svg";
import Flowersandgift from "../assets/flowersandgift.svg";
import Beauty from "../assets/Beauty.svg";
import Shipped from "../assets/shipped.svg";
import Allmenu from "../assets/allmenu.svg";
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import styled from "styled-components";

// Import Swiper styles
// import 'swiper/swiper.scss';
// import 'swiper/components/navigation/navigation.scss';
// import 'swiper/components/pagination/pagination.scss';
// import 'swiper/components/scrollbar/scrollbar.scss';
import Appleitunes from "../assets/Appleitunes.png";
import Carrefour from "../assets/Carrefour.png";
import Careem from "../assets/Careem.png";
import Ace from "../assets/Ace.png";
import Asec from "../assets/5asec.png";
import Biobox from "../assets/biobox.png";
import Amazon from "../assets/amazon.png";
import GiftGlobalCard from "../assets/GiftiGlobalcard.png";
import Ballooncard from "../assets/Ballooncard.png";
import Bollywoodparks from "../assets/bollywoodparks.png";
import Deliveroo from "../assets/deliveroo.png";
import Mylist from "../assets/mylist.png";
import CategoryCard from '../components/categoryCard'
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../actions/category.actions';
// import { giftcardUnitAction } from '../actions/category.actions'
import { getCategoryState } from '../reducer/category.reducer'
import { get, map, isEmpty } from 'lodash';
import {brandsByCategoryAction, allBrandAction, featureBrandsAction} from '../actions/brands.action';
import {getBrandsState} from '../reducer/brands.reducer';
import {giftCardsUnitAction} from '../actions/gitCards.actions';
import {getGiftcardsState} from '../reducer/giftCards.reducer'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
function AllGiftCard() {
  const dispatch = useDispatch();
  const state = useSelector(getCategoryState)
  const brandState = useSelector(getBrandsState);
  const categories = get(state, 'data')
  const category_brands = get(brandState, 'category_brands')
  const brandsWithCategory = get(brandState, 'allBrands')
  const [activeCategory, setActiveCategory] = React.useState()
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 8 },
    { width: 1200, itemsToShow: 10 }
  ];
  React.useEffect(() => {
    dispatch(categoryAction({
      currency: 1,
      program_id: 1
    }))
  }, [])
  React.useEffect(() => {
    dispatch(allBrandAction({
      currency: 1,
      program_id:1,
      image_size: "medium_rectangle",
      image_type:"Color",
      list_type:"group"
    }))

  }, [])
  React.useEffect(() => {
    console.log("hello");
    dispatch(featureBrandsAction({ 
      currency: 1,
      program_id:1
    }))

  }, [])

  
  const getCardsWithCategory = (category) => {
    const {id, name} = category
    //dispatch action to get cards by category
    dispatch(brandsByCategoryAction({
      currency:1,
      program_id:1,
      category_id:id
    }))
    setActiveCategory(id)
  }

  return (

    <div class="allGiftCard">
      <div>
        <p className="giftiallcard-text">All Gift Cards in the UAE</p>
        <p className="giftiallcard-text-a">Browse by Category</p>
      </div>
      <div className="slideclass" >
      {/* <Swiper
      spaceBetween={1}
      slidesPerView={9}
      navigation
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >   <SwiperSlide> */}
   <Carousel breakPoints={breakPoints}>
   <Item>
                <div className="box" >
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
          </Item>
        
                {
            !isEmpty(categories) && map(categories, (category, i) => (
              <>
                <Item>
                {
                  
                  <button className="transparentButton" onClick={() => getCardsWithCategory(category)}>
                  <CategoryCard category={category} key={category.id} nowActive={category.id === activeCategory ? true : false}/>
                  </button>
                 
                }
              </Item>
              </>
            ))
          }
    
    </Carousel>
    {/* </Carousel> */}
    </div>


   
        {/* <div className="scroll"  >
          
          <div className="box" >
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

      </div> */}


      <div className="gificards mt-5 ">
        {
          map(brandsWithCategory, (category, i) =>(
            <>{
            map(get(category, 'brands'), (brand, i)  => (
              <>
                <img src={get(brand, 'images.color.medium_rectangle')} className="mr-sm-5 imgcards mt-5" alt={brand.name} />
              </>
            ))
          }
            </>

          ))
        }

        
        {/* <img src={Appleitunes} className="mr-sm-5 imgcards mt-5" alt="Appleitunes" />
        <img src={Asec} className="mr-sm-5 imgcards mt-5" alt="Asec" />
        <img src={Ace} className="mr-sm-5 imgcards mt-5" alt="Ace" />
        <img src={Careem} className="mr-sm-5 imgcards mt-5" alt="Careem" />
        <img src={Carrefour} className="mr-sm-5 imgcards mt-5" alt="Carrefour" />
        <img src={Biobox} className="mr-sm-5 imgcards mt-5" alt="Biobox" />
        <img src={Amazon} className="mr-sm-5 imgcards mt-5" alt="Amazon" />
        <img src={GiftGlobalCard} className="mr-sm-5 imgcards mt-5" alt="GiftGlobalCard" />
        <img src={Ballooncard} className="mr-sm-5 imgcards mt-5" alt="Ballooncard" />
        <img src={Bollywoodparks} className="mr-sm-5 imgcards mt-5" alt="Bollywoodparks" />
        <img src={Deliveroo} className="mr-sm-5 imgcards mt-5" alt="Deliveroo" />
        <img src={Mylist} className="mr-sm-5 imgcards mt-5" alt="Mylist" /> */}
      </div>
      <div class="text-center"><button type="button" class="mt-3 startgf-fields-button btn btn-info btn-md">Load More</button></div>
    </div>

    )
}

export default AllGiftCard;

import React from 'react';
import Technology from "../assets/technology.svg";
import Toys from "../assets/toys.svg";
import Suitcase from "../assets/suitcase.svg";
import Hypermarket from "../assets/Hypermarket.svg";
import Flowersandgift from "../assets/flowersandgift.svg";
import Beauty from "../assets/Beauty.svg";
import Shipped from "../assets/shipped.svg";
import Allmenu from "../assets/allmenu.svg";
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
import {useDispatch, useSelector} from 'react-redux';
import {categoryAction} from '../actions/category.actions';
import {getCategoryState} from '../reducer/category.reducer'
import {get, map, isEmpty} from 'lodash'
import Slider from 'react-slick'
const sliderSettings = {
  infinite: false,
  slidesToShow: 8,
  slidesToScroll: 8,
  speed: 500
}
function AllGiftCard() {
  const dispatch = useDispatch();
  const state = useSelector(getCategoryState)
  const data = get(state, 'data')
  React.useEffect(() => {
    dispatch(categoryAction({
      currency:1,
      program_id: 1
    }))
  }, [])
    return (
     
<div id="allGiftCard">
        <div>
          <p className="giftiallcard-text">All Gift Cards in the UAE</p>
          <p className="giftiallcard-text-a">Browse by Category</p>
        </div>

        <div className="mt-5" >
          <div className="container">
            {/*
        <div className="row" style={{ marginLeft: "130px" }} >
          <div className="box">
            <a href="#/">
              Arrow
            </a>
          </div>
            */}
            <Slider {...sliderSettings}>
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
          {
            !isEmpty(data) && map(data, category => (
              <>
              {
                category.active && 
                <CategoryCard category={category} key={category.id}/>
              }
              </>
            ))
          }
          {/* <div className="box">
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
            {" "}
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
          </div> */}
          {/*
          <div className="box">
            <a href="#/">Arrow</a>
          </div>
          */}
          </Slider>
        </div>
     

        <div className="gificards mt-5 row">
            <img src={Appleitunes} className="mr-sm-5 imgcards" alt="Appleitunes" />
            <img src={Asec} className="mr-sm-5 imgcards" alt="Asec" />
            <img src={Ace} className="mr-sm-5 imgcards" alt="Ace" />
            <img src={Careem} className="imgcards" alt="Careem" />
            <img src={Carrefour} className="mr-sm-5 imgcards mt-5" alt="Carrefour" />
            <img src={Biobox} className="mr-sm-5 imgcards mt-5" alt="Biobox" />
            <img src={Amazon} className="mr-sm-5 imgcards mt-5" alt="Amazon" />
            <img src={GiftGlobalCard} className="mr-sm-5 imgcards mt-5" alt="GiftGlobalCard" />
            <img src={Ballooncard} className="mr-sm-5 imgcards mt-5" alt="Ballooncard" />
            <img src={Bollywoodparks} className="mr-sm-5 imgcards mt-5" alt="Bollywoodparks" />
            <img src={Deliveroo} className="mr-sm-5 imgcards mt-5" alt="Deliveroo" />
            <img src={Mylist} className="mr-sm-5 imgcards mt-5" alt="Mylist" />
        </div>
</div>
</div>
    )
}

export default AllGiftCard;

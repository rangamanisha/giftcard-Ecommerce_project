
import React, { useState  } from 'react';
import axios from 'axios';  
import Navbar from "./Navbar";
import Technology from "../assets/technology.svg";
import Toys from "../assets/toys.svg";
import Suitcase from "../assets/suitcase.svg";
import Hypermarket from "../assets/Hypermarket.svg";
import Flowersandgift from "../assets/flowersandgift.svg";
import Beauty from "../assets/Beauty.svg";
import Shipped from "../assets/shipped.svg";
import Allmenu from "../assets/allmenu.svg";

const AllFeaturedCards = () => {
   
  // eslint-disable-next-line
  const [pics, setPics] = useState([]);
  const [imglist, setImglist] = useState([]);

const apiUrl = "https://api.giftiglobal.com/v1/brands/featured_brands?currency=1&program_id=1";
  const Featuredcards = () => {
    axios.get(apiUrl)
    .then((result) => {    
       const pics = result.data.data.brands;
       const imglist = pics.map((img) => <img className="imgcards mr-sm-5 mt-5" alt="Icon" src={img.images.color.small_rectangle} />)
       setPics(pics);
       setImglist(imglist);
    });
  };


  const Url = "https://api.giftiglobal.com/v1/brands/brands_by_category?category_id=12&currency=1&program_id=1";
  const Flowers = () => {
    ;
    axios.get(Url)
    .then((result) => {    
      ; 
       const pics = result.data.data.brands;
       const imglist = pics.map((img) => <img className="imgcards mr-sm-5 mt-5" alt="Icon" src={img.images.color.small_rectangle} />)
       setPics(pics);
       setImglist(imglist);
    });
  };
   

  const BUrl = "https://api.giftiglobal.com/v1/brands/brands_by_category?category_id=31&currency=1&program_id=1";
  const Beautycards = () => {
    ;
    axios.get(BUrl)
    .then((result) => {    
      ; 
       const pics = result.data.data.brands;
       const imglist = pics.map((img) => <img className="imgcards mr-sm-5 mt-5" alt="Icon" src={img.images.color.small_rectangle} />)
       setPics(pics);
       setImglist(imglist);
    });
  };
   


  return (
    
    <div className="body">
      <Navbar />
      <div className="mt-5 ">
        <div className="row" style={{marginLeft:'130px'}}>
        <div className="box">
            </div>
          <div className="box">
            <a href="/">
              <img src={Allmenu} onClick={Featuredcards} alt="Icon" style={{width:'30px',height:'30px'}}/>
              <br />
              <p className="products_icons">All Gift Cards</p>
            </a>
            </div>

              <div className="box">
                <a href="/">
                  <img
                    src={Flowersandgift}
                    onClick={Flowers}
                    alt="Icon"
                    style={{width:'30px',height:'30px'}}
                  />
                  <br />
                  <p className="products_icons">Flowers & Gifts</p>
                </a>
              </div>

              <div className="box">
                <a href="/">
                  <img src={Beauty} alt="Icon" onClick={Beautycards} style={{width:'30px',height:'30px'}}/>
                  <br />
                  <p className="products_icons">Beauty</p>
                </a>
              </div>

              <div className="box">
                <a href="/">
                  <img src={Hypermarket} alt="Icon" style={{width:'30px',height:'30px'}}/>
                  <br />
                  <p className="products_icons">Hypermarket</p>
                </a>
              </div>

              <div className="box">
                <a href="/">
                  <img src={Technology} alt="Icon" style={{width:'30px',height:'30px'}}/>
                  <br />
                  <p className="products_icons">Technology</p>
                </a>
              </div>

              <div className="box">
                <a href="/">
                  <img src={Toys} alt="Icon" style={{width:'30px',height:'30px'}}/>
                  <br />
                  <p className="products_icons">Kids & toys</p>
                </a>
              </div>

              <div className="box">
                {" "}
                <a href="/">
                  <img src={Suitcase} alt="Icon" style={{width:'30px',height:'30px'}}/>
                  <br />
                  <p className="products_icons">Travel & hotels</p>
                </a>
              </div>

              <div className="box">
                <a href="/">
                  <img src={Shipped} alt="Icon" style={{width:'30px',height:'30px'}}/>
                  <br />
                  <p className="products_icons">Transportation</p>
                </a>
              </div>
              <div className="box">
            </div>
        </div>
        <div className="cardgifiti-card">
          <p className="giftiallcard-text">Featured Cards</p>
          <p className="allgiftcard-text">
            Buy Most Popular eGift Cards in UAE
            <br />
            Personalized gift vouchers delivered online & redeemable at popular
            Brands
          </p>
          <div style={{ marginLeft: "130px", marginTop: "-35px" }}>
          <div>
          </div>
             <div className="mr-sm-5 row">{imglist}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllFeaturedCards;

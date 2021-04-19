import React, {useState, useRef} from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { categoryAction } from '../actions/category.actions';
import { getCategoryState } from '../reducer/category.reducer'
import { get, map, isEmpty, filter, isUndefined } from 'lodash';
import {brandsByCategoryAction, allBrandAction, featureBrandsAction} from '../actions/brands.action';
import {getBrandsState} from '../reducer/brands.reducer';
import {getTopBarState} from '../reducer/topbar.reducer';
import {giftCardsUnitAction} from '../actions/gitCards.actions';



function AllGiftCard() {
  const dispatch = useDispatch();
  const [currency, setCurrency] = useState(1);
  const state = useSelector(getCategoryState)
  const brandState = useSelector(getBrandsState);
  const topbarState = useSelector(getTopBarState)
  const categories = get(state, 'data')
  const category_brands = get(brandState, 'category_brands')
  const brandsWithCategory = get(brandState, 'allBrands')
  
  const [activeCategory, setActiveCategory] = React.useState()
  React.useEffect(() => {
    dispatch(categoryAction({
      currency: topbarState.currency_code,
      program_id: 1
    }))
  }, [topbarState.currency_code])
  React.useEffect(() => {
    dispatch(allBrandAction({
      currency: topbarState.currency_code,
      program_id:1,
      image_size: "medium_rectangle",
      image_type:"Color",
      list_type:"group"
    }))
    

  }, [topbarState.currency_code])
  React.useEffect(() => {

    dispatch(featureBrandsAction({ 
      currency: topbarState.currency_code,
      program_id:1
    }))

  }, [topbarState.currency_code])

  
  const getCardsWithCategory = (category) => {
    const {id, name} = category
    //dispatch action to get cards by category
    dispatch(brandsByCategoryAction({
      currency:topbarState.currency_code,
      program_id:1,
      category_id:id
    }))
    setActiveCategory(id)
  }
    
    
         
  
  const nowCountry = isEmpty(get(topbarState, 'selectedCountry')) ? get(topbarState, 'countries[0].country_name') : get(topbarState, 'selectedCountry')
  
  return (

    <div class="allGiftCard">
      <div>
        <p className="giftiallcard-text">{`All Gift Cards in the ${nowCountry}`}</p>
        <p className="giftiallcard-text-a">Browse by Category</p>
      </div>

      <div className="mt-5" >
        <div className="scroll"  >
          
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
          {
            !isEmpty(categories) && map(categories, (category, i) => (
              <>
                {
                  category.active &&
                  <button class="transparentButton" onClick={() => getCardsWithCategory(category)}>
                  <CategoryCard category={category} key={category.id} nowActive={category.id === activeCategory ? true : false}/>
                  </button>
                }
              </>
            ))
          }
      
      </div>


      <div className="gificards mt-5 ">
        {
          
          map(brandsWithCategory, (category, i) =>
          {

            if(!isEmpty(activeCategory) ){
             let cat =  filter(brandsWithCategory, {category_id:activeCategory})
             console.log(cat)

             
              return (
                
                map(get(cat, 'brands'), (brand, i)  => (
                  <>
                    <img src={get(brand, 'images.color.medium_rectangle')} className="mr-sm-5 imgcards mt-5" alt={brand.name} />
                  </>
                ))
              )

            }
            else return (
            <>{
            map(get(category, 'brands'), (brand, i)  => (
              <>
                <img src={get(brand, 'images.color.medium_rectangle')} className="mr-sm-5 imgcards mt-5" alt={brand.name} />
              </>
            ))
          }
            </>
        

          )
          
         
        
        })
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
    </div>
</div >
    )
}

export default AllGiftCard;

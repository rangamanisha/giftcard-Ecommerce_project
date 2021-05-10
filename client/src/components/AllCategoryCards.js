import React from "react";
import Item from "./item";
import Allmenu from "../assets/allmenu.svg";
import CategoryCard from "./categoryCard";
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "../actions/category.actions";
import { getCategoryState } from "../reducer/category.reducer";
import { get, map, isEmpty } from "lodash";
import {
  brandsByCategoryAction,
  allBrandAction,
  featureBrandsAction,
} from "../actions/brands.action";
import { giftCardsUnitAction } from "../actions/giftcards.actions";
import { getGiftcardsState } from "../reducer/giftCards.reducer";
import Carousel from "react-elastic-carousel";

function AllCategoryCards() {
  const dispatch = useDispatch();
  const state = useSelector(getCategoryState);
  const giftunitState = useSelector(getGiftcardsState);
  const categories = get(state, "data");
  const [activeCategory, setActiveCategory] = React.useState();
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 6 },
    { width: 1200, itemsToShow: 7 },
  ];

  React.useEffect(() => {
    dispatch(
      categoryAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
      })
    );
  }, [giftunitState.giftunit_id, dispatch]);
  React.useEffect(() => {
    dispatch(
      allBrandAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
        image_size: "medium_rectangle",
        image_type: "Color",
        list_type: "group",
      })
    );
  }, [giftunitState.giftunit_id, dispatch]);
  React.useEffect(() => {
    dispatch(
      giftCardsUnitAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
        giftunit_id: giftunitState.giftunit_id,
      })
    );
  }, [giftunitState.giftunit_id, dispatch]);
  React.useEffect(() => {
    dispatch(
      featureBrandsAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
      })
    );
  }, [giftunitState.giftunit_id, dispatch]);

  const getCardsWithCategory = (category) => {
    const { id } = category;
    //dispatch action to get cards by category
    dispatch(
      brandsByCategoryAction({
        currency: giftunitState.giftunit_id,
        program_id: 1,
        category_id: id,
      })
    );
    setActiveCategory(id);
  };

  return (
    <div className="allGiftCard">
      <div className="slideclass" id="categorycarousel">
        <Carousel pagination={0} breakPoints={breakPoints}>
          <Item>
            <button className="transparentButton">
              <div className="box">
                <a href="#">
                  <img
                    src={Allmenu}
                    alt="Icon"
                    className="rounded"
                    style={{ maxWidth: "50px" }}
                  />
                  <br />
                  <p className="products_icons">All Gift Cards</p>
                </a>
              </div>
            </button>
          </Item>
          {!isEmpty(categories) &&
            map(categories, (category, key) => (
              <>
                <Item key={key}>
                  {
                    <button
                      className="transparentButton"
                      onClick={() => getCardsWithCategory(category)}
                    >
                      <CategoryCard
                        category={category}
                        key={category.id}
                        nowActive={
                          category.id === activeCategory ? true : false
                        }
                      />
                    </button>
                  }
                </Item>
              </>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default AllCategoryCards;

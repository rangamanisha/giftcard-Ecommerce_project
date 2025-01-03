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
import { getGiftcardsState } from "../reducer/giftCards.reducer";
import Carousel from "react-elastic-carousel";
import Button from "react-bootstrap/Button";

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
    if (giftunitState.selectedCountry?.id) {
      dispatch(
        categoryAction({
          currency: giftunitState.selectedCountry.id,
          program_id: 1,
        })
      );
    }
  }, [giftunitState.selectedCountry?.id, dispatch]);
  React.useEffect(() => {
    if (giftunitState.selectedCountry?.id) {
      dispatch(
        allBrandAction({
          currency: giftunitState.selectedCountry.id,
          program_id: 1,
          image_size: "medium_rectangle",
          image_type: "Color",
          list_type: "group",
        })
      );
    }
  }, [giftunitState.selectedCountry?.id, dispatch]);

  React.useEffect(() => {
    if (giftunitState.selectedCountry?.id) {
      dispatch(
        featureBrandsAction({
          currency: giftunitState.selectedCountry.id,
          program_id: 1,
        })
      );
    }
  }, [giftunitState.selectedCountry?.id, dispatch]);

  const getCardsWithCategory = (category) => {
    if (!category) {
      dispatch(
        allBrandAction({
          currency: giftunitState.selectedCountry.id,
          program_id: 1,
          image_size: "medium_rectangle",
          image_type: "Color",
          list_type: "group",
        })
      );
    } else {
      const { id } = category;
      //dispatch action to get cards by category
      dispatch(
        brandsByCategoryAction({
          currency: giftunitState.selectedCountry.id,
          program_id: 1,
          category_id: id,
        })
      );
      setActiveCategory(id);
    }
  };

  return (
    <div className="allGiftCard">
      <div className="slideclass" id="categorycarousel">
        <Carousel pagination={false} breakPoints={breakPoints}>
          <Item>
            <Button
              className="transparentButton"
              variant="link"
              onClick={() => getCardsWithCategory(null)}
            >
              <div className="box">
                <img
                  src={Allmenu}
                  alt="Icon"
                  className="rounded"
                  style={{ maxWidth: "50px" }}
                />
                <br />
                <p className="products_icons">All Gift Cards</p>
              </div>
            </Button>
          </Item>
          {!isEmpty(categories) &&
            map(categories, (category, key) => (
              <Item key={key}>
                {
                  <Button
                    className="transparentButton"
                    onClick={() => getCardsWithCategory(category)}
                    variant="link"
                  >
                    <CategoryCard
                      category={category}
                      key={category.id}
                      nowActive={category.id === activeCategory ? true : false}
                    />
                  </Button>
                }
              </Item>
            ))}
        </Carousel>
      </div>
    </div>
  );
}

export default AllCategoryCards;

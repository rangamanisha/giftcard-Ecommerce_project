import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import { useDispatch, useSelector } from "react-redux";
import AllCategoryCards from "./AllCategoryCards";
import { categoryAction } from "../actions/category.actions";
import { get, map, isEmpty } from "lodash";
import { allBrandAction, featureBrandsAction } from "../actions/brands.action";
import { getBrandsState } from "../reducer/brands.reducer";
import { giftCardsUnitAction } from "../actions/giftcards.actions";
import { getGiftcardsState } from "../reducer/giftCards.reducer";
import { useHistory } from "react-router-dom";
import Giftcard from "./Giftcard";
import { getTopBarState } from "../reducer/topbar.reducer";

function AllGiftCard() {
  const dispatch = useDispatch();
  const history = useHistory();
  const brandState = useSelector(getBrandsState);
  const giftunitState = useSelector(getGiftcardsState);
  const brandsWithCategory = get(brandState, "allBrands");

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
        giftCardsUnitAction({
          currency: giftunitState.selectedCountry.id,
          program_id: 1,
          giftunit_id: giftunitState.selectedCountry.id,
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

  const nowCountry = isEmpty(get(giftunitState, "selectedCountry.country_name"))
    ? get(giftunitState, "countries[0].country_name")
    : get(giftunitState, "selectedCountry.country_name");
  const allTheBrands = [];
  map(brandsWithCategory, (category) => {
    map(get(category, "brands"), (brand) => {
      if (allTheBrands.length <= 15) {
        allTheBrands.push(brand);
      } else return null;
    });
  });
  return (
    <Container>
      <Row className="allGiftCard-box">
        <Col>
          <div>
            <p className="giftiallcard-text">{`All Gift Cards in the ${nowCountry}`}</p>
            <p className="giftiallcard-text-a">Browse by Category</p>
            <AllCategoryCards />
          </div>
          <div className="gificards ">
            {isEmpty(get(brandState, "brands"))
              ? map(allTheBrands, (brand, i) => (
                  <>
                    <Giftcard brand={brand} />
                  </>
                ))
              : map(get(brandState, "brands"), (brand, i) => (
                  <>{i <= 15 ? <Giftcard brand={brand} /> : null}</>
                ))}
          </div>
          <div className="text-center">
            <button
              onClick={() => history.push("AllCards")}
              type="button"
              className="mt-3 startgf-fields-button btn btn-info btn-md"
            >
              Load More
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default AllGiftCard;

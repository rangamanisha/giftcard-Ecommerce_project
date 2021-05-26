import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import AllCategoryCards from "./AllCategoryCards";
import { useDispatch, useSelector } from "react-redux";
import { categoryAction } from "../actions/category.actions";
import { get, map, isEmpty } from "lodash";
import { allBrandAction } from "../actions/brands.action";
import { getBrandsState } from "../reducer/brands.reducer";
import { getGiftcardsState } from "../reducer/giftCards.reducer";
import AllFeaturedCards from "./AllFeaturedCards";
import Giftcard from "./Giftcard";

function AllCards() {
  const dispatch = useDispatch();
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

  const nowCountry = isEmpty(get(giftunitState, "selectedCountry.country_name"))
    ? get(giftunitState, "countries[0].country_name")
    : get(giftunitState, "selectedCountry.country_name");

  return (
    <div className="allgiftcards-sec">
      <Row>
        <Col>
          <div>
            <AllFeaturedCards />
          </div>
        </Col>
      </Row>
      <Container>
        <Row className="allGiftCard-box">
          <Col>
            <p className="giftiallcard-text-a">Browse by Category</p>
            <AllCategoryCards />
          </Col>
        </Row>
      </Container>

      <Container>
        <Row className="giftiallcard-row-3">
          <Col>
            <div>
              <p className="giftiallcard-text">{`All Gift Cards in the ${nowCountry}`}</p>
              <p className="allgiftcard-text">
                {`Buy Most Popular eGift Cards in ${nowCountry}`}
                <br />
                Personalized gift vouchers delivered online & redeemable at
                popular Brands
              </p>
            </div>
            <div className="gificards">
              {isEmpty(get(brandState, "brands"))
                ? map(brandsWithCategory, (category, i) => (
                    <>
                      {map(get(category, "brands"), (brand, i) => (
                        <>
                          <Giftcard brand={brand} key={i} />
                        </>
                      ))}
                    </>
                  ))
                : map(get(brandState, "brands"), (brand, i) => (
                    <>
                      <Giftcard brand={brand} key={i} />
                    </>
                  ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AllCards;

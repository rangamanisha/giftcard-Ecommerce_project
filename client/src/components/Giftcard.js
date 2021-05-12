import React, { useEffect } from "react";
import { get } from "lodash";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { giftCardsAction } from "../reducer/giftCards.reducer";

const Giftcard = ({ brand }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const history = useHistory();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(giftCardsAction.selectBrand(brand));
    history.push("/selectcard");
  };
  return (
    <div className="card_images">
      <img
        src={get(brand, "images.color.medium_rectangle")}
        onClick={() => handleClick()}
        className="imgcards"
        alt={brand.name}
      />
    </div>
  );
};

export default Giftcard;

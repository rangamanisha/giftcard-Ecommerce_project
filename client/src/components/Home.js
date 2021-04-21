import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import StartGifting from "./StartGifting";
import RecommandedCards from './RecommandedCards';
import AllGiftCard from "./AllGiftCard";
import AllFeaturedCards from "./AllFeaturedCards";
import { giftcardUnitAction } from '../actions/category.actions'
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(giftcardUnitAction())
}, [dispatch]);
  return (
    <>
      <Cards />
      <StartGifting />
      {/* <AllFeaturedCards/> */}
      {/* <RecommandedCards /> */}
      <AllGiftCard />
      <Footer />
    </>
  );
}

export default Home;

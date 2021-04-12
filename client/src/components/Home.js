import React from "react";
import Cards from "./Cards";
import Footer from "./Footer";
import StartGifting from "./StartGifting";
import RecommandedCards from './RecommandedCards';
import AllGiftCard from "./AllGiftCard";

const Home = () => {
  return (
    <>
      <Cards />
      <StartGifting />
      <RecommandedCards />
      <AllGiftCard />
      <Footer />
    </>
  );
}

export default Home;

import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Footer from "./Footer";
import StartGifting from "./StartGifting";
import RecommandedCards from './RecommandedCards';
import AllGiftCard from "./AllGiftCard";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Cards />
      <StartGifting />
      <RecommandedCards />
      <AllGiftCard />
      <Footer />
    </React.Fragment>
  );
}

export default Home;

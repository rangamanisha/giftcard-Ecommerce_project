import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Giftcards from "./Giftcards";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App body">
      <Navbar />
      <Cards />
      <Giftcards />
      <Footer />
    </div>
  );
}

export default Home;

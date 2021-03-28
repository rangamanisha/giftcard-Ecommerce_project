import React from "react";
import Navbar from "./Navbar";
import Card from "./Card";
import Giftcards from "./Giftcards";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className="App body">
      <Navbar />
      <Card />
      <Giftcards />
      <Footer />
    </div>
  );
}

export default Home;

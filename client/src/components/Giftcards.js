import React from 'react';
import Appleitunes from '../assets/Appleitunes.png';
import Carrefour from '../assets/Carrefour.png';
import Careem from '../assets/Careem.png';
import Ace from '../assets/Ace.png';
import Asec from '../assets/5asec.png';
import Biobox from '../assets/biobox.png';
import Amazon from '../assets/amazon.png';
import GiftGlobalCard from '../assets/GiftiGlobalcard.png';
import Ballooncard from '../assets/Ballooncard.png';
import Bollywoodparks from '../assets/bollywoodparks.png';
import Deliveroo from '../assets/deliveroo.png';
import Mylist from '../assets/mylist.png';
import Technology from '../assets/technology.svg';
import Toys from '../assets/toys.svg';
import Hypermarket from '../assets/Hypermarket.svg';
import Flowersandgift from '../assets/flowersandgift.svg';
import Beauty from '../assets/Beauty.svg';
import {isEmpty, map, get} from 'lodash';
import { getBrandsState } from '../reducer/brands.reducer';

const Giftcards = () => {
  return (
    <div>
      <div className="mt-5 ">
        <div className="row" style={{ marginLeft: '200px' }}>
          <img src={Technology} alt="Icon" className="ml-sm-5" />
          <img src={Toys} alt="Icon" className="ml-sm-5" />
          <img src={Hypermarket} alt="Icon" className="ml-sm-5" />
          <img src={Flowersandgift} alt="Icon" className="ml-sm-5" />
          <img src={Beauty} alt="Icon" className="ml-sm-5" />
          <img src={Hypermarket} alt="Icon" className="ml-sm-5" />
          <img src={Flowersandgift} alt="Icon" className="ml-sm-5" />
          <img src={Hypermarket} alt="Icon" className="ml-sm-5" />
          <img src={Flowersandgift} alt="Icon" className="ml-sm-5" />
          <img src={Beauty} alt="Icon" className="ml-sm-5" />
        </div>
        <p className="giftiallcard-text">All Gift Cards in the UAE</p>
      </div>
      <div className="gificards">
        <img src={Appleitunes} className="ml-sm-5 imgcards" alt="Appleitunes" />
        <img src={Asec} className="ml-sm-5 imgcards" alt="Asec" />
        <img src={Ace} className="ml-sm-5 imgcards" alt="Ace" />
        <img src={Careem} className="imgcards" alt="Careem" />
        <img src={Carrefour} className="ml-sm-5 imgcards mt-5" alt="Carrefour" />
        <img src={Biobox} className="ml-sm-5 imgcards mt-5" alt="Biobox" />
        <img src={Amazon} className="ml-sm-5 imgcards mt-5" alt="Amazon" />
        <img src={GiftGlobalCard} className="ml-sm-5 imgcards mt-5" alt="GiftGlobalCard" />
        <img src={Ballooncard} className="ml-sm-5 imgcards mt-5" alt="Ballooncard" />
        <img src={Bollywoodparks} className="ml-sm-5 imgcards mt-5" alt="Bollywoodparks" />
        <img src={Deliveroo} className="ml-sm-5 imgcards mt-5" alt="Deliveroo" />
        <img src={Mylist} className="ml-sm-5 imgcards mt-5" alt="Mylist" />
      </div>
    </div>
  );
};

export default Giftcards;

import React from 'react';
import Cards from './Cards';
import Footer from './Footer';
import StartGifting from './StartGifting';
import RecommandedCards from './RecommandedCards';
import AllGiftCard from "./AllGiftCard";
import AllFeaturedCards from "./AllFeaturedCards";
import { giftcardUnitAction } from '../actions/category.actions'
import { useDispatch, useSelector } from 'react-redux';
import Alert from 'react-bootstrap/Alert';
import checkbox from '../assets/checkbox.svg';
import { useState, useEffect } from 'react';
import { getAuthState } from '../reducer/auth.reducer';
import Fade from 'react-bootstrap/Fade';
const Home = () => {
  const state = useSelector(getAuthState);
  const [isValid, setIsValid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(giftcardUnitAction())
  }, [dispatch]);

  useEffect(() => {
    if (state.isAuthenticated) {
      setIsValid(true);
      setMessage('Login Successfully !');
      window.setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [state.isAuthenticated]);

  return (
    <>
      <div>
        {isValid ? (
          <Fade>
            <Alert variant="info" transition={visible}>
              <img src={checkbox} className="mr-3" style={{ width: '30px' }} alt="Icon" />
              {message}
            </Alert>
          </Fade>
        ) : (
          <></>
        )}
      </div>
      <Cards />
      <StartGifting />
      <AllFeaturedCards />
      {/* <RecommandedCards /> */}
      <AllGiftCard />
      <Footer />
    </>
  );
};

export default Home;

import React from "react";
import Cards from "./Cards";
import StartGifting from "./StartGifting";
import RecommandedCards from './RecommandedCards';
import AllGiftCard from "./AllGiftCard";
import Alert from 'react-bootstrap/Alert';
import checkbox from '../assets/checkbox.svg';
import {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
import { getAuthState } from '../reducer/auth.reducer';
import Fade from 'react-bootstrap/Fade';


const Home = () => {

  const state = useSelector(getAuthState);


  const [isValid, setIsValid] = useState(false);
  const [visible, setVisible] = useState(true);

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (state.isAuthenticated) {
      setIsValid(true);
      setMessage('Login Successfully !');
      window.setTimeout(()=>{
        setVisible(false)
      },3000)

    }
    if (state.signupSuccess) {
      setIsValid(true);
      setMessage('A verification link has been sent to your provided email address. Check your mailbox');
      window.setTimeout(()=>{
        setVisible(false)
      },3000)
    }

    if (state.status) {
      setIsValid(true);
      setMessage('A verification link has been sent to your provided email address. Check your mailbox');
      window.setTimeout(()=>{
        setVisible(false)
      },3000)
    }
  },
  [state.isAuthenticated, state.signupSuccess, state.status]);

  return (
    <>
    <div>
     {isValid
      ? <Fade><Alert variant="info" transition={visible}><img
      src={checkbox}
      className="mr-3"
      style={{ width: "30px"}}
      alt="Icon"
    />{message}</Alert></Fade>
      : <></>
    }
    </div>
      <Cards />
      <StartGifting />
      <RecommandedCards />
      <AllGiftCard />
    </>
  );
}

export default Home;

import React from "react";
import Cards from "./Cards";
import StartGifting from "./StartGifting";
import RecommandedCards from "./RecommandedCards";
import AllGiftCard from "./AllGiftCard";
import AllFeaturedCards from "./AllFeaturedCards";
import Alert from "react-bootstrap/Alert";
import checkbox from "../assets/checkbox.svg";
import { useState, useEffect } from "react";
import { getAuthState } from "../reducer/auth.reducer";
import { getUserActiveState } from "../reducer/useractive.reducer";
import { alertloginAction } from "../actions/auth.actions";
import { getuseractiveAction } from "../actions/useractive.actions";
import Fade from "react-bootstrap/Fade";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";

const Home = () => {
  const state = useSelector(getAuthState);
  const useractive = useSelector(getUserActiveState);
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [visible, setVisible] = useState(true);
  const [message, setMessage] = useState("");
  const history = useHistory();

  useEffect(() => {
    const value = history.location["search"].split("?", 2)[1];
    if (value !== undefined) {
      const data = { token: value };
      dispatch(getuseractiveAction(data));
      if (useractive.verified === true) {
        setIsValid(true);
        setMessage(
          "Your account has been successfully created. Go to profile !"
        );
        window.setTimeout(() => {
          setVisible(false);
        }, 3000);
      }
    }
  }, [dispatch, useractive.verified, history]);

  useEffect(() => {
    if (state.alertlogin) {
      setIsValid(true);
      setMessage("Login Successfully !");
      window.setTimeout(() => {
        setVisible(false);
      }, 3000);
    }

    if (state.signupSuccess) {
      setIsValid(true);
      setMessage(
        "A verification link has been sent to your provided email address. Check your mailbox"
      );
      window.setTimeout(() => {
        setVisible(false);
      }, 3000);
    }

    if (state.status === "OK") {
      setIsValid(true);
      setMessage(
        "A verification link has been sent to your provided email address. To Reset your Password."
      );
      window.setTimeout(() => {
        setVisible(false);
      }, 3000);
    }
  }, [state.isAuthenticated, state.signupSuccess, state.status]);

  return (
    <>
      <div>
        {isValid ? (
          <Fade>
            <Alert variant="info" transition={visible}>
              <img
                src={checkbox}
                className="mr-3"
                style={{ width: "30px" }}
                alt="Icon"
              />
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
    </>
  );
};

export default Home;

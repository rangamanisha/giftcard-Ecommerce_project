import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { pageLoaderActions } from "../reducer/page-loader.reducer";
import Loader from "./shared/Loader";

const ClearPage = () => {
  const history = useHistory();

  useEffect(() => {
    pageLoaderActions.setPageLoadingAction(true);
    localStorage.clear();
    setTimeout(() => {
      history.push({ pathname: "/" });
    }, 2000);
  }, []);

  return <p>Loading...</p>;
};

export default ClearPage;

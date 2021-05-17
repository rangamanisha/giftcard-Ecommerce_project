import React, { useEffect, useState } from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import { useSelector } from "react-redux";
import { getPageLoaderState } from "../reducer/page-loader.reducer";

const PageLoader = (props) => {
  const pageLoaderState = useSelector(getPageLoaderState);

  const [progressState, setProgressState] = useState(0);

  let interval;

  const loadProgress = () => {
    interval = setInterval(() =>
      setProgressState(Math.floor(Math.random() * 100))
    );
  };

  useEffect(() => {
    if (pageLoaderState.loading) {
      loadProgress();
    }
    if (!pageLoaderState.loading) {
      clearInterval(interval);
      interval = null;
    }
  }, [pageLoaderState]);

  const getLoader = () => {
    if (pageLoaderState.loading) {
      return (
        <>
          <ProgressBar
            now={progressState}
            label={`${progressState}%`}
            srOnly
            style={{ height: "0.2rem" }}
          />
        </>
      );
    }
    return null;
  };

  return getLoader();
};

export default PageLoader;

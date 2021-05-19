import React, { useEffect, useState } from "react";
import BarLoader from "react-spinners/BarLoader";
import { useSelector } from "react-redux";
import { getPageLoaderState } from "../reducer/page-loader.reducer";

const PageLoader = () => {
  const pageLoaderState = useSelector(getPageLoaderState);

  const getLoader = () => {
    if (pageLoaderState.loading) {
      return (
        <>
          <BarLoader
            width="100%"
            height="4px"
            color="#00B2AE"
            css={`
              display: block;
            `}
          />
          <div className="modal-backdrop show" style={{ opacity: "0" }}></div>
        </>
      );
    }
    return null;
  };

  return getLoader();
};

export default PageLoader;

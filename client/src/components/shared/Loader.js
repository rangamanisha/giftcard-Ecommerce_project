import React from "react";
import Spinner from "react-bootstrap/Spinner";

const Loader = () => {
  return (
    <>
      <Spinner
        as="span"
        animation="border"
        size="sm"
        role="status"
        aria-hidden="true"
      />
      <span className="sr-only">Loading...</span>
    </>
  );
};

export default Loader;

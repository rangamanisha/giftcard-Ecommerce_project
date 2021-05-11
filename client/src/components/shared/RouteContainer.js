import React from "react";
import { Route } from "react-router-dom";
// import { routes } from '../../routes';

const RouteContainer = () => {
  const renderComponent = routes.map(({ Component, path }, key) => {
    return (
      <Route exact path={path} key={key}>
        <Component />
      </Route>
    );
  });
  return <>{renderComponent}</>;
};

export default RouteContainer;

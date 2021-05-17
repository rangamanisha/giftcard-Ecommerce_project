import React from "react";
import { Route, Redirect,withRouter } from "react-router-dom";
import {getAuthState} from "./reducer/auth.reducer";
import {useSelector} from 'react-redux'

const ProtectedRoute = ({component: Component,...rest}) => {
const authState = useSelector(getAuthState)
  return (
    <Route
      {...rest}
      render={props => {
        if (authState.isAuthenticated) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: "/auth/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
export default withRouter(ProtectedRoute);
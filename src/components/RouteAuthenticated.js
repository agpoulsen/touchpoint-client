import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import AuthService from './../services/auth.service';

function RouteAuthenticated ({ children, ...rest }) {
  return (
    <Route {...rest} render={() => {
      return AuthService.isAuthenticated === true
        ? children
        : <Redirect to='/login' />
    }} />
  )
}

export default RouteAuthenticated;

import React from 'react';
import { Navigate } from 'react-router';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}: IRoutes) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

export default RestrictedRoute;

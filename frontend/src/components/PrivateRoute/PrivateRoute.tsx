import React from 'react';
import { Navigate } from 'react-router';
import { IRoutes } from '../../helpers/interfaces';
import { useAuth } from '../../hooks/useAuth';

const PrivateRoute = ({ component: Component, redirectTo = '/' }: IRoutes) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

export default PrivateRoute;

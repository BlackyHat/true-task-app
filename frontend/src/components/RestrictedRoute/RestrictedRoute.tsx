import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router';
import { IRoutes } from '../../helpers/interfaces';

const RestrictedRoute = ({
  component: Component,
  redirectTo = '/',
}: IRoutes) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log('RestrictedRoute ====> isLoggedIn', isLoggedIn);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

export default RestrictedRoute;

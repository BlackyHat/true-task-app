import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router';
import { IRoutes } from '../../helpers/interfaces';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}: IRoutes) => {
  const { isLoggedIn, user } = useContext(AuthContext);
  const shouldRedirect = !isLoggedIn && !user;
  return shouldRedirect ? <Navigate to={redirectTo} replace /> : Component;
};

export default PrivateRoute;

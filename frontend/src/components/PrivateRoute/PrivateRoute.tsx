import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router';
import { IRoutes } from '../../helpers/interfaces';

const PrivateRoute = ({
  component: Component,
  redirectTo = '/login',
}: IRoutes) => {
  const { isLoggedIn } = useContext(AuthContext);
  console.log('PrivateRoute ====> isLoggedIn', isLoggedIn);

  return !isLoggedIn ? <Navigate to={redirectTo} replace /> : Component;
};

export default PrivateRoute;

import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { CategoryPage } from '../pages/CategoryPage/CategoryPage';
import { TaskManagerPage } from '../pages/TaskManagerPage/TaskManagerPage';
import { NotFoundPage } from '../pages/NotFoundPage/NotFoundPage';

export const routes = [
  {
    path: '/login',
    element: (
      <RestrictedRoute redirectTo="/tasks-manager" component={<LoginPage />} />
    ),
  },
  {
    path: '/register',
    element: (
      <RestrictedRoute
        redirectTo="/tasks-manager"
        component={<RegisterPage />}
      />
    ),
  },
  {
    path: '/tasks-manager',
    element: <PrivateRoute redirectTo="/login" component={<CategoryPage />} />,
  },
  {
    path: '/tasks-manager/:categoryId',
    element: <PrivateRoute redirectTo="/" component={<TaskManagerPage />} />,
  },

  { path: '*', element: <NotFoundPage /> },
];

import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { CategoryPage } from '../pages/CategoryPage/CategoryPage';
import { TaskManagerPage } from '../pages/TaskManagerPage/TaskManagerPage';
import Layout from '../components/Layout/Layout';

export const routes = [
  {
    path: '/',
    element: (
      <RestrictedRoute redirectTo="/tasks-manager" component={<LoginPage />} />
    ),
  },
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
    element: <Layout />,
    children: [
      {
        path: '/tasks-manager',
        element: (
          <PrivateRoute redirectTo="/login" component={<CategoryPage />} />
        ),
      },
      {
        path: '/tasks-manager/:categoryId',
        element: (
          <PrivateRoute redirectTo="/login" component={<TaskManagerPage />} />
        ),
      },
      {
        path: '*',
        element: (
          <PrivateRoute redirectTo="/register" component={<CategoryPage />} />
        ),
      },
    ],
  },
];

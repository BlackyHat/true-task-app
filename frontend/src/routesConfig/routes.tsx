import { lazy } from 'react';
import Layout from '../components/Layout/Layout';
import RestrictedRoute from '../components/RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';

const TaskManagerPage = lazy(() =>
  import('../pages/TaskManagerPage/TaskManagerPage').then((module) => ({
    ...module,
    default: module.TaskManagerPage,
  }))
);
const CategoryPage = lazy(() =>
  import('../pages/CategoryPage/CategoryPage').then((module) => ({
    ...module,
    default: module.CategoryPage,
  }))
);
const LoginPage = lazy(() =>
  import('../pages/LoginPage/LoginPage').then((module) => ({
    ...module,
    default: module.LoginPage,
  }))
);
const RegisterPage = lazy(() =>
  import('../pages/RegisterPage/RegisterPage').then((module) => ({
    ...module,
    default: module.RegisterPage,
  }))
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage').then((module) => ({
    ...module,
    default: module.NotFoundPage,
  }))
);

export const routes = [
  {
    elements: <Layout />,
    children: [
      {
        path: '/login',
        element: (
          <RestrictedRoute
            redirectTo="/tasks-manager"
            component={<LoginPage />}
          />
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
        path: 'tasks-manager',
        element: (
          <PrivateRoute redirectTo="/" component={<TaskManagerPage />} />
        ),
        children: [
          {
            path: '/:categoryId',
            element: (
              <PrivateRoute redirectTo="/" component={<CategoryPage />} />
            ),
          },
        ],
      },

      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

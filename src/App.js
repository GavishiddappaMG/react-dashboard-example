import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import 'normalize.css';
import './App.scss';
import Dashboard from './components/pages/Dashboard/Dashboard';
import Charts from './components/pages/Charts/Charts';
import History from './components/pages/History/History';
import { action as loginAction } from './components/pages/Login/Login';
import Profile from './components/pages/Profile/Profile';
import Users from './components/pages/Users/Users';

// Containers
const Layout = React.lazy(() => import('./components/Layout'));

// Pages
const Login = React.lazy(() => import('./components/pages/Login'));
const Register = React.lazy(() => import('./components/pages/Register'));
const Page404 = React.lazy(() => import('./components/pages/Page404'));
const Page500 = React.lazy(() => import('./components/pages/Page500'));

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      errorElement: <Page404 />,
      children: [
        { index: true, element: <Dashboard /> },
        {
          path: 'charts',
          element: <Charts />,
        },
        {
          path: 'history',
          element: <History />,
        },
        {
          path:'profile',
          element: <Profile />
        },
        {
          path: 'users',
          element: <Users />,
        },
      ]
    },
    {
      path: 'login',
      element: <Login />,
      action: loginAction,
    },
    {
      path: 'signup',
      element: <Register />,
    }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

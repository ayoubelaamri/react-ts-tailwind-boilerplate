import React from 'react';
import './style.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';

import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';

const Landing = React.lazy(() => import("./views/Landing"));
const NotFound = React.lazy(() => import("./views/NotFound"));
const SignIn = React.lazy(() => import("./views/auth/SignIn"));
const SignUp = React.lazy(() => import("./views/auth/SignUp"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="/auth/sign-in" />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: []
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

function App() {
  return (
    <AppProvider>
      <AuthProvider>
        <div className="text-neutral font-roboto">
          <RouterProvider router={router} />
        </div>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;

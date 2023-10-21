import React from 'react';
import './style.css'
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import AuthLayout from './layouts/AuthLayout';
import AdminLayout from './layouts/AdminLayout';
import Landing from './views/Landing';
import NotFound from './views/NotFound';

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
    <div className="text-neutral font-roboto">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

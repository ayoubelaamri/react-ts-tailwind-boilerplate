import './style.css'
import React from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';
import { AppProvider } from './context/AppContext';

import HomeLayout from 'layouts/HomeLayout';
import AuthLayout from 'layouts/AuthLayout';
import AdminLayout from 'layouts/AdminLayout';

const NotFound = React.lazy(() => import("components/NotFound"));
const SignIn = React.lazy(() => import("views/auth/SignIn"));
const SignUp = React.lazy(() => import("views/auth/SignUp"));
const Landing = React.lazy(() => import("views/home/Landing"));
const Dashboard = React.lazy(() => import("views/admin/Dashboard"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "",
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
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ]
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
      <div className="h-screen w-screen grid place-items-center bg-gray-200 p-6 md:p-10 bg-[url('assets/images/bg.jpg')] bg-cover bg-center text-neutral font-roboto">
      <div className="bg-white/50 backdrop-blur-lg w-full h-full rounded-3xl shadow-xl border-4 border-white">
        <RouterProvider router={router} />
      </div>
    </div>
      </AuthProvider>
    </AppProvider>
  );
}

export default App;

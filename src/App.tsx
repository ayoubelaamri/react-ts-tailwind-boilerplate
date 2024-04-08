import "./style.css";
import React from "react";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import { AuthProvider } from "./context/AuthContext";
import { AppProvider } from "./context/AppContext";

import HomeLayout from "layouts/HomeLayout";
import AuthLayout from "layouts/AuthLayout";
import AdminLayout from "layouts/AdminLayout";
import { LanguageProvider } from "context/LanguageContext";
import { ThemeProvider } from "context/ThemeContext";

const NotFound = React.lazy(() => import("views/NotFound"));
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
    ],
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
    ],
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
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppProvider>
          <AuthProvider>
            <div id="app" data-theme="dark">
              <div className="h-screen w-screen grid place-items-center bg-gray-200 p-6 md:p-10 bg-[url('assets/images/bg-light.jpg')] dark:bg-[url('assets/images/bg-dark.jpg')] bg-cover bg-center text-neutral font-roboto">
                <div className="bg-white/50 dark:bg-black/30 backdrop-blur-lg w-full h-full rounded-3xl shadow-xl border-2 border-white dark:border-gray-700">
                  <RouterProvider router={router} />
                </div>
              </div>
            </div>
          </AuthProvider>
        </AppProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;

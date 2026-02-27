
import { createBrowserRouter, Navigate } from "react-router-dom";
import AdminLayout from "../components/_Layouts/AdminLayout.tsx";
import { default as pages } from "../components/pages/index";
import ProtectedRoute from "../components/auth/ProtectedRoute.tsx";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <pages.LoginPage />
  },
  {
    path: "/signup",
    element: <pages.SignupPage />
  },
  {
    path: "/logout",
    element: <pages.LogoutPage />
  },
  {
    path: "/",
    element: <ProtectedRoute><AdminLayout /></ProtectedRoute>,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <pages.Dashboard />
      },
      {
        path: "users",
        element: <pages.Users />
      },
      {
        path: "jobs",
        element: <pages.Jobs />
      },
      {
        path: "payments",
        element: <pages.Payments />
      },
      {
        path: "disputes",
        element: <pages.Disputes />
      },
      {
        path: "reviews",
        element: <pages.Reviews />
      },
      {
        path: "logs",
        element: <pages.logs />
      },
      {
        path: "support",
        element: <pages.Support />
      },
      {
        path: "compliance",
        element: <pages.Compliance />
      },
      {
        path: "settings",
        element: <pages.Settings />
      },
      //   {
      //     path: "rent",
      //     element: <pages.Rent />
      //   },
      //   {
      //     path: "listings",
      //     element: <pages.Listings />
      //   },
      //   {
      //     path: "accounts",
      //     element: <pages.Accounts />
      //   },
    ]
  }
]);

export default routes;
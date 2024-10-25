import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter,  RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import HomePage from "./Pages/HomePage.jsx";
import InfluencerPage from "./Pages/InfluencerPage.jsx";
import DashboardPage from "./Pages/DashboardPage.jsx";
import ContactPage from "./Pages/ContactPage.jsx";

const router = createBrowserRouter(
  [
{
  path: "/",
  element: <App />,
  children: [
      {
          path: "/",
          element: <HomePage />,
      },
      {
        path : '/influencer-boost',
        element : <InfluencerPage/>
      },
      {
        path : '/dashboard-mastery',
        element : <DashboardPage/>
      },
      {
        path : '/contact-us',
        element : <ContactPage/>
      }
  ],
},
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

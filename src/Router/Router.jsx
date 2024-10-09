import AddListing from "@/Pages/AddListing/AddListing";
import Error from "@/Pages/Error/Error";
import Home from "@/Pages/Home/Home";
import Profile from "@/Pages/Profile/Profile";
import Root from "@/Root/Root";

import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/profile",
        element: <Profile></Profile>,
      },
      {
        path: "/add-listing",
        element: <AddListing></AddListing>,
      },
    ],
  },
]);

export default Router;

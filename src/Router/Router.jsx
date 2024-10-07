
import Error from "@/Pages/Error/Error";
import Home from "@/Pages/Home/Home";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Home></Home>,
  },
]);

export default Router;

import { Button } from "@/components/ui/button";
import Error from "@/Pages/Error/Error";
import { createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    element: <Button>Router button</Button>,
  },
]);

export default Router;

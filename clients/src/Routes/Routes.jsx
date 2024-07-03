import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import SinglePage from "../Pages/SinglePage/SinglePage";


const Routes = createBrowserRouter([
  {
    path: "/",
    element: <App> </App>,
    errorElement: <p> Not Found </p>,
    children: [
      {
        path: "/",
        element: <Home> </Home>,
      },
      {
        path: "/page",
        element: <SinglePage/>,
      },
    ],
  },


]);

export default Routes;

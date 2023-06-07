import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import NotFoundPage from "../Pages/404page";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App/>,
    errorElement:<NotFoundPage/>,
    children:[
      {
        path:'login',
        
      }
    ]
  },
]);

export default router
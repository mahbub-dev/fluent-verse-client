import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import NotFoundPage from "../Pages/404page";
import Login from "../Pages/Login";
import Registration from "../Pages/Resgistration";
import AuthProvider from "../Hooks/useAuth";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><App /></AuthProvider>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Registration />
      }
    ]
  },
]);

export default router
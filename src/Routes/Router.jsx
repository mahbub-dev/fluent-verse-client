import {
  createBrowserRouter,
} from "react-router-dom";
import App from "../App";
import NotFoundPage from "../Pages/404page";
import Login from "../Pages/Login";
import Registration from "../Pages/Resgistration";
import AuthProvider from "../Hooks/useAuth";
import Home from "../Pages/Home";
import InstructorPage from "../Pages/Instructors";
import ClassesPage from "../Pages/Classes";
import StudentDashboard from "../Pages/Dashboard";
import MySelectedClasses from "../DashboardPages/Student/MySelectedClasses";
import MyEnrolledClasses from "../DashboardPages/Student/MyEnrolledClasses";
import AddAClass from "../DashboardPages/Instructor/AddAClass";
import MyClasses from "../DashboardPages/Instructor/MyClasses";
import ManageClasses from "../DashboardPages/Admin/ManageClasses";
import ManageUsers from "../DashboardPages/Admin/ManageUsers";
import PrivateRoute from "./PrivateRoute";
import DashboardHome from "../DashboardPages/DashboardHome";
const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthProvider><App /></AuthProvider>,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Registration />
      },
      {
        path: 'instructors',
        element: <InstructorPage />
      },
      {
        path: 'classes',
        element: <ClassesPage />
      },
      {
        path: 'dashboard',
        element: <StudentDashboard />,
        children: [
          {
            path: '/dashboard',
            element: <DashboardHome />
          },
          {
            path: '/dashboard/my-selected-classes',
            element: <PrivateRoute identifire={'student'}><MySelectedClasses /></PrivateRoute>
          },
          {
            path: '/dashboard/my-enrolled-classes',
            element: <PrivateRoute identifire={'student'}><MyEnrolledClasses /> </PrivateRoute>
          },
          {
            path: '/dashboard/add-class',
            element: <PrivateRoute identifire={'instructor'}> <AddAClass /></PrivateRoute>
          },
          {
            path: '/dashboard/my-classes',
            element: <PrivateRoute identifire={'instructor'}><MyClasses /></PrivateRoute>
          },
          {
            path: '/dashboard/manage-classes',
            element: <PrivateRoute identifire={'admin'}><ManageClasses /></PrivateRoute>
          },
          {
            path: '/dashboard/manage-users',
            element: <PrivateRoute identifire={'admin'}><ManageUsers /></PrivateRoute>
          },

        ]
      }
    ]
  },
]);

export default router
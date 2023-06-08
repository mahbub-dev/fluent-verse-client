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
            element: <>
              <MySelectedClasses />
              <MyEnrolledClasses />
            </>
          },
          {
            path: '/dashboard/myselectedclasses',
            element: <MySelectedClasses />
          },
          {
            path: '/dashboard/myenrolledclasses',
            element: <MyEnrolledClasses />
          },
          {
            path: '/dashboard/add-class',
            element: <AddAClass />
          },
          {
            path: '/dashboard/my-classes',
            element: <MyClasses />
          },
          {
            path: '/dashboard/manage-classes',
            element: <ManageClasses />
          },
          {
            path: '/dashboard/manage-users',
            element: <ManageUsers />
          },

        ]
      }
    ]
  },
]);

export default router
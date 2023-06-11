import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginLayout from "../Layout/LoginLayout";
import SigninLayout from "../Layout/SigninLayout";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";
import DasboardLayout from "../Layout/DasboardLayout";
import UserDashboard from "../Pages/Dashboard/UserDashboard/UserDashboard";
import InstructorDashboard from "../Pages/Dashboard/InstructorDashboard/InstructorDashboard";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import PrivateRoute from "../Routes/PrivateRoute";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import SelectedClasses from "../Pages/Dashboard/UserDashboard/SelectedClasses/SelectedClasses";
import AddClass from "../Pages/Dashboard/InstructorDashboard/AddClass";
import InstructorClasses from "../Pages/Dashboard/InstructorDashboard/InstructorClasses";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
    ],
  },

  //   layout for login page
  {
    path: "/login",
    element: <LoginLayout></LoginLayout>,
  },

  // layout for signup page
  {
    path: "/signup",
    element: <SigninLayout></SigninLayout>,
  },

  //layout for dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DasboardLayout></DasboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/dashboard/selected-classes",
        element: <SelectedClasses></SelectedClasses>,
      },

      {
        path: "/dashboard/instructor",
        element: (
          <InstructorRoute>
            <InstructorDashboard></InstructorDashboard>
          </InstructorRoute>
        ),
      },
      {
        path: "dashboard/addclass",
        element: (
          <InstructorRoute>
            <AddClass></AddClass>
          </InstructorRoute>
        ),
      },
      {
        path: "dashboard/myclasses",
        element: (
          <InstructorRoute>
            <InstructorClasses></InstructorClasses>
          </InstructorRoute>
        ),
      },
      {
        path: "/dashboard/admin",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
    ],
  },
]);

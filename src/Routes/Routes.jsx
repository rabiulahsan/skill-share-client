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
import AllUsers from "../Pages/Dashboard/AdminDashboard/AllUsers";
import AllClasses from "../Pages/Dashboard/AdminDashboard/AllClasses";
import Payment from "../Pages/Dashboard/UserDashboard/SelectedClasses/Payment/Payment";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import EnrolledClasses from "../Pages/Dashboard/UserDashboard/EnrolledClasses/EnrolledClasses";
import PaymentHistory from "../Pages/Dashboard/UserDashboard/PaymentHistory/PaymentHistory";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
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
    errorElement: <ErrorPage></ErrorPage>,
  },

  // layout for signup page
  {
    path: "/signup",
    element: <SigninLayout></SigninLayout>,
    errorElement: <ErrorPage></ErrorPage>,
  },

  //layout for dashboard
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DasboardLayout></DasboardLayout>
      </PrivateRoute>
    ),
    errorElement: <ErrorPage></ErrorPage>,
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
        path: "/dashboard/selected-classes/:id",
        element: <Payment></Payment>,
        loader: ({ params }) =>
          fetch(
            `https://skill-builder-server.vercel.app/dashboard/payment/${params.id}`
          ),
      },
      {
        path: "/dashboard/enrolled",
        element: <EnrolledClasses></EnrolledClasses>,
      },
      {
        path: "/dashboard/paymenthistory",
        element: <PaymentHistory></PaymentHistory>,
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
      {
        path: "/dashboard/allclasses",
        element: (
          <AdminRoute>
            <AllClasses></AllClasses>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);

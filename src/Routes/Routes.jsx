import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LoginLayout from "../Layout/LoginLayout";
import SigninLayout from "../Layout/SigninLayout";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";

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
  {},
]);

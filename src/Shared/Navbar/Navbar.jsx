/* eslint-disable no-unused-vars */
import { useState } from "react";
import ActiveLink from "../../Components/ActiveLink/ActiveLink";
import useAuth from "../../Hooks/useAuth/useAuth";
import useVerifyAdmin from "../../Hooks/useVerifyAdmin/useVerifyAdmin";
import useVerifyInstructor from "../../Hooks/useVerifyInstructor/useVerifyInstructor";
import { BiMenu } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useVerifyAdmin();
  const [isInstructor] = useVerifyInstructor();
  const [menu, setmenu] = useState(false);

  //logout
  const handleLogout = () => {
    logOut()
      .then((data) => console.log("out"))
      .catch((error) => console.log(error));
  };

  //handle menu
  const handleMenu = () => {
    setmenu(!menu);
  };
  return (
    <div className="">
      <div className="hidden lg:block">
        <div className="flex  justify-between items-center px-[8%] py-[1%] bg-sky-100 sticky top-0 z-10">
          <ActiveLink to="/">
            <p className="text-blue-700 font-bold text-3xl">Skill Builder</p>
          </ActiveLink>
          <div className=" ">
            <ul className="flex text-lg font-semibold ">
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink to="/">Home</ActiveLink>
              </li>
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink to="/instructors">Instructors</ActiveLink>
              </li>
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink to="/classes">Classes</ActiveLink>
              </li>
              <li className="mx-2 px-2 navlink-hover">
                <ActiveLink
                  to={`${
                    isAdmin
                      ? "/dashboard/admin"
                      : isInstructor
                      ? "/dashboard/instructor"
                      : "/dashboard"
                  }`}
                >
                  Dasboard
                </ActiveLink>
              </li>
            </ul>
          </div>
          <div className=" flex gap-x-4">
            {user ? (
              <button onClick={handleLogout} className="blue-btn mr-5">
                <ActiveLink to="/login">Logout</ActiveLink>
              </button>
            ) : (
              <button className="blue-btn mr-5">
                <ActiveLink to="/login">Login</ActiveLink>
              </button>
            )}

            {user &&
              (user?.photoURL ? (
                <img
                  className="mx-auto h-[40px] text-blue-600 text-xl  font-bold"
                  src={user?.photoURL}
                  title={user?.displayName}
                  alt="Profile"
                />
              ) : (
                <span></span>
              ))}
          </div>
        </div>
      </div>

      {/* for responsive  */}

      <div className=" lg:hidden bg-sky-100 py-[5%] px[-8%]">
        <div className="flex items-center w-full relative">
          <p className="text-blue-700 font-bold text-2xl px-5">
            <ActiveLink to="/">Skill Builder</ActiveLink>
          </p>
          <p className="absolute right-5">
            <span onClick={handleMenu} className="text-4xl cursor-pointer">
              <BiMenu></BiMenu>
            </span>
          </p>
        </div>
      </div>
      <div
        className={` absolute  lg:hidden    text-center bg-sky-200 text-black w-full top-[80px]  duration-300  z-20 ${
          menu ? "left-[0%]" : "left-[-100%]"
        }`}
      >
        <ul className="flex flex-col  text-lg font-semibold mt-5">
          <li className="nav-option-style ">
            <ActiveLink to="/">Home</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/instructors">Instructors</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink to="/classes">Classes</ActiveLink>
          </li>
          <li className="nav-option-style">
            <ActiveLink
              to={`${
                isAdmin
                  ? "/dashboard/admin"
                  : isInstructor
                  ? "/dashboard/instructor"
                  : "/dashboard"
              }`}
            >
              Dasboard
            </ActiveLink>
          </li>
        </ul>
        <div className="  lg:hidden my-[3%]">
          <button
            onClick={handleLogout}
            className="bg-blue-600 font-semibold text-lg text-white py-2 px-6 mb-5 rounded cursor-pointer hover:bg-blue-800 duration-500"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

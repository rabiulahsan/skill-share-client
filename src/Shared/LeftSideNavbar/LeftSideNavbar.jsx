import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { RxDashboard } from "react-icons/rx";
import { BiAddToQueue } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import {
  AiOutlineHistory,
  AiFillHome,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { FiUsers } from "react-icons/fi";
import { MdClass, MdOutlineLogout } from "react-icons/md";
import useVerifyAdmin from "../../Hooks/useVerifyAdmin/useVerifyAdmin";
import useVerifyInstructor from "../../Hooks/useVerifyInstructor/useVerifyInstructor";
import ActiveDashboardLink from "../../Components/ActiveDashboardLink/ActiveDashboardLink";

const LeftSideNavbar = () => {
  const { logOut } = useAuth();

  const [isAdmin] = useVerifyAdmin();
  const [isInstructor] = useVerifyInstructor();

  console.log(isAdmin);
  console.log(isInstructor);

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="bg-blue-950 h-[710px] w-full sticky top-0 ">
        <div className="pb-8 pt-5">
          <ActiveDashboardLink to="/">
            <p className="text-3xl text-sky-300 font-bold text-center my-[2%]">
              Skill Builder
            </p>
          </ActiveDashboardLink>
        </div>
        <div className=" text-white relative">
          <ul>
            {isAdmin ? (
              <>
                {" "}
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="/dashboard/admin">
                    <span className="flex dashboard-navlink">
                      <span>
                        <RxDashboard></RxDashboard>
                      </span>
                      <span>Dashboard</span>
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="/">
                    <span className="flex dashboard-navlink ">
                      <span>
                        <GiTeacher></GiTeacher>
                      </span>
                      Instructors
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="">
                    <span className="flex dashboard-navlink ">
                      <span>
                        <MdClass></MdClass>
                      </span>
                      Classes
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="">
                    <span className="flex items-center px-6 py-3  text-lg gap-x-2 ">
                      <span>
                        <FiUsers></FiUsers>
                      </span>
                      users
                    </span>
                  </ActiveDashboardLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                {" "}
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="/dashboard/instructor">
                    <span className="flex dashboard-navlink">
                      <span>
                        <RxDashboard></RxDashboard>
                      </span>
                      <span>Dashboard</span>
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="/">
                    <span className="flex dashboard-navlink ">
                      <span>
                        <AiOutlineAppstoreAdd></AiOutlineAppstoreAdd>
                      </span>
                      Add Class
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="">
                    <span className="flex dashboard-navlink ">
                      <span>
                        <MdClass></MdClass>
                      </span>
                      My Classes
                    </span>
                  </ActiveDashboardLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li className="navlink  hover:text-sky-300 ">
                  <ActiveDashboardLink to="/dashboard">
                    <span className="flex dashboard-navlink">
                      <span>
                        <RxDashboard></RxDashboard>
                      </span>
                      <span>Dashboard</span>
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="/">
                    <span className="flex dashboard-navlink ">
                      <span>
                        <BiAddToQueue></BiAddToQueue>
                      </span>
                      Selected Classes
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="">
                    <span className="flex dashboard-navlink ">
                      <span>
                        <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
                      </span>
                      Enrolled Classes
                    </span>
                  </ActiveDashboardLink>
                </li>
                <li className="navlink hover:text-sky-300 ">
                  <ActiveDashboardLink to="">
                    <span className="flex items-center px-6 py-3  text-lg gap-x-2 ">
                      <span>
                        <AiOutlineHistory></AiOutlineHistory>
                      </span>
                      Payment History
                    </span>
                  </ActiveDashboardLink>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* divider  */}
        <div className="divider border-b"></div>

        {/* for all kind of users  */}

        <div className=" text-white w-full mt-[20%]">
          <ul>
            <li>
              <ActiveDashboardLink to="/">
                <span className="flex dashboard-navlink hover:text-sky-300 ">
                  <span>
                    <AiFillHome></AiFillHome>
                  </span>
                  Home
                </span>
              </ActiveDashboardLink>
            </li>
            <li>
              <ActiveDashboardLink to="/instructors">
                <span className="flex dashboard-navlink hover:text-sky-300 ">
                  <span>
                    <GiTeacher></GiTeacher>
                  </span>
                  Instructor
                </span>
              </ActiveDashboardLink>
            </li>
            <li>
              <ActiveDashboardLink to="/classes">
                <span className="flex dashboard-navlink hover:text-sky-300 ">
                  <span>
                    <MdClass></MdClass>
                  </span>
                  Clases
                </span>
              </ActiveDashboardLink>
            </li>
            <li onClick={handleLogOut}>
              <ActiveDashboardLink to="/">
                <span className="flex items-center px-6 py-3  text-lg gap-x-2 hover:text-sky-300 ">
                  <span>
                    <MdOutlineLogout></MdOutlineLogout>
                  </span>
                  Log Out
                </span>
              </ActiveDashboardLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNavbar;

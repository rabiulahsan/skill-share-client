import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import { RxDashboard } from "react-icons/rx";
import { BiAddToQueue } from "react-icons/bi";
import { BsFillBookmarkCheckFill } from "react-icons/bs";
import { AiOutlineHistory, AiFillHome } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { MdClass, MdOutlineLogout } from "react-icons/md";

const LeftSideNavbar = () => {
  const { logOut } = useAuth();

  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="bg-blue-950 h-[710px] w-full sticky top-0 ">
        <div className="pb-8 pt-5">
          <Link to="/">
            <p className="text-3xl text-sky-300 font-bold text-center my-[2%]">
              Skill Builder
            </p>
          </Link>
        </div>
        <div className=" text-white relative">
          <ul>
            <li className="navlink">
              <Link to="/dashboard/users">
                <span className="flex dashboard-navlink">
                  <span>
                    <RxDashboard></RxDashboard>
                  </span>
                  <span>Dashboard</span>
                </span>
              </Link>
            </li>
            <li className="navlink">
              <Link to="/">
                <span className="flex dashboard-navlink ">
                  <span>
                    <BiAddToQueue></BiAddToQueue>
                  </span>
                  Selected Classes
                </span>
              </Link>
            </li>
            <li className="navlink">
              <Link to="">
                <span className="flex dashboard-navlink ">
                  <span>
                    <BsFillBookmarkCheckFill></BsFillBookmarkCheckFill>
                  </span>
                  Enrolled Classes
                </span>
              </Link>
            </li>
            <li className="navlink">
              <Link to="">
                <span className="flex items-center px-6 py-3  text-lg gap-x-2 ">
                  <span>
                    <AiOutlineHistory></AiOutlineHistory>
                  </span>
                  Payment History
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* for all kind of users  */}

        <div className=" text-white w-full mt-[20%]">
          <ul>
            <li>
              <Link to="">
                <span className="flex dashboard-navlink ">
                  <span>
                    <AiFillHome></AiFillHome>
                  </span>
                  Home
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span className="flex dashboard-navlink ">
                  <span>
                    <GiTeacher></GiTeacher>
                  </span>
                  Instructor
                </span>
              </Link>
            </li>
            <li>
              <Link to="">
                <span className="flex dashboard-navlink ">
                  <span>
                    <MdClass></MdClass>
                  </span>
                  Clases
                </span>
              </Link>
            </li>
            <li onClick={handleLogOut}>
              <Link to="/">
                <span className="flex items-center px-6 py-3  text-lg gap-x-2 ">
                  <span>
                    <MdOutlineLogout></MdOutlineLogout>
                  </span>
                  Log Out
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftSideNavbar;

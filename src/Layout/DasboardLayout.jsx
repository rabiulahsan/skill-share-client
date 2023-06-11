import { Outlet } from "react-router-dom";
import LeftSideNavbar from "../Shared/LeftSideNavbar/LeftSideNavbar";

const DasboardLayout = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/5 ">
        <LeftSideNavbar></LeftSideNavbar>
      </div>
      <div className="w-4/5">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DasboardLayout;

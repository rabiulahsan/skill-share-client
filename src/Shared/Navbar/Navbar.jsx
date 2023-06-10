import ActiveLink from "../../Components/ActiveLink/ActiveLink";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-[8%] py-[1%] bg-sky-100 sticky top-0">
      <p className="text-blue-700 font-bold text-3xl">Skill Builder</p>
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
            <ActiveLink to="/dashboard">Dasboard</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="">
        <button className="blue-btn mr-5">
          <ActiveLink to="/login">login</ActiveLink>
        </button>

        <button className="blue-btn">
          <ActiveLink to="/signup">Signup</ActiveLink>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

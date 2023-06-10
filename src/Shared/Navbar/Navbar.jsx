import ActiveLink from "../../Components/ActiveLink/ActiveLink";
import useAuth from "../../Hooks/useAuth/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();

  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  return (
    <div className="flex justify-between items-center px-[8%] py-[1%] bg-sky-100 sticky top-0 z-10">
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
      <div className=" flex gap-x-4">
        {user ? (
          <button className="blue-btn mr-5">
            <ActiveLink to="/login">Logout</ActiveLink>
          </button>
        ) : (
          <button onClick={handleLogout()} className="blue-btn mr-5">
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
  );
};

export default Navbar;

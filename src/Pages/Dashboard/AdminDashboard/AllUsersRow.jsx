/* eslint-disable react/prop-types */
import { RiAdminFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import useVerifyAdmin from "../../../Hooks/useVerifyAdmin/useVerifyAdmin";
import useVerifyInstructor from "../../../Hooks/useVerifyInstructor/useVerifyInstructor";

const AllUsersRow = ({ index, user, refetch }) => {
  const { name, email, role } = user;

  const [isAdmin] = useVerifyAdmin();
  const [isInstructor] = useVerifyInstructor();
  return (
    <tr className="hover:bg-gray-100 w-full text-center  ">
      <td className="py-5 font-semibold">{index + 1}</td>
      <td className="font-semibold">{name}</td>
      <td className="font-semibold">{email}</td>
      <td className="font-semibold">{role}</td>

      <td>
        {role === "instructor" || role === "admin" ? (
          <button
            disabled
            className="bg-gray-400 rounded px-6 py-2 text-white font-semibold"
            title="Already a Instructor"
          >
            <span className="text-white text-xl disabled">
              <FaChalkboardTeacher></FaChalkboardTeacher>
            </span>
          </button>
        ) : (
          <button
            className="bg-sky-400 rounded px-6 py-2 text-white font-semibold"
            title="Make Instructor"
          >
            <span className="text-white text-xl">
              <FaChalkboardTeacher></FaChalkboardTeacher>
            </span>
          </button>
        )}
      </td>
      <td>
        {role === "admin" ? (
          <button
            disabled
            className="bg-gray-400 rounded px-6 py-2 text-white font-semibold "
            title="Already a Admin"
          >
            <span className="text-white text-xl">
              <RiAdminFill></RiAdminFill>
            </span>
          </button>
        ) : (
          <button
            className="bg-indigo-900 rounded px-6 py-2 text-white font-semibold "
            title="Make Admin"
          >
            <span className="text-white text-xl">
              <RiAdminFill></RiAdminFill>
            </span>
          </button>
        )}
      </td>
    </tr>
  );
};

export default AllUsersRow;

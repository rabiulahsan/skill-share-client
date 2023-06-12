/* eslint-disable react/prop-types */
import { RiAdminFill } from "react-icons/ri";
import { FaChalkboardTeacher } from "react-icons/fa";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const AllUsersRow = ({ index, user, refetch }) => {
  const { name, email, role, _id } = user;

  const [axiosSecure] = useAxiosSecure();

  //set role to instructor
  const handleInstructor = (id) => {
    axiosSecure.patch(`/allusers/makeinstructor/${id}`).then((data) => {
      if (data.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is an Instructor Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //set role to admin
  const handleAdmin = (id) => {
    axiosSecure.patch(`/allusers/makeadmin/${id}`).then((data) => {
      if (data.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
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
            <span className="text-white text-xl ">
              <FaChalkboardTeacher></FaChalkboardTeacher>
            </span>
          </button>
        ) : (
          <button
            onClick={() => handleInstructor(_id)}
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
            onClick={() => handleAdmin(_id)}
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

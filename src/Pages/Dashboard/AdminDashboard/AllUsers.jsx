import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import AllUsersRow from "./AllUsersRow";

const AllUsers = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: allUsers = [], refetch } = useQuery(
    ["allusers", user?.email],
    async () => {
      const res = await axiosSecure.get("/allusers");
      return res.data;
    }
  );
  return (
    <div className="px-[5%]">
      <SectionTitle heading="All Classes"></SectionTitle>
      <p className="text-center text-2xl font-bold text-blue-900 mb-[5%]">
        There are {allUsers.length}
        {allUsers.length > 1 ? <span> Users</span> : <span> User</span>}
      </p>
      <div className="w-full my-[5%]">
        <table className=" w-full">
          {/* table header  */}
          <thead className="border-b border-b-gray-500 bg-gray-100 ">
            <tr className="text-center font-bold text-xl text-black ">
              <th className="py-5">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>

          {/* table body by mapping  */}
          <tbody>
            {allUsers.map((user, index) => (
              <AllUsersRow
                key={user._id}
                index={index}
                user={user}
                refetch={refetch}
              ></AllUsersRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;

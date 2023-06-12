import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import InstructorClassesRow from "./InstructorClassesRow";

const InstructorClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: instructorClasses = [], refetch } = useQuery(
    ["instructorclasses", user?.email],
    async () => {
      const res = await axiosSecure.get(
        `/instructorclasses?email=${user?.email}`
      );
      return res.data;
    }
  );
  return (
    <div className="px-[5%]">
      <SectionTitle heading="My Classes"></SectionTitle>

      <p className="text-center text-2xl font-bold text-blue-900">
        You have {instructorClasses.length}
        {instructorClasses.length > 1 ? (
          <span> classes</span>
        ) : (
          <span> class</span>
        )}
      </p>
      <div className="w-full my-[5%]">
        <table className=" w-full">
          {/* table header  */}
          <thead className="border-b border-b-gray-500 bg-gray-100 ">
            <tr className="text-center font-bold text-xl text-black ">
              <th className="py-5">#</th>
              <th>Name</th>
              <th>Enrolled</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Update</th>
            </tr>
          </thead>

          {/* table body by mapping  */}
          <tbody>
            {instructorClasses.map((cls, index) => (
              <InstructorClassesRow
                key={cls._id}
                index={index}
                cls={cls}
                refetch={refetch}
              ></InstructorClassesRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InstructorClasses;

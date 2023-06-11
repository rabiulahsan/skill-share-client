import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import SelectedClassesRow from "../SelectedClassesRow";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [], refetch } = useQuery(
    ["selected", user?.email],
    async () => {
      const res = await axiosSecure.get(`/selected?email=${user?.email}`);
      return res.data;
    }
  );
  return (
    <div className="px-[4%]">
      <SectionTitle heading="Selected Classes"></SectionTitle>
      <p className="text-center text-2xl font-bold text-blue-900">
        You have selected {selectedClasses.length}
        {selectedClasses.length > 1 ? (
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
              <th>Price</th>
              <th>Delete</th>
              <th>Pay</th>
            </tr>
          </thead>

          {/* table body by mapping  */}
          <tbody>
            {selectedClasses.map((cls, index) => (
              <SelectedClassesRow
                key={cls._id}
                index={index}
                cls={cls}
                refetch={refetch}
              ></SelectedClassesRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;

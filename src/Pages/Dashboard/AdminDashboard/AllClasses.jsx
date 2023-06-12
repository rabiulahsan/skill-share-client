import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

import AdminSingleClass from "./AdminSingleClass";

const AllClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: allClasses = [], refetch } = useQuery(
    ["allclasses", user?.email],
    async () => {
      const res = await axiosSecure.get("/allclasses");
      return res.data;
    }
  );
  return (
    <div>
      <SectionTitle heading="All Classes"></SectionTitle>
      <p className="text-center text-2xl font-bold text-blue-900 mb-[5%]">
        There are {allClasses.length}
        {allClasses.length > 1 ? <span> classes</span> : <span> class</span>}
      </p>
      <div className="grid gap-12 grid-cols-1 lg:grid-cols-2 px-[8%] py-[5%] bg-sky-50 w-4/5 mx-auto">
        {allClasses.map((cls) => (
          <AdminSingleClass key={cls._id} cls={cls}></AdminSingleClass>
        ))}
      </div>
    </div>
  );
};

export default AllClasses;

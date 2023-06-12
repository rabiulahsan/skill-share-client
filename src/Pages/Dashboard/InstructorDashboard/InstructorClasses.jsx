import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

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
    </div>
  );
};

export default InstructorClasses;

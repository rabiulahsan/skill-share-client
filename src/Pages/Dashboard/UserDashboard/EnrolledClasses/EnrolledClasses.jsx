import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";

const EnrolledClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [], refetch } = useQuery(
    ["enrolled", user?.email],
    async () => {
      const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
      return res.data;
    }
  );
  return <div>{enrolledClasses.length}</div>;
};

export default EnrolledClasses;

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import useAuth from "../../../../Hooks/useAuth/useAuth";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: selectedClasses = [], refetch } = useQuery(
    ["selected", user?.email],
    async () => {
      const res = await axiosSecure.get("/selected");
      return res.data;
    }
  );
  return <div>{selectedClasses.length}</div>;
};

export default SelectedClasses;

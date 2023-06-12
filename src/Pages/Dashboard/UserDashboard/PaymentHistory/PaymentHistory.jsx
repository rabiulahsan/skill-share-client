import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure/useAxiosSecure";
import SectionTitle from "../../../../Components/SectionTitle/SectionTitle";
import PaymentHistoryRow from "./PaymentHistoryRow";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: enrolledClasses = [] } = useQuery(
    ["enrolled", user?.email],
    async () => {
      const res = await axiosSecure.get(`/enrolled?email=${user?.email}`);
      return res.data;
    }
  );
  return (
    <div>
      {" "}
      <div className="px-[4%]">
        <SectionTitle heading="Payment History"></SectionTitle>
        <p className="text-center text-2xl font-bold text-blue-900">
          You have paymented {enrolledClasses.length}
          {enrolledClasses.length > 1 ? (
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
                <th>TrxID</th>
                <th>Date</th>
              </tr>
            </thead>

            {/* table body by mapping  */}
            <tbody>
              {enrolledClasses.map((cls, index) => (
                <PaymentHistoryRow
                  key={cls._id}
                  index={index}
                  cls={cls}
                ></PaymentHistoryRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentHistory;

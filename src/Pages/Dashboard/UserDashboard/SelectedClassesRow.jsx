import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";

/* eslint-disable react/prop-types */
const SelectedClassesRow = ({ index, cls, refetch }) => {
  const { class_name, price, _id } = cls;
  const [axiosSecure] = useAxiosSecure();

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/selected/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire("Deleted!", "Your file has been deleted.", "success");
          }
        });
      }
    });
  };
  return (
    <tr className="hover:bg-gray-100 w-full text-center  ">
      <td className="py-5 font-semibold">{index + 1}</td>
      <td className="font-semibold">{class_name}</td>
      <td className="font-semibold">{price}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-400 rounded px-6 py-2 text-white font-semibold"
        >
          Delete
        </button>
      </td>
      <td>
        <button className="bg-indigo-900 rounded px-6 py-2 text-white font-semibold">
          Pay
        </button>
      </td>
    </tr>
  );
};

export default SelectedClassesRow;

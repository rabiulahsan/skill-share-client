import { AiFillStar, AiOutlineDollar } from "react-icons/ai";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const AdminSingleClass = ({ cls, refetch }) => {
  const {
    class_name,
    ins_name,
    available_seats,
    price,
    image,
    ratings,
    status,
    _id,
  } = cls;

  const [approved, setApproved] = useState(true);
  const [deny, setDeny] = useState(false);

  useEffect(() => {
    if (status === "pending") {
      setApproved(false);
      setDeny(false);
    }
  }, [status]);

  const [axiosSecure] = useAxiosSecure();

  //approved button functional
  const handleApproved = (id) => {
    axiosSecure
      .patch(`/allclasses/${id}`, { status: "approved" })
      .then((data) => {
        if (data.data.modifiedCount) {
          refetch();
          setApproved(true);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Class has been approved.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  //deny button functional

  const handleDeny = (id) => {
    axiosSecure.patch(`/allclasses/${id}`, { status: "deny" }).then((data) => {
      if (data.data.modifiedCount) {
        refetch();
        setDeny(true);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class has been denied.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  //feedback for pending status
  const handleFeedback = () => {
    Swal.fire("Atfirst Approved or Deny");
  };

  //submit feedback
  const handleSubmitFeedback = (e, id) => {
    e.preventDefault();
    // const form = e.target;
    // const textarea = form.textarea.value;
    // console.log(textarea);

    console.log(id);
  };
  return (
    <div className="bg-white p-5 rounded-md ">
      <img
        className=" mx-auto w-full h-[220px] rounded-md"
        src={image}
        alt=""
      />
      <p className="bg-sky-50 px-3 py-2 mt-5  inline-block text-blue-800 font-semibold rounded">
        Available seats: {available_seats}
      </p>
      <p className="text-xl font-bold ">{class_name}</p>
      <p className="  mb-4 text-[#757575] font-semibold">{ins_name}</p>
      <div className="flex justify-between items-center py-4">
        <p className="  flex items-center text-[#757575] font-bold">
          {" "}
          <span className="bg-sky-100 text-blue-400 mr-1 p-1 rounded-[50%]">
            <AiOutlineDollar></AiOutlineDollar>
          </span>
          ${price}
        </p>
        <p className="  flex pr-[40%] items-center text-[#757575] font-bold">
          {" "}
          <span className="bg-sky-100 text-blue-400 mr-1 p-1 rounded-[50%]">
            <AiFillStar></AiFillStar>
          </span>
          {ratings}
        </p>
      </div>
      <p
        className={`${
          status === "approved"
            ? "text-green-400 font-semibold text-lg  mb-5"
            : status === "pending"
            ? "text-orange-400 font-semibold text-lg  mb-5"
            : "text-red-400 font-semibold text-lg  mb-5"
        }`}
      >
        Status: {status}
      </p>

      {/* button for set class status  */}
      {approved || deny ? (
        <div className="flex  gap-x-4">
          <button
            disabled
            onClick={() => handleApproved(_id)}
            className="text-white bg-gray-400 font-semibold px-5 py-2 rounded "
          >
            Approve
          </button>
          <button
            disabled
            onClick={() => handleDeny(_id)}
            className="text-white bg-gray-400 font-semibold px-5 py-2 rounded "
          >
            Deny
          </button>
          <button
            onClick={() => window.my_modal_3.showModal()}
            className="text-white bg-sky-400 font-semibold px-5 py-2 rounded hover:bg-sky-600"
          >
            Feedback
          </button>

          {/* modal for feedback */}
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button
                  htmlFor="my-modal-3"
                  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >
                  ✕
                </button>
              </form>

              <form onSubmit={(event) => handleSubmitFeedback(event, _id)}>
                <h3 className="font-bold text-lg text-center">Feedback</h3>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline my-4"
                  placeholder="Feedback"
                  rows={30}
                ></textarea>
                <input
                  value="Submit Feedback"
                  type="submit"
                  className="text-white bg-sky-400 font-semibold my-4  px-5 py-2 rounded hover:bg-sky-600 cursor-pointer"
                ></input>
              </form>
            </div>
          </dialog>
        </div>
      ) : (
        <div className="flex  gap-x-4">
          <button
            onClick={() => handleApproved(_id)}
            className="text-white bg-blue-600 font-semibold px-5 py-2 rounded hover:bg-blue-800"
          >
            Approve
          </button>
          <button
            onClick={() => handleDeny(_id)}
            className="text-white bg-red-400 font-semibold px-5 py-2 rounded hover:bg-red-600"
          >
            Deny
          </button>
          <button
            onClick={handleFeedback}
            className="text-white bg-sky-400 font-semibold px-5 py-2 rounded hover:bg-sky-600"
          >
            Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default AdminSingleClass;

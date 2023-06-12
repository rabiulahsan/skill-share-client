import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import Swal from "sweetalert2";

const AddClass = () => {
  const [axiosSecure] = useAxiosSecure();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  const onSubmit = (data) => {
    const { image, class_name, ins_name, email, available_seats, price } = data;
    const newClass = {
      image,
      class_name,
      ins_name,
      email,
      available_seats: parseInt(available_seats),
      price: parseFloat(price),
      status: "pending",
      ratings: parseFloat((Math.random() * 1 + 4).toFixed(1)),
      total_enrolled: parseInt(0),
    };
    console.log(newClass);
    axiosSecure.post("/classes", newClass).then((data) => {
      if (data.data.insertedId) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Class added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="px-[5%]">
      <SectionTitle heading="Add a Class"></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)} className="relative">
        <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Class Name</span>
            </label>
            <input
              type="text"
              placeholder="Class Name"
              {...register("class_name", { required: true, maxLength: 120 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
            {errors.class_name && (
              <span className="text-red-600">Class Name is required</span>
            )}
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              readOnly
              type="text"
              placeholder="Instructor Name"
              value={user?.displayName}
              {...register("ins_name", { required: true, maxLength: 120 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">
                Display Image URL
              </span>
            </label>
            <input
              type="text"
              placeholder="Display Image URL"
              {...register("image", { required: true, maxLength: 300 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
            {errors.image && (
              <span className="text-red-600">ImageURL is required</span>
            )}
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              readOnly
              type="email"
              placeholder="Instructor Email"
              value={user?.email}
              {...register("email", { required: true, maxLength: 120 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Available Seats</span>
            </label>
            <input
              type="number"
              placeholder="Available Seats"
              {...register("available_seats", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
            {errors.available_seats && (
              <span className="text-red-600">Available Seat is required</span>
            )}
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
            {errors.price && (
              <span className="text-red-600">Price is required</span>
            )}
          </div>
        </div>
        <input
          className="bg-blue-700  py-2 px-6 text-white font-semibold cursor-pointer rounded hover:bg-blue-800 absolute bottom-[-15%] right-0"
          type="submit"
          value="Add Class"
        />
      </form>
    </div>
  );
};

export default AddClass;

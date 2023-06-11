import { useForm } from "react-hook-form";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth/useAuth";

const AddClass = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useAuth();

  console.log(user);
  const onSubmit = (data) => {
    console.log(data);
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
              {...register("name", { required: true, maxLength: 120 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Instructor Name</span>
            </label>
            <input
              type="text"
              placeholder="Instructor Name"
              defaultValue={user?.displayName}
              {...register("name", { required: true, maxLength: 120 })}
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
              {...register("name", { required: true, maxLength: 120 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Instructor Email</span>
            </label>
            <input
              type="text"
              placeholder="Instructor Email"
              defaultValue={user?.email}
              {...register("name", { required: true, maxLength: 120 })}
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
              {...register("name", { required: true, maxLength: 120 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
          </div>
          <div className="form-control w-full mb-4">
            <label className="label block text-gray-700 text-sm font-bold">
              <span className="label-text font-semibold">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              {...register("name", { required: true, maxLength: 120 })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline "
            />
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

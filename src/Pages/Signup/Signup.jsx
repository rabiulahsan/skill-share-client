import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth/useAuth";

const Signup = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then(() => {
          reset();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/");
        })
        .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <div className="flex justify-center items-center bg-[#ebeaf8] h-[710px]">
        <div className="card bg-white shadow-md rounded px-10 pt-8 pb-8 mb-4 w-1/4">
          <form onSubmit={handleSubmit(onSubmit)} className="">
            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                placeholder="Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.name && (
                <span className="text-red-600">Name is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Photo URL"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.photoURL && (
                <span className="text-red-600">Photo URL is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>

            <div className="form-control">
              <label className="label block text-gray-700 text-sm font-bold">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                })}
                placeholder="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight input input-bordered focus:outline-none focus:shadow-outline"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "maxLength" && (
                <p className="text-red-600">
                  Password must be less than 20 characters
                </p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase one lower case, one number
                  and one special character.
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <input
                className="cursor-pointer text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                value="Sign Up"
              />
            </div>
          </form>
          <p className="text-center text-gray-600 my-2">or</p>
          {/* <div className="my-5 mb-10">
          <GoogleSignIn></GoogleSignIn>
        </div> */}
          <p className="flex flex-col text-center text-gray-500">
            Don&apos;t have an account?
            <Link to={"/login"}>
              <span className="text-blue-800 font-semibold hover:underline">
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

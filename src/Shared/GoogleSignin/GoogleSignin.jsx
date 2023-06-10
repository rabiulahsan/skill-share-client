import { FcGoogle } from "react-icons/fc";
import useAuth from "../../Hooks/useAuth/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const GoogleSignin = () => {
  const { user, googleLogin } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    if (user) {
      alert("At first logout");
      return;
    } else {
      googleLogin()
        .then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <div
      className=" border border-blue-500 flex text-center text-white cursor-pointer font-semibold"
      onClick={handleGoogleSignIn}
    >
      <span className="text-2xl p-2">
        <FcGoogle></FcGoogle>
      </span>
      <span className="bg-blue-500 w-full p-2 hover:bg-blue-600">
        Sign in With Google
      </span>
    </div>
  );
};

export default GoogleSignin;

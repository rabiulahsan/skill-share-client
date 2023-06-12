import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useAuth from "../../../Hooks/useAuth/useAuth";
import { Player } from "@lottiefiles/react-lottie-player";

const InstructorDashboard = () => {
  const { user } = useAuth();
  return (
    <div>
      <SectionTitle heading="Instructor Dashboard"></SectionTitle>
      <div className="my-[4%]">
        <Player
          className="h-[400px]"
          autoplay
          loop
          src="/about-us.json"
        ></Player>
      </div>
      <SectionTitle heading={`Welcome ${user.displayName}`}></SectionTitle>
    </div>
  );
};

export default InstructorDashboard;

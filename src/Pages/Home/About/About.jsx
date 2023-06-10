import { Player } from "@lottiefiles/react-lottie-player";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const About = () => {
  return (
    <>
      <SectionTitle heading="About Us"></SectionTitle>
      <div className="flex justify-around items-center px-[8%]">
        <p className="w-1/3 text-[#757575]">
          Discover limitless learning possibilities with our e-learning
          platform. We offer a wide range of expert-led courses in programming,
          web development, data science, design, and more. Learn at your own
          pace, access high-quality content, and gain valuable skills for
          personal and professional growth. Start your learning journey today!
        </p>
        <Player
          className="h-[400px]"
          autoplay
          loop
          src="/about-us.json"
        ></Player>
      </div>
    </>
  );
};

export default About;

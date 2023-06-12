import { BsPeople, BsFillMortarboardFill } from "react-icons/bs";
import { GiTeacher } from "react-icons/gi";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Courses = () => {
  return (
    <div className="">
      <SectionTitle heading="Our Service"></SectionTitle>
      <div className=" my-8 lg:my-5 mx-[8%] p-[3%] bg-sky-100 flex flex-col  gap-y-4 lg:flex lg:justify-around items-center">
        <div className="flex items-center">
          <span className="bg-white p-4 mr-5 rounded text-5xl text-blue-600">
            <BsPeople></BsPeople>
          </span>
          <div className="">
            <p className="text-blue-800 text-4xl font-bold">5k+</p>
            <p className="text-[#757575]">Total Students</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="bg-white p-4 mr-5 rounded text-5xl text-blue-600">
            <BsFillMortarboardFill></BsFillMortarboardFill>
          </span>
          <div className="">
            <p className="text-blue-800 text-4xl font-bold">50+</p>
            <p className="text-[#757575]">Total Courses</p>
          </div>
        </div>
        <div className="flex items-center">
          <span className="bg-white p-4 mr-5 rounded text-5xl text-blue-600">
            <GiTeacher></GiTeacher>
          </span>
          <div className="">
            <p className="text-blue-800 text-4xl font-bold">20+</p>
            <p className="text-[#757575]">Total Instructors</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;

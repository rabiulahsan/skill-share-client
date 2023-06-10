import slide1 from "../../../assets/slide-1.svg";
import slide2 from "../../../assets/slide-2.jpg";
import slide3 from "../../../assets/slide-3.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const Banner = () => {
  return (
    <div className="bg-sky-100 lg:px-[8%]">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper h-[700px]"
      >
        <SwiperSlide>
          <div className="flex items-center justify-start">
            <div className="w-1/2">
              <p className=" text-6xl font-bold leading-tight mb-8">
                Getting{" "}
                <span className="text-blue-600 ">Quality Education</span> is Now
                More <span className="text-blue-600 ">Easy</span>{" "}
              </p>
              <p className="text-[#757575]">
                We are providing all your important skils with latest
                technologies. <br /> That will help you to improve your skill
                better and get a good job. <br /> Just stay with us.
              </p>
              <div className="flex">
                <button className="blue-btn hover:bg-blue-800">Enroll</button>
              </div>
            </div>
            <img className="h-[500px] my-[5%]" src={slide1} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-start">
            <div className="w-1/2">
              <p className=" text-6xl font-bold leading-tight mb-8">
                We <span className="text-blue-600 ">Innovate</span> <br />{" "}
                Learning Processes
              </p>
              <p className="text-[#757575]">
                We are providing all your important skils with latest
                technologies. <br /> That will help you to improve your skill
                better and get a good job. <br /> Just stay with us.
              </p>
              <div className="flex">
                <button className="blue-btn hover:bg-blue-800">Enroll</button>
              </div>
            </div>
            <img className="h-[500px] my-[5%]" src={slide2} alt="" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex items-center justify-start">
            <div className="w-1/2">
              <p className=" text-6xl font-bold leading-tight mb-8">
                Enhance your <br />{" "}
                <span className="text-blue-600 ">Skills</span> Get the <br />{" "}
                <span className="text-blue-600 ">Dream Job</span>{" "}
              </p>
              <p className="text-[#757575]">
                We are providing all your important skils with latest
                technologies. <br /> That will help you to improve your skill
                better and get a good job. <br /> Just stay with us.
              </p>
              <div className="flex">
                <button className="blue-btn hover:bg-blue-800">Enroll</button>
              </div>
            </div>
            <img className="h-[500px] my-[5%]" src={slide3} alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;

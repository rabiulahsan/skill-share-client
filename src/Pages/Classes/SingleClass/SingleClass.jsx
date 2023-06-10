/* eslint-disable react/prop-types */
import { AiOutlineDollar, AiFillStar } from "react-icons/ai";

const SingleClass = ({ cls }) => {
  const { class_name, ins_name, available_seats, price, image, ratings } = cls;

  return (
    <div className="bg-white p-5 rounded-md">
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
          <span className="bg-red-100 text-red-400 mr-1 p-1 rounded-[50%]">
            <AiOutlineDollar></AiOutlineDollar>
          </span>
          ${price}
        </p>
        <p className="  flex pr-[40%] items-center text-[#757575] font-bold">
          {" "}
          <span className="bg-red-100 text-red-400 mr-1 p-1 rounded-[50%]">
            <AiFillStar></AiFillStar>
          </span>
          {ratings}
        </p>
      </div>
      <button className="blue-btn hover:bg-blue-800 mb-0 ">Enroll</button>
    </div>
  );
};

export default SingleClass;

/* eslint-disable react/prop-types */
const SingleInstructor = ({ ins }) => {
  const { name, image, email } = ins;

  return (
    <div className="bg-white p-4 rounded-md text-center hover:scale-110 duration-500">
      <img className="rounded-md mx-auto mb-4 h-[260px]" src={image} alt="" />
      <p className="font-bold text-2xl">{name}</p>
      <p className="font-semibold text-[#757575]">{email}</p>
    </div>
  );
};

export default SingleInstructor;

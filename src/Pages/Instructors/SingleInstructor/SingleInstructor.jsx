/* eslint-disable react/prop-types */
const SingleInstructor = ({ ins }) => {
  const { name, image, email } = ins;

  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default SingleInstructor;

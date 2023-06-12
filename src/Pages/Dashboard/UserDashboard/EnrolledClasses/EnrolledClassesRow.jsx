/* eslint-disable react/prop-types */

const EnrolledClassesRow = ({ index, cls }) => {
  const { class_name, price } = cls;

  return (
    <tr className="hover:bg-gray-100 w-full text-center  ">
      <td className="py-5 font-semibold">{index + 1}</td>
      <td className="font-semibold">{class_name}</td>
      <td className="font-semibold">{price}</td>
      <td className="font-semibold">Paid</td>
    </tr>
  );
};

export default EnrolledClassesRow;

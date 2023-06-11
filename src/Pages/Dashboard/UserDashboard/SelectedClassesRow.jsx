/* eslint-disable react/prop-types */
const SelectedClassesRow = ({ index, cls, refetch }) => {
  const { class_name, price, _id } = cls;
  console.log(index + 1);
  return (
    <tr className="hover:bg-gray-100 w-full text-center  ">
      <td className="py-5 font-semibold">{index + 1}</td>
      <td className="font-semibold">{class_name}</td>
      <td className="font-semibold">{price}</td>
      <td>
        <button className="bg-red-400 rounded px-6 py-2 text-white font-semibold">
          Delete
        </button>
      </td>
      <td>
        <button className="bg-indigo-900 rounded px-6 py-2 text-white font-semibold">
          Pay
        </button>
      </td>
    </tr>
  );
};

export default SelectedClassesRow;

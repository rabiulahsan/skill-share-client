/* eslint-disable react/prop-types */
const InstructorClassesRow = ({ index, cls, refetch }) => {
  const { class_name, _id, total_enrolled, status } = cls;

  return (
    <tr className="hover:bg-gray-100 w-full text-center  ">
      <td className="py-5 font-semibold">{index + 1}</td>
      <td className="font-semibold">{class_name}</td>
      <td className="font-semibold">{total_enrolled}</td>
      <td
        className={`font-semibold  ${
          status === "approved"
            ? "text-green-400"
            : status === "pending"
            ? "text-orange-400"
            : "text-red-400"
        }`}
      >
        {status}
      </td>
      <td>
        <button className="bg-sky-400 rounded px-6 py-2 text-white font-semibold">
          Feedback
        </button>
      </td>
      <td>
        <button className="bg-indigo-900 rounded px-6 py-2 text-white font-semibold">
          Update
        </button>
      </td>
    </tr>
  );
};

export default InstructorClassesRow;

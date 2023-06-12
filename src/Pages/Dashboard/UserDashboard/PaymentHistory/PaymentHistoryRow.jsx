/* eslint-disable react/prop-types */
const PaymentHistoryRow = ({ index, cls }) => {
  const { class_name, price, transactionId, date } = cls;

  return (
    <tr className="hover:bg-gray-100 w-full text-center  ">
      <td className="py-5 font-semibold">{index + 1}</td>
      <td className="font-semibold">{class_name}</td>
      <td className="font-semibold">{price}</td>
      <td className="font-semibold">{transactionId}</td>
      <td className="font-semibold">{date}</td>
    </tr>
  );
};

export default PaymentHistoryRow;

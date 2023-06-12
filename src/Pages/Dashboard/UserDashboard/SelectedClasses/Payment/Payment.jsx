/* eslint-disable react/prop-types */
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";
import { useParams } from "react-router-dom";
import UseSelectedClasses from "../../../../../Hooks/UseSelectedClasses/UseSelectedClasses";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
  const [allSelectedClasses] = UseSelectedClasses();
  const id = useParams().id;

  //get data of this class
  const thisClass = allSelectedClasses.filter((cls) => cls._id === id);
  console.log(thisClass[0]?.price);

  //get the price amount
  let price = thisClass[0]?.price;
  console.log(thisClass[0]);
  return (
    <div>
      <SectionTitle heading="Payment Page"></SectionTitle>
      <p className="text-indigo-900 text-3xl font-bold text-center">
        The course fee is {price}$
      </p>
      <Elements stripe={stripePromise}>
        <CheckOut
          id={id}
          price={price}
          class_name={thisClass[0]?.class_name}
          clsId={thisClass[0]?.clsId}
        >
          {" "}
        </CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;

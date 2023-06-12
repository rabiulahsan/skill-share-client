/* eslint-disable react/prop-types */
import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);

  let price;
  return (
    <div>
      <SectionTitle heading="Payment Page"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOut price={price}> </CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;

import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../../../Components/SectionTitle/SectionTitle";
import CheckOut from "./CheckOut";
import { Elements } from "@stripe/react-stripe-js";

const Payment = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK);
  return (
    <div>
      <SectionTitle heading="Payment Page"></SectionTitle>
      <Elements stripe={stripePromise}>
        <CheckOut> </CheckOut>
      </Elements>
    </div>
  );
};

export default Payment;

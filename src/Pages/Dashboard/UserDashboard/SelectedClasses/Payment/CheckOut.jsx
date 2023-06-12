import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import useAuth from "../../../../../Hooks/useAuth/useAuth";
import useAxiosSecure from "../../../../../Hooks/useAxiosSecure/useAxiosSecure";
import { useState } from "react";

const CheckOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  //   const [cardError, setCardError] = useState("");
  //   const [clientSecret, setClientSecret] = useState("");
  //   const [processing, setProcessing] = useState(false);
  //   const [transactionId, setTransactionId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
  };
  return (
    <>
      <form className="w-2/3 m-8" onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="px-6 py-2 my-5 rounded bg-blue-700 text-white hover:bg-blue-800 "
          type="submit"
          //   disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {/* {cardError && <p className="text-red-600 ml-8">{cardError}</p>}
      {transactionId && (
        <p className="text-green-500">
          Transaction complete with transactionId: {transactionId}
        </p>
      )} */}
    </>
  );
};

export default CheckOut;

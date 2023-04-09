import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../../../Contexts/AuthProvider";

const CheckOutForm = () => {
  const { billingAddress } = useContext(AuthContext);
  
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      setCardError(error.message);
    } else {
      console.log(paymentMethod)
      setCardError("");
    }

    
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <p className="text-red-500">{cardError}</p>
      <button
        className="btn btn-sm btn-success mt-4"
        type="submit"
        disabled={!stripe}
      >
        Pay
      </button>
    </form>
  );
};

export default CheckOutForm;

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const CheckoutForm = ({ orders }) => {
  const { _id, price, userName, email } = orders;
  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [paymentLoading, setPaymentLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },

      body: JSON.stringify({ price }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [price]);

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

    setCardError(error?.message || "");
    setPaymentSuccess("");
    setPaymentLoading(true);

    const { paymentIntent, error: paymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

    if (paymentError) {
      setPaymentLoading(false);
      setCardError(paymentError?.message);
    } else {
      setCardError("");
      setTransactionId(paymentIntent.id);
      console.log(paymentIntent);
      setPaymentSuccess("Congratulation payment complete");

      const paymentInfo = {
        transactionId: paymentIntent.id,
        payment: _id,
      };

      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "PATCH",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },

        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          setPaymentLoading(false);
          console.log(data);
        });
    }
  };

  return (
    <div>
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
        <button
          className="btn-xs btn w-1/3 flex mx-auto mt-4"
          type="submit"
          disabled={!stripe || !clientSecret || paymentSuccess}
        >
          Pay now
        </button>
      </form>

      {cardError && <p className="text-red-600 mt-2">{cardError}</p>}
      {paymentSuccess && (
        <>
          <p className="text-green-600 mt-2">{paymentSuccess}</p>
          <p className="text-orange-500">
            Your transactionId : {transactionId}
          </p>
        </>
      )}
    </div>
  );
};

export default CheckoutForm;

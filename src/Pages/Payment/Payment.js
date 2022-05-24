import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L0kNCFNu1QzxAujT7H5defX0vjCNRCrTR97rqiI3I6dcQJg4Z4e7ullhZVkJMSZe6WYNG6On3BDfGeGv5I9d83N004JEamegQ"
);

const Payment = () => {
  const { id } = useParams();
  const {
    isLoading,
    error,
    data: orders,
  } = useQuery(["payment", id], () =>
    fetch(`http://localhost:5000/payment/${id}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const { userName, quantity, price, name } = orders;

  return (
    <div>
      <div class="card w-2/3 mx-auto bg-base-100 shadow-xl">
        <div class="card-body">
          <h2 class="card-title">
            Hello, <span className="text-orange-600 font-bold">{userName}</span>
          </h2>
          <p>
            Your selected product{" "}
            <span className="text-orange-600 font-bold">{name}</span> and
            quantity{" "}
            <span className="text-orange-600 font-bold">{quantity}</span> to
            confirm this payment for{" "}
            <span className="text-orange-600 font-bold">$ {price} </span>
          </p>
          <div className="mt-6">
            <Elements stripe={stripePromise}>
              <CheckoutForm orders={orders} />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

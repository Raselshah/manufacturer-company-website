import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../../Shared/Loading/Loading";
import DisplayReview from "./DisplayReview";

const ReviewPage = () => {
  const {
    isLoading,
    error,
    data: reviews,
  } = useQuery("review", () =>
    fetch("http://localhost:5000/review").then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        background: `url('https://img.freepik.com/free-vector/green-leaves-scattered-background-design_1017-31327.jpg?w=826&t=st=1653314983~exp=1653315583~hmac=b24a366e037e2ae373f78df07538e2ead0f683fcdc907fe5852e2c587667b4e7')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "overlay",
      }}
      className="mt-12"
    >
      <h3 className="text-center font-bold text-white text-2xl pt-3">
        TESTIMONIALS{" "}
      </h3>
      <h2 className="text-center text-white text-4xl">
        Our Customers Are Saying?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((review) => (
          <DisplayReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;

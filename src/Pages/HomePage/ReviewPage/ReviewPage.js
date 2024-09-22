import React from "react";
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
    <div className="mt-12 bg-slate-300">
      <h3 className="text-center font-bold text-white text-2xl pt-3">
        TESTIMONIALS{" "}
      </h3>
      <h2 className="text-center text-white text-4xl">
        Our Customers Are Saying?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.slice(0, 6).map((review) => (
          <DisplayReview key={review._id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default ReviewPage;

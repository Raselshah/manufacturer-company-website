import React from "react";

const DisplayReview = ({ review }) => {
  const { reviewDescription, reviewName, reviewPhoto, reviewRating } = review;

  let reviews = [];
  for (let i = 0; i < reviewRating; i++) {
    reviews[i] = i;
  }

  return (
    <div className="card w-96">
      <figure className="px-10 pt-10">
        <div className="avatar">
          <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
            <img src={reviewPhoto} alt="" />
          </div>
        </div>
      </figure>
      <div className="card-body items-center mt-[-20px] text-center">
        <h2 className="card-title text-white">{reviewName}</h2>
        <p className="text-white">{reviewDescription}</p>
        <div>
          {reviews.map((r) => (
            <div className="rating">
              <input
                type="radio"
                name="rating-2"
                className="mask mask-star-2 bg-orange-400"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayReview;

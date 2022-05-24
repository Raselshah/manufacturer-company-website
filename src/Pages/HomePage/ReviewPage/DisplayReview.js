import React from "react";

const DisplayReview = ({ review }) => {
  const { reviewDescription, reviewName, reviewPhoto, reviewRating } = review;

  let reviews = [];
  for (let i = 0; i < reviewRating; i++) {
    reviews[i] = i;
  }

  return (
    <div class="card w-96">
      <figure class="px-10 pt-10">
        <div class="avatar">
          <div class="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
            <img src={reviewPhoto} alt="" />
          </div>
        </div>
      </figure>
      <div class="card-body items-center mt-[-20px] text-center">
        <h2 class="card-title text-white">{reviewName}</h2>
        <p className="text-white">{reviewDescription}</p>
        <div>
          {reviews.map((r) => (
            <div class="rating">
              <input
                type="radio"
                name="rating-2"
                class="mask mask-star-2 bg-orange-400"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DisplayReview;

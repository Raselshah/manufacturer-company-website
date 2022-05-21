import React from "react";

const DisplayProducts = ({ product }) => {
  const { picture, name, comment } = product;
  return (
    <div>
      <div class="card h-full w-max-lg bg-base-100 shadow-xl">
        <figure class="px-10 pt-10">
          <img src={picture} alt="Shoes" class="rounded-xl" />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{name}</h2>
          <p>{comment.slice(0, 30)}</p>
          <div class="card-actions">
            <button class="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;

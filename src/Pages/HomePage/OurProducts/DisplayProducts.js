import React from "react";

const DisplayProducts = ({ product }) => {
  const { picture, name, comment } = product;
  return (
    <div>
      <div className="card h-full w-max-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{comment.slice(0, 30)}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;

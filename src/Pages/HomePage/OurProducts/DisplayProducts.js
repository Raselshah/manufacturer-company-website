import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayProducts = ({ product }) => {
  const navigate = useNavigate();
  const { _id, picture, availableQuantity, price, name, description } = product;
  console.log(product);
  return (
    <div>
      <div class="card h-full w-max-lg bg-base-100 shadow-xl">
        <figure>
          <img src={picture} alt="product" />
        </figure>
        <div class="card-body">
          <h2 class="card-title text-lg">{name.slice(0, 50) + "..."}</h2>
          <p>{description}</p>
          <div class="card-actions justify-between mt-2">
            <p className="text-orange-500">
              Available in : {availableQuantity}
            </p>

            <p className="text-orange-500">Price : $ {price}</p>
          </div>
          <div className="card-actions w-1/3 mx-auto mt-2">
            <button
              onClick={() => navigate(`/purchase/${_id}`)}
              className="btn btn-primary"
            >
              Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DisplayProducts;

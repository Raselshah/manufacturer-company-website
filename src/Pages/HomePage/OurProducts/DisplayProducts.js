import React from "react";
import { useNavigate } from "react-router-dom";

const DisplayProducts = ({ product, orderProduct }) => {
  const navigate = useNavigate();
  const { _id, picture, name, description } = product;
  return (
    <div>
      <div className="card h-full w-max-lg bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={picture} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{description.slice(0, 30)}</p>
          <div className="card-actions">
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

import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [singleProduct, setSingleProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/purchase/${id}`)
      .then((res) => res.json())
      .then((result) => setSingleProduct(result));
  }, [singleProduct]);

  const {
    name,
    picture,
    price,
    minQuantity,
    maxQuantity,
    availableQuantity,
    description,
  } = singleProduct;

  const handleBuyButton = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    if (minQuantity > quantity) {
      console.log("please add many number");
      return;
    } else if (maxQuantity < quantity) {
      console.log("less than");
      return;
    } else {
      let newAvailable = availableQuantity - quantity;
      const updateProduct = {
        ...singleProduct,
        availableQuantity: newAvailable,
      };
      fetch(`http://localhost:5000/purchase/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      })
        .then((res) => res.json())
        .then((data) => setSingleProduct(data));

      setSingleProduct(updateProduct);

      event.target.reset();
    }
  };
  return (
    <div class="hero min-h-screen bg-base-200">
      <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
        <div class="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">{name}</h2>
            <p>{description}</p>
            <p className="text-accent text-lg font-bold">Price $ : {price}</p>
            <p className="text-accent text-lg font-bold">
              Available products : {availableQuantity}
            </p>

            <form onSubmit={handleBuyButton} class="card-actions justify-end">
              <input
                type="number"
                name="quantity"
                placeholder={`Minimum order ${minQuantity} and maximum ${maxQuantity}`}
                class="input w-full text-primary"
              />
              <input
                onClick={() => handleBuyButton}
                class="btn btn-accent btn-outline w-1/3 mx-auto hover:duration-500 ease-in-out"
                type="submit"
                value="Buy Now"
              />
            </form>
          </div>
        </div>
        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div class="card-body">
            <div class="form-control">
              <input
                value={user?.email}
                readOnly
                disabled
                type="text"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                value={user?.displayName}
                disabled
                readOnly
                type="text"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                placeholder="Address"
                type="text"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <input
                placeholder="Phone Number"
                type="number"
                class="input input-bordered"
              />
            </div>
            <div class="form-control mt-6">
              <button class="btn btn-primary">SUBMIT</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

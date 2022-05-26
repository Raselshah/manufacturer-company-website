import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);
  const [singleProduct, setSingleProduct] = useState({});
  // const [userInformation, setUserInformation] = useState({});

  useEffect(() => {
    fetch(`https://vast-atoll-16913.herokuapp.com/purchase/${id}`)
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
    const max = parseInt(maxQuantity);
    const min = parseInt(minQuantity);
    if (min > quantity) {
      toast.warning(`please add ${minQuantity}+ products`);
      return;
    } else if (max < quantity) {
      toast.warning(`please less than ${maxQuantity}`);
      return;
    } else {
      let newAvailable = parseInt(availableQuantity) - quantity;
      const updateProduct = {
        ...singleProduct,
        availableQuantity: newAvailable,
      };
      fetch(`https://vast-atoll-16913.herokuapp.com/purchase/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updateProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          toast.success(
            "successfully order done.Please pay to confirm the product"
          );
          setSingleProduct(data);
        });

      // order items post
      const totalPrice = quantity * parseInt(price);
      const ordersInfo = {
        name: name,
        picture: picture,
        price: totalPrice,
        email: user.email,
        userName: user?.displayName,
        quantity: quantity,
      };
      fetch("https://vast-atoll-16913.herokuapp.com/orders", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(ordersInfo),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
        });
      setSingleProduct(updateProduct);
      event.target.reset();
    }
  };
  const navigate = useNavigate();
  const {
    isLoading,
    error,
    data: userInformation,
  } = useQuery("userInfo", () =>
    fetch(
      `https://vast-atoll-16913.herokuapp.com/userInfo/${user?.email}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  // useEffect(() => {
  //   fetch(`https://vast-atoll-16913.herokuapp.com/userInfo/${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setUserInformation(data);
  //     });
  // }, [user.email]);
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2">
        <div className="card bg-base-100 shadow-xl image-full">
          <figure>
            <img src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <p className="text-accent text-lg font-bold">Price $ : {price}</p>
            <p className="text-accent text-lg font-bold">
              Available products : {availableQuantity}
            </p>

            <form
              onSubmit={handleBuyButton}
              className="card-actions justify-end"
            >
              <input
                type="number"
                name="quantity"
                placeholder={`Minimum order ${minQuantity} and maximum ${maxQuantity}`}
                className="input w-full text-primary"
              />
              <input
                onClick={() => handleBuyButton}
                className="btn btn-accent btn-outline w-1/3 mx-auto hover:duration-500 ease-in-out"
                type="submit"
                value="Buy Now"
              />
            </form>
          </div>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex flex-col gap-2">
              <div className="form-control">
                <input
                  name="email"
                  value={userInformation?.email}
                  readOnly
                  disabled
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  name="name"
                  value={userInformation?.name}
                  disabled
                  readOnly
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  readOnly
                  value={userInformation?.address}
                  name="address"
                  placeholder="Address"
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <input
                  readOnly
                  value={userInformation?.phoneNumber}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input
                  onClick={() => navigate("/userProfile")}
                  className="btn btn-primary"
                  type="submit"
                  value="UPDATE"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;

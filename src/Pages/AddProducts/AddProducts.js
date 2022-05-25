import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";

const AddProducts = () => {
  const [user] = useAuthState(auth);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    fetch("http://localhost:5000/addProduct", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((product) => {
        console.log(product);
        if (product) {
          event.target.reset();
          toast("Successfully added item", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      });
  };
  return (
    <div className="text-center w-5/6 lg:w-2/4 mx-auto h-[100vh]">
      <h2>Please enter your new products</h2>
      <form className="mt-4 w-full" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="flex flex-col mb-2 p-2 border-b-2 w-full"
          placeholder="Product Name"
          {...register("name", { required: true, maxLength: 20 })}
        />
        <input
          className="flex flex-col mb-2 p-2 w-full border-b-2"
          placeholder="Price"
          type="number"
          {...register("price", { required: true, maxLength: 20 })}
        />
        <textarea
          className="flex flex-col mb-2 p-2 border-b-2 w-full h-28"
          placeholder="description"
          {...register("description")}
        />
        <input
          className="flex flex-col mb-2 p-2 border-b-2 w-full"
          placeholder="maxQuantity"
          type="number"
          {...register("maxQuantity")}
        />

        <input
          className="flex flex-col mb-2 p-2 border-b-2 w-full"
          placeholder="minQuantity"
          type="number"
          {...register("minQuantity")}
        />
        <input
          className="flex flex-col mb-2 p-2 border-b-2 w-full"
          placeholder="photo url"
          {...register("picture")}
        />
        <input
          className="flex flex-col mb-2 p-2 border-b-2 w-full"
          placeholder="availableQuantity"
          type="number"
          {...register("availableQuantity")}
        />
        <input
          className="flex flex-col mb-2 p-2 border-b-2 w-full"
          readOnly
          value={user?.email}
          {...register("email")}
        />
        <input
          className="mt-2 bg-accent hover:bg-orange-700 hover:text-white w-40 py-2 cursor-pointer rounded"
          value="SAVE DATA"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddProducts;

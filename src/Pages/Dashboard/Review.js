import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";

const Review = () => {
  const [user] = useAuthState(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    fetch("http://localhost:5000/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  return (
    <form
      className="flex flex-col gap-2 w-2/3 lg:w-1/3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        readOnly
        value={user?.displayName}
        class="input input-bordered w-full"
        {...register("reviewName")}
      />

      <input
        readOnly
        value={user?.email}
        class="input input-bordered w-full"
        {...register("reviewEmail")}
      />
      <input
        placeholder="photoUrl"
        class="input input-bordered w-full"
        {...register("reviewPhoto", { required: true })}
      />
      {errors.reviewPhoto && "Last name is required"}

      <label class="label">
        <span class="label-text">Please ratings*</span>
      </label>
      <select {...register("reviewRating")}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <textarea
        placeholder="Comment"
        class="input input-bordered w-full h-28"
        {...register("reviewDescription", { required: true })}
      />
      {errors.reviewDescription && "Last name is required"}

      <input type="submit" />
    </form>
  );
};

export default Review;

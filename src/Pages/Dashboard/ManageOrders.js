import React, { useState } from "react";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import Loading from "../../Shared/Loading/Loading";

const ManageOrders = () => {
  const {
    isLoading,
    error,
    data: allOrders,
  } = useQuery("orders", () =>
    fetch("https://vast-atoll-16913.herokuapp.com/allOrders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const handleOrderDelete = (id) => {
    fetch(`https://vast-atoll-16913.herokuapp.com/deleteOrders/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast("successfully remove order");
      });
  };
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>User Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((allOrder, index) => (
              <tr>
                <th>{index + 1}</th>
                <td>{allOrder.name.slice(0, 30) + "..."}</td>
                <td>{allOrder.email}</td>
                <td>{allOrder.quantity}</td>
                <td>{allOrder.price}</td>
                <td>
                  {allOrder.paid === true ? (
                    <button className="btn btn-xs btn-disabled">
                      Confirm Order
                    </button>
                  ) : (
                    <button
                      onClick={() => handleOrderDelete(allOrder._id)}
                      className="btn btn-xs"
                    >
                      Cancel Order
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageOrders;

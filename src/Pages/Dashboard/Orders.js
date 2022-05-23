import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const Orders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders?email=${user?.email}`, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrders(data));
    }
  }, [user]);
  return (
    <div>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">{order?.name}</div>
                      <div class="text-sm opacity-50">
                        Quantity : {order?.quantity}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {order?.userName}
                  <br />
                  <span class="badge badge-ghost badge-sm">{order?.email}</span>
                </td>
                <td>{order?.price}</td>
                <th>
                  <button class="btn btn-ghost btn-xs">Pay</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
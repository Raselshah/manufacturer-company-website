import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
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

  const handleDeleteOrders = (id) => {
    const proceed = window.confirm("Ary you sure?");
    if (proceed) {
      fetch(`http://localhost:5000/removeItem/${id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          toast("Delete successfully");
        });
    }
  };
  return (
    <div>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
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
              <tr key={order._id}>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={order?.picture}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">
                        {order?.name?.slice(0, 30) + "..."}
                      </div>
                      <div className="text-sm opacity-50">
                        Quantity : {order?.quantity}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {order?.userName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {order?.email}
                  </span>
                </td>
                <td>{order?.price}</td>
                <td>
                  {order.price && !order.paid && (
                    <Link
                      to={`/dashboard/payment/${order._id}`}
                      className="btn btn-ghost btn-xs"
                    >
                      Pay
                    </Link>
                  )}

                  {order.price && order.paid && (
                    <>
                      <p className="btn btn-xs btn-disabled">paid</p>
                      <p className="text-accent">
                        TransactionId : {order.transactionId}
                      </p>
                    </>
                  )}
                  {order.paid ? (
                    ""
                  ) : (
                    <button
                      onClick={() => handleDeleteOrders(order?._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      cancel
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

export default Orders;

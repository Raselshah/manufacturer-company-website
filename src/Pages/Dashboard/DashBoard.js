import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../../hooks/useAdmin/useAdmin";

const DashBoard = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content flex flex-col items-center justify-center bg-slate-100">
        <h2 className="text-orange-600 font-bold text-2xl mb-4">
          Welcome Our Dashboard
        </h2>
        <Outlet />
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-56 bg-base-100 text-base-content">
          <li>
            <Link to="orders">My Orders</Link>
          </li>
          <li>
            <Link to="review">Add a Review</Link>
          </li>
          {admin && (
            <>
              <li>
                <Link to="manageOrders">Manage Orders</Link>
              </li>
              <li>
                <Link to="addProducts">Add Products</Link>
              </li>
              <li>
                <Link to="makeAdmin">Make Admin</Link>
              </li>
              <li>
                <Link to="manageProducts">Manage Products</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default DashBoard;

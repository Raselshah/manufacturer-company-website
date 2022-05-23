import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const NavMenu = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    navigate("/login");
  };
  if (loading) {
    return <p>loading...</p>;
  }
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blog">Blogs</Link>
      </li>
      <li>
        <Link to="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link to="/about">About Me</Link>
      </li>
      {user ? (
        <div className="dropdown dropdown-end">
          <label tabindex="0" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <h3 className="text-center text-lg text-secondary flex justify-center items-center h-full">
                  {user?.email?.slice(0, 2)}
                </h3>
              )}
            </div>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/userProfile" className="justify-between">
                Profile
                <span className="badge">New</span>
              </Link>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <button className="hover:underline" onClick={logout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      ) : (
        <li>
          <Link to="/login">Login</Link>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl text-accent">
          orbitX
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
      <div className="navbar-end flex lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    </div>
  );
};

export default NavMenu;

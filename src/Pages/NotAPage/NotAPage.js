import React from "react";
import { useNavigate } from "react-router-dom";

const NotAPage = () => {
  const navigate = useNavigate();
  const backToHomeButton = () => {
    navigate("/");
  };
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="flex">
          <h2 className="text-4xl px-2">404</h2>
          <div className="bg-accent w-1 h-10"></div>
          <h2 className="text-4xl px-2">Page not found</h2>
        </div>
        <button
          onClick={backToHomeButton}
          className="hover:bg-accent hover:text-white bg-orange-700 py-1 text-lg font-bold text-white mt-10 w-1/6"
        >
          Back to Home
        </button>
      </div>
    </>
  );
};

export default NotAPage;

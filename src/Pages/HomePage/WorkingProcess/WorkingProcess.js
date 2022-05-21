import React from "react";

const WorkingProcess = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-16 gap-12">
      <div className=" flex flex-col justify-center items-center">
        <div className="avatar indicator">
          <span className="indicator-item badge rounded-full badge-secondary">
            01
          </span>
          <div className="w-48 h-48 rounded-full hover:bg-red-200">
            <img
              className="hover:scale-125 duration-500"
              src="https://images.pexels.com/photos/884979/pexels-photo-884979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold">Production Of Fabric</h2>
          <p className="text-secondary mt-6">
            We Produce the best quality of fabric covered all aspects
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="avatar indicator">
          <span className="indicator-item badge rounded-full badge-secondary">
            02
          </span>
          <div className="w-48 h-48 rounded-full hover:bg-red-200">
            <img
              className="hover:scale-125 duration-500"
              src="https://images.pexels.com/photos/4492273/pexels-photo-4492273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold">Exportation Globally</h2>
          <p className="text-secondary mt-6">
            We not only export locally but all over the world
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="avatar indicator">
          <span className="indicator-item badge rounded-full badge-secondary">
            03
          </span>
          <div className="w-48 h-48 rounded-full hover:bg-red-200">
            <img
              className="hover:scale-125 duration-500"
              src="https://images.pexels.com/photos/4705623/pexels-photo-4705623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold">Digital Shop Available</h2>
          <p className="text-secondary mt-6">
            Showcased digitally our all the products for best reach
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center">
        <div className="avatar indicator">
          <span className="indicator-item badge rounded-full badge-secondary">
            04
          </span>
          <div className="w-48 h-48 rounded-full hover:bg-red-200">
            <img
              className="hover:scale-125 duration-500"
              src="https://images.pexels.com/photos/442152/pexels-photo-442152.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
        </div>
        <div className="text-center mt-4">
          <h2 className="text-lg font-bold">Great Client Support</h2>
          <p className="text-secondary mt-3">
            our front desk is available for clients for 24*7!
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;

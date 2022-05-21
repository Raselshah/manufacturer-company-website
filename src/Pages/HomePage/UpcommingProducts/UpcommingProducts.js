import React from "react";

const UpcommingProducts = () => {
  return (
    <div className="mt-16 pt-16">
      <h3 className="font-bold text-accent text-lg text-center uppercase">
        Upcoming Products
      </h3>
      <h2 className="font-bold text-secondary text-4xl text-center">
        Working Together For Your Better Life
      </h2>

      <div class="hero min-h-screen">
        <div class="hero-content grid grid-cols-1 lg:grid-cols-2">
          <img
            src="https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            class="w-full shadow-2xl mx-auto"
          />
          <div className="bg-slate-100 p-6 lg:p-12">
            <div className="bg-red-400 py-2">
              <h1 class="text-4xl font-bold text-center">
                Project Information
              </h1>
            </div>
            <p class="py-6">
              A diode vacuum tube or thermionic diode is a vacuum tube with two
              electrodes, a heated cathode and a plate, in which electrons can
              flow in only one direction, from cathode to plate.
            </p>
            <div className="bg-white px-6">
              <p className="font-bold py-3">
                Project : <span className="font-normal">Thermionic diodes</span>
              </p>
              <p className="font-bold py-3">
                Category : <span className="font-normal">diodes</span>
              </p>
              <p className="font-bold py-3">
                Clients : <span className="font-normal">Mark well</span>
              </p>
              <p className="font-bold py-3">
                Date : <span className="font-normal">24 May, 2022</span>
              </p>
              <p className="font-bold py-3">
                Status : <span className="font-normal">Completed</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcommingProducts;

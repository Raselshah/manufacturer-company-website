import React from "react";

const AboutMe = () => {
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="lg:max-w-lg max-w-md">
            <h1 class="text-lg md:text-2xl lg:text-4xl font-bold">
              Hello,i am <span className="text-sky-600">Md.Rasel Shah</span>
            </h1>
            <h1 class="text-lg md:text-2xl lg:text-3xl font-bold mt-2">
              contact for me:{" "}
              <span className="text-slate-500">mdraselshah56@gmail.com</span>
            </h1>
            <p class="py-6">
              Educational background : <span>CSE</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

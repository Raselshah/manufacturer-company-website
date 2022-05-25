import React from "react";

const HomePageBanner = () => {
  return (
    <div className="carousel w-full h-full mt-9">
      <div id="slide1" className="carousel-item relative h-96 w-full">
        <img
          src="https://images.pexels.com/photos/6754843/pexels-photo-6754843.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          className="w-full brightness-50 bg-no-repeat bg-cover"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-white font-bold text-2xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            </p>
            <button className="btn btn-outline btn-accent uppercase hover:text-white">
              See More
            </button>
          </div>

          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative h-96 w-full">
        <img
          src="https://images.pexels.com/photos/716276/pexels-photo-716276.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full brightness-50 bg-no-repeat bg-cover"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-orange-600 font-bold text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            </p>
            <button className="btn btn-outline btn-accent uppercase hover:text-white">
              See More
            </button>
          </div>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative h-96 w-full">
        <img
          src="https://images.pexels.com/photos/400678/pexels-photo-400678.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full brightness-50 bg-no-repeat bg-cover"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-orange-600 font-bold text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            </p>
            <button className="btn btn-outline btn-accent uppercase hover:text-white">
              See More
            </button>
          </div>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative h-96 w-full">
        <img
          src="https://images.pexels.com/photos/2582936/pexels-photo-2582936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="w-full brightness-50 bg-no-repeat bg-cover"
          alt=""
        />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <p className="text-orange-600 font-bold text-lg">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit,
            </p>
            <button className="btn btn-outline btn-accent uppercase hover:text-white">
              See More
            </button>
          </div>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;

import React from "react";
import banner from "../../../images/banner.gif";
const Banner = () => {
  // https://i.pinimg.com/originals/8e/06/d7/8e06d735c60e9ffc70cdd16d29587159.gif
  return (
    <>
      <div
        className="left-side blur-sm  brightness-75 md:flex md:p-10 md:items-center md:justify-center z-0 relative  h-96 bg-no-repeat bg-cover "
        style={{
          backgroundImage: `url(${banner})`,
        }}
      >
        {" "}
      </div>
      <div className="p-3 top-20 left-3  absolute md:top-36 md:left-52 md:w-2/3 space-y-3 z-10 drop-shadow-2xl ">
        <h1 id="banner-title" className=" text-4xl  font-bold  ">
          A Quick Start for your Life
        </h1>
        <h2
          id="shadow"
          className="text-2xl md:text-3xl text-red-500 font-semibold"
        >
          Let's Keep The Car Moving
        </h2>
        <p id="shadow" className=" text-base  md:w-4/5 ">
          We don’t know who needs to hear this but long drives can take you to a
          different world altogether. You can feel peaceful, relaxed, and get
          rid of all your stress.
        </p>
        <button
          type="button"
          className="text-white  bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg md:text-sm px-5 py-2.5 text-center mr-2 w-full md:w-auto text-base  mb-5"
        >
          Book a Car
        </button>
      </div>
      {/*
      <div className="right-side"></div> */}
    </>
  );
};

export default Banner;

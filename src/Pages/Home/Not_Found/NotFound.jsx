import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div data-aos="flip-up" className="flex flex-col bg-red-100 md:flex-row md:w-4/5 my-10 md:mx-auto border-2 border-red-500 rounded-lg items-center justify-center p-5">
      <div className="left-side">
        <img
          className="rounded-lg w-96 h-60  "
          src="https://inktank.fi/wp-content/uploads/2016/11/vintage-car-crash.gif"
          alt=""
        />
      </div>

      <div className="right-side">
        <p className="text-2xl ml-3 text-red-600">
          {" "}
          <span className="text-6xl text-black italic"> 404 ! </span> Sorry This
          Page Is Not Available{" "}
        </p>

        <Link
          to="/home"
          className="flex justify-center items-center   text-center  py-2 px-3  text-xl md:text-sm font-medium mt-5 mx-5 text-white transition-all duration-200 bg-red-700 hover:rounded-none rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Back To Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

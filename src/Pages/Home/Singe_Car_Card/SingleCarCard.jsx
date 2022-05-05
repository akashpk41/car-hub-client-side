import React from "react";
import { Link } from "react-router-dom";

const SingleCarCard = ({ car }) => {
  const { name, price, img, description, supplierName, quantity, _id } = car;
  // console.log(car);

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1000"
      className="max-w-sm hover:scale-105 transition-all duration-200 relative m-2 md:cursor-pointer bg-white rounded-lg border  shadow-xl hover:shadow-2xl text-center md:text-left "
    >
      <img
        data-aos="zoom-in"
        className="rounded-t-lg hover:-translate-y-1 md:hover:scale-110  md:hover:bg-indigo-500 md:hover:mt-5 duration-300 border-b-2 border-gray-500 "
        src={img}
        alt=""
      />
      <div className="p-7  ">
        <h5 className="mb-2 text-center border-b-2 border-red-500 text-xl font-bold tracking-tight text-gray-900 ">
          {name}
        </h5>
        <h5 className="mb-2  text-base font-bold tracking-tight text-gray-800 ">
          Price : <span className="text-green-700"> {price}</span>
        </h5>
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-800 ">
          Supplier : <span className="text-blue-700">{supplierName}</span>
        </h5>
        <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-800 ">
          {/* Quantity : <span className="text-red-700"> {quantity} </span> */}
        </h5>

        <p className="mb-7 font-normal text-gray-700 ">
          {description.slice(0, 100) + "..."}
        </p>
        <Link
          to={`/inventory/${_id}`}
          className="flex mt-10 justify-center items-center absolute left-0  bottom-0 text-center  py-2 px-3  text-xl md:text-sm font-medium  w-full text-white transition-all duration-200 bg-red-700 hover:rounded-none rounded-lg hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Update
          <svg
            className="ml-2 -mr-1 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default SingleCarCard;

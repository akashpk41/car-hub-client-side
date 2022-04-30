import React from "react";
import { Link } from "react-router-dom";
import useCars from "../../../hooks/useCars";
import SingleCarCard from "../Singe_Car_Card/SingleCarCard";

const Inventory = () => {
  const [cars, setCars] = useCars();
  // console.log(cars);

  return (
    <div className=" md:w-4/5 md:mx-auto   my-5 ">
      <h1
        id="shadow"
        className="text-center text-gray-50 my-3 text-3xl font-medium "
      >
        {" "}
        Inventory Items{" "}
      </h1>

      <div className="grid md:grid-cols-3  ">
        {cars.slice(0, 6).map((car) => (
          <SingleCarCard key={car.id} car={car} />
        ))}
      </div>
      <Link
        to="/manage-inventory"
        className="text-white flex bg-white text-black hover:bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300   rounded-lg  px-2 items-center justify-center py-2.5 text-center hover:text-white border-2 border-red-500 font-bold ml-3 text-base hover:border-white mr-1 "
      >
        Manage Inventory
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
  );
};

export default Inventory;

import React from "react";
import useCars from "../../../hooks/useCars";
import SingleCarCard from "../Singe_Car_Card/SingleCarCard";

const Inventory = () => {
  const [cars, setCars] = useCars();
  // console.log(cars);

  return (
    <div className=" md:w-4/5 md:mx-auto   my-5 ">
      <h1 id='shadow' className="text-center text-gray-50 my-3 text-3xl font-medium ">
        {" "}
        Inventory Items{" "}
      </h1>

      <div className="grid md:grid-cols-3  ">
        {cars.slice(0, 6).map((car) => (
          <SingleCarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Inventory;

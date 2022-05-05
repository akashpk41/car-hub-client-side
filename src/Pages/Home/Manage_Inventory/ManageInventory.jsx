import React from "react";
import { BeakerIcon, PlusIcon, TrashIcon } from "@heroicons/react/solid";
import { Link } from "react-router-dom";
import useCars from "../../../hooks/useCars";
import axios from "axios";

const ManageInventory = () => {
  const [cars, setCars] = useCars();
  // console.log(cars);

  const handleDeleteItem = async (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      console.log("deleted", id);

      const { data } = await axios.delete(
        `https://stormy-forest-45814.herokuapp.com/manage-inventory/${id}`
      );
      console.log(data);
      if (data.acknowledged > 0) {
        const remaining = cars.filter((car) => car._id !== id);
        setCars(remaining);
      }
    }
  };

  return (
    <div data-aos="zoom-in" className=" md:w-4/5 md:mx-auto   my-5 ">
      <div className="flex flex-col md:flex-row items-center mb-3 justify-center ">
        <h1
          id="shadow"
          className="text-center text-gray-50 my-3 text-3xl font-medium mr-5 "
        >
          {" "}
          Manage Inventory Items{" "}
        </h1>

        <Link
          to="/add-items"
          className="text-white my-2 bg-red-700 hover:bg-red-800  focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium flex items-center justify-between  rounded-lg text-sm px-3 py-2.5 text-center mr-3 md:mr-0 "
        >
          <PlusIcon className="h-5 w-5  text-white " />
          <span>Add New Items</span>
        </Link>
      </div>

      {/* all inventory items data */}

      <div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs font-semibold text-gray-700 uppercase bg-gray-50 ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Item Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Item Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Item Price
                </th>
                <th scope="col" className="px-6 py-3">
                  Available
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr className="bg-white text-gray-700 font-medium text-center border-b ">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900  whitespace-nowrap"
                  >
                    <img
                      className="w-14 h-14 rounded-full"
                      src={car.img}
                      alt=""
                    />
                  </th>
                  <td className="px-6 py-4">{car.name}</td>
                  <td className="px-6 py-4">{car.price}</td>
                  {/* <td className="px-6 py-4">{car.quantity}</td> */}
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDeleteItem(car._id)}
                      className="font-medium  px-2 py-1 border-2 border-red-500 hover:bg-red-600 hover:text-white flex items-center justify-between  rounded-full "
                    >
                      <TrashIcon className="h-5 w-5 hover:text-white text-red-500" />{" "}
                      <span>Delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageInventory;

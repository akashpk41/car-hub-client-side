import axios from "axios";
import React, { useEffect, useState } from "react";

import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import useCar from "../../../hooks/useCar";

const UpdateItemDetails = () => {
  const { itemId } = useParams();
  const [car, setCar] = useCar(itemId);
  const [itemQuantity, setItemQuantity] = useState("");
  //

  // console.log(car);
  const { name, price, img, description, quantity, _id, supplierName, sold } =
    car;
  // data-aos="zoom-in"

  const handleDecreaseItemQuantity = () => {
    // ! decrease quantity by one .
    (async () => {
      const { data } = await axios.put(
        `https://stormy-forest-45814.herokuapp.com/inventory/${_id}?oldQuantity=${quantity}`
      );
      toast(" Delivered Successfully .");
    })();
  };

  const handleRestockItem = (event) => {
    event.preventDefault();
    // ! update item quantity
    // const prevQuantity = parseInt(quantity);
    // const newQuantity = parseInt(itemQuantity)
    (async () => {
      const { data } = await axios.put(
        `https://stormy-forest-45814.herokuapp.com/inventory/${_id}?prevQuantity=${quantity}&newQuantity=${itemQuantity}`
      );
      toast(" Item Added Successfully .");
      console.log(data);
    })();

    // console.log( newQuantity);
  };

  return (
    <div className=" p-2 md:p-10 my-5 text-center  ">
      <div className="flex md:w-4/5 md:mx-auto flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl   ">
        <img
          className=" w-full h-96 rounded-t-lg md:h-auto md:w-60  shadow-lg rounded-lg"
          src={img}
          alt=""
        />
        <div className="flex space-y-3 flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-center border-b-2 border-red-500 text-xl font-bold tracking-tight text-gray-900 ">
            {name}
          </h5>
          <h5 className="mb-2  text-base font-bold tracking-tight text-gray-800 ">
            Price : <span className="text-green-700"> {price}</span>
          </h5>
          <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-800 ">
            Quantity : <span className="text-red-700">{quantity}</span>
          </h5>
          <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-800 ">
            Supplier : <span className="text-blue-700">{supplierName}</span>
          </h5>
          <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-800 ">
            Sold : <span className="text-green-700">{sold}</span>
          </h5>
          <h5 className="mb-2 text-sm font-bold tracking-tight text-gray-800 ">
            Item ID : <span className="text-gray-600">{_id}</span>
          </h5>

          <p className="mb-7 font-normal text-gray-700 ">{description}</p>

          <button
            onClick={handleDecreaseItemQuantity}
            type="button"
            className="focus:outline-none text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base  md:text-sm  px-5 py-2.5 mr-2 mb-2 "
          >
            Delivered
          </button>

          <form>
            <div className="relative mb-10">
              <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img
                  className="w-10  "
                  src="https://www.seekpng.com/png/detail/381-3819547_car-icon-new-car-icon-png.png"
                  alt=""
                />
              </div>
              <input
                type="number"
                id="itemQuantity"
                name="itemQuantity"
                className="block w-full p-4 pl-16 md:pl-20 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 "
                onBlur={(e) => setItemQuantity(e.target.value)}
                placeholder="Item Quantity"
                required
              />
              <button
                onClick={handleRestockItem}
                type="submit"
                className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none  focus:ring-blue-300 font-medium rounded-lg text-base  md:text-sm px-4 py-2 "
              >
                Restock
              </button>
            </div>
            <Link
              to="/manage-inventory"
              className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base  md:text-sm  px-5 py-2.5 mt-15 w-full "
            >
              Manage Inventory
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

// https://stormy-forest-45814.herokuapp.com/
export default UpdateItemDetails;

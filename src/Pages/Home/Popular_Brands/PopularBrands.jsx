import React from "react";
import brand1 from "../../../images/brands/porche.png";
import brand2 from "../../../images/brands/nissan.jpg";
import brand3 from "../../../images/brands/ferrari.png";
import brand4 from "../../../images/brands/lamborghini.png";
import brand5 from "../../../images/brands/mercedes.jpg";
import brand6 from "../../../images/brands/toyota.png";
// get all brand logo
const brands = [brand1, brand2, brand3, brand4, brand5, brand6];

const PopularBrands = () => {
  return (
    <div className="my-10 p-5 md:w-4/5 md:mx-auto shadow-2xl rounded-lg  ">
      <h1 className="text-center my-3 text-3xl font-medium ">
        {" "}
        Popular Brands Available{" "}
        <div className="flex mt-5 flex-col md:flex-row  items-center justify-center">
          {brands.map((img, index) => (
            <img
              data-aos="zoom-in"
              key={index}
              className=" w-32 md:w-20  mt-5 md:mt-0 md:cursor-pointer hover:scale-125 duration-200 mx-2 "
              src={img}
              alt=""
            />
          ))}
        </div>
      </h1>
    </div>
  );
};

export default PopularBrands;

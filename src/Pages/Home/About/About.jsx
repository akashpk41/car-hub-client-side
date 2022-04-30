import React from "react";
import img from "../../../images/warehouse.jpg";
const About = () => {
  return (
    <div
      data-aos="zoom-in"
      className=" bg-white md:w-4/5 md:mx-auto border-orange-500 border-2 rounded-lg shadow-2xl   my-5 "
    >
      <h1 className="text-center  my-3 text-3xl font-medium ">
        {" "}
        Why Choose Us{" "}
      </h1>

      <div className="flex flex-col md:flex-row items-center p-2  justify-center">
        <div className="left-side mr-3 md:w-2/4">
          <img
            className="text-center rounded-lg cursor-pointer w-full"
            src={img}
            alt=""
          />
        </div>

        <div className="right-side mt-3 md:mt-0 text-center md:text-left space-y-3 md:w-2/4  ">
          <h1 className="text-3xl text-blue-600 font-bold">
            All Premium Car's Collection
          </h1>
          <p className="text-base text-gray-600 ">
            We have all of luxuary cars. Our Many branch in the world wide. And
            we have more than 5000+ happy clients
          </p>

          {/* special */}
          <div data-aos="flip-left" className="flex space-x-3 ">
            <div className=" w-1 h-15  mr-2 bg-red-500 "></div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600 ">5000+</h4>
              <h5 className="text-base items-center justify-center flex font-mono font-semibold text-blue-500 ">
                Clients
                <img
                  className="w-8 ml-2"
                  src="https://thumbs.dreamstime.com/b/basic-rgb-165089193.jpg"
                  alt=""
                />
              </h5>
            </div>
            <div className=" w-1 h-15  mr-2 bg-red-500 "></div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600 ">35+</h4>
              <h5 className="text-base items-center justify-center flex font-mono font-semibold text-blue-500 ">
                Branch
                <img
                  className="w-5 ml-2 "
                  src="https://cdn2.vectorstock.com/i/1000x1000/35/51/global-company-branches-flat-icon-vector-14013551.jpg"
                  alt=""
                />
              </h5>
            </div>
            <div className=" w-1 h-15  mr-2 bg-red-500 "></div>
            <div>
              <h4 className="text-3xl font-bold text-blue-600 ">110+</h4>
              <h5 className="text-base items-center justify-center flex font-mono font-semibold text-blue-500 ">
                Awards{" "}
                <img
                  className="w-8"
                  src="https://media.istockphoto.com/vectors/trophy-flat-icon-pixel-perfect-for-mobile-and-web-vector-id1152889195?k=20&m=1152889195&s=612x612&w=0&h=M3T0JbkRZUAnFqbmqxVVMmrtc506_p5RTzoAr2m61KU="
                  alt=""
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

import React from "react";

const Contact = () => {
  return (
    <div
      data-aos="zoom-in"
      className=" bg-white md:w-4/5 md:mx-auto border-orange-500 border-2 rounded-lg shadow-2xl   my-5 "
    >
      <h1 className="text-3xl  font-bold  mb-3 text-center">
          {" "}
          Contact With Us
          <span className="border-red-500 border-b-2 w-2/4 mx-auto block mt-3"></span>
        </h1>

      <div className="flex flex-col md:flex-row items-center p-2  justify-center">
        <div className="left-side mr-3 md:w-2/4">
          <img
            className="text-center rounded-lg cursor-pointer w-full"
            src="https://i0.wp.com/www.opindia.com/wp-content/uploads/2022/03/Google-Maps-vs-Google-Earth-featured.jpeg?fit=2133%2C1200&ssl=1"
            alt=""
          />
        </div>

        <div className="right-side mt-3 md:mt-0 text-center md:text-left space-y-3 md:w-2/4  ">

          <form>
            <div className="mb-6">
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-gray-900  "
              ></label>
              <input
                type="text"
                id="name"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label
                for="password"
                className="block mb-2 text-sm font-medium text-gray-900  "
              ></label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder="Enter Email Address"
                required
              />
            </div>
            <div className="mb-6">
              <textarea
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
                placeholder="Drop a Line..."
                required
              />
            </div>

            <button
          type="submit"
          className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl hover:rounded-sm transition-all duration-200 text-sm   px-5 py-2.5 text-center  "
        >
          Send
        </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

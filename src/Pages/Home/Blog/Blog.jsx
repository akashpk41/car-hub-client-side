import React from "react";

const Blog = () => {
  return (
    <div className="p-5 text-center ">
      <div className="md:w-4/5 mt-5 md:mx-auto border-2 p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-mono font-bold mb-3">
          {" "}
          Difference between javascript and nodejs.{" "}
        </h1>
        <p className="text-base  text-gray-800  mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          consequuntur quos necessitatibus, totam esse ab ullam eligendi sint
          dolores dignissimos?
        </p>
      </div>

      <div className="md:w-4/5 mt-5 md:mx-auto border-2 p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-mono font-bold mb-3">
          {" "}
          When should you use nodejs and when should you use mongodb{" "}
        </h1>
        <p className="text-base text-gray-800  mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          consequuntur quos necessitatibus, totam esse ab ullam eligendi sint
          dolores dignissimos?
        </p>
      </div>

      <div className="md:w-4/5 mt-5 md:mx-auto border-2 p-5 rounded-lg shadow-2xl bg-white">
        <h1 className="text-2xl font-bold font-mono mb-3">
          {" "}
          What is the purpose of jwt and how does it work{" "}
        </h1>
        <p className="text-base text-gray-800  mb-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          consequuntur quos necessitatibus, totam esse ab ullam eligendi sint
          dolores dignissimos?
        </p>
      </div>
    </div>
  );
};

export default Blog;

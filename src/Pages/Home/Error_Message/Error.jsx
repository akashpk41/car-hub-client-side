import React from "react";

const Error = ({ children }) => {
  return (
    <div className="p-1 bg-red-100 rounded-lg shadow-sm my-1 text-center">
      <p className="text-red-500 text-base font-semibold"> {children} </p>
    </div>
  );
};

export default Error;

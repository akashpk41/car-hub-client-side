import React from "react";

const SingleCarCard = ({ car }) => {
  const { name, price, img, description, quantity } = car;
  return (
    <div class="max-w-sm m-2 bg-white rounded-lg border border-gray-200 shadow-md ">
      <img class="rounded-t-lg" src={img} alt="" />

      <div class="p-5">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
          {name}
        </h5>
        <h5 class="mb-2 text-base font-bold tracking-tight text-gray-900 ">
          Price : {price}
        </h5>
        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 ">
          Quantity : {quantity}
        </h5>

        <p class="mb-3 font-normal text-gray-700 ">
          {description.slice(0, 100) + "..."}
        </p>
        <a
          href="#"
          class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
        >
          Read more
          <svg
            class="ml-2 -mr-1 w-4 h-4"
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
        </a>
      </div>
    </div>
  );
};

export default SingleCarCard;
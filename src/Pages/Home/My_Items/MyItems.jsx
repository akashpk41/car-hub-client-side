import { TrashIcon } from "@heroicons/react/solid";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import axiosPrivate from "../../../api/axiosPrivate";

const MyItems = () => {
  const [user] = useAuthState(auth);
  const [myData, setMyData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const getItemData = async () => {
      try {
        const { data } = await axiosPrivate.get(
          `https://stormy-forest-45814.herokuapp.com/my-items?email=${user.email}`
        );
        setMyData(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getItemData();
  }, []);

  const handleDeleteItem = async (id) => {
    const proceed = window.confirm("Are You Sure ?");
    if (proceed) {
      console.log("deleted", id);

      const { data } = await axios.delete(
        `https://stormy-forest-45814.herokuapp.com/my-items/${id}`
      );
      console.log(data);
      if (data.acknowledged > 0) {
        const remaining = myData.filter((data) => data._id !== id);
        setMyData(remaining);
      }
    }
  };

  return (
    <div data-aos="zoom-in" className=" p-3  md:w-4/5 md:mx-auto   my-2 ">
      <h1 className="text-center text-white  my-3 text-3xl font-medium mr-5 ">
        {" "}
        All My Items{" "}
      </h1>

      <div>
        <div className="relative mb-32 overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
              <tr>
                <th scope="col" className="p-4"></th>
                <th scope="col" className="px-6 py-3">
                  Image
                </th>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>

                <th scope="col" className="px-6 py-3">
                  Price
                </th>
                <th scope="col" className="px-6 py-3">
                  <span className="sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {myData.map((data) => (
                <tr className="bg-white border-b  hover:bg-gray-100  ">
                  <td className="w-4 p-4">
                    <div className="flex items-center">
                      <input
                        id="checkbox-table-1"
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500   "
                      />
                      <label for="checkbox-table-1" className="sr-only">
                        checkbox
                      </label>
                    </div>
                  </td>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900   whitespace-nowrap"
                  >
                    <img
                      className="w-14 h-14 rounded-full"
                      src={data.img}
                      alt=""
                    />
                  </th>
                  <td className="px-6 text-gray-700 py-4">{data.name} </td>
                  <td className="px-6 text-gray-700 py-4">{data.price}</td>

                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDeleteItem(data._id)}
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

export default MyItems;

import { LoginIcon, LogoutIcon, PlusIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import CustomLink from "../../Home/Custom_link/CustomLink";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const Navbar = () => {
  const [user] = useAuthState(auth);
  return (
    <nav className="bg-white border-b-2  border-red-200 px-2 sm:px-4 py-2.5  ">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/" className="flex items-center">
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            CAR-HUB
          </span>
        </Link>
        <div className="flex md:order-2">
          {user ? (
            <button
              onClick={() => signOut(auth)}
              className="text-white flex   bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg px-2 items-center justify-center py-2.5 text-base  md:text-sm  text-center md:mr-0 "
            >
              <LogoutIcon className="h-5 w-5 mr-2 text-white " />
              <span>Log Out</span>
            </button>
          ) : (
            <>
              <Link
                to="/login"
                className="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium flex rounded-lg text-base  md:text-sm  px-2 items-center justify-center py-2.5 text-center mr-3 md:mr-0 "
              >
                <LoginIcon className="h-5 w-5 mr-2 text-white " />
                <span>Login</span>
              </Link>
              <Link
                to="/register"
                className="text-white md:block hidden  md:flex bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg text-sm px-2 items-center justify-center py-2.5 text-center ml-3 md:mr-0 "
              >
                <LogoutIcon className="h-5 w-5 mr-2 text-white " />
                <span>Register</span>
              </Link>
            </>
          )}
          <button
            data-collapse-toggle="mobile-menu-4"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
            aria-controls="mobile-menu-4"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <li>
              <CustomLink
                to="/home"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Home
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/blogs"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Blogs
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/about"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                About
              </CustomLink>
            </li>
            <li>
              <CustomLink
                to="/contact"
                className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
              >
                Contact
              </CustomLink>
            </li>
            {user && (
              <>
                <li>
                  <CustomLink
                    to="/add-items"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Add New Items
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    to="/my-items"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    My Items
                  </CustomLink>
                </li>
                <li>
                  <CustomLink
                    to="/manage-inventory"
                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 "
                  >
                    Manage
                  </CustomLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

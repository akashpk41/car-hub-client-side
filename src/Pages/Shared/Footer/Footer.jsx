import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 bg-gray-200 text-black  shadow md:flex md:items-center md:justify-between md:p-6 ">
      <span className="text-sm text-black sm:text-center ">
        © 2022{" "}
        <Link to="/" className="hover:underline">
          Car Hub
        </Link>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-black ">
        <li>
          <Link to="/about" className="mr-4 hover:underline md:mr-6 ">
            About
          </Link>
        </li>
        <li>
          <Link to="/privacy-policy" className="mr-4 hover:underline md:mr-6">
            Privacy Policy
          </Link>
        </li>
        <li>
          <Link to="/blogs" className="mr-4 hover:underline md:mr-6">
            Blogs
          </Link>
        </li>
        <li>
          <Link to="/contact" className="hover:underline">
            Contact
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;

import { EyeIcon, EyeOffIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import img from "../../../../images/login/img-2.jpg";
import Error from "../../Error_Message/Error";
import SocialLogin from "../SocialLogin";
import auth from "../../../../firebase.init.js";

const Register = () => {
  const [password, setPassword] = useState(false); // hide and show password
  const [passwordError, setPasswordError] = useState("");
  const { register, handleSubmit } = useForm();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }

  const onSubmit = async (data) => {
    console.log(data);


    // validation form .
    if (data.password !== data.confirmPassword) {
      return setPasswordError("Your Two Password Not Match.");
    }

    if (data.password.length < 6) {
      return setPasswordError("Password length should be 6 or longer  ");
    }
    await createUserWithEmailAndPassword(data.email, data.password);

  };

  return (
    <div data-aos="zoom-in" className="">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white w-full rounded-lg  my-10  p-5 md:w-2/4  md:mx-auto  "
      >
        {" "}
        <h1 className="text-2xl  font-bold  mb-3 text-center">
          {" "}
          Register Now{" "}
          <span className="border-red-500 border-b-2 w-2/4 mx-auto block mt-3"></span>
        </h1>
        <div className="grid xl:grid-cols-2 xl:gap-6">
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_full_name"
              id="floating_full_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
              autoComplete="off"
              {...register("fullName", { required: true })}
            />
            <label
              for="floating_full_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500   duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600   peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Full Name
            </label>
          </div>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="email"
            name="floating_email"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            // autoComplete="off"
            {...register("email", { required: true })}
          />
          <label
            for="floating_email"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Email Address
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type={password ? "text" : "password"}
            name="floating_password"
            id="floating_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("password", { required: true })}
          />
          <span
            onClick={() => setPassword(!password)}
            className="absolute top-1 right-1"
          >
            {password ? (
              <EyeOffIcon className="h-5 w-5 cursor-pointer  text-red-600 hover:text-red-800 " />
            ) : (
              <EyeIcon className="h-5 w-5 cursor-pointer  text-red-600 hover:text-red-800 " />
            )}
          </span>
          <label
            for="floating_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Password
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type={password ? "text" : "password"}
            name="repeat_password"
            id="floating_repeat_password"
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
            required
            {...register("confirmPassword", { required: true })}
          />
          <span
            onClick={() => setPassword(!password)}
            className="absolute top-1 right-1"
          >
            {password ? (
              <EyeOffIcon className="h-5 w-5 cursor-pointer  text-red-600 hover:text-red-800 " />
            ) : (
              <EyeIcon className="h-5 w-5 cursor-pointer  text-red-600 hover:text-red-800 " />
            )}
          </span>
          <label
            for="floating_repeat_password"
            className="peer-focus:font-medium absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Confirm password
          </label>
        </div>
        {passwordError && <Error>{passwordError}</Error>}
        <p className="text-sm my-3 text-gray-900">
          {" "}
          Already Have an Account ?{" "}
          <Link
            className="text-blue-800 cursor-pointer hover:underline font-semibold text-base "
            to="/login"
          >
            {" "}
            Please Login{" "}
          </Link>{" "}
        </p>
        <button
          type="submit"
          className="text-white w-full bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-3xl hover:rounded-sm transition-all duration-200 text-sm   px-5 py-2.5 text-center  "
        >
          Register
        </button>
        <SocialLogin />
      </form>
    </div>
  );
};

export default Register;

import React from "react";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../../firebase.init";

const PrivateRoute = ({ children }) => {
  const [sendEmailVerification] = useSendEmailVerification(auth);

  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  if (loading) {
    return (
      <img
        className="w-64 mx-auto my-10 rounded-lg "
        src="https://cdn.dribbble.com/users/1523313/screenshots/6007517/loading-car-animation-of-fast-line.gif"
        alt=""
      />
    );
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="md:w-4/5 md:mx-auto text-center p-5 rounded-xl bg-white my-10 text-center ">
        <h1 className="text-red-500 font-semibold text-2xl">
          Your Email Is not Verified
        </h1>
        <button
          onClick={async () => {
            await sendEmailVerification();
            alert("Sent email");
          }}
          className="text-white   flex bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium  rounded-lg text-sm px-2 items-center justify-center py-2.5 text-center mx-auto mt-7 "
        >
          Send Verification Email
        </button>
      </div>
    );
  }

  return children;
};

export default PrivateRoute;

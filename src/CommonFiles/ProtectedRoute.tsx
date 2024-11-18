import React, { ComponentType, ReactElement, useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../App";
import SessionActive from "../CommonAPIs/SessionApi";

const ProtectedRoute = ({ children }: any) => {
  const [userDetails, updateUserDetails] = useContext<any>(UserContext);

  if (userDetails.guest) {
    return children;
  }

  // const location = useLocation();
  // console.log("location", location);
  const isActive = SessionActive();

  if (isActive === null) {
    return <>Loading...</>;
  }
  if (!isActive) {
    // if (location?.pathname && location?.pathname.length > 1) {
    //   updateUserDetails((prev: any) => ({
    //     ...prev,
    //     prevPath: location?.pathname,
    //   }));
    // }
    console.log("signin");
    return <Navigate to="/signin" />;
  }
  console.log("children");
  return children;
};

export default ProtectedRoute;

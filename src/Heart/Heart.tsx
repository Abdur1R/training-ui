import React, { useContext } from "react";
import "./Heart.scss";
import ProtectedRoute from "../CommonFiles/ProtectedRoute";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";

const Heart = () => (
  <ProtectedRoute>
    <div className="heart"></div>
  </ProtectedRoute>
);

export default Heart;

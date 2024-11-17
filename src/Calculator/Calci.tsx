import React, { useContext } from "react";
import { Input } from "antd";
import "./Calci.scss";
import ProtectedRoute from "../CommonFiles/ProtectedRoute";
import { UserContext } from "../App";
import { Navigate } from "react-router-dom";

const keyList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "AC", "+", "*", "-", "/", "="];

const Calci = () => (
  <ProtectedRoute>
    <div className="calci">
      <div className="display">
        <Input />
      </div>
      <div className="bodyKeys">
        {keyList.map((item) => (
          <div className="buttonKey">{item}</div>
        ))}
      </div>
    </div>
  </ProtectedRoute>
);

export default Calci;

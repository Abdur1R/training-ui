import React, { useContext } from "react";
import ToDoListPic from "../Pictures/ToDoListImg3.jpg";
import JobPortalImg from "../Pictures/JobsPortalImg.svg";
import ProfilePic from "../Pictures/ProfilrPic.png";
import { Navigate, useNavigate } from "react-router-dom";
import TodoList from "../ToDoList/ToDoList";
import Card from "../Card/Card";
import { UserContext } from "../App";
import ProtectedRoute from "../CommonFiles/ProtectedRoute";
import JobPortal from "../JobPortal/JobPortal";
import "./LandingPage.scss";
import PortFolio from "../Portfolio/Portfolio";
import Projects from "../Projects/Projects";

const LandingPage = () => (
  <ProtectedRoute>
    Projects
    <div style={{ margin: "100px" }}>
      <Projects />
    </div>
  </ProtectedRoute>
);

export default LandingPage;

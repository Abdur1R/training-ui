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

const ProjectsList = [
  {
    name: "To Do List",
    path: "/todolist",
    component: <TodoList />,
    image: ToDoListPic,
  },
  {
    name: "Portfolio",
    path: "/portfolio/about",
    component: <PortFolio />,
    image: ProfilePic,
  },
  {
    name: "Job Portal",
    path: "/jobPortal",
    component: <JobPortal />,
    image: JobPortalImg,
  },
];

const LandingPage = () => {
  console.log("In Landing Page");
  const navigate = useNavigate();
  const onCardClick = (url: string) => {
    navigate(url);
  };

  return (
    <ProtectedRoute>
      Projects
      <div className="cardsList">
        {ProjectsList.map((item: any) => (
          <div onClick={() => onCardClick(item.path)}>
            <Card image={item.image} alt={item.name} />
          </div>
        ))}
      </div>
    </ProtectedRoute>
  );
};

export default LandingPage;

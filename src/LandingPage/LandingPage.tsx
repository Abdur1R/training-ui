import React, { useContext } from "react";
import ToDoListPic from "../Pictures/to-do-list.svg";
import { Navigate, useNavigate } from "react-router-dom";
import TodoList from "../ToDoList/ToDoList";
import Card from "../Card/Card";
import { UserContext } from "../App";
import ProtectedRoute from "../CommonFiles/ProtectedRoute";

const ProjectsList = [
  {
    name: "To Do List",
    path: "/todolist",
    component: <TodoList />,
    image: ToDoListPic,
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
      {ProjectsList.map((item: any) => (
        <div onClick={() => onCardClick(item.path)}>
          <Card image={item.image} alt={item.name} />
        </div>
      ))}
    </ProtectedRoute>
  );
};

export default LandingPage;

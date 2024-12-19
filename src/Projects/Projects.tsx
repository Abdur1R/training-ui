import React from "react";
import ToDoListPic from "../Pictures/ToDoListImg3.jpg";
import JobPortalImg from "../Pictures/JobsPortalImg.svg";
import ProfilePic from "../Pictures/ProfilrPic.png";
import { useNavigate } from "react-router-dom";
import TodoList from "../ToDoList/ToDoList";
import Card from "../Card/Card";
import JobPortal from "../JobPortal/JobPortal";
import "../LandingPage/LandingPage.scss";
import PortFolio from "../Portfolio/Portfolio";

const Projects = () => {
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
    const navigate = useNavigate();
    const onCardClick = (url: string) => {
        navigate(url);
    };

    return (
        <div className="cardsList">
            {ProjectsList.map((item: any) => (
                <div onClick={() => onCardClick(item.path)}>
                    <Card image={item.image} alt={item.name} />
                </div>
            ))}
        </div>
    )
};

export default Projects;
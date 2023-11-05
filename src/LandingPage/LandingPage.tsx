import React from "react";
import ToDoListPic from "../Pictures/to-do-list.svg";
import { useNavigate } from "react-router-dom";
import TodoList from "../ToDoList/ToDoList";
import Card from "../Card/Card";

const ProjectsList = [
    {
        name: 'To Do List',
        path: '/todolist',
        component: <TodoList />,
        image: ToDoListPic,
    },
];

const LandingPage = () => {
    const navigate = useNavigate();
    const onCardClick = (url: string) => {
        navigate(url);
    };

    return (
        <>
            {
                ProjectsList.map((item: any) => (
                    <div onClick={() => onCardClick(item.path)}>
                        <Card
                            image={item.image}
                            alt={item.name}
                        />
                    </div>
                ))
            }
        </>
    );
};

export default LandingPage;
import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import "./ToDoList.scss";

const TodoList = () => {
    console.log("In To Do LiST");
    const [state, setState] = useState({
        tasks: [
            { id: 1, task: 'Buy groceries' },
            { id: 2, task: 'Go for a walk' }
        ],
        filter: 'all',
    });

    const handleAddTask = (task: any) => {
        const tasks = [...state.tasks];
        tasks.push({ id: tasks.length + 1, task });
        setState({ ...state, tasks });
    };

    const handleDeleteTask = (id: any) => {
        const tasks = [...state.tasks];
        const index = tasks.findIndex(task => task.id === id);
        tasks.splice(index, 1);
        setState({ ...state, tasks });
    };

    const handleFilterChange = (filter: any) => {
        setState({ ...state, tasks });
    };

    const getFilteredTasks = () => {
        const { tasks, filter } = state;

        switch (filter) {
            case 'completed':
                return tasks.filter((task: any) => task.completed);
            case 'incomplete':
                return tasks.filter((task: any) => !task.completed);
            default:
                return tasks;
        }
    };

    const handleToggleCompleted = (id: any) => {
        const { tasks }: any = state;
        const index = tasks.findIndex((task: any) => task.id === id);
        const updatedTasks = [
            ...tasks.slice(0, index),
            { ...tasks[index], completed: !tasks[index].completed },
            ...tasks.slice(index + 1)
        ];

        setState({ ...state, tasks: updatedTasks });
    };

    const { tasks, filter } = state;
    const filteredTasks = getFilteredTasks();
    console.log("Tasks", tasks);

    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>
            <AddTask onAddTask={handleAddTask} />
            <div>
                <button onClick={() => handleFilterChange('all')} disabled={filter === 'all'}>
                    All
                </button>
                <button onClick={() => handleFilterChange('completed')} disabled={filter === 'completed'}>
                    Completed
                </button>
                <button onClick={() => handleFilterChange('incomplete')} disabled={filter === 'incomplete'}>
                    Incomplete
                </button>
            </div>
            {filteredTasks.map((task: any) => (
                <Task key={task.id} task={task} onToggleCompleted={handleToggleCompleted} onDeleteTask={handleDeleteTask} />
            ))}
        </div>
    );
}

export default TodoList;
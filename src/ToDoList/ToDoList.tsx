import React, { useState } from 'react';
import Task from './Task';
import AddTask from './AddTask';
import { Tabs } from "antd";
import "./ToDoList.scss";

const { TabPane } = Tabs;

const TodoList = () => {
    console.log("In To Do LiST");
    const [state, setState] = useState({
        tasks: [
            { id: 1, task: 'Buy groceries', completed: false },
            { id: 2, task: 'Go for a walk', completed: false }
        ],
        filter: 'all',
    });

    const handleAddTask = (task: any) => {
        const tasks = [...state.tasks];
        tasks.push({ id: tasks.length + 1, task, completed: false });
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

    const getFilteredTasks = (key: string) => {
        const { tasks } = state;

        switch (key) {
            case 'completed':
                return tasks.filter((task: any) => task.completed);
            case 'incomplete':
                return tasks.filter((task: any) => !task.completed);
            case 'all':
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
    // const filteredTasks = getFilteredTasks();
    console.log("Tasks", tasks);

    return (
        <div className='to-do-list'>
            <h1>To-Do List</h1>
            <AddTask onAddTask={handleAddTask} />
            <div className='card'>
                <Tabs onChange={handleFilterChange}>
                    <TabPane tab="All" key="all">
                        {getFilteredTasks('all').map((task: any, index: number) => (
                            <Task id={index + 1} task={task} onToggleCompleted={handleToggleCompleted} onDeleteTask={handleDeleteTask} />
                        )
                        )}
                    </TabPane>
                    <TabPane tab="Completed" key="completed">
                        {getFilteredTasks('completed').map((task: any, index: number) => (
                            <Task id={index + 1} task={task} onToggleCompleted={handleToggleCompleted} onDeleteTask={handleDeleteTask} />
                        )
                        )}
                    </TabPane>
                    <TabPane tab="In-Complete" key="incomplete">
                        {getFilteredTasks('incomplete').map((task: any, index: number) => (
                            <Task id={index + 1} task={task} onToggleCompleted={handleToggleCompleted} onDeleteTask={handleDeleteTask} />
                        )
                        )}
                    </TabPane>
                </Tabs>
            </div>
            {/* <div>
                <button onClick={() => handleFilterChange('all')} disabled={filter === 'all'}>
                    All
                </button>
                <button onClick={() => handleFilterChange('completed')} disabled={filter === 'completed'}>
                    Completed
                </button>
                <button onClick={() => handleFilterChange('incomplete')} disabled={filter === 'incomplete'}>
                    Incomplete
                </button>
            </div> */}
        </div>
    );
}

export default TodoList;
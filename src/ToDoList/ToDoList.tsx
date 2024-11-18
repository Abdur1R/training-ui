import React, { useContext, useEffect, useState } from "react";
import Task from "./Task";
import AddTask from "./AddTask";
import { message } from "antd";
import { Tabs } from "antd";
import "./ToDoList.scss";
import { ajaxCall } from "../axios/AjaxCall";
import ProtectedRoute from "../CommonFiles/ProtectedRoute";
import SessionActive from "../CommonAPIs/SessionApi";
import { Navigate } from "react-router-dom";
import { UserContext } from "../App";

const { TabPane } = Tabs;

const TodoList = () => {
  const [userDetails, updateUserDetails] = useContext<any>(UserContext);

  const [state, setState] = useState({
    tasks: [
      //   { id: 1, taskTitle: "Buy groceries", completed: false },
      //   { id: 2, taskTitle: "Go for a walk", completed: false },
    ],
    filter: "all",
  });

  const handleAddTask = (task: any) => {
    if (task) {
      const tasks: any = [...state.tasks];
      const newTask: any = {
        taskTitle: task,
        completed: false,
        date: new Date(),
      };
      newTask["id"] = tasks.length + 1;
      tasks.push(newTask);
      if (userDetails.guest) {
        setState((prev) => ({ ...prev, tasks }));
      } else {
        ajaxCall({
          url: "toDoList/save",
          data: [newTask],
          method: "POST",
        }).then((response) => {
          if (response && response.status === 200) {
            console.log("response", response);
            setState((prev) => ({ ...prev, tasks }));
          } else {
            console.log("toDoList/save API Failed");
          }
        });
      }
    } else {
      message.error({ content: "Please enter the task name!", duration: 2 });
    }
  };

  const handleDeleteTask = (date: String) => {
    // const tasks = [...state.tasks];
    // const index = tasks.findIndex((task) => task.taskTitle === taskName);
    // tasks.splice(index, 1);
    // setState((prev)=>({ ...prev, tasks:prev.tasks.filter((item)) }));
    if (userDetails.guest) {
      setState((prev: any) => ({
        ...prev,
        tasks: prev.tasks.filter((item: any) => item.date !== date),
      }));
    } else {
      ajaxCall({ url: `toDoList/delete/${date}`, method: "DELETE" }).then(
        (response) => {
          if (response.status === 200) {
            let newData: any = [];
            response.data.forEach((item: any, index: number) => {
              newData.push({ ...item, id: index + 1 });
            });
            setState((prev) => ({ ...prev, tasks: newData }));
          } else {
            console.log("toDoList/delete API Failed!");
          }
        }
      );
    }
  };

  const handleFilterChange = (filter: any) => {
    setState({ ...state, tasks });
  };

  const getFilteredTasks = (key: string) => {
    const { tasks } = state;

    switch (key) {
      case "completed":
        return tasks.filter((task: any) => task.completed);
      case "incomplete":
        return tasks.filter((task: any) => !task.completed);
      case "all":
      default:
        return tasks;
    }
  };

  const handleToggleCompleted = (date: any) => {
    const { tasks }: any = state;
    let updatedObj = {};
    // const index = tasks.findIndex((task: any) => task.task === taskName);
    const updatedTasks = tasks.map((task: any) => {
      if (task.date === date) {
        updatedObj = { ...task, completed: true };
        return updatedObj;
      }
      return task;
    });
    if (userDetails.guest) {
      setState({ ...state, tasks: updatedTasks });
    } else {
      ajaxCall({
        url: "toDoList/update",
        method: "PUT",
        data: updatedObj,
      }).then((response) => {
        setState({ ...state, tasks: updatedTasks });
      });
    }
  };

  const GetList = () => {
    ajaxCall({ url: "toDoList/getList" }).then((response) => {
      if (response.status === 200) {
        setState((prev) => ({ ...prev, tasks: response.data }));
      } else {
        console.log("toDoList/getList API Failed");
      }
    });
  };

  const { tasks, filter } = state;
  // const filteredTasks = getFilteredTasks();
  // console.log("Tasks", tasks);

  useEffect(() => {
    // if (localStorage.getItem("active") === "true" && userDetails?.active) {
    GetList();
    // }
  }, []);

  return (
    <ProtectedRoute>
      <div className="to-do-list">
        <h1>To-Do List</h1>
        <AddTask onAddTask={handleAddTask} />
        <div className="card">
          <Tabs onChange={handleFilterChange}>
            <TabPane tab="All" key="all">
              {getFilteredTasks("all").map((task: any, index: number) => (
                <Task
                  id={index + 1}
                  task={task}
                  onToggleCompleted={
                    task.completed ? null : handleToggleCompleted
                  }
                  onDeleteTask={handleDeleteTask}
                />
              ))}
            </TabPane>
            <TabPane tab="Completed" key="completed">
              {getFilteredTasks("completed").map((task: any, index: number) => (
                <Task
                  id={index + 1}
                  task={task}
                  // onToggleCompleted={handleToggleCompleted}
                  onDeleteTask={handleDeleteTask}
                />
              ))}
            </TabPane>
            <TabPane tab="In-Complete" key="incomplete">
              {getFilteredTasks("incomplete").map(
                (task: any, index: number) => (
                  <Task
                    id={index + 1}
                    task={task}
                    onToggleCompleted={handleToggleCompleted}
                    onDeleteTask={handleDeleteTask}
                  />
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
    </ProtectedRoute>
  );
};

export default TodoList;

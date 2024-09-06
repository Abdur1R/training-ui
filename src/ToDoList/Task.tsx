import React from "react";

const Task = (props: any) => {
  return (
    <li className="list-item" key={props.id}>
      <div className="d-flex-row gap-10" key={props.id}>
        <div>{props.id}</div>
        <div>{props.task.taskTitle}</div>
        <div className="delete-done">
          <button
            onClick={() => props.onDeleteTask(props.task.date ?? props.task.id)}
          >
            Delete
          </button>
          <button
            onClick={() =>
              props.onToggleCompleted(props.task.date ?? props.task.date)
            }
          >
            Done
          </button>
        </div>
      </div>
    </li>
  );
};

export default Task;

import React from "react";

const Task = (props: any) => {
  return (
    <li className="list-item" key={props.id}>
      <div
        className="d-flex-row"
        style={{ justifyContent: "space-between" }}
        key={props.id}
      >
        <div className="d-flex-row gap-25 task-title">
          <div>{props.id}.</div>
          <div>{props.task.taskTitle}</div>
        </div>
        <div className="delete-done">
          {props.onDeleteTask && (
            <button
              onClick={() =>
                props.onDeleteTask(props.task.date ?? props.task.id)
              }
              // style={{ height: "20px", marginTop: "5px" }}
            >
              Delete
            </button>
          )}
          {props.onToggleCompleted && (
            <button
              onClick={() =>
                props.onToggleCompleted(props.task.date ?? props.task.date)
              }
              // style={{ height: "20px", marginTop: "5px" }}
            >
              Done
            </button>
          )}
        </div>
      </div>
    </li>
  );
};

export default Task;

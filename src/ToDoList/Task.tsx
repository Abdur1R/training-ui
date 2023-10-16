import React from 'react';

const Task = (props: any) => {
    return (
        <li key={props.key}>
            <div key={props.key}>
                {props.task.task}
                <button onClick={() => props.onDeleteTask(props.id)}>Delete</button>
            </div>
        </li>
    );
}

export default Task;
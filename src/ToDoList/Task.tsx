import React from 'react';

const Task = (props: any) => {
    return (
        <li className="list-item" key={props.id}>
            <div className="d-flex-row gap-10" key={props.id}>
                <div>
                    {props.id}
                </div>
                <div>
                    {props.task.task}
                </div>
                <div className='delete-done'>
                    <button onClick={() => props.onDeleteTask(props.id)}>Delete</button>
                    <button onClick={() => props.onToggleCompleted(props.id)}>Done</button>
                </div>
            </div>
        </li>
    );
}

export default Task;
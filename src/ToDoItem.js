import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentEditable from 'react-contenteditable'
import './ToDoItem.css'

function ToDoItem({ id, text, completed }) {

    const dispatch = useDispatch();
    let tl = useSelector(store => store.tasks);


    const handleClick = (evt) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const handleChange = (evt) => {
        dispatch({ type: "UPDATE", payload: { task: evt.target.value, id: id, completed: false } })
    };

    const markCompleted = (evt) => {
        dispatch({ type: "UPDATE", payload: { task: text, completed: true, id: id } })

    }

    let completedTask = <div className="todo-text"> <strike>{text}</strike> </div>
    let uncompletedTask = (<ContentEditable
        html={text}
        onChange={handleChange} />)

    return (
        <div className="todo-item">

            {completed ? completedTask : uncompletedTask}
            <div style={{ float: 'right' }}>
                <span className="todo-button todo-complete">
                    <button onClick={markCompleted}>
                        <i class="far fa-check-square fa-lg"></i>
                    </button>
                </span>
                <span className="todo-button todo-delete">
                    <button onClick={handleClick}>
                        <i class="fas fa-trash fa-md text-danger"></i>
                    </button>
                </span>
            </div>
        </div>
    );
};

export default ToDoItem;
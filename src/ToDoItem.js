import React from 'react';
import { useDispatch } from 'react-redux';

function ToDoItem({ id, text }) {

    const dispatch = useDispatch();

    const handleClick = (evt) => {
        dispatch({ type: "DELETE", payload: id });
    };

    return (
        <div >
            <p>{text}</p>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default ToDoItem;
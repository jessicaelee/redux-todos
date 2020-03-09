import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import ContentEditable from 'react-contenteditable'

function ToDoItem({ id, text }) {

    const dispatch = useDispatch();

    const handleClick = (evt) => {
        dispatch({ type: "DELETE", payload: id });
    };

    const handleChange = (evt) => {
        dispatch({ type: "UPDATE", payload: { task: evt.target.value, id: id } })
    };

    return (
        <div >
            <ContentEditable
                html={text}
                onChange={handleChange} />
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}

export default ToDoItem;
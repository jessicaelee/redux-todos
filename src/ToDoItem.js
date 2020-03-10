import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContentEditable from 'react-contenteditable'

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
        console.log(evt)
        dispatch({ type: "UPDATE", payload: { task: text, completed: true, id: id } })

    }

    let completedTask = <div> <strike>{text}</strike> <br /> </div>
    let uncompletedTask = (<ContentEditable
        html={text}
        onChange={handleChange} />)

    console.log("completed", completed)

    return (
        <div >

            {completed ? completedTask : uncompletedTask}
            <button onClick={handleClick}>Delete</button>
            <button onClick={markCompleted}>Mark as completed</button>

        </div>
    );
};

export default ToDoItem;
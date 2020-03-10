import React from 'react';
import { useSelector } from 'react-redux';
import ToDoItem from './ToDoItem'

function ToDoList() {
    let tasksList = useSelector(store => store.tasks);

    let tasksJsx = tasksList.map(task => <ToDoItem key={task.id} id={task.id} text={task.task} completed={task.completed} />);

    return (
        <div>
            {tasksJsx}
        </div>
    )

}

export default ToDoList;
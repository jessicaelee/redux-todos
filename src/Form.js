import React, { useState } from 'react';
import uuid from 'uuid/v4';
import { useDispatch } from 'react-redux';

function Form() {
    const INITIAL_STATE = { task: "" };
    const [formData, setFormData] = useState(INITIAL_STATE);
    const dispatch = useDispatch();

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setFormData(fData => ({ ...fData, [name]: value }));
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({ type: "ADD", payload: { ...formData, id: uuid() } })
        setFormData(INITIAL_STATE);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">Task: </label>
                <input type="text" id="task" name="task" value={formData.task} onChange={handleChange} required />
                <button>Add</button>
            </form>

        </div>
    );
};

export default Form;
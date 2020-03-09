const INITIAL_STATE = { tasks: [] };

function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            return { ...state, tasks: [...state.tasks, action.payload] }
        case "DELETE":
            return { ...state, tasks: (state.tasks.filter(task => task.id !== action.payload)) }
        default:
            console.warn("there is no action type: ", action.type);
            return state;
    };
};

export default rootReducer;
import React from 'react';
import './Todo.css';

function Todo({todo, dispatch}){
    const {item, id, completed} = todo;

    const handleComplete = e => {
        e.preventDefault();
        dispatch({
            type: "COMPLETED_TODO",
            payload: id
        })
    }

    return (
        <div 
            onClick={handleComplete}
            className={`todo ${completed ? `completed` : ''}`}
        >
            {item}
        </div>
    )
}

export default Todo
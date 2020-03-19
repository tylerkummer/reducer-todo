import React, { useState } from 'react';

function TodoForm({dispatch}){
    const [newTodoText, setNewTodoText] = useState('');

    const handleChange = e => {
        setNewTodoText(
           e.target.value
        )
    }

    const handleAdd = e => {
        e.preventDefault();
        dispatch({
            type: "ADD_TODO",
            payload: newTodoText
        })
        setNewTodoText(
            ""
        )
    }

    const handleClear = e =>{
        e.preventDefault();
        dispatch({
            type: "CLEAR_TODO"
        })
    }

    return(
        <div>
            <form>
                <input 
                    type="text"
                    name="addTodoItem"
                    value={newTodoText}
                    onChange={handleChange}
                    placeholder="Todo Here"
                />
            </form>
            <button type="button" onClick={handleAdd}>Add</button>
            <button type="button" onClick={handleClear}>Clear</button>
        </div>
    )
}

export default TodoForm
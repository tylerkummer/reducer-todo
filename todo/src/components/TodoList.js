import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo'

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
           {state.map(todo => {
               return (
               <Todo
                    item={todo.item}
                    completed={todo.completed}
                    id={todo.id}
                />)
            })}
        </div>
    )
}

export default TodoList
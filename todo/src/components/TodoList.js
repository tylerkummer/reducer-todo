import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/reducer';
import Todo from './Todo';
import TodoForm from './TodoForm';

function TodoList() {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
           {state.map(todo => {
               return (
               <Todo
                    todo = {todo}
                    dispatch={dispatch}
                />)
            })}
            <TodoForm dispatch={dispatch}/>
        </div>
    )
}

export default TodoList
import React from 'react';
import {Todo} from './Todo'


export const TodoList=({todos})=>{
    todos.map(todo=>{
        console.log('hi'+todo.text)
    })
    
return(
    <ul>
        {
            todos.map((todo)=>(
                <Todo text={todo.text} key={todo.id}/>
            ))
        }
    </ul>
)
}
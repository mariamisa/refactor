import React from 'react';
import {Todo} from './Todo'


export const TodoList=({todos,setTodos})=>{
    todos.map(todo=>{
        console.log('hi'+todo.text)
    })
    
return(
    <ul>
        {
            todos.map((todo)=>(
                <Todo text={todo.text} key={todo.id} todo={todo} todos={todos}  setTodos={setTodos}/>
            ))
        }
    </ul>
)
}
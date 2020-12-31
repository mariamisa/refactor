import React from 'react';
import {Todo} from './Todo'



export const TodoList=({todos,todoStatus,setTodos,edit,setEdit,inputValue,setInputValue,updatedValue,setUpdatedValue})=>{

    let filtered =  todos.filter((todo)=>{
        if(todoStatus==='')
        return todo
        else if(todo.completed === true && todoStatus=== "true"){
            return todo
        }
        else if(todo.completed === false && todoStatus=== "false"){
            return todo
        }
       
       
     })
     filtered.map(fff=>console.log(fff.completed))
    
      console.log({todoStatus})
     
return(
    <ul>
        {
           
          
           
            filtered.map((todo)=>(
                 console.log(todo),
                <Todo text={todo.text} key={todo.id} todo={todo} todos={todos}  setTodos={setTodos}
                setEdit={setEdit}
                inputValue={inputValue} setInputValue={setInputValue}
               
                />
            ))
        }
    </ul>
)
}
import React from 'react';


import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {FiCheckSquare} from 'react-icons/fi'
import {EditTodoForm} from './EditTodoForm'
export const Todo=({text,todo,todos,setTodos,edit,setEdit,inputValue,setInputValue,updatedValue,setUpdatedValue})=>{
const deleteHandler =()=>{
    setTodos(todos.filter((element)=>{ return element.id !== todo.id}))
}

const completeHandler =()=>{
setTodos(todos.map((element)=>{
    if(element.id === todo.id){
        return{
            ...element,
            completed : !element.completed
        }
    }
    return element;
}))
}


    return (
        <div className="todo__div" key={todo.id} edit={!edit}>
         
           <li className={`todo-row ${todo.completed?"todo-row completed":""}`} >{text} 
           <div className='icons'>
            <button className="complete-icon" onClick={completeHandler}><FiCheckSquare/></button>
                <button className="delete-icon" onClick={deleteHandler}><FaTrash className="trash"/></button>
                <button className="edit-icon" onClick={()=>setEdit(todo.id,todo.text)}><AiFillEdit/></button>
                </div>
                </li>
                
                
                   
                  
                 
                
        
            
        </div>
    )
}
import React from 'react';

import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
import {AiOutlineCheck} from 'react-icons/ai'
export const Todo=({text,todo,todos,setTodos})=>{
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
        <div className="todo__div">
            
            <li className={`todo__item ${todo.completed?"completed":""}`} >{text} 
            <button className="complete" onClick={completeHandler}><AiOutlineCheck/></button>
                <button className="fas fa-trash-alt" onClick={deleteHandler}><FaTrash className="trash"/></button>
                <button className="fas fa-edit-alt"><AiFillEdit/></button>
                </li>
        </div>
    )
}
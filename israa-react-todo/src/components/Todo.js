import React from 'react';

import {FaTrash} from 'react-icons/fa'
import {AiFillEdit} from 'react-icons/ai'
export const Todo=({text})=>{
    return (
        <div className="todo__div">
            
            <li className="todo__item" >{text} 
                
                <button className="fas fa-trash-alt"><FaTrash className="trash"/></button>
                <button className="fas fa-edit-alt"><AiFillEdit/></button>
                </li>
        </div>
    )
}
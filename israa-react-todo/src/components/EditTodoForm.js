import React from 'react';

export const EditTodoForm =({handleSubmit,handleEdit,todo,todos,setTodos,edit,setEdit,inputValue,setInputValue,updatedValue,setUpdatedValue , todoId,setTodoId})=>{

    

  
    return(
        <form   className="todo-form">
            <input 
          className="todo-input"
            type='text'
            value={updatedValue}
            id='newInput'
            onChange={e=>setUpdatedValue(e.target.value)}
            />
            <button 
            className="todo-button"
            type='submit'
            value='  edit to-do '
           onClick={handleSubmit}
            > update to-do </button>
          
        </form>
    )
}
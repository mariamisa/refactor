import React from 'react';

export const TodoForm =({inputValue,setInputValue,todos,setTodos,todoStatus,setTodoStatus})=>{

    const handleSubmit=(e)=>{
        console.log('todo')
        e.preventDefault();
         setTodos(todos = [...todos,{
            text:inputValue,
            completed :false,
            id:Math.random()*1000
        }])
        console.log(todos)
        setInputValue('')
    }

const statusHandler=(e)=>{
   setTodoStatus(e.target.value)
}

    return(
        <form className="todo-form">
            <input 
            className="todo-input"
            type='text'
            value={inputValue}
            id='input'
            onChange={e=>setInputValue(e.target.value)}
            />
            <button 
            className="todo-button"
            type='submit'
            value='  Add to-do '
           onClick={handleSubmit}
            >  Add to-do </button>
          <div className="select">
              <select name="todo_status" className="todo_status" onChange={statusHandler}>
                  <option value=''>All</option>
                  <option value={true} >Completed</option>
                  <option value={false}>Uncompleted</option>
              </select>
          </div>
        </form>
    )
}
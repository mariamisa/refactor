import React from 'react';

export const TodoForm =({inputValue,setInputValue,todos,setTodos})=>{

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
    return(
        <form >
            <input 
            type='text'
            value={inputValue}
            id='input'
            onChange={e=>setInputValue(e.target.value)}
            />
            <button 
            type='submit'
            value='  Add to-do '
           onClick={handleSubmit}
            >  Add to-do </button>
          
        </form>
    )
}
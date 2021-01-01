import React from "react";

export default function TodoForm({
  inputValue,
  setInputValue,
  setTodoStatus,
  handleAddTodo
}) {

  return (
    <div>
      <input
        className="todo-input"
        type="text"
        value={inputValue}
        id="input"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        className="todo-button"
        type="submit"
        value="  Add to-do "
        onClick={handleAddTodo}
      >
        Add to-do
      </button>
      <div className="select">
        <select
        defaultValue="all"
          name="todo_status"
          className="todo_status"
          onChange={(e)=>setTodoStatus(e.target.value)}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </div>
  )   
}


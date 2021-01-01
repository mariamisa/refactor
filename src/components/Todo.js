import React from "react";

import { FaTrash } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { FiCheckSquare } from "react-icons/fi";

export default function Todo({
  todo,
  handelCompleted,
  handelDeleteTodo,
  setEdit,
}) {
  return (
    <div className="todo__div" key={todo.id}>
      <li className={`todo-row ${todo.completed ? "todo-row completed" : ""}`}>
        {todo.text}
        <div className="icons">
          <button className="complete-icon" onClick={()=>handelCompleted(todo.id)}>
            <FiCheckSquare />
          </button>
          <button className="delete-icon" onClick={()=>handelDeleteTodo(todo.id)}>
            <FaTrash className="trash" />
          </button>
          <button
            className="edit-icon"
            onClick={() => setEdit(todo.id, todo.text)}
          >
            <AiFillEdit />
          </button>
        </div>
      </li>
    </div>
  );
}

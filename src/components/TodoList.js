import React from "react";

import Todo from "./Todo";

export default function TodoList({
  todos,
  todoStatus,
  setEdit,
  handelCompleted,
  handelDeleteTodo,
}) {
  let filtered = todos.filter((todo) => {
    if (todoStatus === "completed") {
      return todo.completed === true;
    } else if (todoStatus === "uncompleted") {
      return todo.completed === false;
    } else {
      return todo;
    }
  });
  return (
    <ul>
      {filtered.map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          setEdit={setEdit}
          handelCompleted={handelCompleted}
          handelDeleteTodo={handelDeleteTodo}
        />
      ))}
    </ul>
  );
}

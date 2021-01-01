import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import EditTodoForm from "./components/EditTodoForm";

import "./App.css";
export class App extends React.Component {
  state = {
    inputValue: "",
    updatedValue: "",
    todos: [],
    edit: false,
    todoStatus: "all",
    todoFiltered: [],
    todoId: null,
    todoText: "",
  };

  setTodoStatus = (status) => {
    this.setState({ todoStatus: status });
  };
  setInputValue = (input) => {
    this.setState({ inputValue: input });
  };
  setUpdatedValue = (input) => {
    this.setState({ updatedValue: input });
  };

  setEdit = (id, text) => {
    this.setState({ edit: !this.state.edit, todoId: id, todoText: text });
  };

  handleEditSubmit = () => {
    const updatedTodo = this.state.todos.map((element) => {
      if (element.id === this.state.todoId) {
        return {
          ...element,
          text: this.state.updatedValue,
        };
      }
      return element;
    });

    this.setState({ todos: updatedTodo, setUpdatedValue: "" });

    this.setEdit(this.state.id, this.state.todoText);
  };

  handleAddTodo = () => {
    this.setState({
      todos: [
        ...this.state.todos,
        {
          text: this.state.inputValue,
          completed: false,
          id: Math.random() * 1000,
        },
      ],
      inputValue: "",
    });
  };

  handelCompleted = (id) => {
    const newArray = this.state.todos.map((element) => {
      if (element.id === id) {
        return {
          ...element,
          completed: !element.completed,
        };
      }
      return element;
    });
    this.setState({ todos: newArray });
  };

  handelDeleteTodo = (id) => {
    const filtered = this.state.todos.filter((element) => {
      return element.id !== id;
    });
    this.setState({ todos: filtered });
  };

  render = () => {
    const { inputValue, todoStatus, todos, edit } = this.state;
    return (
      <div className="todo-app">
        <h1>to-do app</h1>

        {!edit ? (
          <div>
            <TodoForm
              inputValue={inputValue}
              setInputValue={this.setInputValue}
              setTodoStatus={this.setTodoStatus}
              handleAddTodo={this.handleAddTodo}
            />

            <TodoList
              todos={todos}
              todoStatus={todoStatus}
              setEdit={this.setEdit}
              handelCompleted={this.handelCompleted}
              handelDeleteTodo={this.handelDeleteTodo}
            />
          </div>
        ) : (
          <EditTodoForm
            handleEditSubmit={this.handleEditSubmit}
            setUpdatedValue={this.setUpdatedValue}
          />
        )}
      </div>
    );
  };
}

export default App;

import React from 'react'
import './App.css';
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'

export class App extends React.Component {
state ={
  inputValue:'',
  todos :[]
}
setInputValue=(input)=>{
  this.setState({inputValue:input})
  console.log(this.state.inputValue)
}

setTodos=(todo)=>{
this.setState({todos:todo})
}

// addTodo=()=>{
//   console.log({this.state.inputValue})
// }
  render=()=>{
 const {inputValue,todos}=this.state;
    return (
      <div className="App">
        <h1>to-do app</h1>
        <div>
  <TodoForm inputValue={inputValue} setInputValue={this.setInputValue} todos={todos } setTodos={this.setTodos}/>
        </div>
        <TodoList todos={todos}/>
      </div>
    );
  }

}

export default App;

import React from 'react'
import './App.css';
import {TodoForm} from './components/TodoForm'
import {TodoList} from './components/TodoList'
import {EditTodoForm} from './components/EditTodoForm'

export class App extends React.Component {
state ={
  inputValue:'',
  updatedValue:'',
  todos :[],
  edit :false,
  todoStatus:'',
  todoFiltered :[],
  todoId :null
}

setTodoFiltered=(filtered)=>{
  this.setState({todoFiltered:filtered})
}
setTodoStatus=(status)=>{
this.setState({todoStatus:status})
}
setInputValue=(input)=>{
  this.setState({inputValue:input})
}
setUpdatedValue=(input)=>{
  this.setState({updatedValue:input})
}
setTodos=(todo)=>{
this.setState({todos:todo})
}

setEdit = (id)=>{
  this.setState({edit:!this.state.edit , todoId:id})
}

 handleSubmit=()=>{
  console.log(this.state.todoId,this.state.updatedValue)

  this.setTodos(this.state.todos.map((element)=>{
      if(element.id === this.state.todoId){
          // console.log({updatedValue})
          return{
              ...element,
              text : this.state.updatedValue
          }
         
      }
     
      return element;
  }))
  this.setUpdatedValue('')
  
  this.setEdit()
 
  
}

 filterHandler=()=>{
switch(this.todoStatus){
  case 'completed':
    this.todos(this.todos.filter(todo=>{
      return todo.completed === true
    }))
    break;
    case 'uncompleted':
      this.setTodoFiltered(this.todos.filter(todo=>{
        return todo.completed === false
      }))
      break;

      default:
        this.setTodoFiltered(this.todos)
        break;
}
}
// addTodo=()=>{
//   console.log({this.state.inputValue})
// }
  render=()=>{
 const {inputValue,todos,edit,updatedValue,todoStatus,todoId}=this.state;
    return (
      <div  className='todo-app'>
        <h1>to-do app</h1>
       
        {
          (!edit ?
            (
              <div>
              <TodoForm inputValue={inputValue} setInputValue={this.setInputValue} todos={todos }
               setTodos={this.setTodos} todoStatus={todoStatus} setTodoStatus={this.setTodoStatus}/>
                  
            <TodoList  inputValue={inputValue} setInputValue={this.setInputValue} todos={todos}  setTodos={this.setTodos} edit={edit} 
            setEdit={this.setEdit} todoStatus={todoStatus} 
            handleEdit={this.handleEdit}
            updatedValue={updatedValue} setUpdatedValue={this.setUpdatedValue}/>  </div>)
            :
            <EditTodoForm handleSubmit={this.handleSubmit} setUpdatedValue={this.setUpdatedValue}/>
            )
        }
       
      </div>
    );
  }

}

export default App;
